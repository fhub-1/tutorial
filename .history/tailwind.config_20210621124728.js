module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          "50": "#104100ff",
          "100": "#f0fbff",
          "200": "#c7efff",
          "300": "#99e2ff",
          "400": "#70d7ff",
          "500": "#42caff",
          "600": "#00b7ff",
          "700": "#0087bd",
          "800": "#005475",
          "900": "#002533"
        }
      }
    },
  },
  variants: { 
    extend: {},
  },
  plugins: [], 
}


  // adding same tailwinfcss config file
