module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      height: {
        'sm': '15rem',
        'lg': '30rem',
        'base': '35rem',
        'xl': '40rem',
        '2xl': '48rem',
      },
      colors: {
        'skYellow': '#FBD224',
        'skGreen': '#00B481',
        'skBlue': '#0A2533',
        'grey': '#0A2533',
      },
      backgroundImage: theme => ({
        'hero-pattern': "url('https://source.unsplash.com/oGhTfu1UrOY')",
      }),
      fontSize: {
        '10xl': ['3.875rem', '67px'],
        'big': ['42px', '54px'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
