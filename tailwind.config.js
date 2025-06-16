/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],     // existing
        logo: ['Pacifico', 'cursive'],     // ✅ add this
      },
    },
  },
  plugins: [],
}
