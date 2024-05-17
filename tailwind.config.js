/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      width:{"2/5":"47%"},
      height:{"4/6":"78%",
        "3/5":"62%"
      }
    },
  },
  plugins: [],
}