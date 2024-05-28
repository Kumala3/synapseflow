import { nextui } from "@nextui-org/react";
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: { dark: "#101418" },
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "scroll-right": {
          from: { transform: "translateX(-100%)" },
          to: { transform: "translateX(0)" },
        },
      },
      fontFamily: {
        tilt: ["Rubik Mono One", "monospace"],
      },
      animation: {
        "infinite-scroll-left":
          "scroll-left var(--duration-time) linear infinite",
        "infinite-scroll-right":
          "scroll-right var(--duration-time) linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
