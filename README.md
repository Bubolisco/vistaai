<div align="center">
  <img src="assets/logo-vistaai-1.webp" alt="Logo do VistaAí!" width="230">
  <p><strong>Um jeito simples de registrar os vistos das atividades dos alunos.</strong></p>
</div>

> **Status do projeto — versão 1.4 em testes.** Até o momento, o Vista Aí foi utilizado apenas pelo idealizador. Ainda não foi testado por outros professores nem validado para uso em larga escala. O projeto está em desenvolvimento e testes antes de ampliar a utilização.

<p align="center">
  <a href="https://vistaaiedu.com.br/">Abrir o VistaAí!</a>
</p>

## O que é o VistaAí!

O VistaAí! é um aplicativo gratuito de navegador criado para ajudar professores a registrar e organizar os vistos das atividades dos alunos. Cada registro fica associado a uma disciplina, turma, aluno e atividade.

O projeto nasceu da necessidade de um professor do Ensino Básico que queria computar os vistos de forma rápida e simples. O idealizador não sabe programação e usou ferramentas de inteligência artificial como apoio para planejar e desenvolver o aplicativo e sua documentação. As logos do VistaAí! também foram feitas com ajuda de IA.

## O que o aplicativo faz

- Organiza disciplinas, turmas e alunos separadamente.
- Permite cadastrar alunos manualmente ou importar uma planilha Excel ou CSV, inclusive com várias turmas.
- Baixa um modelo de Excel com colunas para nome, turma e matrícula opcional.
- Gera QR Codes individuais para imprimir e colar nos livros dos alunos.
- Registra a atividade, a situação e a data e hora de cada visto.
- Mostra o histórico por aluno e por turma.
- Calcula resultados por soma dos pontos, média dos vistos ou conversão para uma nota máxima configurável.
- Exporta os dados da turma para Excel.
- Faz backup completo e exportação diária para transferir vistos entre dispositivos.
- Criptografa o banco local e os arquivos de backup e transferência com uma senha escolhida pelo professor.
- Faz chamada manual ou por leitura do QR do crachá.
- Registra os horários de saída e retorno e calcula o tempo fora da sala.
- Inclui uma aba **Como Usar** com instruções passo a passo.
- Inclui uma aba **Doações** para quem quiser apoiar voluntariamente o projeto.
- Permite apagar todos os dados deste navegador ao fim do ano letivo, com confirmação reforçada.

## Como começar

1. Abra o [Vista Aí no navegador](https://vistaaiedu.com.br/).
2. Na primeira abertura, crie uma senha com pelo menos 10 caracteres. Ela criptografa os dados neste navegador. Guarde-a em local seguro; o projeto não consegue recuperar senhas esquecidas.
3. Em **Turmas e alunos**, crie uma disciplina e uma turma. Cadastre os alunos manualmente ou toque em **Baixar Modelo** para obter a planilha Excel. Preencha `Nome` e `Turma`; `Matrícula` é opcional. O nome da turma na planilha deve corresponder ao cadastro no app.
4. Em **QR Codes**, selecione a turma, imprima as etiquetas e cole o código no crachá ou livro do aluno. O QR contém um identificador aleatório, sem nome ou matrícula. A mesma matrícula reutiliza o QR em outros cadastros; sem matrícula, o app pergunta antes de ligar registros com o mesmo nome.
5. Em **Dar visto**, selecione a turma, informe a atividade ou página, leia o QR Code com a câmera e marque **Feito**, **Incompleto** ou **Não feito**.
6. Em **Presença e saídas**, escolha a turma e selecione **Chamada** ou **Saída e retorno**. A chamada pode ser marcada manualmente ou por leitura do crachá. No controle de saídas, a primeira leitura registra a saída e a próxima registra a volta.
7. Em **Histórico**, consulte os registros e resultados. Escolha o cálculo desejado e exporte a turma para Excel quando precisar.

Os valores padrão são **Feito = 1 ponto**, **Incompleto = 0,5 ponto** e **Não feito = 0 ponto**. No cálculo por soma, cada registro vale até um ponto; também é possível usar a média ou convertê-la para uma nota máxima, como 10.

## Usar no celular, tablet ou computador

O VistaAí! funciona em navegadores compatíveis no iPhone, iPad, Android e computador. Para usar a câmera, abra o endereço seguro do aplicativo e permita o acesso quando o navegador solicitar.

- **iPhone e iPad:** abra o link no Safari, toque em **Compartilhar → Adicionar à Tela de Início** e, se aparecer, ative **Abrir como App da Web**.
- **Android:** abra o link no Chrome e escolha **Instalar app** ou **Adicionar à tela inicial** no menu.
- **Computador:** abra o mesmo endereço em um navegador.

O aplicativo prepara os arquivos para uso offline depois da primeira abertura com internet. Alguns recursos, como carregar uma planilha ou abrir a câmera, podem depender do navegador e da conexão.

## Dados e backups

O banco local e os backups completos e diários ficam criptografados por uma senha escolhida pelo professor. O app não cria contas, não envia dados para um servidor e não sincroniza automaticamente. Cada aparelho mantém seus próprios dados; faça backup para transferi-los. Ao importar, informe a senha usada naquele arquivo. Os dados serão gravados usando a senha já configurada no aparelho de destino. Navegação privada e limpeza dos dados do site podem apagar o banco local.

Cada endereço do site tem um armazenamento separado no navegador. Se usava o endereço antigo do GitHub ou a versão com `www`, abra essa versão e salve um backup antes de passar para o domínio atual. O Vista Aí aceita os backups antigos e grava os dados restaurados de forma criptografada.

Em **Backup**, salve um arquivo completo ou exporte os registros de um dia. A transferência diária inclui vistos, chamadas e saídas/retornos. A planilha Excel de turma é legível, portanto guarde-a com cuidado e não a envie para este repositório. A senha dos backups não pode ser recuperada.

O mesmo QR do crachá pode ser usado para vistos, chamadas e saídas/retornos. Os registros continuam separados por turma e disciplina. Quando o mesmo aluno é cadastrado em outra turma com a mesma matrícula, o QR é compartilhado; sem matrícula, o professor pode confirmar manualmente que se trata do mesmo aluno. Ocorrências, coordenação e acesso dos responsáveis não estão nesta versão: essas funções dependem de regras de acesso e retenção definidas com a escola.

Leia [Segurança e privacidade](SEGURANCA-E-PRIVACIDADE.md) para entender o que a criptografia protege, os limites do armazenamento local e os cuidados recomendados.

Ao iniciar um novo ano letivo, faça um backup completo se quiser arquivar os dados e use **Apagar todos os dados deste navegador** na seção **Backup**. O app pede confirmação reforçada antes de apagar disciplinas, turmas, alunos, cálculos e vistos deste aparelho.

Esta versão ainda não faz envio automático para Google Drive, OneDrive ou iCloud Drive. Faça backups regularmente e mantenha uma cópia em local seguro.

## Sobre o projeto

O foco do VistaAí! é facilitar a vida de professores com uma ferramenta simples, gratuita e de código aberto. O projeto é licenciado sob **MIT**; consulte o arquivo `LICENSE`.

Contribuições são bem-vindas. Sugestões de professores, relatos de problemas, ideias de acessibilidade e melhorias no código podem ajudar o aplicativo a evoluir. Não é preciso programar para compartilhar uma sugestão. Você pode abrir uma [discussão ou relatar um problema](https://github.com/Bubolisco/vistaai/issues).

## Apoie o projeto

O VistaAí! continuará gratuito. Quem desejar pode contribuir voluntariamente para ajudar com a renovação do domínio, a manutenção e as próximas melhorias. A contribuição não é necessária para usar o aplicativo nem desbloqueia funções. Veja as opções de [Pix e Mercado Pago](APOIE.md).
