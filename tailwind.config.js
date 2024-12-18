const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#B22222",
        secondary: "#008000",
        background: "#F5F5DC",
        text: "#333333",
        lightText: "#E5E5E5",
        white: "#FFFFFF",
      },
    },
  },
  plugins: [],
};
