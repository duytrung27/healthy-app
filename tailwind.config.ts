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
        gradient: {
          "primary-300-400":
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",
        },
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
