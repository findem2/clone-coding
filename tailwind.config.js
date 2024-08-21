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
      custom: "410px",
    },
  },
  plugins: [],
};
