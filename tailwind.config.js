/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      primary: "#313d4f",
      neutral1:"#6F8285", 
      neutral2: "#7B9BA8", 
      neutral3: "#C6DACD",
      acent1: "#dacdc6",
      acent2: "#dad3c6",
      textPrimary: "#000000",
      danger: colors.red,
      warning: colors.yellow,
      info: colors.sky,
      success: colors.green 
    },
    fontFamily: {
      mont: ['Montserrat']
    },
    extend: {},
  },
  plugins: [],
}
