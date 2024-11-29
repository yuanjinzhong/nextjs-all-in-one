import { signOut } from "@/auth";


const SignOut = ({ children }: { children?: React.ReactNode }) => {
    return (<form
        action={async () => {
            "use server"
            await signOut();

        }}
    >
        <div className="flex justify-center items-center">
            <button className="border bg-slate-400  rounded-xl mt-4 hover:bg-purple-300">{children} </button>
        </div>
    </form>);
}

export default SignOut;




/**
 这种用 button绑定onclick的方式处理退出登陆不太行，因为 signOut(); 是nodejs服务端能力，onclick是客户端能力，没法直接交互
 可以的做法是定义一个 route handle (也就是所谓的api 路由)，将 signOut()函数包装在里面， onclick事件调用这个api 路由（接口）
 所以官方写的 form+server action 是有人家的道理的
 */
// 错误写法
// 'use client'
// import { signOut } from "@/auth";

// const SignOut = ({ children }: { children?: React.ReactNode }) => {
//     const handleSignOut = async () => {
//         await signOut(); // 调用 signOut 函数
//     };

//     return (
//         <div className="flex justify-center items-center">
//             <button
//                 className="border bg-slate-400 rounded-xl mt-4 hover:bg-purple-300"
//                 onClick={handleSignOut}
//             >
//                 {children}
//             </button>
//         </div>
//     );
// };

// export default SignOut;
