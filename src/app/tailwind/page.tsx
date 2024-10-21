// 'use client' 并没有涉及到客户端状态或 API，可以去掉 'use client'

import Image from "next/image";

export default function Home() {
    return (
        <div className="flex justify-evenly">
            <h1 className="text-3xl font-bold underline shadow-lg flex items-center">
                <p>tailwind css </p>
            </h1>

            {/*  水平对齐 mx-auto {   margin-left: auto;    margin-right: auto;  } */}
            <div className="p-6    bg-white rounded-xl shadow-xl flex items-center space-x-4">
                <div className="shrink-0">
                    {/*
                    在 NextJs 中，所有静态资源（如图片、字体、图标等）应该放置在 /public 文件夹中(根目录下的public文件夹)。
                    Next.js 默认能直接通过路径访问 public 目录下的静态资源
                    如果静态资源在其他目录下，则需要通过import的方式导入，nextJs才能访问
                    同时如果是直接通过路径访问的资源，则需要手动设置资源宽高，如果通过Import方式访问的资源，则NextJs可以自动设置宽高
                    */}
                    <Image src="/logo.svg" alt={"ChitChat Logo"} width={48} height={48}/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>

            <div
                className="py-8 px-8    bg-white rounded-xl shadow-lg space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
                <Image src="/erin-lindford.png" alt={"Woman's Face"} width={96} height={96}
                       className="block mx-auto  rounded-full sm:mx-0 sm:shrink-0"/>
                <div className="text-center space-y-2 sm:text-left">
                    <div className="space-y-0.5">
                        <p className="text-lg text-black font-semibold">
                            Erin Lindford
                        </p>
                        <p className="text-slate-500 font-medium">
                            Product Engineer
                        </p>
                    </div>
                    <button
                        className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
                        消息
                    </button>
                </div>
            </div>


        </div>
    )
}