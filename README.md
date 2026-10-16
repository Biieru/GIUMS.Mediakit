# GIUMS | Digital Media Kit

**Media kit digital bilíngue desenvolvido para apresentação profissional, parcerias comerciais e colaboração com marcas.**

Projeto front-end desenvolvido com HTML, CSS e JavaScript, combinando identidade visual personalizada, internacionalização e apresentação de informações comerciais.

## Sobre o projeto

O GIUMS Media Kit é uma apresentação digital desenvolvida para a artista e ilustradora GIUMS.

O objetivo é reunir informações relevantes para empresas, editoras e potenciais parceiros comerciais em uma interface organizada, acessível pelo navegador e disponível em português e inglês.

A aplicação preserva uma composição visual de três páginas A4, adaptada para visualização digital, impressão e distribuição em PDF.

## Tecnologias

| Tecnologia | Aplicação |
|---|---|
| HTML5 | Estrutura semântica |
| CSS3 | Layout, identidade visual e impressão |
| JavaScript | Internacionalização e interatividade |
| JSON e objetos JavaScript | Organização de conteúdos e informações |
| PDF | Distribuição do material comercial |

O projeto não depende de frameworks ou ferramentas de compilação.

## Funcionalidades

### Internacionalização

- Conteúdo em português e inglês.
- Alternância de idioma pela interface.
- Atualização dos textos conforme o idioma selecionado.
- Acesso aos PDFs correspondentes.

### Apresentação comercial

- Perfil profissional da artista.
- Apresentação de especialidades e serviços.
- Informações de audiência e engajamento.
- Histórico de parcerias e oportunidades comerciais.
- Conteúdo direcionado a marcas e empresas.

### Exportação e impressão

- Layout organizado em três páginas A4.
- Estilos voltados à impressão.
- Botão de impressão pelo navegador.
- Download dos documentos PDF em português e inglês.

## Estrutura

```text
GIUMS.Mediakit/
├── assets/
├── css/
├── js/
├── index.html
├── GIUMS-MediaKit-PT.pdf
├── GIUMS-MediaKit-EN.pdf
├── render.yaml
├── README.md
└── .nojekyll
```

## Como executar

Clone o repositório:

```bash
git clone https://github.com/Biieru/GIUMS.Mediakit.git
cd GIUMS.Mediakit
```

Inicie um servidor HTTP local:

```bash
python -m http.server 8000
```

Acesse `http://localhost:8000`.

O projeto é estático e não exige instalação de dependências.

## Design e experiência do usuário

A interface foi projetada para conciliar identidade artística e comunicação profissional.

O layout utiliza elementos visuais associados à fantasia, ilustração e criação de personagens, preservando a organização necessária à leitura de informações comerciais.

A experiência contempla tanto o consumo pelo navegador quanto a distribuição em formato impresso.

## Conceitos aplicados

- Desenvolvimento front-end.
- Internacionalização de interfaces.
- Manipulação dinâmica de conteúdo.
- CSS para impressão.
- Design responsivo.
- Arquitetura de informação.
- Interface orientada a objetivos comerciais.
- Apresentação de indicadores e informações estruturadas.

## Melhorias futuras

- Automatização da atualização dos PDFs.
- Validação automatizada dos idiomas.
- Aprimoramento da acessibilidade.
- Testes de impressão entre navegadores.
- Centralização dos dados comerciais em uma fonte única.
- Automatização da atualização de métricas de audiência.

## Créditos

**Desenvolvimento web:** Gabriel Coelho de Araújo.

**Artista e titular do material apresentado:** GIUMS.

As ilustrações, imagens e demais materiais artísticos permanecem sujeitos aos direitos de seus respectivos titulares.

A disponibilização do código não implica autorização para reutilização comercial das obras artísticas.

## Desenvolvedor

**Gabriel Coelho de Araújo**

[GitHub](https://github.com/Biieru)

**HTML · CSS · JavaScript · i18n · Print CSS · UI/UX**

## PowerPoint para download

O botão de PowerPoint baixa `GIUMS-MediaKit-EN.pptx` ou `GIUMS-MediaKit-PT.pptx`, conforme o idioma selecionado.

Cada apresentação tem seis lâminas, nesta ordem:

1. Capa
2. Em resumo, apresentação da artista e os dois blocos de colaboração
3. YATHRA
4. Audiência, perfil do público e formatos
5. Marcas, caso XP-Pen e como colaborar
6. Contato e direitos de uso

As lâminas reproduzem os trechos do site como imagens para preservar layout, tipografia, artes, gráficos e divisórias. O texto e os gráficos não são editáveis individualmente. Os links continuam clicáveis. As proporções originais são preservadas, com margens nos slides horizontais quando necessário.

Os PowerPoints e PDFs são arquivos independentes: ao atualizar o conteúdo do site, atualize também os arquivos de download.
