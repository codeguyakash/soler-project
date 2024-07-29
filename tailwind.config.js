/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#1e3a8a",
        secondary: "#ff4fse",
      },
      backgroundImage: {
        "custom-gradient": "linear-gradient(to right, #1e40af, #10b981)",
      },
      fontFamily: {
        primary: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animated")],
};
