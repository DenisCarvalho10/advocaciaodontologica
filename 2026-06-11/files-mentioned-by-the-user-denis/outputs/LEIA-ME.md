# Advocacia Odontológica — Denis Carvalho

Site institucional e de captação de clientes para **www.advocaciaodontologica.com.br**.
Feito em HTML, CSS e JavaScript puro (sem dependências) — rápido, leve e fácil de hospedar.

---

## 📞 Dados de contato usados no site

- **WhatsApp / Telefone:** (62) 99258-6422
- **E-mail:** contato@deniscarvalhoadvocacia.com.br
- **OAB:** GO 53.904
- **Domínio:** www.advocaciaodontologica.com.br

Se algum desses dados mudar, peça para atualizar — eles aparecem em vários lugares.

---

## 🗂️ O que tem em cada arquivo

| Arquivo | O que é |
|---|---|
| `index.html` | Página principal (hero, documentos, atuação, sobre, e-book, FAQ, contato) |
| `blog.html` | Lista de artigos do blog |
| `artigo-*.html` | Os artigos do blog (um arquivo por artigo) |
| `privacidade.html` | Política de Privacidade (LGPD) |
| `assets/css/styles.css` | Toda a aparência do site |
| `assets/js/main.js` | Funcionamento (menu, e-book, botões flutuantes, cookies) |
| `assets/img/` | Imagens (logo, foto, fotos de clínica) |
| `assets/ebooks/` | O e-book em PDF e o HTML que o gerou |

---

## ✨ Recursos já incluídos

- ✅ **Botões flutuantes de WhatsApp** (um normal e um para casos urgentes) + botão "voltar ao topo"
- ✅ **Sistema de e-book**: formulário lateral que entrega o PDF na hora e registra o lead (igual ao site institucional)
- ✅ **Blog ativo** pronto para você alimentar com notícias
- ✅ **Links para os outros sites**: deniscarvalhoadvocacia.com.br e coberturaemsaude.com.br
- ✅ **Banner de cookies** (LGPD) e Política de Privacidade
- ✅ **SEO**: títulos, descrições, Open Graph e dados estruturados (Schema.org)
- ✅ **100% responsivo** (celular, tablet e computador)

---

## 📥 Os leads do e-book (onde chegam)

Quando alguém preenche o formulário do e-book, os dados (nome, e-mail, WhatsApp) são
enviados pelo serviço **Web3Forms** para o e-mail cadastrado naquela conta — e o e-book é
baixado na hora pelo visitante.

- A chave usada está em `assets/js/main.js` na linha `LEAD_FORM_ACCESS_KEY`.
- Para trocar o e-mail que recebe os leads, crie uma chave nova em https://web3forms.com
  e substitua o valor dessa linha.

---

## ✍️ Como publicar um novo artigo no blog (passo a passo)

1. **Copie** um artigo existente, por exemplo `artigo-tcle-odontologia.html`, e salve com um
   nome novo, por exemplo `artigo-novo-assunto.html` (use só letras minúsculas e hífens).
2. **Abra o arquivo novo** e troque:
   - o `<title>` e a `<meta name="description">` (topo do arquivo);
   - o título dentro de `<h1>`;
   - a data e o tempo de leitura em `article__meta`;
   - o conteúdo (parágrafos `<p>`, subtítulos `<h2>`, listas `<ul>`).
3. **Adicione o card na lista do blog**: abra `blog.html`, copie um bloco
   `<article class="post"> ... </article>` e cole no topo da lista `<div class="posts">`.
   Troque o link (`href`), a categoria (`<span class="cat">`), a data, o título e o resumo.
   - As cores da capa do card são `g1` (azul), `g2` (azul claro) e `g3` (dourado) — use a que preferir.
4. (Opcional) Atualize também os 3 cards de "Blog" na `index.html` para destacar os mais recentes.
5. Salve e publique (veja abaixo).

> Dica: não precisa mexer no CSS nem no JavaScript para escrever artigos. Só copiar e editar texto.

---

## 🚀 Como colocar o site no ar (publicação)

O caminho recomendado (mesmo dos outros sites) é **GitHub + Vercel**, com o domínio na **Locaweb**.

### 1. Subir para o GitHub
- Crie um repositório novo na sua conta GitHub (ex.: `advocacia-odontologica`).
- Envie todos os arquivos desta pasta para esse repositório.

### 2. Conectar na Vercel
- Em https://vercel.com, clique em **Add New → Project** e importe o repositório.
- Não precisa configurar nada (é site estático). Clique em **Deploy**.
- A cada novo envio ao GitHub, a Vercel republica sozinha.

### 3. Apontar o domínio (Locaweb → Vercel)
- Na Vercel, em **Settings → Domains**, adicione `advocaciaodontologica.com.br` e `www.advocaciaodontologica.com.br`.
- No painel da **Locaweb** (zona DNS do domínio), configure:
  - Registro **A** do domínio raiz → `76.76.21.21`
  - Registro **CNAME** do `www` → `cname.vercel-dns.com`
- A propagação leva de alguns minutos a algumas horas.

> O domínio hoje está em um site antigo. Ao trocar o DNS na Locaweb para a Vercel, o novo site passa a responder.

---

## 🔧 Pendências (quando você tiver)

- [ ] Inserir o ID do **Google Analytics 4** (espaço reservado no topo do `index.html`).
- [ ] Inserir o **Meta Pixel** (Facebook/Instagram), se for anunciar.
- [ ] Confirmar/atualizar o e-mail que recebe os leads (Web3Forms).
- [ ] O site é apresentado como atendimento 100% online para todo o Brasil (sem cidade específica). Se quiser exibir um endereço, é só pedir.

---

## 👀 Ver o site no seu computador (sem internet)

Basta abrir o arquivo `index.html` com um duplo clique no navegador.
Tudo funciona localmente, inclusive os botões e o e-book.
