import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://roemdev.github.io',
  base: '/roemdev', 
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  }
});