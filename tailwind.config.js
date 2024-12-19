const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Playfair Display"', "serif"], // Custom font for the logo
      },
      animation: {
        fadeIn: "fadeIn 1s ease-in-out",
      },
      colors: {
        primary: "#EF4444", // red-500
        secondary: "#1F1E18", // custom hover background
        dark: "#1A1A1A", // background black
        lightGray: colors.gray[400],
        darkGray: colors.gray[900],
      },
    },
  },
  plugins: [],
};
