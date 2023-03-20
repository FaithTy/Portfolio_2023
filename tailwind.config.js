/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'computer': "url('/src/imgs/computer.jpg')",
        'me': "url('/src/imgs/Me.png')",
        'lmc': "url('/src/imgs/lmc.png')",
        'mentis': "url('/src/imgs/mentis.png')",
        'bulb-off': "url('/src/imgs/light-bulb.png')",
        'bulb-on': "url('/src/imgs/light-bulb-yellow.png')",
        'wave': "url('/src/imgs/wavesOpacity.svg')",
        'tilt': "url('/src/imgs/tilt.svg')",
        'waves': "url('/src/imgs/waves.svg')",
        'arrow': "url('/src/imgs/arrow.svg')",


      },
      backgroundSize: {
        '100%': '100%',

      },
      backgroundColor: {

      }
    },
    colors: {
      'primary': '#e94b5a',
      'off-primary': '#f18d96',
      'primary1': '#eb606d',
      'dark': '#292929',
      'offdark': '#1f1f1f',
      'white': '#FFFFFF',
      'offwhite': '#efefef',
      'black': '#000000',
      'yellow': '#ffb229'
       
    },
  },
  plugins: [],
}
