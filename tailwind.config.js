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
      'sm': '350px',
      // => @media (min-width: 350px) { ... }

      'lg': '720px',
      // => @media (min-width: 720px) { ... }
    },
    
  },
  plugins: [],
}

