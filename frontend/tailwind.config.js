/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,tsx,ts,js,jsx}"],
  theme: {
    extend: {fontFamily:{
      main:['Poppins'],
      logo:['gameofthrones']
    },
  colors:{
    'primary-color':'#003049',
    'accent-color':'#d62828',
    'secondary-accent':'#f77f00',
    'highlight-color':'#fcbf49',
    'other-color':'#fff'
  }
  },
  },
  plugins: [],
}

