# Giums — Media kit 2026

Media kit estático em inglês e português, preservando o visual atual de três páginas A4. Inclui seleção de idioma, impressão e download dos PDFs originais.

## Hospedar no Render

1. No Render, selecione **New → Static Site** e conecte `Biieru/GIUMS.Mediakit`.
2. Selecione a branch `main`.
3. Deixe **Root Directory** vazio.
4. Em **Build Command**, use `echo "Static media kit ready"`.
5. Em **Publish Directory**, use `.`.
6. Crie o site. O Render informará o endereço `onrender.com` disponível.

Alternativamente, use **New → Blueprint** com este repositório: `render.yaml` já define o site estático.

Não há instalação de dependências nem servidor backend.

## Editar

- `index.html`: estrutura e conteúdo em inglês.
- `js/brand.js`: dados, links, e-mail e tradução para português.
- `css/style.css`: aparência, ajuste de escala e impressão.
- `assets/`: imagens.
- `GIUMS-MediaKit-EN.pdf` e `GIUMS-MediaKit-PT.pdf`: PDFs originais para download.

Os PDFs são arquivos independentes: edições no site não atualizam seu conteúdo automaticamente.

## Conferir localmente

Na pasta do projeto, execute `python -m http.server 8956` e abra http://localhost:8956/.
Português: `?lang=pt`; inglês: `?lang=en`; página isolada: `?page=2`.
