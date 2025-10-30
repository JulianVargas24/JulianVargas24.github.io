// astro.config.mjs
// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';
import astroIcon from 'astro-icon';

// ❗ User site: tu repo es julianvargas24.github.io → base en '/' y build estático
export default defineConfig({
  site: 'https://julianvargas24.github.io',
  base: '/',            // o simplemente omitir (por defecto '/')
  output: 'static',     // ✅ clave para GitHub Pages
  integrations: [
    tailwind(),
    mdx(),
    astroIcon()
  ]
  // ❌ NADA de adapter vercel ni output: 'server'
});
