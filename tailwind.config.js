/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#11175D",
        brand: "#7A7A7A",
      },
    },
    fontFamily: {
      primary: ["Nunito", "sans-serif"],
      secondary: ["Inter", "sans-serif"],
    },
    container: {
      center: true,
    },
  },
  plugins: [],
};
