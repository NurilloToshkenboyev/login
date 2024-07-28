/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container: {
        padding:'20px',
        center:true,
        screens:{
          lg:'1440px',
        }
      },
      colors: {
        primary: "#3A4374",
        secondary:"#647196",
        accent:"#4661E6",
      }
    },
  },
  plugins: [],
}
