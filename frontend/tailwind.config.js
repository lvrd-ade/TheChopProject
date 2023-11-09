/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors:{
        'cust-col': '#000130'
      },
      borderWidth:{
        'cust-border': '3px'
      },
      width:{
        'cust-wd-75': '75vw',
        'cust-45p': '46%',
        'cust-40p': '40%'
      },
      height:{
        'cust-ht-75': '75vh'
      },
      spacing: {
        'cust-75p': '75%',
        'cust-65p': '65%',
        'cust-55p': '52%',
        'cust-60p': '60%',
        'cust-5p': '5%',
        'cust-1p': '1%',
        'cust-8p': '8%',
        'cust-10p': '10%'
      }
    },
  },
  plugins: [],
}
