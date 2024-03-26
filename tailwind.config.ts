import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

const config: Config = {
  darkMode: "selector",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Times New Roman"],
        itel: ["var(--font-itel)", ...fontFamily.sans],
      },
      container: {
        padding: {
          DEFAULT: "1rem",
        },
        center: true,
      },
      colors: {
        "neutral-0": "#ffffff",
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f1f1f2",
        "neutral-300": "#cccccc",
        "neutral-500": "#666666",
        "neutral-600": "#333333",
        "neutral-800": "#181818",
        "neutral-900": "#121212",
        "red-300": "#FFAFA3",
        "red-500": "#EA0029",
        "yellow-400": "#FFD262",
      },
    },
  },
  plugins: [
    function ({ addComponents }: { addComponents: any }) {
      addComponents({
        ".container": {
          maxWidth: "100%",
          "@screen xl": {
            maxWidth: "1272px",
          },
        },
      });
    },
  ],
};
export default config;
