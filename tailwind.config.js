const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
      },
      animation: {
        "star-btn": "star-btn calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        "star-btn": {
          "0%": { offsetDistance: "0%" },
          "100%": { offsetDistance: "100%" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
