# Ka Sing (Ryan) Leung — Personal Website

A bilingual (English / 繁體中文), minimal-professional personal portfolio built with
[Astro](https://astro.build/). Static output, zero runtime dependencies, instant
light/dark + language toggle.

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
```

## Build

```bash
npm run build    # outputs static site to ./dist
npm run preview  # preview the production build locally
```

## Editing content

All text (English + Chinese) lives in **`src/data/content.ts`**.
Edit it there and every section updates automatically — no need to touch markup.

- Résumé download: replace `public/Resume_Ryan_Tech.pdf`
- Theme colors / fonts: `src/styles/global.css` (CSS variables at the top)
- Sections / layout: `src/pages/index.astro`

## Deploy to GitHub Pages

1. Push this folder to a GitHub repo.
2. In **Settings → Pages**, set **Source = GitHub Actions**.
3. The workflow in `.github/workflows/deploy.yml` builds and deploys on every
   push to `main`.

### Important — set the URL in `astro.config.mjs`

- **User/organization site** (`https://<user>.github.io`): keep `base` commented out.
- **Project site** (`https://<user>.github.io/<repo>`): set
  `site: 'https://<user>.github.io'` and uncomment `base: '/<repo>'`.
- **Custom domain**: set `site` to your domain and add a `public/CNAME` file.
