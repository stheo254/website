/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}', // Adjust for your project structure
    './node_modules/flyonui/dist/js/*.js',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'], // For bold/titles
        sans: ['Helvetica', 'Arial', 'sans-serif'], // For body/normal
      },
    },
  },
  plugins: [require('flyonui'), require('flyonui/plugin')],
};
