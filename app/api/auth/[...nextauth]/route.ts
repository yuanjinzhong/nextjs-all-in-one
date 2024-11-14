import { handlers } from "auth";

/**
 * 约定：route.ts、js 只要定义在‘/app’目录下，则它就会被暴露成一个http接口（类似spring boot的 controller接口）
 *
 * 接口路径：http://localhost:3000/app/api/auth/[...nextauth]  [...nextauth] 是路径参数占位符号，可以是这样的/a/b/c
 *
 * 也就是接口路径可以是：http://localhost:3000/app/api/auth/a/b/c  然后在该route.ts文件里面可以 获取到 [a,b,c] 这三个参数===> 参考文档： https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
 *
 *  个人觉得只有在全栈项目中才有用， 前后端分离的项目没啥用， 因为http接口通常是spring boot 提供
 */
export const { GET, POST } = handlers;

export const runtime = "edge"; // optional
