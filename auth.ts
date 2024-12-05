import NextAuth, { NextAuthConfig } from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";

export const { handlers, auth, signIn, signOut } = NextAuth({
  pages: { signIn: "/github", error: "/error" },
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
          return null;
        }
      },
    }),
  ],
  callbacks: {
    // 账号密码验证成功之后，走这个方法
    async authorized({ request, auth }) {
      console.log("2222222222222222222222222");
      if (!!auth?.user) {
        // 有用户信息则登陆成功
        return true;
      } else {
        return false;
      }
    },
  },
  debug: true,
} satisfies NextAuthConfig);
