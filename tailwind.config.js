/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semi-transparent whites for overlays & frost
        glass: {
          light: "rgba(255, 255, 255, 0.1)",
          medium: "rgba(255, 255, 255, 0.3)",
          strong: "rgba(255, 255, 255, 0.6)",
        },
      },
      boxShadow: {
        // Matches Apple's depth-y glass shadow
        glass: "0 8px 32px rgba(0,0,0,0.37)",
      },
      backdropBlur: {
        // Extra strong blur layer
        xl: "20px",
        "3xl": "40px",
      },
      blur: {
        "3xl": "64px",
      },
      backgroundImage: {
        "primary-bg": "linear-gradient(45deg, #2D0808 0%, #16042D 100%)",
        "glass-light":
          "linear-gradient(to br, rgba(255,255,255,0.4), transparent)",
        "glass-angle":
          "linear-gradient(to tr, rgba(255,255,255,0.6), rgba(255,255,255,0.2), transparent)",
        "liquid-bg": "linear-gradient(to br, #9333ea, #3b82f6, #ec4899)", // purple → blue → pink
      },
      fontFamily: {
        figtree: ["Figtree", "sans-serif"],
        keania: ["Keania One"],
        anton: ["Anton", "sans-serif"],
        fira: ["Fira Code", "monospace"],
        alfaSlab: ["Alfa Slab One", "serif"],
        roboto: ["Roboto", "sans-serif"],
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

      perspective: {
        1000: "1000px",
      },
      rotate: {
        "y-180": "rotateY(180deg)",
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
      });
    },
  ],
};
