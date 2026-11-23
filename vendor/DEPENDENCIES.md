# Bibliotecas incluídas no Vista Aí e Anota Aí

As bibliotecas abaixo ficam dentro do repositório. O site não as baixa de um CDN a cada acesso. Os hashes permitem conferir se os arquivos locais foram alterados; eles não significam que o código de terceiros foi auditado linha por linha.

| Biblioteca | Versão incluída | Uso | Licença | Origem | SHA-256 |
|---|---:|---|---|---|---|
| html5-qrcode (inclui ZXing-JS) | 2.3.8 | Leitura de QR pela câmera | Apache-2.0 para ambos | [projeto e tag v2.3.8](https://github.com/mebjas/html5-qrcode/tree/v2.3.8) | `660B12437B1D747E3E68B8BE0685C08CB728140110AD213F167B14B66F8B1D8E` |
| qrcodejs | 1.0.0 | Geração e impressão de QR | MIT | [arquivo distribuído](https://cdn.jsdelivr.net/npm/qrcodejs@1.0.0/qrcode.min.js) · [licença do autor](https://github.com/davidshimjs/qrcodejs/blob/master/LICENSE) | `C541EF06327885A8415BCA8DF6071E14189B4855336DEF4F36DB54BDE8484F36` |
| SheetJS Community Edition | 0.20.3 | Leitura e criação de arquivos Excel | Apache-2.0 | [arquivo oficial](https://cdn.sheetjs.com/xlsx-0.20.3/package/dist/xlsx.full.min.js) · [projeto](https://github.com/SheetJS/sheetjs) | `CC015130AA8521E7F088F88898EBA949CCDCBFB38DF0BD129B44B7273C3A6F41` |

Os arquivos de licença acompanham os códigos nesta pasta. O importador CSV, a validação de colunas e os limites de segurança são código do aplicativo. O leitor e o gerador de QR continuam usando bibliotecas abertas para manter a leitura e a impressão compatíveis com os navegadores móveis.

## Atualização e cuidado

Bibliotecas locais não se atualizam sozinhas. Antes de atualizar uma dependência, confira a versão e os avisos de segurança do projeto original, baixe o arquivo da origem oficial, atualize a licença e este SHA-256, avalie alterações de funcionamento e aguarde a análise do GitHub. Não substitua um arquivo por um download de CDN sem verificar sua origem e versão.
O leitor html5-qrcode inclui o decodificador ZXing-JS, dos autores do ZXing, também sob Apache-2.0. Consulte <code>NOTICE-zxing-js.txt</code> e o projeto original: https://github.com/zxing-js/library.
