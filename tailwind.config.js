const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        serif: ["var(--font-playfair)", ...fontFamily.serif],
        sans: ["var(--font-montserrat)", ...fontFamily.sans],
      },
      colors: {
        skin: {
          accent: "#F05945",
          base: "#FFFCF7",
          card: "#FEF4E1",
          dark: "#363636",
          fill: "#F7F3E9",
        },
      },
    },
  },
}
