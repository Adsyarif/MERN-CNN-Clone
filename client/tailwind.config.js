/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      spacing: {
        "15%": "15%",
      },
      grayscale: {
        50: "50%",
      },
    },
  },
  plugins: [],
};
