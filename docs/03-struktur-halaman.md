# 03 — Struktur Halaman One-Scroll (12 Section)

> Semua di `src/pages/index.astro` single page. Anchor nav: `#hasil #tim #paket #cara #harga #testi #faq`. Tidak ada `layanan.html/tentang.html/kontak.html` lagi.

```
NAV (sticky glass, progress bar)
01 HERO SPLIT HUMAN (#top)
02 SOCIAL PROOF WALL (marquee)
03 PAIN → SOLUTION BENTO
04 HASIL NYATA — Before/After Slider (#hasil)
05 KENAL TIM NESTA (#tim)
06 PAKET RUMA — 3 Story Card (#paket)
07 CARA KERJA — Horizontal Timeline (#cara)
08 KALKULATOR HARGA LIVE (#harga)
09 VIDEO REELS WALL
10 TESTIMONI GOOGLE (#testi)
11 FAQ OBJECTION (#faq)
12 FINAL CTA + FOOTER (#kontak)
WA FLOAT (foto admin, bukan icon) + BACK TO TOP
```

## Detail per Section

### 01 HERO SPLIT (60-70vh)
- Kiri: eyebrow `RUMA TENANG by NESTA — Sejak 2018` (sage badge) + H1 Fraunces: `Rumah Pulang <em>Jadi Tenang.</em>` + lead 1 kalimat + 2 CTA (WA Terracotta + Lihat Hasil outline sand) + micro-trust `★4.9/5 dari 847 ulasan • Tim terverifikasi • Garansi`.
- Kanan: foto vertikal tim di pintu + floating card Before/After mini + card "Dikerjakan 2.5 jam • 2 crew".
- Beda dari `index.html:73-118` yang gradient teal + stats angka generik.

### 02 SOCIAL PROOF WALL
- Marquee logo klien (Graha Kirana dll lama `index.html:240-245` tapi grayscale warm) + avatar stack 5 foto + "Dipercaya 500+ keluarga di Jabodetabek".

### 03 BENTO PAIN→SOLUTION (3 col)
- Card 1: "Debu balik lagi?" + foto debu sudut.
- Card 2: "Sofa bau apek?" + foto sofa.
- Card 3: "Waktu habis buat beres?" + foto ibu lelah. CTA kecil "Lihat cara kami".
- Ganti icon FA `fa-house-chimney` lama.

### 04 HASIL NYATA — Before/After Slider
- 3 slider drag: Dapur, Kamar Mandi, Sofa. Handle terracotta. Caption "Geser untuk lihat". Ini trust #1. Ref: cocoen.

### 05 KENAL TIM NESTA
- Grid 3/6 foto portrait 1:1. Nama + kota + "Bergabung 2021" + 1 quote. Badge "Terverifikasi & Dilatih". Humanize, bukan `team-1.jpg` generik.

### 06 PAKET RUMA (3 Card Story)
- **Rapi Cepat** — 2 jam, 2 crew, untuk rapi harian. Rp350k.
- **Deep Tenang** — 5 jam, detail sudut, pasca renovasi. Rp650k — badge "Paling dipilih".
- **Tenang Rutin** — langganan 4x/bulan, crew sama. Rp1.1jt/bulan.
- Harga transparan di card, foto real tiap paket.

### 07 CARA KERJA — Timeline Horizontal
- Garis sand dengan 4 titik terracotta: 1 Pesan WA 30 detik → 2 Kami Datang → 3 Kamu Cek → 4 Bayar Jika Puas. Video 15 detik di bawah.

### 08 KALKULATOR HARGA LIVE
- Slider luas (30-200m²) + pilih paket -> output harga live Fraunces 800 + estimasi waktu + tombol WA prefill "Halo RUMA TENANG, rumah saya 85m²..."

### 09 VIDEO REELS WALL
- 2 video 9:16 portrait (autoplay muted, klik untuk suara) + 1 foto tim kerja.

### 10 TESTIMONI GOOGLE
- 3 card warm white, bintangnya amber, foto avatar 48px, nama + lokasi (seperti `index.html:521-568` tapi dengan badge Google + link).

### 11 FAQ OBJECTION (Accordion warm)
- Q: Aman tinggalkan rumah? Q: Bawa alat? Q: Garansi? Jawaban human + foto SOP.

### 12 FINAL CTA + FOOTER
- CTA: foto rumah sunset full-bleed + overlay charcoal, H2 "Siap pulang jadi tenang?" + form 1 input "Alamatmu di mana?" -> WA. Footer sand/charcoal, 4 kolom seperti lama tapi warm.
