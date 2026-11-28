# Revisão de segurança — Educa Aí 1.7

**Data da revisão deste pacote:** 28 de novembro de 2026  
**Escopo:** código do aplicativo de navegador, armazenamento local, criptografia, importação e arquivos de publicação incluídos.  
**Tipo:** revisão estática. Não é certificação, teste de invasão nem auditoria independente.

## Proteções presentes

| Área | Proteção implementada | Limite relevante |
|---|---|---|
| Dados do perfil | Perfil local, sem servidor de contas, banco escolar ou sincronização nesta versão. O nome do perfil é um nome de exibição armazenado dentro do cofre. | Cada navegador e aparelho têm uma cópia independente dos dados. |
| Criptografia do cofre | AES-GCM de 256 bits com chave aleatória para os dados. A chave é protegida por senha usando PBKDF2-HMAC-SHA-256 com 600.000 iterações e por uma chave aleatória de recuperação. | A senha e a chave de recuperação precisam ser guardadas. Se ambas forem perdidas, o cofre não pode ser aberto. |
| Migração | O aplicativo ainda reconhece o formato criptografado da publicação anterior e o atualiza após desbloqueio. | A atualização deve ser acompanhada de backup; a chave de recuperação precisa ser guardada quando aparecer. |
| Passkey | WebAuthn com extensão PRF pode proteger uma cópia da chave do cofre para desbloqueio rápido. | PRF depende do navegador, autenticador, sistema operacional e gerenciador de credenciais. Senha e recuperação continuam necessárias. Não é autenticação em duas etapas de conta. |
| Backups | Backup completo e transferência diária são criptografados pelo aplicativo. | A chave de recuperação baixada é texto simples. Planilhas Excel exportadas não são criptografadas. |
| Bibliotecas | Leitor de QR, gerador de QR e biblioteca Excel são servidos localmente, com licenças e hashes registrados em `vendor/DEPENDENCIES.md`. Planilhas são lidas em worker com limites de tamanho, linhas, colunas, expansão e tempo. | Dependências locais precisam de revisão e atualização periódicas. |
| Página | CSP restringe scripts e conexões, bloqueia objetos e frames e não permite scripts inline. Conteúdo de alunos é apresentado como texto. | GitHub Pages não permite ao projeto definir todos os cabeçalhos HTTP. CSP em meta tag não substitui cabeçalhos do servidor. |
| Aparelho | Dados criptografados no armazenamento do navegador; scanner fecha ao sair da aba ou por inatividade; bloqueio de sessão limpa os dados visíveis e as chaves em memória. | Com o app desbloqueado, alguém usando o aparelho pode consultar os registros. |

## Cuidados de uso

- Guarde a chave de recuperação fora do aparelho. Se usar **Baixar arquivo**, o arquivo não tem criptografia. Quem tiver essa chave poderá abrir o cofre.
- Salve backups completos em local seguro e teste a restauração antes de confiar neles como única cópia.
- As planilhas exportadas para Excel são legíveis. Proteja-as como os próprios registros.
- Ocorrências e chamadas podem conter informações escolares pessoais. Registre apenas o necessário e siga as regras da escola.
- Use senha de bloqueio no aparelho e bloqueie o Educa Aí ao terminar.
- Proteja a conta GitHub com autenticação em duas etapas e limite colaboradores com permissão de escrita. O código do repositório é público.
- O Uso escolar compartilhado, contas de professores, portal de responsáveis, sincronização e exclusão automática por prazo não estão implementados.

## Passkey e recuperação

O navegador e o sistema operacional podem solicitar Face ID, digital, PIN ou código de bloqueio; o site não recebe a biometria. A passkey pode ser sincronizada pelo gerenciador de credenciais, mas isso não sincroniza o cofre. A extensão PRF tem suporte variável; se estiver ausente, o desbloqueio usa senha ou recuperação. A passkey fica vinculada ao domínio do site.

O perfil individual é local e não tem autenticação de dois fatores nem redefinição remota de senha. A recuperação depende da chave que o usuário guardou. A conta que hospeda o site não consegue recuperar o conteúdo criptografado.

## Revisão adicional após ajustes de interface e favicon — 28 de novembro de 2026

Foi feita uma nova leitura estática de `index.html`, `app.js`, `security.js`, `password-tools.js`, `sw.js`, `manifest.webmanifest` e do inventário de dependências.

- A sugestão de senha usa `crypto.getRandomValues`, gera 24 caracteres e garante caracteres de diferentes grupos. Não usa serviço externo, não grava a sugestão em armazenamento, permite mostrar/ocultar os campos e limpa os campos quando a tela de acesso muda. A senha só entra no fluxo normal de criação/alteração da senha do cofre.
- O novo `password-tools.js` é servido do próprio repositório e foi incluído no cache offline. A chave do cache do service worker foi alterada para que o navegador não continue usando a versão antiga dos arquivos.
- O cabeçalho agora mostra apenas os mascotes Vista Aí e Anota Aí. O favicon, o ícone da tela inicial e os ícones PWA foram derivados do arquivo de mascote fornecido pelo idealizador, sem o texto do logotipo e com canal transparente.
- Na revisão do código próprio, não foram encontrados usos de `innerHTML`, `outerHTML`, `insertAdjacentHTML`, `document.write`, `eval` ou `new Function`. Os links externos do aplicativo são as opções do Mercado Pago, abertas por escolha da pessoa e com `noopener noreferrer`.
- O aplicativo não integra DNS de terceiros, telemetria ou API remota. O service worker atende somente requisições GET da própria origem; a resolução DNS do domínio continua sendo responsabilidade da configuração do domínio e da rede do visitante.
- As dependências incluídas e suas licenças/origens estão listadas em `vendor/DEPENDENCIES.md`. A licença das artes do projeto não foi presumida; o inventário registra que os arquivos foram fornecidos pelo idealizador e que não há licença de terceiros identificada.

Não foram executados testes de navegador, testes automatizados nem análise CodeQL nesta revisão. A alteração foi revisada estaticamente; a aparência e o funcionamento em desktop, iPad, iPhone e instalação PWA ainda precisam de confirmação manual após a publicação.

## O que esta revisão não confirma

Este pacote ainda não foi exercitado em navegadores e aparelhos físicos depois das mudanças do Educa Aí. Não houve teste de invasão independente, revisão jurídica, certificação ou validação institucional. O suporte da passkey deve ser confirmado no aparelho e navegador que a pessoa usará. Portanto, não se afirma que o site seja completamente seguro ou validado para uso em larga escala.
