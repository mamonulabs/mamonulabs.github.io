export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        primary: '#0d59f2',
        'background-dark': '#000000',
      },
      borderRadius: {
        DEFAULT: '0rem',
        lg: '0rem',
        xl: '0rem',
        full: '9999px',
      },
    },
  },
  plugins: [],
}
