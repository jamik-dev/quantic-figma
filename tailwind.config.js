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
        'hoverbg': '#EFF0F6',
        'blueish': '#51CCF3',
        'greyish': '#F4F4F4',
        'neutral': '#D9DBE9'
      },
      animation: {
        move: 'move 40s linear infinite',
        move2: 'move 80s linear infinite',
        move3: 'move 60s linear infinite',
      }
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'sora': ['Sora', 'sans-serif']
    },
    keyframes: {
      move: {
        '0%': { top: '-100px' },
        '100%': { top: '100%' },
      }
    }
  },
  plugins: [],
}
