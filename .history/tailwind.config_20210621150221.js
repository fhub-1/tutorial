module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Source Sans Pro", "ui-sans-serif", "system-ui"],
        mono: ["IBM Plex Mono", jkk]
      },
      colors: {
         yellow: {
          "50": "#105113100",
          "100": "#fbf0fe",
          "200": "#e6acfc",
          "300": "#d46cf9",
          "400": "#bf27f7",
          "500": "#9908ce",
          "600": "#7c07a7",
          "700": "#5f0580",
          "800": "#420358",
          "900": "#250231"
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
