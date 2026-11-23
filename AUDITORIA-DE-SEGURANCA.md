# Auditoria de segurança — Vista Aí 1.7

**Data:** 23 de novembro de 2026  
**Escopo:** arquivos do aplicativo de navegador e bibliotecas incluídas neste pacote.  
**Tipo de revisão:** revisão estática do código, configuração e versões públicas das bibliotecas. Não é certificação nem teste de invasão.

## Correções aplicadas

| Área | Alteração | Resultado esperado |
|---|---|---|
| Scripts externos | Leitor de QR, gerador de QR e Excel passaram a ser servidos como arquivos locais do próprio site. | O navegador não consulta CDNs para essas funções e elas podem funcionar offline após carregar o app. |
| HTML dinâmico | As telas que exibem nomes e registros passaram a criar elementos e definir texto com APIs do DOM. Scripts inline, handlers inline e uso de HTML dinâmico no JavaScript do app foram removidos. | Conteúdo de alunos deixa de ser interpretado como marcação da página; reduz o risco de XSS e responde aos alertas CodeQL anteriores. |
| Política do navegador | CSP passou a restringir scripts, conexões e workers à própria origem, bloquear objetos e frames e recusar scripts inline. | Reduz o que um conteúdo injetado poderia carregar ou executar. |
| Planilhas | SheetJS Community Edition 0.20.3 foi incluída localmente; leitura ocorre em worker, com limites de arquivo de 5 MB, até 5.000 linhas úteis, 20 colunas, 20 MB descompactados e 15 segundos. | Reduz riscos de travamento por arquivos grandes ou especialmente compactados. |
| CSV e validação | O importador CSV e a validação de estrutura continuam sendo próprios do Vista Aí. | Dados importados são verificados antes de serem gravados. |
| Criptografia | AES-GCM-256; PBKDF2-HMAC-SHA-256 com 600.000 iterações em novos dados; senha mínima de 14 caracteres; migração do banco antigo ao desbloquear. | Dificulta leitura dos dados locais e dos backups sem a senha. |
| Privacidade na interface | QR contém identificador aleatório, não nome ou matrícula. Transferência diária inclui somente os dados relacionados aos registros daquele dia. | Evita inserir nome e matrícula diretamente no crachá e reduz o conteúdo exportado. |
| Câmera e bloqueio | Scanner fecha ao sair da aba ou após inatividade prevista; tela bloqueia por inatividade e limpa os dados visíveis da memória da interface. | Reduz exposição acidental em aparelhos compartilhados. |
| Atualização offline | Cache local contém somente os arquivos e bibliotecas deste site; versão foi alterada para invalidar o cache anterior. | Evita continuar usando a cópia anterior depois que a nova atualização é carregada. |

Os avisos públicos de segurança de SheetJS registram correções para versões anteriores à 0.19.3 e 0.20.2. A versão 0.20.3 usada aqui está acima dos limites corrigidos indicados nos avisos; veja [CVE-2023-30533](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6) e [CVE-2024-22363](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9). A lista de dependências, licenças, fontes e hashes está em [vendor/DEPENDENCIES.md](vendor/DEPENDENCIES.md).

## Limitações que permanecem

- GitHub Pages não permite ao projeto configurar todos os cabeçalhos de segurança HTTP. A política está no HTML e não consegue aplicar diretivas que só funcionam em cabeçalho, como frame-ancestors.
- Os dados ficam neste aparelho e navegador. O app não tem sincronização, controle de acesso entre professores ou recuperação de senha. Apagar os dados do site pode eliminar o banco.
- Quem tiver o aparelho desbloqueado e o app aberto poderá ver os dados. Extensões maliciosas, um aparelho comprometido, uma conta GitHub invadida ou arquivos de publicação adulterados estão fora do alcance da criptografia local.
- Arquivos Excel exportados são legíveis; o app não os criptografa. Backups antigos que já estavam sem senha continuam legíveis como arquivos.
- qrcodejs 1.0.0 é uma biblioteca antiga, mas licenciada sob MIT e incluída localmente. As dependências locais não se atualizam sozinhas; precisam de revisão periódica.
- Ocorrências escolares podem conter dados delicados. Use apenas dados necessários e combine finalidade, acesso, prazo de guarda e descarte com a escola.
- Não há exclusão automática após 18 meses, conta de professor, banco escolar compartilhado nem portal dos responsáveis.

## Verificações realizadas

- Verificação de sintaxe JavaScript em app.js e sw.js.
- Busca estática por scripts externos, eventos inline e pontos de inserção de HTML dinâmico.
- Conferência das referências locais, versão do cache e hashes das bibliotecas.
- Consulta aos avisos públicos das dependências citadas.

**Não foram executados:** testes em aparelhos físicos, teste de invasão independente, auditoria linha a linha dos arquivos minificados, revisão jurídica ou validação institucional. Portanto, esta atualização não permite afirmar que o site é “completamente seguro”. Ela corrige os problemas conhecidos nesta revisão e reduz riscos específicos dentro dos limites do aplicativo local.