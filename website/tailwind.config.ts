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
        marquee: {
          from: { transform: "translateX(0%)"},
          to: { transform: "translateX(-100%)"}
        }
      },
      fontFamily: {
        "tilt": ["Rubik Mono One", "monospace"],
      },
      animation: {
        marquee: "marquee 5s linear infinite"
      }
    },
  },
  plugins: [],
};
export default config;
