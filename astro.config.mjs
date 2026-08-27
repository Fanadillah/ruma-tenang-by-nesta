import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://rumatenang.id',
  integrations: [tailwind()],
  output: 'static',
});
