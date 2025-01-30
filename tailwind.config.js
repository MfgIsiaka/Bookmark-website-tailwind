/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}","./src/**/*.{html,js}"],
  theme: {
    extend: {},
    container:{
      center:true,
      fontFamily:{
        Poppins: ['Poppins', 'sans-serif']
      },
      padding:'1rem',
      screens: {
        lg:"1124px",
        xl:"1124px",
        "2xl":"1124px"
      }
    }
  },
  plugins: [],
}

