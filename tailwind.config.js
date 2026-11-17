/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          50: '#eceef2',
          500: '#4c4f65',
          600: '#4c4f65',
          700: '#4c4f65',
          800: '#4c4f65',
          900: '#4c4f65',
        },
      },
    },
  },
  plugins: [],
}