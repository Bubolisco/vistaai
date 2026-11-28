(() => {
  'use strict';

  const LEGACY_FORMAT = 'vistai-secure-v1';
  const FORMAT = 'educai-secure-v2';
  const ITERATIONS = 600000;
  const encoder = new TextEncoder();
  const decoder = new TextDecoder();
  const aadData = encoder.encode('educai-data-v2');

  const randomBytes = size => crypto.getRandomValues(new Uint8Array(size));
  const toBase64 = bytes => {
    const view = new Uint8Array(bytes);
    let binary = '';
    for (let offset = 0; offset < view.length; offset += 0x8000) binary += String.fromCharCode(...view.subarray(offset, Math.min(offset + 0x8000, view.length)));
    return btoa(binary);
  };
  const fromBase64 = value => Uint8Array.from(atob(value), char => char.charCodeAt(0));
  const toBase64Url = bytes => toBase64(bytes).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/g, '');
  const fromBase64Url = value => fromBase64(value.replace(/-/g, '+').replace(/_/g, '/') + '='.repeat((4 - value.length % 4) % 4));
  const normalizeRecoveryCode = value => String(value || '').replace(/[^a-f\d]/gi, '').toLowerCase();

  function isEnvelope(value) {
    return !!value && (value.format === FORMAT || value.format === LEGACY_FORMAT);
  }

  function createRecoveryCode() {
    const hex = [...randomBytes(24)].map(byte => byte.toString(16).padStart(2, '0')).join('').toUpperCase();
    return hex.match(/.{1,4}/g).join('-');
  }

  async function derivePasswordKey(password, salt, iterations = ITERATIONS) {
    if (!Number.isInteger(iterations) || iterations < 100000 || iterations > 1000000) throw new Error('Proteção inválida no arquivo.');
    const material = await crypto.subtle.importKey('raw', encoder.encode(password), 'PBKDF2', false, ['deriveKey']);
    return crypto.subtle.deriveKey({ name: 'PBKDF2', salt, iterations, hash: 'SHA-256' }, material, { name: 'AES-GCM', length: 256 }, false, ['encrypt', 'decrypt']);
  }

  async function importDataKey(secret) {
    return crypto.subtle.importKey('raw', secret, { name: 'AES-GCM' }, false, ['encrypt', 'decrypt']);
  }

  async function encryptBytes(bytes, key, aad) {
    const iv = randomBytes(12);
    const ciphertext = await crypto.subtle.encrypt({ name: 'AES-GCM', iv, additionalData: aad }, key, bytes);
    return { iv: toBase64(iv), ciphertext: toBase64(ciphertext) };
  }

  async function decryptBytes(iv, ciphertext, key, aad) {
    return new Uint8Array(await crypto.subtle.decrypt({ name: 'AES-GCM', iv: fromBase64(iv), additionalData: aad }, key, fromBase64(ciphertext)));
  }

  async function makePasswordWrap(secret, password) {
    const salt = randomBytes(16);
    const key = await derivePasswordKey(password, salt);
    const wrapped = await encryptBytes(secret, key, encoder.encode('educai-key-v2:password'));
    return { kdf: 'PBKDF2-SHA-256', iterations: ITERATIONS, salt: toBase64(salt), ...wrapped };
  }

  async function makeRecoveryWrap(secret, recoveryCode) {
    const code = normalizeRecoveryCode(recoveryCode);
    if (code.length !== 48) throw new Error('A chave de recuperação gerada está inválida.');
    const salt = randomBytes(16);
    const key = await derivePasswordKey(code, salt);
    const wrapped = await encryptBytes(secret, key, encoder.encode('educai-key-v2:recovery'));
    return { kdf: 'PBKDF2-SHA-256', iterations: ITERATIONS, salt: toBase64(salt), ...wrapped };
  }

  async function openWrap(wrap, credential, kind) {
    if (!wrap?.salt || !wrap?.iv || !wrap?.ciphertext) throw new Error('Não há chave deste tipo neste cofre.');
    const key = await derivePasswordKey(kind === 'recovery' ? normalizeRecoveryCode(credential) : credential, fromBase64(wrap.salt), Number(wrap.iterations) || ITERATIONS);
    return decryptBytes(wrap.iv, wrap.ciphertext, key, encoder.encode(`educai-key-v2:${kind}`));
  }

  async function createSession(password, recoveryCode) {
    const secret = randomBytes(32);
    const session = { secret, key: await importDataKey(secret), wraps: {} };
    session.wraps.password = await makePasswordWrap(secret, password);
    session.wraps.recovery = await makeRecoveryWrap(secret, recoveryCode);
    return session;
  }

  async function sealPayload(payload, session) {
    if (!session?.key || !session?.secret || !session?.wraps?.password || !session?.wraps?.recovery) throw new Error('Desbloqueie o Educa Aí para salvar alterações.');
    const encrypted = await encryptBytes(encoder.encode(JSON.stringify(payload)), session.key, aadData);
    return { format: FORMAT, version: 2, ...encrypted, keyWraps: session.wraps };
  }

  async function openLegacy(envelope, password) {
    if (!envelope?.salt || !envelope?.iv || !envelope?.ciphertext) throw new Error('Arquivo não reconhecido ou sem criptografia Educa Aí.');
    const iterations = Number(envelope.iterations) || ITERATIONS;
    const key = await derivePasswordKey(password, fromBase64(envelope.salt), iterations);
    const clear = await decryptBytes(envelope.iv, envelope.ciphertext, key, encoder.encode(LEGACY_FORMAT));
    return { data: JSON.parse(decoder.decode(clear)), legacy: true, key, salt: fromBase64(envelope.salt), iterations };
  }

  async function openEnvelope(envelope, credential, mode = 'password') {
    if (envelope?.format === LEGACY_FORMAT) return openLegacy(envelope, credential);
    if (envelope?.format !== FORMAT || !envelope.keyWraps) throw new Error('Arquivo não reconhecido ou sem criptografia Educa Aí.');
    let secret;
    let openedWith = mode;
    if (mode === 'auto') {
      try { secret = await openWrap(envelope.keyWraps.password, credential, 'password'); openedWith = 'password'; }
      catch { secret = await openWrap(envelope.keyWraps.recovery, credential, 'recovery'); openedWith = 'recovery'; }
    } else {
      const wrap = envelope.keyWraps[mode];
      secret = mode === 'passkey' ? await openPasskeyWrap(wrap) : await openWrap(wrap, credential, mode);
    }
    const key = await importDataKey(secret);
    const clear = await decryptBytes(envelope.iv, envelope.ciphertext, key, aadData);
    return { data: JSON.parse(decoder.decode(clear)), legacy: false, session: { secret, key, wraps: envelope.keyWraps }, openedWith };
  }

  async function changePassword(session, password) {
    session.wraps.password = await makePasswordWrap(session.secret, password);
  }

  async function addRecoveryWrap(session, recoveryCode) {
    session.wraps.recovery = await makeRecoveryWrap(session.secret, recoveryCode);
  }

  function bytesToChallenge(value) { return value.buffer.slice(value.byteOffset, value.byteOffset + value.byteLength); }

  async function getPrfValue(passkeyWrap) {
    if (!window.PublicKeyCredential || !navigator.credentials?.get) throw new Error('Este navegador não oferece passkeys. Use sua senha para desbloquear.');
    const credentialId = fromBase64Url(passkeyWrap.credentialId);
    const result = await navigator.credentials.get({
      publicKey: {
        challenge: bytesToChallenge(randomBytes(32)),
        rpId: location.hostname,
        allowCredentials: [{ type: 'public-key', id: bytesToChallenge(credentialId) }],
        userVerification: 'required',
        timeout: 60000,
        extensions: { prf: { eval: { first: bytesToChallenge(fromBase64(passkeyWrap.prfSalt)) } } }
      }
    });
    const output = result?.getClientExtensionResults?.()?.prf?.results?.first;
    if (!output || new Uint8Array(output).length < 32) throw new Error('O aparelho ou navegador não oferece a extensão segura necessária para desbloquear dados. Use sua senha.');
    return new Uint8Array(output);
  }

  async function openPasskeyWrap(wrap) {
    if (!wrap?.credentialId || !wrap?.prfSalt) throw new Error('Não há uma passkey configurada neste cofre.');
    const secretKeyBytes = await getPrfValue(wrap);
    const key = await importDataKey(secretKeyBytes);
    return decryptBytes(wrap.iv, wrap.ciphertext, key, encoder.encode('educai-key-v2:passkey'));
  }

  async function addPasskey(session, displayName) {
    if (!window.PublicKeyCredential || !navigator.credentials?.create) throw new Error('Este navegador não oferece passkeys. Continue usando a senha e a chave de recuperação.');
    if (!window.isSecureContext) throw new Error('Passkeys exigem que o Educa Aí esteja aberto em uma conexão segura HTTPS.');
    const userId = randomBytes(16);
    const challenge = randomBytes(32);
    const prfSalt = randomBytes(32);
    const credential = await navigator.credentials.create({
      publicKey: {
        challenge: bytesToChallenge(challenge),
        rp: { name: 'Educa Aí', id: location.hostname },
        user: { id: bytesToChallenge(userId), name: 'perfil-local', displayName: String(displayName || 'Perfil local').slice(0, 64) },
        pubKeyCredParams: [{ type: 'public-key', alg: -7 }, { type: 'public-key', alg: -257 }],
        authenticatorSelection: { authenticatorAttachment: 'platform', residentKey: 'required', userVerification: 'required' },
        timeout: 60000,
        attestation: 'none',
        extensions: { prf: { eval: { first: bytesToChallenge(prfSalt) } } }
      }
    });
    if (!credential?.rawId) throw new Error('A criação da passkey foi cancelada.');
    const wrap = { credentialId: toBase64Url(new Uint8Array(credential.rawId)), prfSalt: toBase64(prfSalt) };
    const prf = await getPrfValue(wrap);
    const key = await importDataKey(prf);
    const encrypted = await encryptBytes(session.secret, key, encoder.encode('educai-key-v2:passkey'));
    session.wraps.passkey = { ...wrap, ...encrypted };
  }

  async function openWithPasskey(envelope) {
    if (envelope?.format !== FORMAT || !envelope?.keyWraps?.passkey) throw new Error('Não há passkey configurada para este perfil.');
    const secret = await openPasskeyWrap(envelope.keyWraps.passkey);
    const key = await importDataKey(secret);
    const clear = await decryptBytes(envelope.iv, envelope.ciphertext, key, aadData);
    return { data: JSON.parse(decoder.decode(clear)), legacy: false, session: { secret, key, wraps: envelope.keyWraps } };
  }

  window.EducaSecurity = Object.freeze({
    FORMAT,
    LEGACY_FORMAT,
    isEnvelope,
    createRecoveryCode,
    createSession,
    sealPayload,
    openEnvelope,
    changePassword,
    addRecoveryWrap,
    addPasskey,
    openWithPasskey
  });
})();
