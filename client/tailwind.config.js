/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1E3A8A',
          dark: '#172554',
          light: '#3B82F6'
        },
        accent: {
          DEFAULT: '#F97316',
          hover: '#EA580C'
        }
      }
    },
  },
  plugins: [],
}