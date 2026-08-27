# 07 — Sitemap SEO Multi-Page

> Homepage tetap one-scroll trust (`src/pages/index.astro`), tapi ditopang halaman dalam agar ranking Google. Beda dari `cleaningService` lama yang hanya 4 halaman generik (`docs/system.md:36`).

## Sitemap Final (12 halaman launch, scale ke 20+)

```
https://rumatenang.id/
├── /tentang                 (E-E-A-T, story NESTA)
├── /kontak                  (NAP, peta, form WA)
├── /harga                   (tabel + kalkulator + FAQ harga)
├── /galeri                  (grid before/after lightbox)
├── /layanan/                (listing 6 layanan)
│   ├── /layanan/home-cleaning
│   ├── /layanan/deep-cleaning        ← money page #1
│   ├── /layanan/office-cleaning
│   ├── /layanan/carpet-sofa
│   ├── /layanan/window-cleaning
│   └── /layanan/general-cleaning
├── /lokasi/                 (listing 5 kota)
│   ├── /lokasi/jakarta
│   ├── /lokasi/bekasi
│   ├── /lokasi/depok
│   ├── /lokasi/tangerang
│   └── /lokasi/bogor
└── /tips/                   (blog)
    ├── /tips/cara-bersihkan-sofa-tanpa-rusak
    ├── /tips/jadwal-deep-cleaning-ideal
    └── /tips/pilih-cleaning-service-aman
```

## Kenapa Dipisah (bukan hash seperti `layanan.html:92`)?

| Lama | Baru |
|---|---|
| `layanan.html#deep-cleaning` (1 halaman, 6 jasa) — Google bingung keyword | `/layanan/deep-cleaning` (1 halaman = 1 keyword: "jasa deep cleaning jakarta") |
| `index.html#area-layanan` (list kota tanpa halaman) | `/lokasi/bekasi` (landing lokal: "jasa cleaning service bekasi") |
| Tidak ada blog | `/tips/*` untuk long-tail: "cara bersihkan karpet" |

## Prioritas Build

**Launch v2.1 (12 halaman):** `/`, `/tentang`, `/kontak`, `/harga`, `/layanan/*` (6), `/lokasi/jakarta`, `/lokasi/bekasi` (2), `/galeri`
**Next v2.2:** +3 lokasi sisa + 3 artikel tips

## URL & Title Template

- URL: `rumatenang.id/layanan/deep-cleaning` (tanpa `.html`, `cleanUrls: true` di `vercel.json`)
- Title: `Jasa Deep Cleaning Jakarta — 5 Jam Detail & Garansi | RUMA TENANG by NESTA`
- H1: `Jasa Deep Cleaning Jakarta — Bersih Sampai Sudut`
- Description: unik per halaman, 150-160 char, sebut kota + harga + garansi.

## Internal Linking

- Homepage bento & paket → link ke `/layanan/deep-cleaning` dll
- Setiap `/layanan/*` → link ke `/lokasi/jakarta` (contoh: "Deep cleaning tersedia di Bekasi → lihat")
- Footer → link ke semua `/lokasi/*` + `/layanan/*`
- Breadcrumb: `Beranda > Layanan > Deep Cleaning`

## Schema per Tipe

- `/` : `LocalBusiness` + `AggregateRating 4.9/847` (sudah di `Base.astro:18`)
- `/layanan/*` : `Service` + `Offer` (harga) + `FAQPage`
- `/lokasi/*` : `LocalBusiness` (areaServed spesifik) + `BreadcrumbList`
- `/tips/*` : `Article` + `BreadcrumbList`

## Sitemap.xml

Pakai `@astrojs/sitemap` — auto generate di `dist/sitemap-index.xml`. Submit ke Search Console.

## Checklist Sebelum Publish

- [ ] Tiap halaman punya 1 H1 unik, alt img lokal (`/images-v2/*`), canonical, OG image
- [ ] Tidak ada duplicate title/description
- [ ] Semua link internal pakai path absolut `/layanan/...` (bukan `../`)
- [ ] WA_NUMBER tetap 1 sumber (`Base.astro:28`)
