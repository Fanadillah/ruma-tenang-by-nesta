# 10 — TODO Build Multi-Page

> Daftar kerja setelah MD 07-09 selesai. Centang saat dikerjakan.

## Fase A — MD & Konten (selesai)

- [x] `07-sitemap-seo.md` — sitemap 12 halaman
- [x] `08-halaman-layanan.md` — template 6 layanan
- [x] `09-halaman-lokasi.md` — template 5 lokasi
- [ ] `src/content/layanan/*.md` — 6 file md layanan (belum)
- [ ] `src/content/lokasi/*.md` — 5 file md lokasi (belum)

## Fase B — Astro Scaffold

- [x] `src/pages/tentang.astro` — story NESTA + tim lengkap
- [x] `src/pages/kontak.astro` — NAP + peta + form WA
- [x] `src/pages/harga.astro` — tabel paket + kalkulator reuse
- [x] `src/pages/galeri.astro` — grid before/after + lightbox
- [x] `src/pages/layanan/index.astro` — listing 6 card
- [x] `src/pages/layanan/[slug].astro` — dynamic dari content
- [x] `src/pages/lokasi/index.astro` — listing 5 kota
- [x] `src/pages/lokasi/[kota].astro` — dynamic dari content
- [x] `public/sitemap.xml` — manual (ganti @astrojs/sitemap yang error reduce)
- [x] `src/components/Breadcrumb.astro` — reuse

## Fase C — SEO & QA

- [x] Tiap halaman punya title/description/H1 unik
- [x] Canonical + OG image (`/images-v2/og-image.jpg`)
- [x] Schema Service/LocalBusiness per tipe
- [x] `npm run build` → 18 html di `dist/` + `sitemap.xml` OK (build 2.62s)

## Catatan

- Foto sudah lokal di `public/images-v2/` (26 file) + `SOURCE.md`.
- WA terpusat `Base.astro:28` — jangan duplikat.
- Prioritas: build layanan dulu (money pages), lokasi menyusul.
