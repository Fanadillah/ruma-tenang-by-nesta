# 04 — Stack RUMA TENANG by NESTA

## Keputusan: Astro 4 + Tailwind CSS + Framer Motion (opsional)

### Mengapa Astro (bukan Bootstrap vanilla lama `docs/system.md:9`)?
| Aspek | Kilap Bersih Lama | RUMA TENANG Baru |
|---|---|---|
| Build | Buka file HTML langsung, CDN Bootstrap 5.3 | `npm run dev` + build statis `dist/` deploy Vercel |
| Styling | `css/style.css` 1248 baris custom + Bootstrap | Tailwind utility + `src/styles/global.css` token warm |
| JS | `js/main.js` vanilla (counter, reveal, lightbox) | Astro island + vanilla JS untuk slider/kalkulator, Framer Motion untuk stagger reveal |
| SEO | Manual meta per file | Astro `<head>` + OpenGraph + JSON-LD terpusat |
| Konten | Edit HTML langsung | Konten di `src/content/` atau props Astro, aman dari rusak layout |
| Performa | ~85 Lighthouse (Bootstrap berat) | 95-100 (0 JS default, hanya island yang butuh) |

### Alternatif yang dipertimbangkan
- **Next.js 14 + Tailwind + shadcn**: dipilih jika butuh dashboard booking dinamis. Ditolak karena overkill untuk landing statis.
- **Vanilla + Tailwind CDN**: dipilih jika client gaptek Node. Ditolak karena animasi storytelling terbatas.

## Struktur Folder Baru
```
cleaningService-v2/
├── astro.config.mjs
├── tailwind.config.js
├── package.json
├── public/
│   ├── favicon.png (ikon sarang)
│   └── images-v2/ (hero human, before-after, tim, video poster)
├── src/
│   ├── layouts/
│   │   └── Base.astro (head, font Fraunces+DM Sans, JSON-LD)
│   ├── components/
│   │   ├── Navbar.astro
│   │   ├── Hero.astro
│   │   ├── SocialProof.astro
│   │   ├── Bento.astro
│   │   ├── BeforeAfter.astro (slider drag)
│   │   ├── Tim.astro
│   │   ├── Paket.astro
│   │   ├── CaraKerja.astro
│   │   ├── Kalkulator.astro (slider luas)
│   │   ├── VideoWall.astro
│   │   ├── Testi.astro
│   │   ├── Faq.astro
│   │   ├── FinalCta.astro
│   │   └── WaFloat.astro
│   ├── pages/
│   │   └── index.astro (12 section, import komponen)
│   └── styles/
│       └── global.css (token warm)
└── docs/ (00-06)
```

## Konfig Penting

### astro.config.mjs
```js
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
export default defineConfig({ integrations: [tailwind()], output: 'static' });
```

### tailwind.config.js
```js
export default {
  content: ['./src/**/*.{astro,html,js}'],
  theme: {
    extend: {
      colors: { warm: '#FFFBF5', charcoal: '#1A1A1E', terracotta: '#C45A3C', sand: '#E8DDD0', sage: '#8A9A8E' },
      fontFamily: { display: ['Fraunces','serif'], sans: ['DM Sans','sans-serif'] },
      borderRadius: { bento: '24px' }
    }
  }
}
```

## WA Terpusat (seperti `js/main.js:7`)
```js
// src/components/WaFloat.astro atau src/utils/wa.js
export const WA_NUMBER = '6281234567890';
export const waLink = (msg) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
```
Semua `data-wa` lama diganti `data-wa` + JS yang sama, tapi foto admin di float.

## Deploy
- `npm run build` -> `dist/` upload ke Vercel (sama seperti `cleaningService/.vercel/project.json`).
- `vercel.json` reuse: `{ "cleanUrls": true }`.

## Perintah
```bash
npm install
npm run dev   # http://localhost:4321
npm run build # dist/
```
