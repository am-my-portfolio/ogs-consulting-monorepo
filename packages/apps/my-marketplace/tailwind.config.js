const { createThemes } = require("tw-colors");
const twColors = require("tailwindcss/colors");
const twForms = require("@tailwindcss/forms")({
  strategy: "class",
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "node_modules/@am-ogs/vue-ui/**/*.js", // <<-- this is important
  ],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        bruno: ["Bruno Ace"], // https://fonts.google.com/specimen/Bruno+Ace
        jersey: ["Jersey 10 Charted", "sans-serif"], // doesnt work
        gowund: ["Gowun Dodum"], // https://fonts.google.com/specimen/Gowun+Dodum?categoryFilters=Feeling:%2FExpressive%2FCalm
        orbitron: ["Orbitron"], // https://fonts.google.com/specimen/Orbitron?classification=Display&stroke=Sans+Serif
        montserrat: ["Montserrat"], // https://fonts.google.com/specimen/Montserrat
      },
    },
  },
  plugins: [
    // vfSlider,
    twForms,
    // https://palettes.shecodes.io/
    createThemes(
      {
        light: {
          dull: {
            primary: twColors.white,
            secondary: twColors.gray["900"],
          },
          pop: {
            primary: twColors.pink["600"],
            secondary: twColors.black,
          },
          btn: {
            primary: twColors.pink["600"],
            hover: twColors.gray["700"],
            disabled: twColors.gray["400"],
            txt: twColors.white,
          },
        },
        dark: {
          dull: {
            primary: twColors.stone["900"],
            secondary: twColors.stone["200"],
          },
          pop: {
            primary: twColors.teal["400"],
            secondary: twColors.stone["100"],
          },
          btn: {
            primary: twColors.teal["500"],
            hover: twColors.stone["600"],
            disabled: twColors.gray["400"],
            txt: twColors.gray["800"],
          },
        },
      },
      { defaultTheme: "light" },
    ),
  ],
  variants: {
    width: ["responsive", "hover", "focus", "active"],
    border: ["hover"],
    extend: {
      textColor: ["active"],
    },
  },
};
