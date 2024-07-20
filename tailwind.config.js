/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["**/*.html"],
  theme: {
    extend: {
      animation: {
        "180spin": "half-spin 1s ease-out infinite"
      },
      keyframes:{
        "half-spin":{
          "0%": {
            transform: "rotate(45deg)"
          },
          "100%":{
            transform: "rotate(135deg)"
          }
        }
      }
    },
  },
  plugins: [],
}

