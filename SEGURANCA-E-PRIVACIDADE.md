# Segurança e privacidade

O Vista Aí e o Anota Aí são aplicações de navegador sem contas on-line ou servidor de dados. As informações ficam no armazenamento local do navegador e são criptografadas com a senha criada pelo professor. Esta versão não sincroniza dados entre aparelhos.

## Proteções existentes

- O banco local e os arquivos de backup completo e transferência diária são criptografados com AES-GCM. A chave é derivada da senha no próprio aparelho.
- A senha não é enviada para o site. O nome de usuário é apenas um nome de exibição guardado no banco local; não identifica uma conta remota.
- Os QR Codes contêm um identificador aleatório, sem nome ou matrícula.
- A tela é bloqueada após um período sem atividade. O usuário também pode bloqueá-la manualmente.
- Ao deixar o aplicativo em segundo plano ou trocar de aba interna, as câmeras são encerradas. O leitor fecha após 60 segundos sem leitura.

## Limites e cuidados

- Se a senha for esquecida, não será possível abrir o banco criptografado ou os backups correspondentes. Guarde-a em local seguro e separada dos arquivos.
- O armazenamento local fica isolado por endereço e navegador. Apagar os dados do site, usar navegação privada, perder ou danificar o aparelho pode eliminar o banco. Backup criptografado regular continua necessário.
- Enquanto o aplicativo estiver desbloqueado, alguém com acesso ao aparelho poderá consultar as telas. Use bloqueio de tela e bloqueie o aplicativo ao terminar.
- Planilhas Excel exportadas para consulta são legíveis e não são criptografadas pelo aplicativo. Guarde-as em local seguro e compartilhe apenas quando necessário.
- Backups antigos anteriores à criptografia podem continuar sem proteção. Após a restauração, os dados são gravados criptografados no aparelho; o arquivo antigo permanece como estava.
- Criptografia local não protege contra aparelho comprometido, extensões maliciosas, código adulterado ou acesso indevido ao aparelho desbloqueado.
- O leitor QR, o gerador de códigos e a planilha usam bibliotecas carregadas do jsDelivr. Essas bibliotecas executam na página; no futuro, elas podem ser incorporadas ao projeto e ter sua integridade verificada.

## Dados escolares

Os registros de vistos, chamadas, saídas/retornos e ocorrências ficam associados localmente à disciplina, turma e aluno. O mesmo QR aleatório pode ser usado para diferentes ferramentas quando os cadastros locais estiverem ligados ao mesmo identificador. A lista do professor continua associando o código ao nome do aluno.

Ocorrências podem incluir informações delicadas sobre estudantes. Registre apenas o que for necessário e objetivo, proteja o dispositivo e siga as regras da escola para acesso, finalidade, guarda, correção e descarte. Esta versão não implementa exclusão automática após um prazo, gestão de perfis de acesso, contas de professores, base compartilhada da escola ou acesso dos responsáveis. Combine esses procedimentos com a direção ou com o responsável por proteção de dados da escola antes de ampliar o uso.

## Recomendações

1. Escolha uma senha longa que não reutilize em outros serviços.
2. Faça backup criptografado regularmente e guarde mais de uma cópia em local seguro.
3. Não envie a senha junto com o arquivo de backup.
4. Proteja separadamente as planilhas Excel exportadas.
5. Evite incluir dados de estudantes além do necessário para as atividades escolares.
6. Antes de usar em larga escala, valide os fluxos com outros professores e com a escola.
