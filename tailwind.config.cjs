/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",
  ],
  theme: {
    extend: {
        fontFamily: {
          'space': ['Space Mono, monospace']
        },
    },
  },
  plugins: [],
  darkMode: ['class']
}