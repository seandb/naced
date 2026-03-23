/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        teal: {
          primary: '#0D5C63',
          dark: '#094A50',
          light: '#1A7A82',
        },
        gold: {
          accent: '#D4A853',
          light: '#E8C47A',
          dark: '#B8922A',
        },
        dark: '#1A1A2E',
        'light-bg': '#F7F9F8',
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1A1A2E',
            h1: { fontFamily: '"Playfair Display", Georgia, serif' },
            h2: { fontFamily: '"Playfair Display", Georgia, serif' },
            h3: { fontFamily: '"Playfair Display", Georgia, serif' },
          },
        },
      },
    },
  },
  plugins: [],
};
