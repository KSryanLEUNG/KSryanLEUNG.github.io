# Ka Sing (Ryan) Leung — Personal Website

A bilingual (English / 繁體中文), minimal-professional personal portfolio built with
[Astro](https://astro.build/). Static output, zero runtime dependencies, instant
light/dark + language toggle.

## Develop

Requires Node.js 22.22 or newer (Astro 7).

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
- Blog page text (titles, labels): `src/lib/blog.ts`

## Writing a blog post

Posts are Markdown files in **`src/content/blog/`**.

1. Copy `src/content/blog/_template.md` to a new file, e.g. `my-first-post.md`.
   The file name becomes the URL: `/blog/my-first-post/`.
2. Fill in the frontmatter: `title`, `description`, `pubDate`, `lang` (`en` or
   `zh` — the language the post is written in) and `tags`.
3. Keep `draft: true` while writing — drafts appear in `npm run dev` only.
   Set `draft: false` to publish on the next push.
4. Put images in `public/blog/<post-name>/` and link them as
   `![alt](/blog/<post-name>/figure.png)`.

New posts automatically appear on `/blog/`, in the homepage's "Latest writing"
section, in the RSS feed (`/rss.xml`) and in the sitemap. Files starting with
`_` are never published.

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
