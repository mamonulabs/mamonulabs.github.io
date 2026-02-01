export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['Fraunces', 'serif'],
        body: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        // Synthwave colors
        synth: {
          pink: '#ff2a6d',
          'pink-light': '#ff6b9d',
          cyan: '#05d9e8',
          'cyan-light': '#5eead4',
          purple: '#7b2cbf',
          'purple-dark': '#2d1b4e',
          yellow: '#f9c80e',
          blue: '#01012b',
        },
        // Komorebi forest colors
        forest: {
          50: '#f0fdf4',
          100: '#dcfce7',
          200: '#bbf7d0',
          300: '#86efac',
          400: '#4ade80',
          500: '#22c55e',
          600: '#16a34a',
          700: '#15803d',
          800: '#166534',
          900: '#14532d',
        },
        // Dark theme colors
        dark: {
          50: '#f0e6ff',
          100: '#d4c6e8',
          200: '#a89cc4',
          300: '#7a6f96',
          400: '#4a4260',
          500: '#2a2440',
          600: '#1a1428',
          700: '#0d0a14',
          800: '#0a0810',
          900: '#050408',
        },
      },
      backgroundImage: {
        'gradient-synthwave': 'linear-gradient(135deg, #01012b 0%, #2d1b4e 50%, #0d0a14 100%)',
        'gradient-forest': 'linear-gradient(180deg, rgba(34, 197, 94, 0.1) 0%, rgba(5, 217, 232, 0.1) 100%)',
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
}
