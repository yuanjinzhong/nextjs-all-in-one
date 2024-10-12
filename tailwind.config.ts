// 导入 tailwindcss 库中的 Config 类型，用于 TypeScript 类型检查。这一行确保在编写配置时，Tailwind 的配置对象符合 Config 类型的定义。
import type { Config } from "tailwindcss";

// 定义了一个名为 config 的常量，类型为 Config。这就是 Tailwind CSS 的核心配置对象，包含了所有 Tailwind 配置选项
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",   /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}", /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",  /* 告诉tailwind css 这些路径下的 tailwind css 需要转换成原生的css */
  ],
  // theme 配置部分用于定义 Tailwind CSS 的默认主题以及自定义主题的扩展。
  theme: {
    // extend 关键字是用来扩展 Tailwind 默认主题的，而不是完全覆盖它。这意味着你可以在默认主题的基础上增加新的颜色、间距、字体等，而不影响已有的配置。
    extend: {
      // 这个部分扩展了 Tailwind 的颜色配置
      colors: {
        background: "var(--background)", // 这两个全局变量是在global.css中定义的
        foreground: "var(--foreground)", // 这两个全局变量是在global.css中定义的
      },
    },
  },
  plugins: [],  // 可以添加一下有用的插件
};
export default config;


/*

color里面的两个key,background，foreground

可以这样使用：

<div class="bg-background text-foreground">
    This text will have the custom background and foreground colors.
</div>

*/
