# Segurança e privacidade no Vista Aí

O Vista Aí é um aplicativo de navegador sem contas de usuário ou servidor de dados. As turmas e os registros ficam no armazenamento do próprio navegador. Esta versão protege o banco local e os arquivos de backup e transferência com uma senha escolhida pelo professor.

## O que está protegido

- O conteúdo gravado no IndexedDB ou no armazenamento alternativo do navegador é criptografado.
- O backup completo e o arquivo diário de transferência são criptografados antes de serem baixados ou compartilhados.
- A senha é usada no aparelho para derivar a chave de criptografia. O aplicativo não a envia para um servidor.
- O QR do crachá é um identificador aleatório e não contém nome nem matrícula.
- A matrícula pode ajudar a reaproveitar o mesmo identificador em cadastros repetidos. Sem matrícula, o professor pode confirmar manualmente que dois registros com o mesmo nome são da mesma pessoa.

## O que ainda exige cuidado

- A senha não pode ser recuperada. Guarde-a em local seguro e mantenha mais de uma cópia dos backups criptografados.
- O conteúdo fica acessível enquanto o aplicativo está desbloqueado. O app bloqueia após 10 minutos sem atividade; também bloqueie-o ao terminar e use uma senha de bloqueio no aparelho.
- Uma planilha Excel exportada para consulta contém nomes e registros legíveis. Guarde-a com cuidado e evite compartilhá-la sem necessidade.
- Backups antigos criados antes desta versão continuam sem criptografia. Ao restaurá-los, o Vista Aí grava os dados no banco local já criptografados; o arquivo antigo não é alterado.
- A limpeza dos dados do site, a navegação privada, a perda ou quebra do aparelho podem apagar o banco. A criptografia não substitui backups.
- A criptografia local protege os dados armazenados, mas não impede que alguém com acesso ao aparelho desbloqueado veja a tela. Também não protege contra um aparelho comprometido, extensões maliciosas ou código adulterado enquanto o app está sendo usado.
- O leitor, o gerador de QR e a planilha usam bibliotecas carregadas do serviço externo jsDelivr. Essas bibliotecas executam na página; uma versão futura pode reforçar essa parte trazendo-as junto com o aplicativo e conferindo a integridade dos arquivos.
- Os dados não são anonimizados: o aplicativo associa os códigos aleatórios aos alunos no aparelho do professor. O QR reduz a exposição de nomes no código impresso, mas a lista e as etiquetas mostram o nome para uso escolar.

## Escopo desta versão

O mesmo QR pode ser usado para vistos, chamada e saídas/retornos no cadastro local. Os registros continuam separados por turma e disciplina. O Vista Aí ainda não tem contas de professores, banco compartilhado da escola, acesso da coordenação ou portal dos responsáveis. Também não tem a aba de ocorrências.

Antes de incluir ocorrências ou compartilhar informações escolares, a escola precisa definir quem terá acesso, para qual finalidade, por quanto tempo os dados serão mantidos e como serão corrigidos ou apagados. A legislação e as orientações de proteção de dados devem ser avaliadas pela escola ou por seu responsável por privacidade.

## Boas práticas

1. Use uma senha longa que não reutilize em outros serviços.
2. Bloqueie o aplicativo ao terminar de usar e mantenha o bloqueio de tela do aparelho ativado.
3. Salve backups criptografados com frequência e guarde-os em local seguro.
4. Não compartilhe a senha junto com o arquivo de backup.
5. Proteja separadamente as planilhas Excel, pois elas não são criptografadas pelo aplicativo.
6. Evite inserir dados além do necessário para a função escolar.
