/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        cw: {
          green: "#08C884",
          hover: "#069F69",
          dark: "#161616",
          text: "#222222",
          muted: "#686868",
          mint: "#EBFFF7",
          purple: "#E9FFF7",
          soft: "#FBFBFB",
        },
      },
      fontFamily: {
        sans: ["Lato", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 10px 30px rgba(6,159,105,.16)",
        soft: "0 5px 18px rgba(0,0,0,.06)",
      },
    },
  },
  plugins: [],
};
