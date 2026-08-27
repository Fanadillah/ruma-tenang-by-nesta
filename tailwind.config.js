/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        warm: '#FFFBF5',
        charcoal: '#1A1A1E',
        terracotta: '#C45A3C',
        'terracotta-dark': '#9E3D22',
        sand: '#E8DDD0',
        'sand-dark': '#D9CABD',
        sage: '#8A9A8E',
        ink: '#2B2B30',
      },
      fontFamily: {
        display: ['Fraunces', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      borderRadius: {
        bento: '24px',
      },
    },
  },
  plugins: [],
};
