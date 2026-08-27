# 11 — UI Enhancement Plan: Semua Halaman Selain Home

> Masalah: `tentang`, `kontak`, `harga`, `galeri`, `layanan/*`, `lokasi/*` masih standar (card polos, 1 gambar, teks) — tidak se-premium `index.astro` yang sudah 12 section warm editorial. Plan ini bikin semua halaman se-level home.

## Prinsip Upgrade

1. **Tiap halaman = mini landing** — punya hero warm + story + bukti + CTA (bukan 1 H1 + list).
2. **Reuse token home** — `warm/terracotta/sand/sage`, `Fraunces + DM Sans`, `rounded-bento 24px`, `reveal` scroll, foto lokal `/images-v2/*`.
3. **Trust di setiap halaman** — minimal 1 before/after atau testimoni atau SOP, bukan cuma teks.

---

## Detail per Halaman

### 1. `/tentang` — Dari 1 paragraf → Storytelling NESTA

**Sekarang:** `tentang.astro:9` cuma H1 + 1 img + list SOP.

**Jadi:**

- **Hero Story** — foto tim besar + headline “Dari Hotel Bintang 5 ke Rumahmu” + 3 stats (2018, 500+ keluarga, 4.9★).
- **Timeline** — 2018 → 2020 → 2024 (milestones NESTA).
- **Nilai (3 Bento)** — Aman (verifikasi), Eco (sage), Garansi (terracotta) — pakai icon + foto.
- **SOP Visual** — 4 langkah dengan foto (bukan list bullet).
- **Tim Grid** — 6 foto `team-*.jpg` sama seperti home, tapi dengan role & tahun join.
- **CTA** — “Kenal timmu sebelum mereka masuk rumah” → WA.

**Komponen baru:** `Timeline.astro`, reuse `team` data.

### 2. `/kontak` — Dari 2 card → Contact Hub

**Sekarang:** `kontak.astro:11` 2 card + placeholder peta.

**Jadi:**

- **Hero** — H1 + 3 trust: balas <1 jam, garansi, Jabodetabek.
- **4 Contact Cards (Bento)** — WA (dengan foto admin), Alamat (peta mini), Jam, Email — masing dengan icon terracotta.
- **Peta Interaktif** — iframe Google Maps Jakarta Selatan (embed real, bukan kotak abu).
- **Form WA Premium** — 3 field (Nama, Alamat, Layanan) → WA prefill seperti home, + checklist “Data aman, tidak disimpan”.
- **FAQ Mini** — 2 Q (Apakah bisa H-1? Apakah ada biaya survei?).

### 3. `/harga` — Dari 3 card → Pricing Hub

**Sekarang:** `harga.astro:12` cuma 3 card + link kalkulator.

**Jadi:**

- **Hero** — “Harga Jujur, Tanpa Surprise” + badge “Transparan sejak 2018”.
- **3 Pricing Cards Premium** — sama seperti home tapi dengan perbandingan fitur (table check/cross), badge “Paling dipilih”.
- **Perbandingan Table** — Rapi vs Deep vs Rutin (durasi, crew, area, garansi) — desktop table, mobile card.
- **Kalkulator Live** — pindah komponen kalkulator dari home ke sini juga (reuse `Base.astro` JS), dengan output live + WA.
- **Guarantee Banner** — “Tidak puas 24 jam → datang lagi gratis” dengan icon.
- **FAQ Harga** — 3 Q (Apakah ada biaya transport? Apakah bisa custom?).

### 4. `/galeri` — Dari grid 6 img → Museum Bukti

**Sekarang:** `galeri.astro:12` 6 img statis.

**Jadi:**

- **Hero + Filter Chips** — All / Dapur / Kamar Mandi / Sofa — filter JS tanpa reload.
- **Masonry Before/After** — 6 pasang jadi slider (reuse `data-ba` dari home) + 6 foto tambahan (pakai `bento-*.jpg` + `paket-*.jpg`), lightbox klik.
- **Caption Story** — tiap foto ada caption “Bekasi, 85m², Deep Tenang, 5 jam”.
- **CTA** — “Mau rumahmu jadi next before-after? WA”.

### 5. `/layanan` (listing) — Dari list → Showroom

**Sekarang:** `layanan/index.astro:12` grid 6 card sederhana.

**Jadi:**

- **Hero** — “6 Cara RUMA TENANG Kembalikan Tenangmu” + filter “Rumah / Kantor / Sofa”.
- **6 Cards Premium** — foto `hero`, harga, 3 bullet, testimoni 1 baris, CTA “Lihat Detail →” + “Konsultasi WA”.
- **Kenapa Pilih Kami** — 3 bento kecil di bawah (garansi, verifikasi, eco).

### 6. `/layanan/[slug]` — Dari checklist → Sales Page per Layanan

**Sekarang:** `layanan/[slug].astro:17` hero + checklist + FAQ.

**Jadi (template untuk 6 layanan):**

- **Hero Layanan** — H1 spesifik + keyword badge + harga besar + 2 CTA (WA layanan spesifik + Lihat galeri).
- **Before/After Khusus** — 1-2 slider yang relevan (deep → dapur & kamar, sofa → sofa).
- **Apa yang Dikerjakan (Visual Checklist)** — grid 6 dengan icon + foto mini (bukan bullet).
- **Proses 4 Langkah Mini** — versi ringkas cara kerja, dengan waktu.
- **Paket Terkait** — card harga layanan itu + paket rutin.
- **Testimoni Spesifik** — 1-2 testimoni layanan itu (deep → Rina, office → Budi).
- **FAQ Layanan** — 3 Q spesifik (sudah ada).
- **Lokasi Link** — chips ke 5 kota → `/lokasi/*`.
- **Sticky CTA Mobile** — WA bar di bawah saat scroll.

**Schema:** `Service` + `Offer` + `FAQPage` (sudah ada, tinggal lengkapkan).

### 7. `/lokasi` (listing) — Dari list → Jabodetabek Hub

**Sekarang:** `lokasi/index.astro:11` grid 5 card teks.

**Jadi:**

- **Hero Peta** — peta Jabodetabek ilustrasi + 5 kota chips + stats “500+ keluarga”.
- **5 City Cards Premium** — foto city (reuse `kalkulator-house.jpg` tapi overlay nama kota), list area (Bekasi Timur dll), testimoni 1, CTA “Lihat Bekasi →”.

### 8. `/lokasi/[kota]` — Dari teks → Landing Lokal Premium

**Sekarang:** `lokasi/[kota].astro:15` H1 + area chips + testimoni 1.

**Jadi:**

- **Hero Kota** — H1 “Jasa Cleaning Service Bekasi — Tim Terdekat 30 Menit” + peta mini + badge “Cover 5 area di Bekasi”.
- **Area Chips Interactive** — 5 area dengan check.
- **Kenapa Pilih di Kota Ini** — 3 bento (tim lokal, tanpa biaya transport, garansi).
- **Testimoni Kota** — 2 testimoni filtered kota itu + bintang Google.
- **Layanan Tersedia di Kota** — grid 3 layanan populer dengan link.
- **FAQ Kota** — 2 Q (Apakah cover Tambun? Biaya transport?).
- **CTA Kota** — WA prefill kota spesifik + form alamat.
- **Nearby Cities** — link ke 4 kota lain.

---

## Shared Upgrade (semua halaman)

- **Navbar** sudah fix: `Navbar.astro` dengan dropdown Layanan/Lokasi + mobile toggle.
- **Breadcrumb** — sudah ada `Breadcrumb.astro`, pakai di semua halaman (sudah, tinggal polish style).
- **Footer** — upgrade footer di semua halaman: 4 kolom dengan link layanan & lokasi (seperti home tapi lengkap).
- **Reveal & WA** — JS di `Base.astro:28` sudah handle `reveal` + `data-wa` + slider, tinggal pakai class `reveal`.
- **Foto** — semua pakai lokal `public/images-v2/*` + `SOURCE.md`, tidak pakai external.

## Urutan Eksekusi (setelah plan approve)

1. `tentang.astro` → `kontak.astro` → `harga.astro` (3 core)
2. `galeri.astro`
3. `layanan/index.astro` + `layanan/[slug].astro`
4. `lokasi/index.astro` + `lokasi/[kota].astro`
5. `harga` kalkulator reuse + footer upgrade + `npm run build` verify 18 html

## Estimasi

- Tiap halaman: 30-50 baris Astro + reuse komponen, total ~400 baris.
- Tidak tambah dependency, cuma Tailwind + JS vanilla yang sudah ada.
