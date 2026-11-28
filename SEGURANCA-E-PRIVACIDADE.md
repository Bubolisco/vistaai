# Segurança e privacidade do Educa Aí

O Educa Aí está em desenvolvimento. O modo disponível nesta versão é **Uso individual**: não há conta on-line, banco compartilhado ou sincronização dos dados escolares com um servidor.

## Como a proteção local funciona

- O conteúdo do cofre é criptografado com AES-GCM de 256 bits usando uma chave aleatória criada no aparelho.
- A senha, com pelo menos 14 caracteres, protege essa chave. Ela é processada com PBKDF2-HMAC-SHA-256 e 600.000 iterações; a senha não é enviada para um servidor.
- Uma chave de recuperação aleatória também protege a mesma chave do cofre. Ela permite abrir os dados e definir uma senha nova. O aplicativo a mostra durante a criação ou migração do cofre e não guarda seu texto sem criptografia. Se o usuário baixar o arquivo da chave, esse arquivo é texto simples e precisa ser guardado com cuidado.
- Os backups completos usam a mesma proteção. Podem ser abertos com a senha ou com a chave de recuperação correspondente. Guarde ambos separadamente do arquivo.
- Bancos antigos da versão anterior continuam compatíveis. Ao abri-los com a senha, o aplicativo os migra para o formato atual e apresenta uma chave de recuperação antes de gravar a atualização.

Se a senha e a chave de recuperação forem perdidas, não há como recuperar os dados criptografados. O idealizador também não consegue redefinir a senha remotamente.

## Passkey e biometria

O usuário pode tentar ativar uma passkey em **Backup**. O Educa Aí usa a API WebAuthn e a extensão PRF para proteger uma forma alternativa de abrir a chave do cofre. O próprio sistema operacional solicita Face ID, digital, PIN ou código do aparelho; o site não recebe a biometria.

O suporte à extensão PRF varia por navegador, aparelho e gerenciador de passkeys. Se não for oferecido, o recurso informa que não pode ser ativado e a senha continua funcionando. A passkey é um atalho opcional, não substitui a senha ou a chave de recuperação. Conforme as configurações do sistema operacional ou gerenciador de credenciais, a passkey pode sincronizar entre aparelhos; isso não sincroniza os dados do Educa Aí. A credencial fica vinculada ao domínio do site.

O modo local não tem autenticação em duas etapas de uma conta remota: não existe servidor de login ou segundo canal de recuperação. A proteção principal é a criptografia do cofre, a senha, a chave de recuperação e a segurança do aparelho.

## Dados e QR Codes

O QR Code de cada aluno contém um identificador aleatório, sem nome ou matrícula. Dentro do cofre, os registros ficam associados às turmas e aos alunos cadastrados pelo professor. Planilhas exportadas para Excel são legíveis e não são criptografadas pelo aplicativo.

Vistos, chamadas, saídas/retornos e ocorrências podem conter informações escolares pessoais. Registre apenas o necessário, proteja o aparelho e os arquivos exportados e siga as orientações da escola sobre acesso, finalidade, retenção, correção e descarte.

## Bibliotecas e medidas técnicas

- Leitor de QR, gerador de QR e biblioteca Excel são incluídos localmente com licenças e versões listadas em [vendor/DEPENDENCIES.md](vendor/DEPENDENCIES.md). O site não carrega essas bibliotecas de CDNs.
- O importador CSV e as validações de dados são próprios do aplicativo. Arquivos Excel são processados em worker separado, com limites de tamanho, linhas e tempo.
- A página define uma política de segurança de conteúdo que restringe scripts e conexões à própria origem e bloqueia scripts embutidos.
- O código não integra um serviço DNS externo nem faz consultas a resolvedores próprios ou DNS-over-HTTPS. DNS ainda é necessário para localizar o domínio: a resolução depende da rede/aparelho do visitante e dos servidores configurados para o domínio. Links externos do Mercado Pago só são acessados após uma ação do usuário.
- O aplicativo bloqueia a tela após inatividade e encerra os leitores de câmera quando deixa de usá-los.

As versões 0.18.5 do pacote npm `xlsx` e o CDN anterior não são usados. Avisos públicos que motivaram a atualização da biblioteca SheetJS estão em [GHSA-4r6h-8v6p-xvw6](https://github.com/advisories/GHSA-4r6h-8v6p-xvw6) e [GHSA-5pgg-2g8v-p4x9](https://github.com/advisories/GHSA-5pgg-2g8v-p4x9). As versões, licenças e hashes atuais estão em `vendor/DEPENDENCIES.md`.

## Limites e cuidados

- Os dados ficam ligados ao navegador e aparelho. Apagar os dados do site, perder ou danificar o aparelho, ou usar navegação privada pode eliminar o banco. Faça backups regulares.
- Enquanto o app está desbloqueado, alguém com acesso ao aparelho pode ver os dados. Use a tela de bloqueio do aparelho e bloqueie o aplicativo ao terminar.
- A criptografia não protege contra um aparelho comprometido, código do site adulterado, extensão maliciosa ou acesso ao aparelho já desbloqueado.
- O código do repositório é público. Isso permite que qualquer pessoa leia e copie o código, mas apenas quem tiver acesso de escrita ao repositório e à conta que publica pode alterar o site oficial. Proteja a conta GitHub com autenticação em duas etapas e mantenha poucos colaboradores.
- GitHub Pages não permite configurar todos os cabeçalhos HTTP. A política definida no HTML não equivale a todos os cabeçalhos de segurança do servidor.
- Esta é uma revisão estática do código e das dependências conhecidas. Não houve auditoria independente, certificação ou teste de invasão. Nenhum sistema pode ser prometido como completamente seguro.

O Uso escolar compartilhado, o acesso de responsáveis e a exclusão automática de dados por prazo ainda não estão implementados. Devem ser avaliados e autorizados pela escola antes de armazenar dados reais em nuvem.
