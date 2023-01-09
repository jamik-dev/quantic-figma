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
        move1: 'move 20s linear infinite',
        move2: 'move 10s linear infinite',
        move3: 'move 30s linear infinite',
        move4: 'move 15s linear infinite',
        move5: 'move 25s linear infinite',
        move6: 'move 10s linear infinite',
        bounce: 'bounce 2s ease infinite'
      }
    },
    fontFamily: {
      'outfit': ['Outfit', 'sans-serif'],
      'sora': ['Sora', 'sans-serif']
    },
    keyframes: {
      move: {
        '0%': { top: '0px' },
        '100%': { top: '100%' },
      },
      bounce: {
        '0%, 100%' : {
          transform: 'translateY(-25%)'
        },
        '50%' : {
          transform: 'translateY(0)'
        }
      }
    }
  },
  plugins: [],
}
