/** @type {import('tailwindcss').Config} */

// tailwind.config.js

// tailwind.config.js

module.exports = {
  content: ["./App.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    bottom: {
      62: "250px",
    },

    extend: {
      fontFamily: {
        poppins: ["Poppins-Regular", "sans-serif"],
        poppinssemibold: ["Poppins-Semibold", "sans-serif"],
      },
    },
  },
  plugins: [],
};
