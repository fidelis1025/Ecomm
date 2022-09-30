/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      md: '375px',
      xl: '1440px'
    },
    fontFamily: {
      mono: ['Kumbh Sans', 'sans-serif']
    },
    fontWeight: {
      sm: '400',
      bg: '700'
    },
    extend: {
      colors: {
        orange: 'hsl(26, 100%, 55%)',
        paleOrange: 'hsl(25, 100%, 94%)',

        veryDarkBlue: 'hsl(220, 13%, 13%)',
        darkGrayishBlue: 'hsl(219, 9%, 45%)',
        grayishBlue: 'hsl(220, 14%, 75%)',
        lightGrayishBlue: 'hsl(223, 64%, 98%)',
        white: 'hsl(0, 0%, 100%)',
        lightBlack: 'rgba(0, 0, 0,0.75)',
      },
      dropShadow: {
        'xl': '0 8px 8px rgba(255, 125, 26, 0.4)'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
