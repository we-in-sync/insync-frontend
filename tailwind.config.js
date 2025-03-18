/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx,jsx}', './components/**/*.{js,ts,tsx,jsx}', './screens/**/*.{js,ts,tsx,jsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'lavender': '#C6C2F2',
        'obsidian': '#121212',
        'cream': '#FFF6EE',
      }
    },
  },
  plugins: [],
};
