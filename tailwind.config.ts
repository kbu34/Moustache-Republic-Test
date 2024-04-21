import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "header-bg": "#F6F6F7",
        "font-dark": "#222222",
        "font-light": "#888888",
        "required-star": "#C90000",
        "border-light": "#CCCCCC",
        "border-dark": "#222222",
      },
    },
  },
  plugins: [],
};
export default config;
