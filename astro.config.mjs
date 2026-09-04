// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// GitHub Pages (sitio de proyecto bajo la organizacion):
//   https://sems-emergentes.github.io/SEMS-Landing-Page/
export default defineConfig({
  site: 'https://sems-emergentes.github.io',
  base: '/SEMS-Landing-Page',
  vite: {
    plugins: [tailwindcss()],
  },
});

