/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#22d3ee',
        secondary: '#38bdf8',
        textclr: '#94a3b8',
        bgclr: '#111827'
      }
    },
  },
  plugins: [],
}
