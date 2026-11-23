# Histórico de versões

## 1.7 — Proteção e bibliotecas locais

- Removeu carregamento das bibliotecas do leitor de QR, gerador de QR e planilhas por CDNs; os arquivos agora fazem parte do site e ficam disponíveis offline.
- Atualizou a biblioteca SheetJS para a versão oficial 0.20.3 e manteve a leitura de Excel em worker isolado, com limites de tamanho, registros, expansão e tempo.
- Manteve CSV e validação de campos no próprio aplicativo.
- Reforçou a política de segurança do conteúdo, bloqueou scripts inline e removeu montagem dinâmica de conteúdo de alunos como HTML.
- Aumentou a derivação PBKDF2 para 600.000 iterações para novos bancos e atualizou bancos antigos ao desbloquear.
- Acrescentou a política de relato privado de falhas e ampliou a relação de licenças de bibliotecas.
- Atualizou o cache offline para instalar a versão 1.7.

A atualização foi revisada estaticamente e os arquivos JavaScript passaram por verificação de sintaxe. Não foi feito teste de invasão independente.