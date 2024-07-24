/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{vue,js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lime: {
          500: '#77DD77',
        },
      },
    },
  },
  plugins: [],
}

