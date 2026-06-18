import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        parchment: "#FAF6F0",
        ink: "#1A1410",
        warmgray: "#8B8178",
        gold: "#C9A84C",
        goldLight: "#E8D59E",
        amber: "#A67C3D",
        cream: "#F5EDE0",
        deepNavy: "#1C1A2E",
        slate: "#2D2B3F",
        mutedPurple: "#6B5E7B",
        softRose: "#C4A49A",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
        literary: ["var(--font-literary)", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;