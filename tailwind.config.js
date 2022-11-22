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
      boxShadow: {
        upper:
          "0 -1px 3px 0 rgb(0 0 0 / 0.1), 0 -1px 2px -1px rgb(0 0 0 / 0.1)",
        "upper-md":
          "0 -4px 6px -1px rgb(0 0 0 / 0.1), 0 -2px 4px -2px rgb(0 0 0 / 0.1)",
      },
    },
  },
  plugins: [require("@tailwindcss/line-clamp")],
}
