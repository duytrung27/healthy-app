import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      screens: {
        lg: "960px",
        "2xl": "1400px",
      },
    },
    extend: {
      backgroundImage: {
        "primary-300-400":
          "linear-gradient(32.95deg, #FFCC21 30%, #FF963C 90%)",
      },
      colors: {
        light: "#FFFFFF",

        primary: {
          300: "#FFCC21",
          400: "#FF963C",
          500: "#EA6C00",
        },
        secondary: {
          300: "#8FE9D0",
        },
        dark: {
          500: "#414141",
          600: "#2E2E2E",
        },

        gray: {
          400: "#777777",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      maxWidth: {
        "4xl": "960px",
        "5xl": "1280px",
      },
      dropShadow: {
        text: "0px 0px 2px #FC7400",
      },
      animation: {
        spin: "spin 1s linear infinite",
      },
      keyframes: {
        spin: {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
