/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    extend: {
      colors : {
        clock : '#252525',
      }
    },
  },
  plugins: [],
}

