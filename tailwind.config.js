/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "brand-aqua": "#00956F",
        "brand-purple": "#4D0B75",
        "brand-purple-dark": "#2C1541",
        "brand-yellow": "#F9EB57",
        "brand-gray": "#717B87",
        "brand-lavender": "#8873B6",
        "brand-dark-green": "#033830",
      },
    },
  },
  plugins: [],
};
