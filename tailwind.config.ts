import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#f8f4ef",
          100: "#eadfd1",
          200: "#d9c2aa",
          300: "#c59f7b",
          400: "#b37d53",
          500: "#965c36",
          600: "#784629",
          700: "#5f341d",
          800: "#482514",
          900: "#30170c",
        },
        ink: "#161616",
        sand: "#ede7de",
        sun: "#c5943f",
        coral: "#b4492d",
      },
      fontFamily: {
        display: ['"Fraunces"', "Georgia", "serif"],
        sans: ['"Manrope"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        card: "0 22px 40px -28px rgba(18, 18, 18, 0.34)",
      },
      backgroundImage: {
        "hero-glow":
          "linear-gradient(135deg, rgba(24,24,24,0.98) 0%, rgba(58,31,16,0.96) 52%, rgba(123,69,35,0.92) 100%)",
      },
    },
  },
  plugins: [forms],
};

export default config;
