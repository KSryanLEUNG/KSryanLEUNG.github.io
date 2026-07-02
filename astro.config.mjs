import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// NOTE: When deploying to GitHub Pages at https://<user>.github.io/<repo>,
// set `site` and `base` accordingly. For a user/custom domain, base can stay '/'.
export default defineConfig({
  site: 'https://ksryanleung.github.io',
  // base: '/personal_web',
  integrations: [sitemap()],
});
