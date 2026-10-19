# Nikita — Front-End Portfolio

Статический сайт-портфолио на Astro + GSAP + Lenis.
Визуальная концепция: инженерный чертёжный лист — сетка-подложка, ссылки листов (A-01…A-05), размерный индикатор в правом поле и штамп в подвале.

---

## Запуск

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # собирает в ./dist
npm run preview  # посмотреть собранную версию
```

Node 18+ (проверено на 22).

---

## Где что менять

**Весь текст, кейсы, ссылки и почта лежат в одном файле:**

```
src/data/site.js
```

Компоненты трогать не нужно — они просто рендерят то, что там лежит.

### Кейсы (`cases`)

| поле | что делает |
|---|---|
| `url: ""` | карточка **не** кликабельна — битых ссылок на сайте не будет. Впиши адрес → карточка сама станет ссылкой и появится стрелка ↗ |
| `shot: ""` | рисуется схематичный вайрфрейм. Положи скриншот в `public/work/` и укажи `"/work/имя.jpg"` → подставится картинка |
| `schematic` | какой вайрфрейм рисовать: `hero-globe`, `corporate`, `app`, `variants` |

### Соцсети (`elsewhere`)

Пустой `url` → ссылка просто не выводится. Заполняй по мере появления профилей.

### Домен

Поменяй в двух местах:
- `src/data/site.js` → `site.url`
- `astro.config.mjs` → `site`

---

## Что ещё не заполнено

- [ ] Ссылки на Monolittrust, PSK Stroymonolit, Veles-Stroy (`cases[].url`)
- [ ] Скриншоты проектов в `public/work/` (`cases[].shot`)
- [ ] Профили Dribbble / Behance / GitHub / Telegram (`elsewhere`)
- [ ] OG-картинка для превью в мессенджерах — положить `public/og.jpg` 1200×630 и добавить мета-тег в `src/layouts/Base.astro`
- [ ] Реальные цифры по проектам, если есть (трафик, заявки, скорость)

---

## Деплой

Сайт статический — папка `dist/` после `npm run build` кладётся куда угодно.

### Вариант 1 — Cloudflare Pages (рекомендую)

Бесплатно, быстрая раздача по миру, не капризничает с доступом из РФ.

1. Залей проект в репозиторий на GitHub.
2. Cloudflare Dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
3. Настройки сборки:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Получишь адрес вида `имя.pages.dev`.
5. Свой домен: **Custom domains** → добавить → прописать CNAME у регистратора. SSL выпускается сам.

Каждый `git push` в `main` пересобирает сайт автоматически.

### Вариант 2 — Vercel

Тот же сценарий: импорт репозитория с GitHub, Astro определяется автоматически, домен `имя.vercel.app`.
Бывает, что панель Vercel недоступна из РФ без VPN — сам задеплоенный сайт при этом работает нормально.

### Вариант 3 — свой сервер (reg.ru), nginx

```bash
npm run build
scp -r dist/* user@сервер:/var/www/portfolio/
```

```nginx
server {
    listen 443 ssl http2;
    server_name твой-домен.ru;

    root /var/www/portfolio;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }

    # статику кешируем надолго — имена файлов хешированные
    location /_astro/ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    gzip on;
    gzip_types text/css application/javascript image/svg+xml;
}
```

SSL — `certbot --nginx -d твой-домен.ru`.

Минус варианта: сервер в РФ, для зарубежных клиентов отдача медленнее.

---

## Домен

Для международных клиентов лучше `.com` / `.dev` / `.studio`, а не `.ru`.
Регистрировать можно у Namecheap или Porkbun.

После покупки домена заведи на нём почту (Zoho Mail даёт бесплатный ящик на свой домен)
и поменяй `site.email` — адрес вида `hello@твойдомен.com` в портфолио читается заметно серьёзнее,
чем gmail.

---

## Стек

- [Astro](https://astro.build) — статическая сборка, ноль JS по умолчанию
- [GSAP](https://gsap.com) + ScrollTrigger — анимации и скролл-хореография
- [Lenis](https://lenis.darkroom.engineering) — плавный скролл
- Шрифты: Archivo (заголовки), IBM Plex Sans (текст), IBM Plex Mono (подписи и цифры)

Анимации уважают `prefers-reduced-motion` и не запускаются у тех, кто отключил движение в системе.
Первый экран отрисован полностью и без скролла — анимируется только то, что изначально ниже сгиба.
