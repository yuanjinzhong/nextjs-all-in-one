// 'use client' 并没有涉及到客户端状态或 API，可以去掉 'use client'

import React from "react";

export default function Home() {
    return (

        <div className="flex flex-row">
            <h1 className="text-3xl font-bold underline flex-1">
                Hello world!
            </h1>
            <div className="p-6 max-w-sm bg-white rounded-xl shadow-lg flex items-center space-x-4 flex-1">
                <div className="shrink-0">
                    {/*在 Next.js 中，所有静态资源（如图片、字体、图标等）应该放置在 /public 文件夹中(根目录下的public文件夹)。Next.js 默认只能访问 public 目录下的静态资源*/}
                    <img className="h-12 w-12" src="/logo.svg" alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>
        </div>
    )
}