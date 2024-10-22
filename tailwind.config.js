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
          primary: twColors.orange["50"], // '#e6ddda'
          secondary: twColors.zinc["500"],
          "pop-primary": twColors.rose["500"],
          "pop-secondary": "#233319", // closest twColors.lime["900"],
        },
        dark: {
          primary: twColors.slate["800"],
          secondary: twColors.zinc["600"],
          "pop-primary": twColors.rose["500"],
          "pop-secondary": twColors.emerald["400"],
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
