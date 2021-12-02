const colors = require('tailwindcss/colors');

module.exports = {
  mode: 'jit',
  purge: [
    './index.html',
    './src/**/*.{vue, js}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    container : {
      center: true,
      padding : {
        DEFAULT: '2rem',
        sm: '2rem',
        md: '3rem',
        lg: '4rem'
      }
    },
    extend: {
      fontFamily: {
        'sans' : ['Poppins', 'sans-serif']
      },
      colors: {
        'teal' : colors.teal,
        'rose' : colors.rose,
        'sky' : colors.sky
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
