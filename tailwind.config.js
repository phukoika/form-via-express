/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        body: ["DM sans", "sans-serif"],
      },
      colors: {
        primary: "#fdba4d",
      },
    },
  },
  plugins: [],
};
