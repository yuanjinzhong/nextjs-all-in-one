'use client'

import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <h1 className="text-3xl font-bold underline">
                Hello world!
            </h1>

            <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
                <div className="shrink-0">
                    {/*在 Next.js 中，所有静态资源（如图片、字体、图标等）应该放置在 /public 文件夹中(根目录下的public文件夹)。Next.js 默认只能访问 public 目录下的静态资源*/}
                    <img className="h-12 w-12" src="/logo.svg" alt="ChitChat Logo"/>
                </div>
                <div>
                    <div className="text-xl font-medium text-black">ChitChat</div>
                    <p className="text-slate-500">You have a new message!</p>
                </div>
            </div>
        </React.Fragment>
    )
}