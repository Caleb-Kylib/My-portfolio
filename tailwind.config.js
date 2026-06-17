/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Global palette ───────────────────────────────
        'p-bg':      '#141212', // page / body background
        'p-card':    '#1C1A19', // card / container surface
        'p-badge':   '#2A2827', // pill / badge background
        'p-border':  '#2E2C2B', // subtle border
        'p-border2': '#3A3836', // slightly lighter border
        'p-white':   '#FFFFFF', // primary titles
        'p-silver':  '#A19E9B', // body copy / descriptions
        'p-muted':   '#706E6B', // labels like "TECH STACK"

        // ── Legacy aliases kept so nothing breaks ────────
        'dark-bg':      '#141212',
        'dark-surface': '#1C1A19',
        'dark-border':  '#2E2C2B',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':       { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
