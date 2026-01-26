const plugin = require("tailwindcss/plugin");

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        mono: ["var(--font-geist-mono)"],
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
  future: {
    hoverOnlyWhenSupported: true,
  },
};
