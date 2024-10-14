/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    tailwindcss: {},
    //自动为 CSS 属性添加浏览器前缀，以确保你的 CSS 能够在不同浏览器上兼容。
    // 现代浏览器对于某些新特性需要前缀来支持，
    // autoprefixer 能够根据你定义的浏览器兼容性要求自动添加这些前缀，而不需要你手动编写。
    autoprefixer: {},
  },
};

export default config;


// postcss.config.mjs 是一个配置文件，用于配置 PostCSS 插件，告诉 PostCSS 在处理 CSS 文件时使用哪些插件。在你的例子中，主要用来配置 Tailwind CSS 插件。