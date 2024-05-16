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
        'gradientBg': 'linear-gradient(135deg, #f6d365 0%, #fda085 100%)', 
      },
    },
   
  },
  plugins: [],
}

