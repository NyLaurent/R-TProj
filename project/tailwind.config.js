/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#010851',
        'secondary':'#9A7AF1',
        'tartiary':'#707070',
        'pink':'#EE9AE5'
      },
      backgroundImage: {
        'gradientBg': 'linear-gradient(99deg, #EE9AE5 0%, #5961F9 100%)', 
      },
    },
   
  },
  plugins: [],
}

