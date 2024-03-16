/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    screens:{
      'mobile':"400px",
      'md':{'max':'600px'}
     },
    extend: {
      colors: {
        'primary': "#1476ff",
        'secondary': "#f3f5ff",
        'light': "#f9faff",
      },
    },
  },
  plugins: [],
}
