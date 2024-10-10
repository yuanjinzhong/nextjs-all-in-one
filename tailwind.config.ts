import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",   /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
