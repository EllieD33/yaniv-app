/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Cantarell', 'Arial', 'sans-serif'],
        heading: ['Fjalla One', 'serif'],
      },
    },
  },
  plugins: [],
}

