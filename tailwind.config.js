/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
    breakpoints: {
      sm: "576px",
      md: "700px",
      lg: "1000px",
      xl: "1220px",
      xxl: "1400px",
      custom: "700px",
    },
  },
  plugins: [],
};
