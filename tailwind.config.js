/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        "sans": ["iranSans"]
      },
      transitionDuration: {
        '1500': '1500ms'
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    //tailwind scrollbar plugin
    require('tailwind-scrollbar')({ nocompatible: true }),

  ],
}