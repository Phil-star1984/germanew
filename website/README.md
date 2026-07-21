# GermaNEW — Deutschland 2050

Unabhängige Zukunftsplattform von Phil Splash / Millionpainter.

## Lokal starten

```bash
cd website
npm install
npm run dev
```

Die Seite läuft unter `http://localhost:5173`.

## Build

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Repository auf GitHub anlegen
2. Unter Settings → Pages → Source: **GitHub Actions** wählen
3. Push auf `main` — der Workflow in [`.github/workflows/deploy.yml`](../.github/workflows/deploy.yml) published auf `gh-pages`
4. GitHub → Settings → Pages → Branch **gh-pages** / **root**

## Assets

- Hero-Video: `public/assets/video/hero.mp4` (komprimiert aus Original)
- Poster: `public/assets/video/hero-poster.jpg`
- Mission-Bilder: `public/assets/images/missions/*.webp`
