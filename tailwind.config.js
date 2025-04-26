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
            primary: twColors.slate["100"],
            secondary: twColors.slate["700"],
          },
          pop: {
            primary: twColors.red["600"],
            secondary: twColors.teal["700"],
          },
          btn: {
            primary: twColors.teal["700"],
            hover: twColors.red["600"],
            disabled: twColors.gray["400"],
            txt: twColors.gray["900"],
          },
        },
        dark: {
          dull: {
            primary: twColors.black,
            secondary: twColors.slate["300"],
          },
          pop: {
            primary: twColors.red["500"],
            secondary: twColors.cyan["300"],
          },
          btn: {
            primary: twColors.cyan["700"],
            hover: twColors.red["600"],
            disabled: twColors.gray["400"],
            txt: twColors.white,
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
