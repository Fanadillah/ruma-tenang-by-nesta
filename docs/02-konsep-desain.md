# 02 — Konsep Desain RUMA TENANG by NESTA

## Tema: Warm Editorial & Human
> "Seperti majalah rumah tinggal, bukan brosur jasa." — lawan dari `cleaningService` lama yang klinis teal.

## Palet Warna
```css
:root {
  --warm-white: #FFFBF5;   /* bg utama, ganti --mint #f0fdfa lama */
  --charcoal:   #1A1A1E;   /* teks heading, ganti --dark #134e4a */
  --terracotta: #C45A3C;   /* CTA utama, ganti --secondary #10b981 */
  --terracotta-dark: #9E3D22;
  --sand:       #E8DDD0;   /* section alt, card border */
  --sage:       #8A9A8E;   /* badge eco, aksen */
  --sand-dark:  #D9CABD;
  --ink:        #2B2B30;
  --radius-bento: 24px;    /* ganti --radius 12px lama */
  --radius-pill: 999px;
}
```
Aturan: Terracotta hanya untuk CTA & highlight, tidak untuk background penuh. Sage untuk trust badge.

## Tipografi
| Role | Font | Weight | Catatan |
|---|---|---|---|
| H1, H2 display | **Fraunces** (serif) | 700, 800, 900 | `font-variation: soft`, italic untuk kata emosional |
| H3, badge, angka | **Fraunces** | 600 |  |
| Body, nav, label | **DM Sans** / **Instrument Sans** | 400, 500, 600 | Ganti `Inter` lama |
| Kutipan testimoni | Fraunces Italic | 500 |  |

```html
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,soft,wght@9..144,50,600;9..144,50,700;9..144,50,800;9..144,90,600&family=DM+Sans:wght@400;500;600;700&display=swap" rel="stylesheet">
```

Skala: H1 `clamp(2.8rem, 6vw, 4.8rem)` editorial besar, H2 `clamp(1.9rem, 3.5vw, 2.8rem)`.

## Foto Direction
- **Hero kanan**: foto vertikal 4:5 tim NESTA senyum di pintu rumah, natural light, celemek linen sand. Bukan stock `hero-home.jpg` lama.
- **Before/After**: 3 pasang foto real dapur/kamar mandi/sofa, diambil angle sama, cahaya sama.
- **Tim**: 6 foto portrait 1:1, background warm white, nama + kota asal + tahun join.
- **Video**: 2 video 9:16 (Reels) tim bekerja 15 detik, tanpa musik keras.

## Komponen Kunci
1. **Navbar Float Glass** — `backdrop-blur(16px)`, `bg: rgba(255,251,245,0.85)`, border sand, bukan `rgba(255,255,255,0.95)` lama `css/style.css:78`.
2. **Bento Card** — `radius 24px`, border `1px solid var(--sand)`, shadow warm, hover lift 6px. Isi foto + teks, bukan icon FA bulat.
3. **Before/After Slider** — komponen `Cocoen` style, drag handle terracotta.
4. **Kalkulator** — slider range sand, output harga Fraunces 800 terracotta, live.
5. **Final CTA Band** — foto rumah sunset full-bleed + overlay charcoal 60%, bukan gradient teal lama `css/style.css:831`.

## Logo
- Wordmark `RUMA TENANG` Fraunces 800, `by NESTA` DM Sans small caps. Ikon sarang 3 garis melingkar, stroke 2.5px terracotta.
- Favicon: ikon sarang 32px terracotta di warm white.

## Checklist Visual
- [ ] Tidak ada teal/emerald di manapun.
- [ ] Semua card foto real, minimal 1 wajah manusia per viewport.
- [ ] H1 pakai Fraunces, bukan Plus Jakarta Sans.
- [ ] Trust badge (★4.9/847 ulasan Google) selalu di atas fold.
