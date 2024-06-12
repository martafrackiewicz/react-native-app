/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app.{js,jsx,ts,tsx}',
    './app/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        spacemono: ['SpaceMono-Regular', 'sans-serif'],
        lato: ['Lato-Regular', 'sans-serif'],
        'lato-bold': ['Lato-Bold', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
