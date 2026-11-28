# Bibliotecas incluídas no Educa Aí

As bibliotecas desta lista acompanham o repositório e são carregadas de arquivos locais. O navegador não precisa buscar esses códigos em um CDN ao abrir o aplicativo. Os hashes ajudam a verificar se os arquivos distribuídos mudaram; não representam uma auditoria linha por linha.

| Projeto incluído | Versão | Uso | Licença | Projeto original e licença | Aviso incluído | SHA-256 |
|---|---:|---|---|---|---|---|
| html5-qrcode | 2.3.8 | Leitura de QR pela câmera | Apache-2.0 | [Código v2.3.8](https://github.com/mebjas/html5-qrcode/tree/v2.3.8) · [licença original](https://github.com/mebjas/html5-qrcode/blob/v2.3.8/LICENSE) | [LICENSE-html5-qrcode.txt](LICENSE-html5-qrcode.txt) | `660B12437B1D747E3E68B8BE0685C08CB728140110AD213F167B14B66F8B1D8E` |
| ZXing-JS, incorporado ao html5-qrcode | Incluído na distribuição acima | Decodificação de QR usada pelo leitor | Apache-2.0 | [Projeto original](https://github.com/zxing-js/library) · [licença original](https://github.com/zxing-js/library/blob/master/LICENSE) | [NOTICE-zxing-js.txt](NOTICE-zxing-js.txt) | Incluído no hash do html5-qrcode |
| qrcodejs | 1.0.0 | Geração e impressão de QR | MIT | [Projeto original](https://github.com/davidshimjs/qrcodejs) · [licença original](https://github.com/davidshimjs/qrcodejs/blob/master/LICENSE) | [LICENSE-qrcodejs.txt](LICENSE-qrcodejs.txt) | `C541EF06327885A8415BCA8DF6071E14189B4855336DEF4F36DB54BDE8484F36` |
| SheetJS Community Edition | 0.20.3 | Leitura e criação de planilhas Excel | Apache-2.0 | [Projeto original](https://github.com/SheetJS/sheetjs) · [licença original](https://github.com/SheetJS/sheetjs/blob/master/LICENSE) | [LICENSE-sheetjs.txt](LICENSE-sheetjs.txt) | `CC015130AA8521E7F088F88898EBA949CCDCBFB38DF0BD129B44B7273C3A6F41` |

O importador CSV, a validação das colunas e os limites para arquivos são código próprio do Educa Aí. A biblioteca SheetJS é usada para os arquivos Excel. As bibliotecas de QR permanecem locais para oferecer leitura e impressão nos navegadores móveis.

## Rede e DNS

O código do aplicativo não integra um provedor de DNS, não contém resolvedor DNS próprio e não envia consultas a um serviço DNS-over-HTTPS. A política de segurança do site limita conexões do aplicativo à própria origem (`connect-src 'self'`). Os links externos para o Mercado Pago só são abertos quando a pessoa escolhe uma opção de apoio.

O DNS continua sendo necessário para qualquer navegador encontrar o domínio do site. Essa resolução é feita pela configuração de rede do aparelho/navegador e pelos servidores DNS configurados para o domínio; não é uma biblioteca ou integração incluída no Educa Aí.

## Atualização e cuidado com licenças

As bibliotecas locais não se atualizam sozinhas. Antes de atualizar uma dependência, confira a versão e os avisos de segurança no projeto original, obtenha a distribuição de uma fonte oficial, atualize o aviso de licença e o hash, avalie o funcionamento e observe os resultados das análises do GitHub. Não troque o arquivo local por uma referência remota de CDN.

As licenças deste inventário se aplicam às bibliotecas de terceiros identificadas, não à licença do restante do Educa Aí. O código próprio do aplicativo é distribuído sob a licença MIT indicada na raiz do repositório.

## Logos e imagens do projeto

Os arquivos de logo e o mascote usado nos ícones foram fornecidos pelo idealizador do Educa Aí. Não foi identificada uma licença de terceiros para essas imagens; a licença do código não deve ser interpretada como licença separada para reutilizar a arte ou a marca.
