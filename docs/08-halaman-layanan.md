# 08 — Halaman Layanan (6 Money Pages)

> Tiap layanan = 1 halaman SEO. Reuse komponen homepage, tapi konten spesifik.

## Daftar

| Slug | H1 | Target Keyword | Harga | Foto Hero |
|---|---|---|---|---|
| `home-cleaning` | Jasa Home Cleaning Jakarta — Rumah Rapi 2 Jam | jasa home cleaning jakarta, jasa bersih rumah | Rp350.000/visit | `paket-rapi.jpg` |
| `deep-cleaning` | Jasa Deep Cleaning Jakarta — 5 Jam Detail Sampai Sudut | jasa deep cleaning jakarta, deep cleaning rumah | Rp650.000/visit | `paket-deep.jpg` |
| `office-cleaning` | Jasa Office Cleaning Jabodetabek — Kantor Siap Pakai | jasa office cleaning jakarta, jasa bersih kantor | Rp500.000/visit | `bento-debu.jpg` |
| `carpet-sofa` | Cuci Sofa & Karpet — Steam, Wangi, Bebas Debu | cuci sofa jakarta, cuci karpet bekasi | Mulai Rp150.000/unit | `bento-sofa.jpg` |
| `window-cleaning` | Jasa Window Cleaning — Kaca Kinclong Tanpa Coretan | jasa window cleaning jakarta | Mulai Rp250.000/sesi | `ba-kamar-after.jpg` |
| `general-cleaning` | General Cleaning Fleksibel — Sesuai Kebutuhan | general cleaning jakarta | Mulai Rp300.000/sesi | `bento-waktu.jpg` |

## Template Struktur (untuk `src/pages/layanan/[slug].astro`)

```
Hero Mini (H1 + lead 1 kalimat + badge "Garansi 24 jam")
  ↓
Before/After khusus layanan (1-2 slider)
  ↓
Apa yang dikerjakan (checklist 6 poin, contoh deep: "belakang lemari, kusen, sudut langit-langit, kerak kamar mandi, dapur berminyak, kolong sofa")
  ↓
Paket terkait (card harga — link ke /harga)
  ↓
Tim yang kerjakan (2 foto tim)
  ↓
FAQ layanan (3 Q spesifik)
  ↓
CTA WA prefill layanan: "Halo RUMA TENANG, saya mau Deep Cleaning untuk rumah 85m² di [lokasi]"
  ↓
Link ke lokasi: "Layanan ini tersedia di Jakarta, Bekasi..." → /lokasi/*
```

## Copy Checklist per Halaman

- [ ] 300-500 kata unik (jangan copy-paste antar layanan)
- [ ] Sebut durasi, jumlah crew, alat yang dibawa (eco sage)
- [ ] 1 testimoni spesifik layanan (misal deep: Rina Cibubur)
- [ ] 3 FAQ spesifik layanan
- [ ] Alt img spesifik layanan

## File Konten

`src/content/layanan/*.md` (atau `src/data/layanan.json`) — 1 md per layanan, frontmatter: `title, slug, keyword, harga, hero, checklist`.

Contoh `deep-cleaning.md`:
```yaml
---
title: Jasa Deep Cleaning Jakarta — 5 Jam Detail & Garansi
slug: deep-cleaning
keyword: jasa deep cleaning jakarta
harga: 650000
hero: /images-v2/paket-deep.jpg
checklist:
  - Belakang lemari & kolong sofa diangkat
  - Kusen & sudut langit-langit
  - Kerak kamar mandi & dapur berminyak
  - Lantai & nat disikat
---
Deep cleaning adalah pembersihan menyeluruh 4.5-5 jam untuk area yang terlewat...
```
