module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false,
  theme: {
    extend: {
      fontFamily: {
        Headers: ['Poppins'],
        HeadersAlt: ['Permanent Marker'],
        HeadersAlt2: ['Montserrat'],
        
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}