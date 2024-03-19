import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "scroll-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
        "scroll-right": {
          from: { transform: "translateX(-100%)"},
          to: { transform: "translateX(0)"},
        }
      },
      fontFamily: {
        tilt: ["Rubik Mono One", "monospace"],
      },
      animation: {
        "infinite-scroll-left": "scroll-left 35s linear infinite",
        "infinite-scroll-right": "scroll-right 35s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
