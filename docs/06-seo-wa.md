# 06 — SEO & WhatsApp RUMA TENANG by NESTA

## WA Terpusat (Wajib Ganti Sebelum Publish)
```js
// src/utils/wa.js — sama pola js/main.js:7
export const WA_NUMBER = '6281234567890'; // GANTI: 62 + tanpa 0, contoh 62812XXXX
export const WA_DEFAULT = 'Halo RUMA TENANG by NESTA, saya mau konsultasi untuk rumah di [lokasi] luas [m²]. Boleh estimasi?';
export const waLink = (msg = WA_DEFAULT) => `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
```
- Semua tombol pakai `data-wa` + JS `waLink`. Float pakai foto admin 40px bulat, bukan icon generik `css/style.css:1161`.
- Prefill kalkulator: `Halo RUMA TENANG, rumah saya ${luas}m² di ${alamat}, mau paket ${paket}. Estimasi berapa?`

## Meta per Halaman (single page tapi OG tetap penting)
```html
<title>RUMA TENANG by NESTA — Pulang Jadi Tenang | Cleaning Service Jabodetabek</title>
<meta name="description" content="RUMA TENANG by NESTA merapikan rumah & kantor di Jabodetabek. Tim terverifikasi, before-after nyata, harga transparan, garansi. Konsultasi gratis via WhatsApp.">
<link rel="canonical" href="https://rumatenang.id/">
<meta property="og:title" content="RUMA TENANG by NESTA — Pulang Jadi Tenang">
<meta property="og:description" content="500+ keluarga percaya. Lihat hasil before-after nyata.">
<meta property="og:image" content="/images-v2/og-image.jpg"> <!-- 1200x630 foto human -->
<meta property="og:type" content="website">
<meta name="keywords" content="jasa cleaning service jabodetabek, jasa bersih rumah jakarta, deep cleaning jakarta, cleaning service terpercaya">
```

## JSON-LD (di Base.astro <head>)
```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "RUMA TENANG by NESTA",
  "url": "https://rumatenang.id/",
  "telephone": "+6281234567890",
  "image": "https://rumatenang.id/images-v2/og-image.jpg",
  "address": { "@type": "PostalAddress", "addressLocality": "Jakarta Selatan", "addressRegion": "DKI Jakarta", "addressCountry": "ID" },
  "geo": { "@type": "GeoCoordinates", "latitude": -6.261493, "longitude": 106.810611 },
  "openingHours": "Mo-Sa 08:00-17:00",
  "priceRange": "Rp350000 - Rp650000",
  "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "847" },
  "areaServed": ["Jakarta","Bekasi","Depok","Tangerang","Bogor"]
}
```

## Checklist SEO
- [ ] Satu H1 saja: "Rumah Pulang Jadi Tenang."
- [ ] Semua img punya alt deskriptif + loading lazy, hero fetchpriority high.
- [ ] OG image 1200x630 warm human, bukan `og-image.jpg` teal lama.
- [ ] Canonical & sitemap.xml
- [ ] Form Final CTA pakai `wa.me`, bukan Formspree (opsional tambah Formspree jika mau backup).

## Checklist WA
- [ ] Ganti WA_NUMBER di 1 tempat saja.
- [ ] Test semua CTA: Hero, Paket, Kalkulator, Final CTA, Float — semua buka wa.me dengan text prefill benar.
- [ ] Float foto admin terlihat di mobile, tooltip "Chat NESTA — balas <1 jam".
