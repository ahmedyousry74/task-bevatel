/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [
    './node_modules/preline/preline.js'
  ],
  theme: {
    extend: {
      colors: {
        'primary-color': '#119F49',
        'second-color': '#050505',
        'grey-color': '#64748b',
        "dark-color": '#1D1953',
        "dark-alt-color": '#334155',
        'light-color': '#f1f5f9',
      },
    },
  },
  plugins: [
    require('preline/plugin'),
  ],
}

