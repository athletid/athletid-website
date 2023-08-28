module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./public/locales/en/**/*.json",
    "./public/locales/fr/**/*.json"
  ],
  theme: {
    screens: {
      'md': '768px',
      'lg' : '1024px',
      'xl' : '1280px',
      '2xl' : '1536px',
      '3xl' : '1700px',
    },
    extend: {
      colors: {
        'timeRed': '#E63D31',
        'timeGreen': '#4DAF00',
        'greyShade' : 'rgba(0, 0, 0, 0.02)',
        'timeRedHover' : '#D93A2F',
        'blackShade' : '#242629',
        'almostBlack' : '#25282B',
        'darkWhite' : '#EBEBEB',
        'darkGrey' : '#C0C0C0'
      },
      borderRadius: {
        'small' : '8px',
        'medium': '20px'
      },
      margin: {
        'medium': "72px",
      }
    },
  },
  plugins: [
    require('tw-elements/dist/plugin')
  ],
}
