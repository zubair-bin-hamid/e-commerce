import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Add custom colors
        "main-text-color": "#292826",
        "text-color": "#585858",
        primary: "#1A6DFB",
        "custom-yellow": "#facc15",
      },
      fontSize: {
        // Add custom font sizes
        h1: "34px",
        h3: "20px",
        normal: "14px",

        h1sm: "26px",
        h3sm: "16px",
      },
    },
  },
  plugins: [],
};
export default config;
