/* ============================================================
   GIUMS BRAND KIT — conteúdo editável
   Preencha os campos `null` e rode `bash build-pdf.sh`: as caixas
   tracejadas âmbar viram dado real automaticamente.
   ============================================================ */

const KIT = {
  year: 2026,
  email: 'giumsart@gmail.com',        // e-mail de contato (aparece em Contato e em "Como começar")
  links: {   // text = o que aparece no PDF · url = para onde o clique leva
    site:      { text: 'giums.onrender.com',   url: 'https://giums.onrender.com' },   // troque quando houver domínio próprio
    instagram: { text: '@giums',               url: 'https://www.instagram.com/giums/' },
    bluesky:   { text: '@giums.bsky.social',   url: 'https://bsky.app/profile/giums.bsky.social' },
    youtube:   { text: '@GIUMSyt',             url: 'https://www.youtube.com/@GIUMSyt' },
    twitch:    { text: 'twitch.tv/giums',      url: 'https://www.twitch.tv/giums' },
    patreon:   { text: 'patreon.com/giums',    url: 'https://www.patreon.com/giums' },
    kofi:      { text: 'ko-fi.com/giumsart',   url: 'https://ko-fi.com/giumsart' },
    discord:   { text: 'discord.gg/A27tX44ba8', url: 'https://discord.gg/A27tX44ba8' }
  },
  // resumo da página 1: a audiência total é a soma Instagram + Patreon (16.4K arredondado + 86); o engajamento vem de AUD
  glance: { combinedAudience: '16.5K' }
};

/* Audiência (página 2 e resumo da página 1). Dados informados em out/2026.
   Instagram: seguidores 16.4K · taxa de engajamento média 5.08% · média de 835 curtidas e 31 comentários por post.
   Patreon: 86 seguidores, 17 deles assinantes pagos. Use null para deixar a caixa de preenchimento. */
const AUD = {
  instagram: { followers: '16.4K', engagement: '5.08%', likes: '835', comments: '31', views: '37.9K', viewers: '9,090', net: '+116' },
  patreon:   { followers: '86',    paid: '17' }
};

/* Público (página 2). Valores em %, 0–100. Fonte: Insights da plataforma principal. */
const DEMO = {
  source: 'Instagram Insights',
  asOf: 'Oct 2026',
  age: [   // 13–17 (0.3%) somado a 18–24 (23.3%); 45+ = 45–54 (2.9%) + 55–64 (0.8%) + 65+ (0.5%)
    { l: '13–24', v: 23.6 }, { l: '25–34', v: 55.4 }, { l: '35–44', v: 16.9 }, { l: '45+', v: 4.2 } ],
  gender: [ { l: 'Women', lp: 'Mulheres', v: 61.7 }, { l: 'Men', lp: 'Homens', v: 38.3 } ],
  // EN mostra países (marcas internacionais); PT mostra cidades (mercado nacional)
  countries: [ ['United States', 28.7], ['Brazil', 23.9], ['Italy', 3.6], ['Germany', 3.4], ['France', 3.2] ],
  cities:    [ ['Fortaleza', 3.1], ['São Paulo', 2.7], ['Recife', 2.3], ['João Pessoa', 1.0], ['Rio de Janeiro', 0.6] ]
};

/* Marcas com quem já trabalhou (página 3). `logo` é opcional: 'assets/brands/xp-pen.svg' */
const BRANDS = [
  { name: 'XP-Pen', what: 'Deco 03 review & giveaway · 2021', whatPt: 'Resenha da Deco 03 e sorteio · 2021', logo: null }
];
const SHOW_EMPTY_SLOTS = false;       // true = mostra caixas vazias até completar SLOTS (rascunho); false = só as marcas reais
const SLOTS = 3;

/* Estudo de caso (página 3): a parceria com a XP-Pen. Campos podem ser texto ou { en, pt }; null = caixa a preencher. */
const CASE = {
  links: [   // reel (25/06/2021) e vídeo no canal GIUMS (17/07/2021)
    { label: 'YouTube',   url: 'https://youtu.be/1wZL_RG2Ma4',                text: 'youtu.be/1wZL_RG2Ma4' },
    { label: 'Instagram', url: 'https://www.instagram.com/reels/CQjiu2mBFcf/', text: 'instagram.com/reels/CQjiu2mBFcf' }
  ],
  role: {
    en: 'Product tester, reviewer and content creator. XP-Pen Brasil sent the tablet and she sent them her feedback.',
    pt: 'Testadora de produto, resenhista e criadora de conteúdo. A XP-Pen Brasil enviou o tablet e ela mandou suas considerações à marca.' },
  period: { en: 'June – July 2021', pt: 'Junho – julho de 2021' },
  deliverables: {
    en: 'Instagram reel announcing the review and giveaway; YouTube video (9:53) with the XP-Pen Deco 03 review and a Yone fan art sketch; tablet giveaway with exclusive art; discount code for her audience.',
    pt: 'Reel no Instagram anunciando a resenha e o sorteio; vídeo no YouTube (9:53) com a resenha da XP-Pen Deco 03 e um sketch de fanart da Yone; sorteio do tablet com artes exclusivas; cupom de desconto para a audiência.' },
  results: {
    en: 'YouTube: 3.2K views, 161 likes. Instagram reel: 221 likes, 10 comments (Oct 2026).',
    pt: 'YouTube: 3,2 mil visualizações, 161 curtidas. Reel no Instagram: 221 curtidas, 10 comentários (out/2026).' }
};

const I18N_PT = {
  'run.l': 'Media kit · Marcas e parcerias · 2026',
  'hero.eb': 'Media kit · Marcas e parcerias',
  'hero.role': 'Artista de Personagens &amp; Criaturas',
  'hero.tag': 'Arte de personagens e criaturas de fantasia sombria, e <b>YATHRA</b>, o universo draconiano original dela.',
  'hero.cap': 'Arte de IGNAVRAK! A Respiração do Primeiro Sol!',

  'g.eyebrow': 'Em resumo',
  'g.ig': 'seguidores no Instagram',
  'g.all': 'audiência total · Instagram + Patreon',
  'g.eng': 'engajamento médio',
  'g.brand': 'parceria com marca · resenha e sorteio',
  'fill.hint': 'a preencher',

  'y.eyebrow': 'Um universo original',
  'y.lead': 'Projeto de lore e worldbuilding para RPG de mesa, em construção há três anos: um mundo draconiano de conflitos, relações LGBTQIAPN+ e artefatos fantásticos.',
  'y.sub': 'Apoiadores entram por tiers no Patreon, com itens físicos do universo e sketches originais dos seus próprios OCs.',

  'a.eyebrow': 'Quem é',
  'a.p1': 'Artista visual e ilustradora com foco em design de personagens há mais de 15 anos, tanto nacional quanto internacionalmente, tendo enorme influência da cultura geek, alta fantasia, TCG e principalmente RPG.',
  'a.p2': 'Atualmente vem trabalhando na plataforma Patreon com criação de comunidade e, ao mesmo tempo, desenvolvendo seu projeto autoral <b>YATHRA</b>, um concept artbook / livro cenário de RPG de alta fantasia capa-e-espada, com inclusão da cultura queer (LGBTQIAPN+) e dragões. Muitos dragões!',
  'f.lang': 'Idiomas', 'f.langV': 'Português · Inglês',

  'n.eyebrow': 'Ideal para',
  'n.2t': 'RPG de mesa &amp; jogos', 'n.2': 'Pensada para seu projeto: personagens, criaturas e cenários com consistência visual, prontos para publicar, atendendo a editoras, estúdios de jogos, criadores de TCG e projetos independentes da comunidade.',
  'n.7t': 'Do briefing à arte final', 'n.7': 'Personagens autorais, criaturas e reference sheets completos, com diferentes ângulos, expressões, paleta de cores, detalhes de vestuário e itens.',
  'n.8t': 'Artes para livros e jogos', 'n.8': 'Ilustrações que ajudam a contar a sua história: capas, páginas internas, cartas e artes de ambientação.',
  'n.4t': 'Conteúdo para marcas', 'n.4': 'Conteúdo especializado em produtos e ferramentas para artistas, conectando marcas ao público.',
  'n.5t': 'Reviews &amp; testes de produtos', 'n.5': 'Avaliações de ferramentas e materiais para arte digital e tradicional, incluindo mesas digitalizadoras, tablets, canetas digitais, softwares, tintas, pincéis e outros recursos artísticos, explorando qualidade, desempenho e experiência de uso.',
  'n.6t': 'Conteúdo artístico &amp; demonstrações', 'n.6': 'Produção de ilustrações, tutoriais e demonstrações com produtos digitais e tradicionais, destacando suas aplicações criativas em conteúdos para divulgação.',

  'au.eyebrow': 'Audiência &amp; alcance',
  'au.followers': 'seguidores',
  'au.eng': 'taxa de engajamento média',
  'au.likes': 'média de curtidas por post',
  'au.comments': 'média de comentários por post',
  'au.paid': 'assinantes pagos',
  'au.ratio': '1 a cada 5 seguidores é assinante pago.',
  'au.asof': 'Números de out/2026.',
  'd.eyebrow': 'Perfil do público',
  'd.age': 'Faixa etária', 'd.gender': 'Gênero', 'd.places': 'Principais cidades',
  'au.views': 'visualizações em 30 dias', 'au.viewers': 'contas que viram o conteúdo', 'au.net': 'seguidores líquidos em 30 dias',
  'd.src': 'Fonte',

  'c2.eyebrow': 'Formatos',
  'c2.1': 'Stories (Instagram)',
  'c2.3': 'Reels (Instagram)',
  'c2.4': 'Carrossel (Instagram)',
  'c2.6': 'Twitch ao vivo e VODs',
  'c2.7': 'YouTube (vídeos de longa duração)',

  'co.eyebrow': 'Dentro da comunidade',
  'co.p': 'Apoiadores recebem wallpapers mensais, lore do mundo, sketches, adesivos e prints exclusivos, WIPs, GIFs, packs de brushes e acesso à comunidade no Discord.',

  's3.eyebrow': 'Parcerias',
  's3.title': 'Marcas com quem já trabalhou',
  'cs.eyebrow': 'Caso',
  'cs.title': 'XP-Pen · resenha da Deco 03 e sorteio',
  'cs.role': 'Papel', 'cs.period': 'Período', 'cs.deliv': 'Entregas', 'cs.res': 'Resultados',
  'cs.links': 'Links', 'cs.frame': 'Frame do vídeo no YouTube',

  'w.eyebrow': 'Trabalhe com a Giums',
  'w.formats': 'Formatos de colaboração',
  'w.f1t': 'Campanhas ilustradas', 'w.f1': 'Ilustrações de teste para produtos, tradicionais ou digitais.',
  'w.f2t': 'Resenhas &amp; sorteios', 'w.f2': 'Resenha de produto e sorteio para a comunidade, como na parceria com a XP-Pen.',
  'w.f3t': 'Conteúdo de processo', 'w.f3': 'Sketches, timelapses e making-of para Instagram e YouTube.',
  'w.start': 'Como começar',
  'w.startT': 'Envie um breve com objetivo, entregas, prazo e orçamento para o e-mail abaixo.',
  'u.eyebrow': 'Direitos de uso',
  'u.1': 'Uso comercial e reupload exigem permissão da artista; os termos são combinados por projeto.',
  'u.2': 'Usar a arte — inclusive em OCs parecidos — não é permitido.',
  'c.eyebrow': 'Contato',
  'c.email': 'E-mail', 'c.emailFill': 'e-mail para marcas', 'c.site': 'Portfólio'
};

/* ---------- idioma ---------- */
const params = new URLSearchParams(location.search);
let LANG = params.get('lang') === 'pt' ? 'pt' : 'en';
const pt = () => LANG === 'pt';
const dash = '<span class="fill fill--cell">—</span>';
const cell = v => (v === null || v === undefined || v === '') ? dash : (v === 'n/a' ? '<span class="na">n/a</span>' : v);

function applyI18n() {
  document.documentElement.lang = pt() ? 'pt-BR' : 'en';
  document.querySelectorAll('[data-i18n]').forEach(el => {
    if (el.dataset.en === undefined) el.dataset.en = el.innerHTML;
    el.innerHTML = (pt() && I18N_PT[el.dataset.i18n]) ? I18N_PT[el.dataset.i18n] : el.dataset.en;
  });
  document.querySelectorAll('.langsw button').forEach(b => b.setAttribute('aria-pressed', String(b.dataset.lang === LANG)));
}

/* ---------- renders dirigidos por dados ---------- */
function renderGlance() {
  document.querySelector('[data-glance="all"]').innerHTML = cell(KIT.glance.combinedAudience);
  document.querySelector('[data-glance="eng"]').innerHTML = cell(AUD.instagram.engagement);
  [...document.querySelectorAll('.tile')].forEach(t => {
    const b = t.querySelector('b');
    t.classList.toggle('tile--fill', !!b.querySelector('.fill'));
  });
}

function renderAudience() {
  document.querySelectorAll('[data-aud]').forEach(el => {
    const [p, k] = el.dataset.aud.split('.');
    el.innerHTML = cell(AUD[p] && AUD[p][k]);
  });
}

function bars(items, label) {
  return items.map(i => {
    const has = i.v !== null && i.v !== undefined;
    return `<li><span>${label(i)}</span><i class="track${has ? '' : ' track--empty'}"><u style="width:${has ? i.v : 0}%"></u></i><b>${has ? i.v + '%' : dash}</b></li>`;
  }).join('');
}

function renderDemo() {
  document.getElementById('age').innerHTML = bars(DEMO.age, i => i.l);
  document.getElementById('gender').innerHTML = bars(DEMO.gender, i => pt() ? i.lp : i.l);
  document.getElementById('places').innerHTML = (pt() ? DEMO.cities : DEMO.countries).map((c, n) => `<li><span>${n + 1}</span><em>${c[0]}</em><b>${c[1].toFixed(1)}%</b></li>`).join('');
  document.getElementById('demoSrc').innerHTML = `${DEMO.source}${DEMO.asOf ? ' · ' + (pt() ? DEMO.asOf.replace('Oct','out') : DEMO.asOf) : ''}`;
}

function renderBrands() {
  const total = SHOW_EMPTY_SLOTS ? Math.max(SLOTS, BRANDS.length) : BRANDS.length;
  let html = '';
  for (let n = 0; n < total; n++) {
    const b = BRANDS[n];
    html += b
      ? `<li class="brand">${b.logo ? `<img src="${b.logo}" alt="${b.name}">` : `<b>${b.name}</b>`}<small>${pt() ? b.whatPt : b.what}</small></li>`
      : `<li class="brand brand--empty"><span>+ ${pt() ? 'marca' : 'brand'}</span></li>`;
  }
  document.getElementById('brands').innerHTML = html;
}

function renderCase() {
  document.querySelectorAll('[data-case]').forEach(el => {
    const v = CASE[el.dataset.case];
    el.innerHTML = cell(v && typeof v === 'object' ? v[LANG] : v);
  });
  const l = document.getElementById('caseLinks');
  if (l) l.innerHTML = (CASE.links || []).map(k => `<a href="${k.url}"><b>${k.label}</b> ${k.text}</a>`).join('');
}

function renderLinks() {
  document.querySelectorAll('[data-k]').forEach(el => {
    const l = KIT.links[el.dataset.k];
    el.innerHTML = `<a href="${l.url}">${l.text}</a>`;
  });
  document.querySelectorAll('[data-kit]').forEach(el => { el.textContent = KIT[el.dataset.kit]; });
  if (KIT.email) document.querySelectorAll('.js-email').forEach(el => {
    el.innerHTML = `<a href="mailto:${KIT.email}">${KIT.email}</a>`;
    el.classList.remove('fill');
  });
}

/* brasas estáticas nos painéis escuros (posições fixas: o PDF sai sempre igual) */
function scatterEmbers() {
  document.querySelectorAll('.embers').forEach((box, n) => {
    let s = 7 + n * 13;
    const rnd = () => (s = (s * 16807) % 2147483647) / 2147483647;
    const count = box.classList.contains('embers--band') ? 9 : 40;
    for (let i = 0; i < count; i++) {
      const e = document.createElement('i');
      const gold = rnd() < .25;
      e.style.left = (rnd() * 100).toFixed(1) + '%';
      e.style.top = (rnd() * 100).toFixed(1) + '%';
      const z = (1.5 + rnd() * 3.2).toFixed(1);
      e.style.width = e.style.height = z + 'px';
      e.style.opacity = (.35 + rnd() * .6).toFixed(2);
      e.style.background = gold ? '#ffc23d' : '#ff7a1a';
      e.style.boxShadow = `0 0 ${(z * 3).toFixed(0)}px ${gold ? '#ffc23d' : '#ff5a14'}`;
      box.appendChild(e);
    }
  });
}

function fit() { document.documentElement.style.setProperty('--z', Math.min(1, (innerWidth - 24) / 794)); }

function setLang(l) {
  LANG = l;
  applyI18n(); renderGlance(); renderAudience(); renderDemo(); renderBrands(); renderCase(); renderLinks();
  const download = document.querySelector('.pdf-download');
  download.href = `GIUMS-MediaKit-${LANG.toUpperCase()}.pdf`;
  download.textContent = `${pt() ? 'Baixar PDF' : 'Download PDF'} · ${LANG.toUpperCase()}`;
  document.querySelector('.print-button').textContent = pt() ? 'Imprimir' : 'Print';
  document.title = pt() ? 'Giums — Media kit · Marcas e parcerias 2026' : 'Giums — Media kit · Brands & partnerships 2026';
  const u = new URL(location.href); u.searchParams.set('lang', l); history.replaceState(null, '', u);
}

document.querySelectorAll('.langsw button').forEach(b => b.addEventListener('click', () => setLang(b.dataset.lang)));
addEventListener('resize', fit);
fit(); scatterEmbers(); setLang(LANG);

const solo = params.get('page');
if (solo) {
  document.body.classList.add('solo');
  document.querySelectorAll('.sheet').forEach((el, i) => { el.hidden = (i + 1) !== Number(solo); });
}
document.documentElement.dataset.ready = '1';

document.querySelector('.print-button').addEventListener('click', () => window.print());
