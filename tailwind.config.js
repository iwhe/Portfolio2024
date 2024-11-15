/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "primary-bg": "linear-gradient(45deg, #2D0808 0%, #16042D 100%)",
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        keania: ["Keania One"],
        anton: ["Anton", "sans-serif"],
        fira: ["Fira Code", "monospace"],
        alfaSlab: ["Alfa Slab One", "serif"],
      },
      fontWeight: {
        alfaSlab: ["400"],
      },
      fontSize: {
        otherSideHeading: ["2rem"],
      },
      dropShadow: {
        button: "3px 3px 6px #65656561", // x-offset, y-offset, blur, color
      },
      textColor: {
        white: "#FFF1DE",
      },
    },
  },
  plugins: [],
};
