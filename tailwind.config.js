/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#a08b7b',
          dark: '#8a7667',
          light: '#c2b3a6',
        },
        // Don't override the default colors, just extend them
      },
    },
  },
  plugins: [],
}