/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customeOrange: "#ee7917",
        customeGreen: "#00933f",
        customeBlue: "#009be1",
        customeRed: "#e53129",
      },
      screens: {
        "4kDisplay": "2550px",
      },
    },
  },
  plugins: [],
};
