module.exports = {
  purge: ['./pages/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        capri: '#00B9FF',
        darkcapri: '#008ee0',
      },
    },
    fontFamily: {
      sans: `'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
