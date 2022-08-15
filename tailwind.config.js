module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors : {
      'light-brown' : '#ffcb8d',
      'white' : '#ffffff',
      'orange' : '#fb6f46',
      'dark-brown' : '#64494a',
      'army-green' : '#7c7f54',
      'ash-gray' : '#5f5951'
    },
    extend: {
      gridTemplateRows : {
        'hero-layout' : '200px minmax(0, 1fr)',
        'hero-layout-sm' : '80px minmax(0, 1fr)'
      },
      backgroundImage : {
        'hero' : 'url("/images/hero_bg.jpg")'
      },
      fontFamily : {
        'mont' : ['Montserrat', 'sans-serif']
      }
    },
  },
  plugins: [],
}