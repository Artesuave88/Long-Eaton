import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";

const config: Config = {
  content: ["./src/**/*.{html,js,svelte,ts}"],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "#2F5D7C",
          primaryDark: "#1F3E55",
          primaryLight: "#4F7FA3",
          accent: "#38BDF8",
          background: "#F8FAFC",
          surface: "#FFFFFF",
          section: "#F1F5F9",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#64748B",
        },
      },
      fontFamily: {
        display: ['"Inter"', '"Segoe UI"', "ui-sans-serif", "system-ui", "sans-serif"],
        sans: ['"Inter"', '"Segoe UI"', "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        sm: "0 2px 10px rgba(15, 23, 42, 0.05)",
        card: "0 8px 24px rgba(15, 23, 42, 0.06)",
        lift: "0 12px 28px rgba(15, 23, 42, 0.1)",
      },
      borderRadius: {
        xl: "0.875rem",
        "2xl": "1rem",
      },
      spacing: {
        18: "4.5rem",
      },
      maxWidth: {
        shell: "80rem",
      },
    },
  },
  plugins: [forms],
};

export default config;
