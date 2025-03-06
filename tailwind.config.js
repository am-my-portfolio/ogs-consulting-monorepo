const { createThemes } = require("tw-colors");
const esmRequire = require("esm")(module);
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
          primary: twColors.slate["100"],
          secondary: twColors.slate["500"],
          "pop-primary": twColors.red["600"],
          "pop-secondary": twColors.teal["700"],
        },
        dark: {
          primary: twColors.black[""],
          secondary: twColors.slate["300"],
          "pop-primary": twColors.red["500"],
          "pop-secondary": twColors.cyan["300"],
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
