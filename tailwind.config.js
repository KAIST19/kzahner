const { fontFamily } = require('tailwindcss/defaultTheme');

module.exports = {
  mode: 'jit',
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: {
          400: 'rgb(218, 41, 28)',
          500: 'rgb(198, 31, 18)',
        },
        dark: '#333333',
        teal: {
          400: 'rgb(39, 183, 202)',
          300: 'rgb(67, 195, 212)',
          200: 'rgb(98, 207, 222)',
        },
        darkbg: {
          900: 'rgb(15, 15, 15)',
          800: 'rgb(20, 20, 20)',
          700: 'rgb(25, 25, 25)',
        },
        lightbg: {
          100: 'rgb(249, 250, 251)',
          200: 'rgb(243, 244, 246)',
          300: 'rgb(229, 231, 235)',
        }
      },
      transitionProperty: {
        none: 'none',
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ['hover'],
      textColor: ['hover'],
      borderColor: ['hover'],
    },
  },
  plugins: [require('@tailwindcss/forms')],
  corePlugins: {
    // Disable transition-related core plugins
    transitionProperty: false,
    transitionDuration: false,
    transitionTimingFunction: false,
    transitionDelay: false,
  }
};
