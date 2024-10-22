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
          primary: twColors.neutral["200"],
          secondary: twColors.zinc["500"],
          "pop-primary": twColors.rose["400"],
          "pop-secondary": twColors.teal["700"],
        },
        dark: {
          primary: twColors.neutral["800"],
          secondary: twColors.zinc["500"],
          "pop-primary": twColors.orange["700"],
          "pop-secondary": twColors.teal["300"],
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
