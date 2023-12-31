/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    colors: {
      // ___________ Primary ________
      moderate_violet: 'hsl(263, 55%, 52%)',
      very_dark_grayish_blue: 'hsl(217, 19%, 35%)',
      very_dark_blackish_blue: 'hsl(219, 29%, 14%)',
      white: 'hsl(0, 0%, 100%)',

      // ___________ Neutral ________
      light_gray: 'hsl(0, 0%, 81%)',
      light_grayish_blue: 'hsl(210, 46%, 95%)',
    },

    fontFamily: {
      sans: ['Barlow Semi Condensed', 'sans-serif'],
    },

    extend: {
      screens: {
        mob: '375px',
      },
    },
  },
  plugins: [],
};
