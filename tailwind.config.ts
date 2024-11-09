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
      padding: "2rem",
      screens: {
        lg: "960px",
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        light: "#FFFFFF",

        primary: {
          300: "#FFD966",
          400: "#FF9F40",
          500: "#FF7A29",
        },

        secondary: {
          300: "#7EE1A3",
        },

        gradient: {
          "primary-300-400":
            "linear-gradient(32.95deg, #FFCC21 8.75%, #FF963C 86.64%)",

          dark: {
            500: "#333333",
            600: "#000000",
          },

          gray: {
            400: "#7D7D7D",
          },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
