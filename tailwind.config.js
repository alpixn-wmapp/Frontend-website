/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
       colors: {
        nightblack: "rgb(11, 12, 14)",
      },
    },

  },
  plugins: [],
}

