/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'ivory': '#F6F7EB',
        'gunmetal': '#393E41',
        'fiery-terracotta': '#E94F37',
      },
      fontFamily: {
        'serif': ['"Playfair Display"', 'serif'],
      }
    },
  },
  plugins: [],
}