import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import solidJs from '@astrojs/solid-js';
import react from '@astrojs/react';
import dotenv from 'dotenv';

dotenv.config();

// https://astro.build/config
export default defineConfig({
  site: 'https://vijay2244d.github.io',
  base: '/saloon',
  integrations: [
    tailwind(),
    solidJs({
      exclude: ['**/*.jsx'], // Exclude React components
    }),
    react({
      include: ['**/*.jsx'], // Only include React components
    }),
  ],
});
