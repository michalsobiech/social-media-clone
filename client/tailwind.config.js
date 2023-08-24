/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        fb: {
          blue: "hsl(213 89% 52%)",
          "blue-dark": "hsl(214 82% 49%)",
          green: "#42b72a",
          "green-dark": "#36a420",
        },
      },
      screens: {
        xs: "480px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
