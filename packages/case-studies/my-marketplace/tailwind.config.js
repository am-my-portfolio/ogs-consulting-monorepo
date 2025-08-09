const { createThemes } = require("tw-colors"); // https://www.npmjs.com/package/tw-colors
const esmRequire = require("esm")(module);
// const vfSlider = require("@vueform/slider/tailwind"); // https://www.npmjs.com/package/@vueform/slider
const twColors = require("tailwindcss/colors");
const twForms = require("@tailwindcss/forms")({
  strategy: "class",
});
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
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
            primary: twColors.lime["50"],
            secondary: twColors.zinc["600"],
          },
          pop: {
            primary: twColors.orange["600"],
            secondary: twColors.emerald["700"],
          },
        },
        dark: {
          dull: {
            primary: twColors.slate["900"],
            secondary: twColors.zinc["300"],
          },
          pop: {
            primary: twColors.orange["500"],
            secondary: twColors.emerald["400"],
          }
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
