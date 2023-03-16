/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Overpass", "ui-sans-serif", "system-ui"],
    },
    extend: {
      colors: {
        "light-grey": "hsl(217, 12%, 63%)",
        "medium-grey": "hsl(214, 21%, 16%)",
        "dark-blue": "hsl(213, 19%, 18%)",
        "darkest-blue": "hsl(216, 12%, 8%)",
      },
    },
  },
  plugins: [],
};
