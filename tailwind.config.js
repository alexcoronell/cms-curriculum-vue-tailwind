/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '576',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1440px'
    },
    colors: {
      'primary': '#4d7c0f',
      'primary-lighter': '#65a30d',
      'primary-lightest': '#a3e635',
      'primary-darkest': '#1a2e05',
      'primary-darker': '#365314',
      'background': '#082f49',
      'background-darker': '#03111b',
      'default':'#e5e7eb',
      'white': '#FFFFFF',
      'black': '#000000',
      'red': '#FF0000',
      'transparent': 'transparent'
    },
    extend: {},
  },
  plugins: [],
}

