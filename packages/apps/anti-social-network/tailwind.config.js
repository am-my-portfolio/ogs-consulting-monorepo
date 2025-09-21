const { createThemes } = require('tw-colors');
const twColors = require('tailwindcss/colors');

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/@am-ogs/react-ui/**/*.js', // <<-- this is important (if not node-linker=hoisted)
    // '../../../node_modules/@am-ogs/react-ui/**/*.js', // <<-- this is important (if node-linker=hoisted, see .npmrc)
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'], // https://fonts.google.com/specimen/Montserrat
      },
    },
  },
  plugins: [
    createThemes(
      {
        light: {
          dull: {
            primary: twColors.white,
            secondary: twColors.slate['600'],
          },
          pop: {
            primary: twColors.rose['500'],
            secondary: twColors.black,
          },
        },
        dark: {
          dull: {
            primary: twColors.black,
            secondary: twColors.slate['300'],
          },
          pop: {
            primary: twColors.orange['500'],
            secondary: twColors.orange['600'],
          },
        },
      },
      { defaultTheme: 'light' },
    ),
  ],
  variants: {
    width: ['responsive', 'hover', 'focus', 'active'],
    border: ['hover'],
    extend: {
      textColor: ['active'],
    },
  },
};
