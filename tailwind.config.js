/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        oswald: ['Oswald', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
      },
      colors: {
        rock: {
          dark: '#0a0a0a',
          beer: '#FBBF24',
          accent: '#DC2626', // Red accent
        }
      }
    },
  },
  plugins: [],
}
