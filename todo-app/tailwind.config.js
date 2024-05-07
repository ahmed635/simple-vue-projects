/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'primary': '#27292d',
      'secondary': '#a0a4d9',
      'white-color': '#fff',
      'black': '#000',
    }
  },
  plugins: [],
}

