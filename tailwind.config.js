/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        nunito: ['Nunito', 'sans-serif'],
      },
      colors: {
        'primary': '#B5A1E5',
        'on-primary': '#100E17',
        'background': '#131214',
        'on-background': '#EAE6F2',
        'surface': '#1D1C1F',
        'on-surface': '#DDDAE5',
        'on-surface-variant': '#7B7980',
        'on-surface-variant-2': '#B9B6BF',
        'outline': '#3E3D40',
        'bg-aqi-1': '#89E589',
        'on-bg-aqi-1': '#1F331F',
        'bg-aqi-2': '#E5DD89',
        'on-bg-aqi-2': '#33311F',
        'bg-aqi-3': '#E5C089',
        'on-bg-aqi-3': '#332B1F',
        'bg-aqi-4': '#E58989',
        'on-bg-aqi-4': '#331F1F',
        'bg-aqi-5': '#E589B7',
        'on-bg-aqi-5': '#331F29',
        'white': 'hsl(0, 0%, 100%)',
        'white-alpha-4': 'hsla(0, 0%, 100%, 0.04)',
        'white-alpha-8': 'hsla(0, 0%, 100%, 0.08)',
        'black-alpha-10': 'hsla(0, 0%, 0%, 0.1)',
      },
      fontSize: {
        'heading': '5.6rem',
        'title-1': '2rem',
        'title-2': '1.8rem',
        'title-3': '1.6rem',
        'body-1': '2.2rem',
        'body-2': '2rem',
        'body-3': '1.6rem',
        'label-1': '1.4rem',
        'label-2': '1.2rem'
      },
      borderRadius: {
        '28': '28px',
        '16': '16px',
        'pill': '500px',
        'circle': '50%'
      }
    },
  },
  plugins: [],
}