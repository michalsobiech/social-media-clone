/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "fb-blue": {
          DEFAULT: "hsl(213 89% 52%)",
          dark: "hsl(214 82% 49%)",
        },
        "fb-green": {
          DEFAULT: "#42b72a",
          dark: "#36a420",
        },
        "fb-gray": {
          100: "hsla(0, 0%, 83%, 1)",
          200: "hsla(0, 0%, 65%, 1)",
          300: "hsla(0, 0%, 44%, 1)",
          400: "hsla(0, 0%, 31%, 1)",
          500: "hsla(0, 0%, 25%, 1)",
          600: "hsla(0, 0%, 20%, 1)",
          700: "hsla(0, 0%, 15%, 1)",
          800: "hsla(0, 0%, 10%, 1)",
          900: "hsla(0, 0%, 7%, 1)",
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
