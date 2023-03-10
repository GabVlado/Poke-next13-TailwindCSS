/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    
    extend: {
      backgroundImage: {
        'gradient-linear': 'linear-gradient(180deg, #5C5C5C 5.08%, #1F1F1F 100%);',
        'gradient-radial':'radial-gradient(50.29% 50.29% at 50% 49.71%, #454545 0%, #1F1F1F 100%, #5C5C5C 100%, #1F1F1F 100%);',
        'gradient-linear-2': 'linear-gradient(180deg, #B4B4B4 -4.86%, #343333 100%);',
        'gradient-linear-3': 'linear-gradient(141.79deg, rgba(106, 53, 238, 0.4) 0%, rgba(41, 42, 184, 0.3) 3.38%, rgba(29, 107, 130, 0.2) 6.77%, rgba(14, 53, 65, 0.470922) 10.58%, rgba(0, 0, 0, 0.7) 16.07%, rgba(0, 0, 0, 0) 100%);',
        'linear-custom1': 'linear-gradient(to bottom, #6A35EE 0%, rgba(41, 42, 184, 0.9) 3.14%, rgba(29, 107, 130, 0.8) 6.86%, rgba(0, 0, 0, 0.7) 18.96%, rgba(0, 0, 0, 0) 100%);'
      },
      dropShadow: {
        'card': 'drop-shadow(8px 12px 50px rgba(0, 0, 0, 0.4))'
      },
      colors: {

      }
    },
  },
  plugins: [],
}
