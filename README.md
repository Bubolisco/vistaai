<div align="center">
  <img src="assets/logo-educai.webp" alt="Educa Aí" width="190">
  <p><img src="assets/logo-vistaai.webp" alt="Vista Aí" width="130"> <img src="assets/logo-anotaai.webp" alt="Anota Aí" width="130"></p>
  <p><strong>Ferramentas gratuitas e abertas para a rotina de professores.</strong></p>
</div>

> **Versão 1.7 • Em desenvolvimento e testes.** Até hoje, o projeto foi usado somente pelo idealizador. Ainda não foi testado por outros professores nem validado para uso em larga escala.

<p align="center"><a href="https://vistaaiedu.com.br/">Abrir Educa Aí</a></p>

## Sobre o projeto

O **Educa Aí** reúne atualmente duas ferramentas de navegador:

- **Vista Aí:** vistos de atividades, resultados e histórico por turma.
- **Anota Aí:** chamada, saídas e retornos de sala e registros de ocorrência.

É um projeto gratuito e de código aberto, criado por um professor da rede básica de ensino. Está em desenvolvimento e foi feito com apoio de ferramentas de inteligência artificial. O foco disponível agora é o **Uso individual**, com os dados salvos e criptografados no aparelho. O modo **Uso escolar**, com compartilhamento, está em planejamento e não está disponível nesta versão.

## Recursos atuais

- Disciplinas, turmas e alunos cadastrados manualmente ou importados por Excel/CSV.
- QR aleatório por aluno, sem nome nem matrícula no conteúdo do código.
- Vistos: **Feito** (1 ponto), **Incompleto** (0,5) e **Não feito** (0).
- Chamada manual ou por QR, histórico mensal e exportação das chamadas para Excel.
- Registro de saídas e retornos com horário e duração.
- Registro local de ocorrências escolares.
- Backup completo criptografado e transferência diária.
- Opções de apoio voluntário. Doações são opcionais e não liberam recursos: o projeto continua gratuito.

## Primeiro acesso e proteção

Na primeira abertura, o Educa Aí apresenta o projeto e os modos de uso. Escolha **Uso individual**, crie um perfil local, informe uma senha de pelo menos 14 caracteres e guarde a chave de recuperação apresentada antes de concluir a criação do cofre. Depois, cadastre uma disciplina, conheça as ferramentas e escolha Vista Aí ou Anota Aí.

O perfil não é uma conta on-line; o nome informado é apenas um nome de exibição local. No Uso individual, os nomes, turmas e registros ficam no armazenamento deste navegador; não há sincronização com servidor. A senha protege o cofre. A chave de recuperação permite abrir o cofre e definir outra senha. Se baixar essa chave em arquivo, o arquivo fica sem criptografia e deve ser guardado com cuidado. Se perder a senha e a chave, os dados criptografados não poderão ser recuperados.

Em **Backup**, é possível ativar uma passkey para desbloqueio com o mecanismo do aparelho, como Face ID, digital ou código de bloqueio. A passkey depende do navegador e do dispositivo oferecerem a extensão de criptografia necessária. Se o recurso não estiver disponível, use a senha. O sistema operacional ou gerenciador de passkeys pode sincronizar a própria credencial conforme as configurações da conta do usuário; isso não sincroniza os dados do Educa Aí.

## Como usar

1. Acesse [vistaaiedu.com.br](https://vistaaiedu.com.br/) em um navegador atualizado.
2. Crie o perfil local, guarde a chave de recuperação e cadastre uma disciplina.
3. Em **Turmas e alunos**, crie turmas e cadastre/importе os alunos. Em **QR Codes**, imprima os códigos.
4. Use o Vista Aí para vistos e o Anota Aí para chamada, saídas e ocorrências.
5. Salve backups regularmente. Para ver o passo a passo, consulte [LEIA-ME.md](LEIA-ME.md).

## Armazenamento e privacidade

Os dados ficam criptografados no navegador e nos backups. Cada aparelho tem seu próprio armazenamento; não há nuvem compartilhada no modo atual. Apagar os dados do site, perder o aparelho ou usar navegação privada pode causar perda dos dados locais. O backup completo pode ser aberto com a senha ou a chave de recuperação usadas para protegê-lo.

Os QR Codes não contêm nome ou matrícula, mas os registros dentro do aplicativo incluem os dados digitados pelo professor. Planilhas exportadas para Excel são legíveis e devem ser guardadas com cuidado. Ocorrências podem conter informações delicadas: registre somente o necessário e siga as regras da escola sobre acesso, finalidade e retenção.

## Segurança e bibliotecas

O leitor de QR, o gerador de QR e a biblioteca de planilhas são incluídos localmente com suas licenças e versões documentadas em [vendor/DEPENDENCIES.md](vendor/DEPENDENCIES.md). Ao abrir o site, o navegador não baixa essas bibliotecas de CDNs.

O aplicativo não usa um serviço de DNS de terceiros integrado ao código. Como qualquer site, o domínio ainda precisa de DNS para ser encontrado: essa resolução depende dos servidores DNS configurados para o domínio e da rede/aparelho de quem acessa. Os links para o Mercado Pago só são abertos quando a pessoa escolhe uma opção de apoio.

O projeto aplica uma política de segurança de conteúdo no HTML. Isso não protege um aparelho comprometido, uma senha fraca ou uma cópia do site adulterada, nem substitui auditoria independente. Veja [SECURITY.md](SECURITY.md) e [SEGURANCA-E-PRIVACIDADE.md](SEGURANCA-E-PRIVACIDADE.md).

## Contribuições

Sugestões, relatos de problemas com dados fictícios e melhorias são bem-vindos. O aplicativo é gratuito; apoio voluntário ajuda a manter o domínio e preparar correções. Consulte [APOIE.md](APOIE.md). O uso escolar compartilhado e o acesso de responsáveis ainda não estão disponíveis.

## Licença

O código do aplicativo é distribuído sob a licença [MIT](LICENSE). Bibliotecas de terceiros mantêm as licenças indicadas em `vendor/`.
