/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary : '#E79663',
        secondary : '#26C9C7'
      },
      backgroundImage : {
        'home-bg': "url('../src/assets/home.svg')"
      }
    }
  },
  plugins: [],
}
