# Segurança e privacidade

O Vista Aí e o Anota Aí são aplicações de navegador sem contas on-line ou servidor de dados escolares. Os dados ficam no armazenamento local do navegador e são criptografados com uma senha que o professor cria neste aparelho. O projeto não sincroniza automaticamente entre aparelhos.

## Proteções implementadas na versão 1.7

- Banco local, backups completos e transferências diárias usam AES-GCM de 256 bits. A chave é derivada com PBKDF2-HMAC-SHA-256 e 600.000 iterações. Novas senhas precisam ter pelo menos 14 caracteres. Quando um banco antigo com menos iterações é aberto com sucesso, o app o grava novamente com o nível atual.
- Os scripts do leitor de QR, do gerador de QR e da planilha são arquivos locais do projeto. O navegador não baixa esses códigos de CDNs ao abrir o Vista Aí. Versões, licenças e hashes SHA-256 estão em [vendor/DEPENDENCIES.md](vendor/DEPENDENCIES.md).
- O importador CSV e as validações de dados são próprios do app. Para arquivos .xlsx, ele usa a versão oficial SheetJS Community Edition 0.20.3, copiada para o projeto. Não recomendamos escrever um parser .xlsx próprio: ZIP e XML são formatos complexos, e reimplementar isso pode aumentar o risco de falhas.
- Arquivos Excel são lidos em um processo separado, com limite de 5 MB, até 5.000 alunos, 20 colunas, 20 MB de dados descompactados e tempo máximo de 15 segundos. Backups e transferências aceitam arquivos de até 20 MB e passam por validação de estrutura e relações entre turma, aluno e registro.
- A transferência diária inclui somente as disciplinas, turmas e alunos associados aos registros daquele dia.
- O HTML aplica uma política de segurança de conteúdo: scripts e conexões só podem vir da própria origem; scripts embutidos e manipuladores inline são bloqueados. As telas dinâmicas usam criação de elementos e texto seguro, sem montar conteúdo de alunos como HTML. O service worker armazena apenas arquivos locais do site e não busca bibliotecas externas.
- O app bloqueia a tela após 10 minutos sem atividade ou após 5 minutos em segundo plano. Ao bloquear, encerra as câmeras e remove da tela os dados carregados.
- Os QR Codes contêm um identificador aleatório, sem nome ou matrícula. Cadastros com a mesma matrícula não passam a compartilhar o QR silenciosamente; o professor precisa confirmar a associação.

## Dependências incluídas

SheetJS Community Edition 0.20.3 é distribuída sob Apache-2.0; html5-qrcode 2.3.8 sob Apache-2.0 e incorpora ZXing-JS sob Apache-2.0; qrcodejs 1.0.0 sob MIT. Os avisos e licenças originais foram incluídos junto aos arquivos em `vendor/`. As versões 0.18.5 do pacote npm `xlsx` e o CDN anterior não são usados.

Os avisos públicos que motivaram a atualização de SheetJS descrevem vulnerabilidades de prototype pollution e negação de serviço: [GHSA-4r6h-8v6p-xvw6](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6) e [GHSA-5pgg-2g8v-p4x9](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9). A documentação da SheetJS orienta a incorporar os arquivos locais ao projeto para evitar dependência de CDN: [instalação standalone](https://docs.sheetjs.com/docs/getting-started/installation/standalone/). A recomendação de 600.000 iterações PBKDF2-SHA-256 está na [orientação de armazenamento de senhas da OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html).

## Limites e cuidados

- Se a senha for esquecida, não será possível abrir o banco criptografado ou os backups correspondentes. Guarde-a em local seguro e separada dos arquivos.
- O armazenamento local fica isolado por endereço e navegador. Apagar os dados do site, usar navegação privada, perder ou danificar o aparelho pode eliminar o banco. Backup criptografado regular continua necessário.
- Enquanto o aplicativo estiver desbloqueado, alguém com acesso ao aparelho poderá consultar as telas. Use o bloqueio do aparelho e bloqueie o aplicativo ao terminar.
- Planilhas Excel exportadas para consulta são legíveis e não são criptografadas pelo aplicativo. Guarde-as em local seguro e compartilhe apenas quando necessário.
- Um backup antigo sem criptografia permanece sem criptografia como arquivo. O app avisa antes de importá-lo; depois da importação, grava a cópia no banco local criptografado.
- A criptografia não protege contra aparelho comprometido, extensão maliciosa, código de site adulterado ou acesso ao aparelho desbloqueado. Como o site é público, seu código também é público; o acesso de escrita ao repositório e à conta GitHub deve permanecer protegido.
- GitHub Pages não permite configurar todos os cabeçalhos HTTP. A política do HTML restringe scripts, conexões, imagens e workers; políticas que só funcionam como cabeçalho, como `frame-ancestors`, não podem ser aplicadas por essa meta tag.
- As bibliotecas são cópias locais e não recebem atualização automática. O idealizador precisa acompanhar avisos dos projetos originais, atualizar as versões e rodar novamente a análise de segurança do GitHub.
- Esta atualização é uma revisão estática do código e das dependências conhecidas. Não foi feito teste de invasão independente nem certificação. Nenhum sistema pode ser chamado de completamente seguro.

## Dados escolares

Vistos, chamadas, saídas/retornos e ocorrências ficam associados localmente à disciplina, turma e aluno. Ocorrências podem conter informações delicadas. Registre apenas o necessário, use o dispositivo protegido e siga as regras da escola sobre finalidade, acesso, guarda, correção e descarte.

Esta versão não implementa exclusão automática depois de 18 meses, gestão de perfis de acesso, contas de professores, banco compartilhado da escola ou acesso dos responsáveis. Combine esses procedimentos com a direção ou com o responsável por proteção de dados da escola antes de ampliar o uso.

## Recomendações

1. Escolha uma senha longa e que não reutilize em outros serviços.
2. Faça backup criptografado regularmente e guarde mais de uma cópia em local seguro.
3. Não envie a senha junto com o arquivo de backup.
4. Proteja separadamente as planilhas Excel exportadas.
5. Evite incluir dados de estudantes além do necessário para a atividade escolar.
6. Antes de usar em larga escala, valide os fluxos com outros professores e com a escola.