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
        tinta: '#16233B',
        papel: '#FFFFFF',
        nevoa: '#ECEFF3',
        broto: '#77DD77',
        folha: '#1D6B3A',
      },
      fontFamily: {
        sans: ['"Schibsted Grotesk"', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
