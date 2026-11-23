<div align="center">
  <img src="assets/logo-vistaai.webp" alt="Mascote do Vista Aí" width="180">
  <img src="assets/logo-anotaai.webp" alt="Mascote do Anota Aí" width="180">
  <p><strong>Ferramentas gratuitas para organizar a rotina de professores.</strong></p>
</div>

> **Versão 1.7 em desenvolvimento e testes.** Até hoje, o aplicativo foi utilizado somente pelo idealizador. Ainda não foi testado por outros professores nem validado para uso em larga escala. Esta atualização remove scripts carregados de CDNs, corrige a biblioteca antiga de planilhas e reforça a proteção dos arquivos e do banco local.

<p align="center"><a href="https://vistaaiedu.com.br/">Abrir Vista Aí e Anota Aí</a></p>

## Sobre o aplicativo

O **Vista Aí** e o **Anota Aí** são duas áreas de um aplicativo gratuito de navegador. O Vista Aí registra vistos de atividades; o Anota Aí organiza chamadas, saídas de sala e ocorrências. O foco é facilitar a rotina de professores com ferramentas simples, sem exigir instalação de um servidor ou criação de conta on-line.

O usuário cria um nome de exibição local, senha e pelo menos uma disciplina no primeiro acesso. Depois escolhe qual área deseja abrir. Nos próximos acessos, desbloqueia os dados com a senha e escolhe Vista Aí ou Anota Aí. Um lembrete de contribuição opcional pode aparecer a cada dez acessos e pode ser fechado.

## Recursos

- Cadastro de várias disciplinas, turmas e alunos, separados por disciplina.
- Inclusão manual de alunos ou importação de Excel/CSV. Um modelo para baixar inclui `Nome`, `Turma` e `Matrícula` opcional.
- QR Code aleatório por aluno, que pode ser usado no livro e no crachá para os registros do aplicativo.
- Visto de atividades: **Feito** (1 ponto), **Incompleto** (0,5) e **Não feito** (0), com histórico e cálculo configurável.
- Chamada manual ou por QR Code, com histórico por turma e mês e exportação para Excel.
- Registro de saída e retorno com horário e cálculo do tempo fora.
- Registro local de ocorrências escolares por aluno, categoria, data e anotação opcional.
- Backup completo e transferência diária criptografados.
- Lembrete de apoio opcional, com Pix e Mercado Pago. O aplicativo não cobra pelo uso nem restringe funções a quem contribui.

## Usar

1. Acesse [vistaaiedu.com.br](https://vistaaiedu.com.br/) em Safari (iPhone/iPad), Chrome (Android) ou navegador de computador.
2. No primeiro acesso, informe seu nome de exibição e crie uma senha com pelo menos 14 caracteres. Cadastre uma disciplina e siga a apresentação inicial. Nos acessos seguintes, digite a senha e escolha uma área.
3. Em **Turmas e alunos**, crie as turmas e cadastre ou importe os alunos. Em **QR Codes**, gere e imprima os códigos.
4. Abra **Vista Aí** para registrar vistos. Abra **Anota Aí** para chamada, saídas de sala ou ocorrências.
5. Use **Histórico** para consultar os registros e exportar chamadas ou resultados. Em **Backup**, salve cópias regularmente.

Consulte [LEIA-ME.md](LEIA-ME.md) para o passo a passo completo e [Segurança e privacidade](SEGURANCA-E-PRIVACIDADE.md) para entender armazenamento e cuidados com os dados.

## Armazenamento e privacidade

O aplicativo armazena os dados criptografados no navegador do aparelho e nos arquivos de backup. A senha não é enviada para a internet. Não há sincronização automática nem banco de dados on-line; cada aparelho tem seu próprio armazenamento. Para transferir informações, use a exportação e importação de backup.

O QR contém um identificador aleatório, sem nome ou matrícula. O nome de exibição também fica localmente e não cria uma conta na internet. As planilhas Excel exportadas são legíveis e devem ser guardadas com cuidado. A senha esquecida não pode ser recuperada. Limpar os dados do site ou usar navegação privada pode apagar o banco local.

As ocorrências podem conter informações escolares delicadas. Use apenas o necessário, limite o acesso ao aparelho e siga as orientações da escola sobre finalidade, acesso, guarda e descarte. Este projeto não oferece contas de professores, compartilhamento com a escola ou portal para responsáveis.

## Bibliotecas e segurança

O importador CSV e as validações dos dados são código do próprio aplicativo. Para ler e criar arquivos `.xlsx`, o projeto inclui localmente a biblioteca aberta SheetJS Community Edition 0.20.3. O leitor de QR e o gerador de QR também estão incluídos no projeto, com suas licenças e hashes registrados em [vendor/DEPENDENCIES.md](vendor/DEPENDENCIES.md). O navegador não baixa esses scripts de CDNs ao abrir o site.

A biblioteca SheetJS foi atualizada da versão antiga 0.18.5. A versão anterior estava afetada por avisos públicos de segurança; veja os [detalhes sobre prototype pollution](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6) e [negação de serviço](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9). O código de leitura de `.xlsx` roda em um processo separado e rejeita arquivos grandes, planilhas fora dos limites e arquivos com expansão ZIP excessiva.

O projeto aplica uma política de segurança de conteúdo no próprio HTML. GitHub Pages não permite configurar todos os cabeçalhos de segurança no servidor. A política do HTML restringe scripts e conexões do app à própria origem, mas não torna seguros um dispositivo comprometido, uma senha fraca ou uma versão de código adulterada. Nenhum software pode ser prometido como completamente seguro; esta atualização corrige riscos identificados, mas não substitui uma auditoria independente ou testes de invasão.

## Compatibilidade

O site funciona em navegadores atuais de iPhone, iPad, Android e computador. O leitor de QR usa a câmera, depende de permissão e requer HTTPS. Após a primeira abertura com internet, o aplicativo pode preparar os arquivos locais para uso offline. O armazenamento continua vinculado ao navegador e aparelho.

## Situação do projeto e contribuições

Este projeto está em desenvolvimento e testes antes de um uso mais amplo. Até o momento, foi utilizado somente pelo idealizador. Como o idealizador não sabe programar, o desenvolvimento e a documentação foram feitos com ajuda de inteligência artificial. As logos dos mascotes também foram criadas com ajuda de IA. Leia [SOBRE-USO-DE-IA.md](SOBRE-USO-DE-IA.md).

O foco é facilitar a vida de professores. Sugestões, relatos de problemas, ideias de acessibilidade e melhorias no código são bem-vindos. Você pode contribuir mesmo sem programar: [abra uma discussão ou relate um problema](https://github.com/Bubolisco/vistaai/issues).

## Apoie o projeto

O Vista Aí e o Anota Aí são gratuitos. Se quiser, uma contribuição voluntária ajuda a manter o domínio e preparar correções e melhorias. A contribuição não desbloqueia recursos. Consulte [APOIE.md](APOIE.md) para as opções de Pix e Mercado Pago.

## Licença

O código do aplicativo é distribuído sob a licença [MIT](LICENSE). As bibliotecas de terceiros mantêm as licenças de seus autores, incluídas em `vendor/`.
