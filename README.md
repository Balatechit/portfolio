# Balaji V — Portfolio Website

**Next.js 15 · TypeScript · Tailwind CSS**  
Theme: Dark Steel / Engineering — Amber accent (#F59E0B)

---

## Quick Start

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # Production build
```

---

## Folder Structure

```
├── app/
│   ├── page.tsx          ← Assembles all sections
│   ├── layout.tsx        ← HTML head, fonts, SEO metadata
│   └── globals.css       ← CSS variables, dark steel theme
├── components/
│   ├── Navbar.tsx        ← Sticky nav + Resume download button
│   ├── Hero.tsx          ← Landing with engineering grid canvas
│   ├── About.tsx         ← Profile, work distribution bars
│   ├── FEASection.tsx    ← FEA results + Hydrostatic Leak Test gallery
│   ├── CADSection.tsx    ← 8 CAD cards with image carousel + filter
│   ├── Skills.tsx        ← Software bars + domain tags
│   ├── Contact.tsx       ← Email, LinkedIn, Resume download
│   └── Footer.tsx
├── lib/
│   └── data.ts           ← ALL content lives here — edit only this file
└── public/
    ├── Balaji_V_Resume.pdf        ← YOUR RESUME (replace this file)
    └── projects/                  ← ALL project images go here
        ├── 25kl-tank-stress.jpg
        ├── 25kl-tank-displacement.jpg
        ├── 25kl-tank-mesh.jpg
        ├── 25kl-tank-strain.jpg
        ├── 25kl-tank-leak-test-01.jpg   ← NEW (front elevation, leak test)
        ├── 25kl-tank-leak-test-02.jpg   ← NEW (corner view, leak test)
        ├── 25kl-tank-leak-test-03.jpg   ← NEW (interior, leak test)
        ├── 25kl-tank-leak-test-04.jpg   ← NEW (top manhole, leak test)
        ├── end-wall.jpg
        ├── end-wall-exploded.jpg
        ├── side-wall.jpg
        ├── side-wall-exploded.jpg
        ├── fuel-tank.jpg
        ├── fuel-tank-exploded.jpg
        ├── water-tank.jpg
        ├── water-tank-exploded.jpg
        ├── air-reservoir.jpg
        ├── air-reservoir-2.jpg
        ├── berth-1.jpg  →  berth-10.jpg
        ├── filter-vessel.jpg
        └── ro-plant.jpg
```

---

## How to Update Resume

1. Export your updated resume as PDF
2. Rename it: `Balaji_V_Resume.pdf`
3. Replace the file at `/public/Balaji_V_Resume.pdf`
4. Push to GitHub → Vercel auto-redeploys
5. No code changes needed

---

## How to Add the 4 Leak Test Images

Rename and upload to `public/projects/`:

| Your photo file         | Upload as                        |
|-------------------------|----------------------------------|
| IMG-20260624-WA0020.jpg | `25kl-tank-leak-test-01.jpg`     |
| IMG-20260624-WA0017.jpg | `25kl-tank-leak-test-02.jpg`     |
| IMG-20260624-WA0011.jpg | `25kl-tank-leak-test-03.jpg`     |
| IMG-20260624-WA0007.jpg | `25kl-tank-leak-test-04.jpg`     |

---

## Deploy to Vercel

```bash
git add .
git commit -m "Portfolio v2 — dark steel theme + leak test gallery"
git push
```

Vercel auto-detects Next.js. No settings needed.  
Live: https://portfolio-7zal.vercel.app
