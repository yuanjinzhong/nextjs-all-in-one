export {auth as middleware} from "@/auth"


//matcher 的作用就是确定哪些页面会触发middlerware的拦截
// 在我们的例子中这个拦截主要是nextAuth的认证（next-auth 的身份验证检查。只有符合 matcher 的路径，才会经过 authorized 校验。（auth.config.ts文件里面的authorized方法））
export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
    //该正则表达式的意思是匹配所有不以 /api、/_next/static、/_next/image 开头的路径，也排除掉 .png 文件。
    //也就是说，这个中间件会跳过 API 路由、静态资源文件夹和图片请求，而只作用于其他路径
};
