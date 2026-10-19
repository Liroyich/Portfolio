// ─────────────────────────────────────────────────────────────
// Всё редактируемое содержимое сайта лежит здесь.
// Меняй этот файл — не трогая компоненты.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: "Nikita",
  title: "Nikita Front-End Studio",
  description:
    "Independent front-end developer and designer. Animated landing pages and corporate sites, built and deployed.",
  url: "https://example.com", // ← поставь свой домен, когда появится
  email: "vertianov169@gmail.com",
  availability: "Available · Nov 2026",
  location: "Moscow, UTC+3",
};

export const hero = {
  eyebrow: [
    "Front-end developer & designer",
    "Moscow, UTC+3",
    "Remote worldwide",
  ],
  headline: ["Websites that", "move with", "purpose."],
  lede: "From a one-page launch to a forty-page company site: I handle the design, the build and the motion, then deploy it and keep it running. A background in systems administration means the site is not handed over as a folder of files and a shrug.",
  meta: [
    { label: "Scope", value: "1–40 pages" },
    { label: "Stack", value: "Astro · GSAP · WebGL" },
    { label: "Delivery", value: "2–5 weeks" },
    { label: "Languages", value: "EN · RU" },
  ],
};

export const ticker = [
  "Landing pages",
  "Multi-page company sites",
  "Scroll choreography",
  "Art direction",
  "Content architecture",
  "WebGL heroes",
  "Core Web Vitals",
  "Deployment & uptime",
];

// ─────────────────────────────────────────────────────────────
// КЕЙСЫ
// url: "" → карточка не кликабельна (никаких битых ссылок).
//            Впиши адрес — карточка сама станет ссылкой.
// shot: "" → рисуется схематичный вайрфрейм (schematic).
//            Положи скриншот в /public/work/ и укажи "/work/файл.jpg".
// ─────────────────────────────────────────────────────────────
export const cases = [
  {
    no: "01",
    year: "2026",
    title: "PSK Stroymonolit",
    // ⚠ на psksm.ru нет SSL: https отдаёт 302 на http, браузер пишет "Не защищено".
    //   Поставь Let's Encrypt и поменяй на https:// — до тех пор ссылка вредит больше, чем помогает.
    url: "http://psksm.ru/",
    shot: "",
    schematic: "corporate",
    status: "Live",
    desc: "Nineteen-page corporate site for a general contractor working on federal projects. Built from the client's own project archive and photography — every reference, certificate and completed site on the page is real, which is rarer in this industry than it should be.",
    tags: ["19 pages", "Image pipeline", "Responsive to 2560px", "Content architecture"],
  },
  {
    no: "02",
    year: "2025",
    title: "Veles-Stroy",
    url: "https://velesst.ru/",
    shot: "",
    schematic: "variants",
    status: "Live",
    desc: "Corporate site for a general contractor whose work runs from housing and commercial property to medical infrastructure and the restoration of listed buildings — four service lines that each needed their own section rather than a shared template. Delivered as two complete art directions, both built rather than mocked up, so the client chose an identity instead of approving a layout.",
    tags: ["Two directions", "Identity", "Content architecture", "Type system"],
  },
  {
    no: "03",
    year: "2026",
    title: "ESTIFY",
    url: "https://estify.ru",
    shot: "",
    schematic: "app",
    status: "Live",
    desc: "Not a marketing site — a treasury and finance application running in production for a real company. Included here because it answers the question clients actually ask: can this person build the thing behind the website, and keep it online.",
    tags: ["Web app", "Auth & roles", "Server ops", "Shipped"],
  },
  {
    no: "04",
    year: "2026",
    title: "Monolittrust",
    // ⚠ На сайте сейчас висит плашка "сайт в разработке" и счётчики показывают "0+".
    //   Стоит убрать до того, как по ссылке пойдут заказчики.
    //   Версия с globe-героем живёт отдельным файлом: её лучше задеплоить своим URL
    //   и завести отдельным кейсом — это самая сильная анимационная работа.
    url: "https://monolittrast.ru/",
    shot: "",
    schematic: "hero-globe",
    status: "Live",
    desc: "Site for a construction materials wholesaler that also builds turnkey. Two directions were built: the one in production, and an editorial alternative whose hero is a rotating dot-globe tracing delivery routes under the cursor, followed by a pinned scroll-scrubbed sequence that walks a shipment from dispatch to site.",
    tags: ["GSAP ScrollTrigger", "Canvas", "Scroll scrub", "Art direction"],
  },
];

export const capabilities = [
  {
    no: "01",
    title: "Landing pages",
    text: "One-page sites for a product, a launch or a campaign. Copy structure, art direction, build and launch.",
  },
  {
    no: "02",
    title: "Multi-page sites",
    text: "Company and product sites with a real content architecture: service sections, project catalogues, case libraries, document archives. Built so you can keep adding to them after launch.",
  },
  {
    no: "03",
    title: "Motion & scroll",
    text: "Scroll choreography, pinned sequences, cursor-reactive heroes, page transitions. Motion that reads as intent, not decoration.",
  },
  {
    no: "04",
    title: "Launch & upkeep",
    text: "Domain, hosting, SSL, analytics, backups. Monthly retainers for sites that need to keep changing.",
  },
];

export const process = [
  {
    no: "01",
    title: "Brief",
    text: "A call, your existing material, and a written scope with a fixed price. No estimate games.",
    duration: "2 days",
  },
  {
    no: "02",
    title: "Direction",
    text: "One designed screen that establishes type, palette and the motion idea. We settle the look here, before the rest exists.",
    duration: "4 days",
  },
  {
    no: "03",
    title: "Build",
    text: "Full build on a staging URL you can open any time. Two rounds of revisions are part of the price.",
    duration: "8–12 days",
  },
  {
    no: "04",
    title: "Launch",
    text: "Domain, hosting, analytics, performance pass. You get the repository and a handover note that a non-developer can follow.",
    duration: "2 days",
  },
];

export const about = {
  paragraphs: [
    "I came to the web from the other side of the building. Before this I ran servers, networks and internal infrastructure for a construction group in Moscow — Windows Server, Active Directory, the helpdesk, the things that break at night.",
    "That turned out to be useful. Most animated sites are beautiful and fragile: they look right in the designer's browser and fall over on a mid-range Android, or they ship with a Lighthouse score nobody checked. I build the animation and I also own what happens after launch.",
    "A one-page launch and a forty-page company site need different things from a developer. The landing page lives or dies on its first screen; the big site lives or dies on its structure, on whether anyone can still find a document in it two years later. I've built both.",
    "I work with founders, agencies and small teams who need one site done properly rather than five done quickly.",
  ],
  facts: [
    { label: "Based", value: "Moscow, UTC+3" },
    { label: "Overlap", value: "EU & US East" },
    { label: "Engagement", value: "Project / retainer" },
    { label: "Tools", value: "Astro, GSAP, Figma" },
    { label: "Also", value: "Linux, Docker, CI" },
  ],
};

// url: "" → ссылка не выводится вообще. Заполняй по мере появления профилей.
export const elsewhere = [
  { label: "Dribbble", url: "" },
  { label: "Behance", url: "" },
  { label: "GitHub", url: "" },
  { label: "Telegram", url: "" },
];

export const titleBlock = {
  sheet: "A-00 / 01",
  drawnBy: "Nikita",
  revision: "R.03",
  scale: "1 : 1",
};
