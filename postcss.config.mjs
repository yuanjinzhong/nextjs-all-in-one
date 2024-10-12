/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
  },
};

export default config;


// postcss.config.mjs 是一个配置文件，用于配置 PostCSS 插件，告诉 PostCSS 在处理 CSS 文件时使用哪些插件。在你的例子中，主要用来配置 Tailwind CSS 插件。