(() => {
  'use strict';

  const passwordInput = document.getElementById('privacyPassword');
  const confirmInput = document.getElementById('privacyPasswordConfirm');
  const actions = document.getElementById('passwordActions');
  const suggestButton = document.getElementById('suggestPasswordBtn');
  const visibilityButton = document.getElementById('togglePasswordVisibility');
  const hint = document.getElementById('passwordSuggestionHint');

  function randomIndex(max) {
    const range = 0x100000000;
    const limit = range - (range % max);
    const value = new Uint32Array(1);
    do {
      crypto.getRandomValues(value);
    } while (value[0] >= limit);
    return value[0] % max;
  }

  function createStrongPassword() {
    if (!globalThis.crypto?.getRandomValues) {
      throw new Error('Este navegador não oferece um gerador criptográfico seguro.');
    }

    const groups = [
      'ABCDEFGHJKLMNPQRSTUVWXYZ',
      'abcdefghijkmnopqrstuvwxyz',
      '23456789',
      '!@#$%*+-_?'
    ];
    const alphabet = groups.join('');
    const characters = groups.map(group => group[randomIndex(group.length)]);

    while (characters.length < 24) {
      characters.push(alphabet[randomIndex(alphabet.length)]);
    }

    for (let index = characters.length - 1; index > 0; index -= 1) {
      const other = randomIndex(index + 1);
      [characters[index], characters[other]] = [characters[other], characters[index]];
    }

    return characters.join('');
  }

  function configure(enabled) {
    actions.classList.toggle('hidden', !enabled);
    passwordInput.value = '';
    confirmInput.value = '';
    passwordInput.type = 'password';
    confirmInput.type = 'password';
    visibilityButton.textContent = 'Mostrar senhas';
    visibilityButton.setAttribute('aria-pressed', 'false');
    hint.textContent = '';
    hint.classList.add('hidden');
  }

  suggestButton.addEventListener('click', () => {
    try {
      const password = createStrongPassword();
      passwordInput.value = password;
      confirmInput.value = password;
      hint.textContent = 'Senha aleatória de 24 caracteres preenchida nos dois campos. Use “Mostrar senhas” para conferir e salve-a em um gerenciador antes de continuar.';
      hint.classList.remove('hidden');
      visibilityButton.focus();
    } catch (error) {
      hint.textContent = error.message || 'Não foi possível sugerir uma senha segura neste navegador.';
      hint.classList.remove('hidden');
    }
  });

  visibilityButton.addEventListener('click', () => {
    const show = passwordInput.type === 'password';
    passwordInput.type = show ? 'text' : 'password';
    confirmInput.type = show ? 'text' : 'password';
    visibilityButton.textContent = show ? 'Ocultar senhas' : 'Mostrar senhas';
    visibilityButton.setAttribute('aria-pressed', String(show));
  });

  window.EducaPasswordTools = { configure };
})();
