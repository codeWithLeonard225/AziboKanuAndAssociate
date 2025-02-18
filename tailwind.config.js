/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens:{
        sm: "340px",
        md: "540px",
        lg: "768px",
        xl: "1180px",
      },
      colors:{
        primary: "#106EBE",
        secondary: "#fb923c"
      },
      container:{
        // center:true,
        padding:{
          DEFAULT:"",
          // md:"1rem",
          // xl: "2rem",
          "2xl": "6rem",
        }
      }
    },
  },
  plugins: [],
}