import { handlers } from "auth";
import type { NextRequest } from "next/server";

/**
 * 约定：route.ts、js 只要定义在‘/app’目录下，则它就会被暴露成一个http接口（类似spring boot的 controller接口）
 *
 * 接口路径：http://localhost:3000/api/auth/[...nextauth]  [...nextauth] 是路径参数占位符号，可以是这样的/a/b/c
 *
 * 也就是接口路径可以是：http://localhost:3000/api/auth/a/b/c  然后在该route.ts文件里面可以 获取到 [a,b,c] 这三个参数===> 参考文档： https://nextjs.org/docs/app/building-your-application/routing/route-handlers#dynamic-route-segments
 *
 *  个人觉得只有在全栈项目中才有用， 前后端分离的项目没啥用， 因为http接口通常是spring boot 提供
 *
 *   但是在做oauth2认证的时候，gitHub上配置跌回调地址是：http://localhost:3000/api/auth/callback/github， 这个地址正好是这个route handler 对应的 api接口，所以还是有点用的
 *
 */

/**
 * route  handler 里面只支持这些方法：GET, POST, PUT, PATCH, DELETE, HEAD, and OPTIONS.
 *
 * 所以只能导出这些方法，
 *
 * export const { GET, POST } = handlers; 这个写法是从handlers对象结构出 GET 和POSt方法
 *
 */

// 自定义 GET 请求处理
export const GET = async (req: NextRequest) => {
  console.log("route handler get 方法接收到请求",req.url);
  const response: Response = await handlers.GET(req);
  console.log("route handler get 方法返回值",response);
  return response;
};

export const POST = async (req: NextRequest) => {
  console.log("route handler post 方法接收到请求",req.url);
  const response = await handlers.POST(req);
  console.log("route handler post 返回值:", response);
  return response;
};
