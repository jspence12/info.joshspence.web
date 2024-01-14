import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      spacing: {
        "nav-height": "3.75rem",
      },
      colors: {
        accent: "#58B09C",
      },
      screens: { "3xl": "1920px" },
    },
  },
  plugins: [],
};
export default config;
