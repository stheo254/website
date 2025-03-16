/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust for your project structure
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // For bold/titles
        sans: ['Helvetica', 'Arial', 'sans-serif'], // For body/normal
      },
    },
  },
  plugins: [],
};
