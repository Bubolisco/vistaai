# Histórico de versões

## 1.7 — Educa Aí • modo individual

- Reúne Vista Aí e Anota Aí sob o nome Educa Aí.
- Adiciona a apresentação inicial, escolha entre Uso individual e Uso escolar e configuração guiada do perfil local. O Uso escolar é identificado como planejado e permanece desativado.
- Cria um cofre local criptografado com senha e chave aleatória de recuperação. A chave permite abrir o cofre e definir outra senha.
- Mantém compatibilidade de leitura com cofres locais da versão anterior e os atualiza para o novo formato depois do desbloqueio.
- Adiciona passkey opcional para desbloqueio rápido quando navegador, aparelho e gerenciador de credenciais oferecem WebAuthn com a extensão PRF. A senha e a chave de recuperação continuam como alternativas.
- Adiciona o botão “Sugerir senha forte” no cadastro e na redefinição de senha. A senha aleatória é criada localmente com o gerador criptográfico do navegador.
- Simplifica o cabeçalho para mostrar apenas os mascotes do Vista Aí e do Anota Aí.
- Atualiza favicon e ícones de instalação com o mascote do Educa Aí, sem o texto do logotipo.
- Mantém o uso gratuito e a contribuição voluntária opcional.

### Base técnica incorporada à versão 1.7

- Inclui localmente as bibliotecas do leitor de QR, do gerador de QR e de planilhas, com versões e licenças listadas em `vendor/DEPENDENCIES.md`.
- Mantém a leitura de Excel em worker isolado, com limites para tamanho, registros, expansão e tempo.
- Aplica a política de segurança de conteúdo e evita reinterpretar texto de alunos como HTML.
- Mantém backups criptografados, chamadas, saídas/retornos, ocorrências e históricos no armazenamento local.

## Estado desta publicação

Esta publicação é uma atualização de desenvolvimento. O projeto ainda não foi testado por outros professores nem validado para uso em larga escala. O desbloqueio por passkey depende de suporte específico de navegador, sistema operacional e gerenciador de credenciais; senha e chave de recuperação permanecem disponíveis.
