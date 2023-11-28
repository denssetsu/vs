/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },
    extend: {
      colors: {transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
    },
    },
    keyframes: {
      wavingHand: {
        '0%': { transform: 'rotate(0deg)' },
        '50%': { transform: 'rotate(15deg)' },
        '100%': { transform: 'rotate(-15deg)' },
      },
    },
    animation: {
      wavingHand: 'wavingHand 2s infinite',
    },
  },
  plugins: [],
}

