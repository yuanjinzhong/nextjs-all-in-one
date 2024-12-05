import NextAuth, {NextAuthConfig} from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

export const {handlers, auth, signIn, signOut} = NextAuth({
    pages: {signIn: "/login"},
    providers: [
        GitHub,
        Credentials({
            credentials: {
                // 这就是authorize方法入参credentials对象
                username: {},
                password: {},
            },
            // 用来验证账号密码
            async authorize(credentials) {
                if (credentials?.username == "1" && credentials?.password == "1") {
                    return {
                        id: "123456",
                        name: "John Doe zhangsan ",
                        email: "john.doe@example.com",
                        image: "/balazs-orban.png",
                    };
                } else {
                    /**
                     * todo 返回null的时候 CredentialsSignInButton里面会报错，该组件里面需要针对错误做异常处理
                     *
                     * todo 这里表示用户名密码不正确，没有登陆成功，没有登陆成功 对应的UI组件应该给出提示，参考仪表盘项目的 LoginForm 组件
                     *
                     * todo 需要在UI组件处理账号密码输入错误的情况
                     */
                    return null;
                }
            },
        }),
    ],

    /**
     * middleware里面的逻辑会进入这个callback
     *
     * 这个方法是决定了 登陆成功（有无session信息）之后该怎么走
     */
    callbacks: {
        // 账号密码验证成功之后，走这个方法
        async authorized({request, auth}) {
            console.log(auth)
            if (!!auth?.user) {
                // 检查当前请求是否已经是 /tailwind/table 页面 或者主页面，如果是就不走下面的Response.redirect逻辑了，避免无脑重复重定向
                if (request.nextUrl.pathname === "/github" || request.nextUrl.pathname === "/") {
                    return true;  // 不再执行重定向，不然每次重定向到这个页面的时候又会无脑重定向
                }
                // 有用户信息则登陆成功,登陆成功到github页面
                return Response.redirect(new URL("/github", request.nextUrl.origin));
            } else {
                return false;// 会重定向到登陆页面
            }
        },
    },
    debug: true,
} satisfies NextAuthConfig);
