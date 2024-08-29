/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "1px",
      md: "700px",
      lg: "1000px",
      xl: "1220px",
      xxl: "1400px",
      custom: "1200px",
      Reactdot: "",
      Craftsmanship: "1479",
    },
    extend: {
      keyframes: {
        fadein: {
          "0%": {
            opacity: "0",
            // transform: "translateY(-10px)",
          },
          // "50%": {
          //   opacity: "0.5",
          //   // transform: "translateY(-10px)",
          // },
          "100%": {
            opacity: "1",
            // transform: "translateY(0)",
          },
        },
        fadeout: {
          "0%": {
            opacity: "1",
          },
          // "50%": {
          //   opacity: "0.5",
          //   // transform: "translateY(-10px)",
          // },
          "100%": {
            opacity: "0",
            // transform: "translateY(-10px)",
          },
        },
      },
      animation: {
        fadein: "fadein 0.5s",
        fadeout: "fadeout 0.5s",
      },
    },
  },
  plugins: [],
};
