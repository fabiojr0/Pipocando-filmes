/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        "navBg" : "rgba(29,	33,	30, .75)"
      }
    },
  },
  plugins: [],
}

