/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "outfit": "Outfit"
      }
    },
    fontFamily: {
      "outfit" : "Outfit"
    },
    colors: {
      'white': "hsl(0,0%,100%)",
      'lightGray': "hsl(212,45%,89%)",
      'grayishBlue': "hsl(220,15%,55%)",
      'darkBlue': "hsl(218,44%,22%)",
    },
    screens: {
      'sm': '375px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px'
    },
    extend: {},
  },
  plugins: [],
}