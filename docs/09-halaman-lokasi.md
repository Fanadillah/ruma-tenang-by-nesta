# 09 — Halaman Lokasi (5 Landing Lokal)

> Tiap kota = 1 landing. Target ranking "jasa cleaning service + kota".

## Daftar

| Kota | Slug | H1 | Area Detail |
|---|---|---|---|
| Jakarta | `jakarta` | Jasa Cleaning Service Jakarta — RUMA TENANG by NESTA | Jakarta Selatan, Barat, Timur, Utara, Pusat |
| Bekasi | `bekasi` | Jasa Cleaning Service Bekasi — Tim Siap 24 Jam | Bekasi Kota & Kabupaten, Cibubur, Cikarang |
| Depok | `depok` | Jasa Cleaning Service Depok — Rumah & Apartemen | Depok, Cinere, Sawangan |
| Tangerang | `tangerang` | Jasa Cleaning Service Tangerang — Kantor & Rumah | Kota, Selatan, Kabupaten |
| Bogor | `bogor` | Jasa Cleaning Service Bogor — Villa & Rumah | Kota & Kabupaten, Sentul |

## Template Struktur (`src/pages/lokasi/[kota].astro`)

```
Hero Mini (H1 + peta/illustrasi + badge "Tim terdekat di [Kota]")
  ↓
Area yang kami cover (chip: "Bekasi Timur, Bekasi Barat..." — dari `03-struktur-halaman.md`)
  ↓
Testimoni dari kota itu saja (filter: Rina Cibubur untuk Bekasi, Budi Sudirman untuk Jakarta)
  ↓
Paket & harga untuk kota itu (sama, tapi sebut "Gratis survei untuk [Kota] >100m²")
  ↓
FAQ lokasi (Q: "Apakah cover [Kota]?" "Biaya transport?")
  ↓
CTA WA prefill kota: "Halo RUMA TENANG, saya di Bekasi, alamat di [alamat], mau Deep Cleaning. Estimasi berapa?"
  ↓
Link ke layanan: "Lihat layanan di [Kota]" → /layanan/*
```

## SEO Lokal Checklist

- [ ] Title: `Jasa Cleaning Service Bekasi — Garansi & Tim Terverifikasi | RUMA TENANG by NESTA`
- [ ] Description sebut kota 1x, harga, garansi
- [ ] Embed Google Maps (atau static map image) center kota
- [ ] NAP konsisten: alamat, WA, jam (sama dengan `/kontak`)
- [ ] `areaServed` di JSON-LD spesifik kota (bukan 5 kota sekaligus)
- [ ] Internal link dari `/layanan/*` ke `/lokasi/[kota]`

## File Konten

`src/content/lokasi/*.md` — frontmatter: `kota, slug, keyword, area[], testimoni[]`.

Contoh `bekasi.md`:
```yaml
---
kota: Bekasi
slug: bekasi
keyword: jasa cleaning service bekasi
area: ["Bekasi Kota", "Bekasi Kabupaten", "Cibubur", "Cikarang"]
hero: /images-v2/kalkulator-house.jpg
---
RUMA TENANG by NESTA melayani Bekasi dan sekitarnya...
```

## Build

`getStaticPaths()` di `lokasi/[kota].astro` loop `src/content/lokasi/*.md` → generate 5 halaman statis.
