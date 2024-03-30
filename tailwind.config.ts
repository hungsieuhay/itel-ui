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
      fontSize: {
        "3xl": ["2rem", "2.5rem"],
        "4xl": ["2.5rem", "3rem"],
        "5xl": ["3rem", "3.5rem"],
        "6xl": ["3.5rem", "4.5rem"],
        "7xl": ["6rem", "7rem"],
      },
      colors: {
        "neutral-0": "#ffffff",
        "neutral-50": "#f9f9f9",
        "neutral-100": "#f1f1f2",
        "neutral-200": "#E6E7E8",
        "neutral-300": "#cccccc",
        "neutral-500": "#666666",
        "neutral-600": "#333333",
        "neutral-700": "##1F1F1F",
        "neutral-800": "#181818",
        "neutral-900": "#121212",
        "red-100": "#FFF1F2",
        "red-300": "#FFAFA3",
        "red-500": "#EA0029",
        "red-400": "#F6564F",
        "yellow-400": "#FFD262",
      },
      aspectRatio: {
        "4/3": "4 / 3",
        "3/4": "3 / 4",
        "2/3": "2 / 3",
      },
      gap: {
        "18": "4.5rem",
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
        ".block-img": {
          position: "relative",
          zIndex: 0,
          "> img": {
            position: "absolute",
            inset: "0",
            height: "100%",
            width: "100%",
          },
        },
        ".block-square": { paddingBottom: "100%" },
      });
    },
  ],
};
export default config;
