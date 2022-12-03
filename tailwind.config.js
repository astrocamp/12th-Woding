module.exports = {
  purge: [
    "./app/**/*.html.erb",
    "./app/helpers/**/*.rb",
    "./app/javascript/**/*.js",
    "./app/javascript/**/*.vue",
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        majorColor: "fb8500",
        minorColor: "ffb703", 
      },
      screens:{
        lg: '1140px'
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
