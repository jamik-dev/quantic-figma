/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#170F49',
        'gradientfrom': '#F92B74',
        'gradientto': '#FB4C59',
        'hoverbg': '#EFF0F6'
      }
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif']
    }
  },
  plugins: [],
}
