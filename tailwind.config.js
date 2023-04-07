/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'heading-primary': 'rgb(80, 0, 155)',
        'outline-color' : 'rgb(108, 102, 192)'
      },
      height:{
        '150' : '34rem'
      }
    },
  },
  plugins: [],
}


