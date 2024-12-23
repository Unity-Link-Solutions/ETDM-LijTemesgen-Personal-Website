const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        logo: ['"Playfair Display"', "serif"], // Custom font for the logo
      },
      backgroundImage: {
        "african-pattern-1": `url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='48' height='96' patternTransform='scale(1) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23000000ff'/%3E%3Cpath d='M0 0v8h4v4h4v4h4v4h4v-4h4v-4h4V8h4V4h4V0H0zm40 0v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4H4v-4H0v8h4v4h4v4h4v4h36v-8h-4v-4h-4v-4h-4v-4h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h4v-4h4v-4h4v-4h4v-4h8v4h4v4h4v4h4v-8h-4v-4h-4v-4h-4v-4h4V8h4V4h4V0h-8zM8 4h12v4h-4v4h-4V8H8V4zm24 32h4v4h4v4H28v-4h4v-4zM0 44v4h4v-4H0zm0 8v12h4v4h8v-4h4v-4h4v-4h4v-4H0zm40 0v4h4v4h4v-8h-8zM4 56h8v4H4v-4zm24 4v8h8v-8h-8zm8 8v4h8v-4h-8zm8 4v4h4v-4h-4zm-16-4h-8v4h8v-4zm-8 4h-8v4h8v-4zm-8 4H4v8h8v-8zm-8 0v-4H0v4h4zm24 0v4h-4v4h-4v4h-4v4h32v-4h-4v-4h-4v-4h-4v-4h-8zm0 8h8v4h-8v-4z' stroke-width='1' stroke='none' fill='%23ef4444ff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,0)' fill='url(%23a)'/%3E%3C/svg%3E")`,
        "african-pattern-2": `url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='48' height='96' patternTransform='scale(1) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23121212ff'/%3E%3Cpath d='M4 0v4H0v8h4V8h4V4h4V0H4zm16 0v4h-4v4h-4v4H8v4H4v4H0v24h4v4h4v4h4v4h4v4h4v4h4v-4h4v-4h4v-4h4v-4h4v-4h4V20h-4v-4h-4v-4h-4V8h-4V4h-4V0h-4zm12 0v4h4v4h4v4h4v4h4V8h-4V4h-4V0h-8zM20 8h4v4h4v4h4v4h4v4h4v16h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h-4v-4H8v-4H4V24h4v-4h4v-4h4v-4h4V8zm24 40v4h-4v4h-4v4h-4v4h-4v4h-4v24h4v4h8v-4h-4v-4h-4V72h4v-4h4v-4h4v-4h4v-4h4v-8h-4zM0 52v8h4v4h4v4h4v4h4v16h-4v4H8v4h8v-4h4V68h-4v-4h-4v-4H8v-4H4v-4H0z' stroke-width='1' stroke='none' fill='%23000000ff'/%3E%3Cpath d='M20 20v4h-4v4h-4v8h4v4h4v4h4v-4h4v-4h4v-8h-4v-4h-4v-4h-4zm0 8h4v8h-4v-8zm24 40v4h-4v4h-4v8h4v4h4v4h4v-8h-4v-8h4v-8h-4zM0 72v16h4v-4h4v-8H4v-4H0z' stroke-width='1' stroke='none' fill='%23000000ff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,-2)' fill='url(%23a)'/%3E%3C/svg%3E")`,
        "african-pattern-3": `url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='48' height='96' patternTransform='scale(2) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23000000ff'/%3E%3Cpath d='M0 0v8h4v4h4v4h4v4h4v-4h4v-4h4V8h4V4h4V0H0zm40 0v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4H4v-4H0v8h4v4h4v4h4v4h36v-8h-4v-4h-4v-4h-4v-4h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h4v-4h4v-4h4v-4h4v-4h8v4h4v4h4v4h4v-8h-4v-4h-4v-4h-4v-4h4V8h4V4h4V0h-8zM8 4h12v4h-4v4h-4V8H8V4zm24 32h4v4h4v4H28v-4h4v-4zM0 44v4h4v-4H0zm0 8v12h4v4h8v-4h4v-4h4v-4h4v-4H0zm40 0v4h4v4h4v-8h-8zM4 56h8v4H4v-4zm24 4v8h8v-8h-8zm8 8v4h8v-4h-8zm8 4v4h4v-4h-4zm-16-4h-8v4h8v-4zm-8 4h-8v4h8v-4zm-8 4H4v8h8v-8zm-8 0v-4H0v4h4zm24 0v4h-4v4h-4v4h-4v4h32v-4h-4v-4h-4v-4h-4v-4h-8zm0 8h8v4h-8v-4z' stroke-width='1' stroke='none' fill='%236b432cff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,0)' fill='url(%23a)'/%3E%3C/svg%3E")`,
        "african-pattern-4": `url("data:image/svg+xml,%3Csvg id='patternId' width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3E%3Cdefs%3E%3Cpattern id='a' patternUnits='userSpaceOnUse' width='48' height='96' patternTransform='scale(1) rotate(0)'%3E%3Crect x='0' y='0' width='100%25' height='100%25' fill='%23000000ff'/%3E%3Cpath d='M0 0v8h4v4h4v4h4v4h4v-4h4v-4h4V8h4V4h4V0H0zm40 0v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4h-4v4H4v-4H0v8h4v4h4v4h4v4h36v-8h-4v-4h-4v-4h-4v-4h-4v4h-4v4h-4v4h-4v4h-4v-4h-4v-4h4v-4h4v-4h4v-4h4v-4h8v4h4v4h4v4h4v-8h-4v-4h-4v-4h-4v-4h4V8h4V4h4V0h-8zM8 4h12v4h-4v4h-4V8H8V4zm24 32h4v4h4v4H28v-4h4v-4zM0 44v4h4v-4H0zm0 8v12h4v4h8v-4h4v-4h4v-4h4v-4H0zm40 0v4h4v4h4v-8h-8zM4 56h8v4H4v-4zm24 4v8h8v-8h-8zm8 8v4h8v-4h-8zm8 4v4h4v-4h-4zm-16-4h-8v4h8v-4zm-8 4h-8v4h8v-4zm-8 4H4v8h8v-8zm-8 0v-4H0v4h4zm24 0v4h-4v4h-4v4h-4v4h32v-4h-4v-4h-4v-4h-4v-4h-8zm0 8h8v4h-8v-4z' stroke-width='1' stroke='none' fill='%23131313ff'/%3E%3C/pattern%3E%3C/defs%3E%3Crect width='800%25' height='800%25' transform='translate(0,0)' fill='url(%23a)'/%3E%3C/svg%3E")`,
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
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
