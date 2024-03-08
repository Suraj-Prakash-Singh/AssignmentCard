/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        'Montserrat': ['Montserrat', 'sans-serif']
      },
    },
    screens: {
      'sm': '500px',
      // => @media (min-width: 500px) { ... }

      'lg': '720px',
      // => @media (min-width: 720px) { ... }
    },
    
  },
  plugins: [],
}

