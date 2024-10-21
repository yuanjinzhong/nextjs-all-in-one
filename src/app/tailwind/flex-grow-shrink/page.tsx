// 'use client' 并没有涉及到客户端状态或 API，可以去掉 'use client'


/* flex: 1 1 0% 是一个简写形式，用于设置 Flexbox 布局中的 flex-grow、flex-shrink 和 flex-basis 属性。让我们详细解释一下每个部分的含义：
flex: 1 1 0% 的含义
flex-grow: 1

含义：表示该元素的 flex-grow 属性值为 1。
作用：当容器有多余的空间时，该元素会根据 flex-grow 的值按比例增长。值为 1 表示该元素会均匀地分配多余的空间。
示例：如果有两个 flex-grow: 1 的元素，它们会平分容器的多余空间。
flex-shrink: 1

含义：表示该元素的 flex-shrink 属性值为 1。
作用：当容器空间不足时，该元素会根据 flex-shrink 的值按比例缩小。值为 1 表示该元素会均匀地减少其大小。
示例：如果有两个 flex-shrink: 1 的元素，它们会平分容器的不足空间。
flex-basis: 0%

含义：表示该元素的 flex-basis 属性值为 0%。
作用：flex-basis 是元素在主轴方向上的初始大小。值为 0% 表示该元素的初始大小为 0，所有空间都会根据 flex-grow 进行分配。
示例：如果有两个 flex-basis: 0% 的元素，它们的初始大小为 0，所有空间都会根据 flex-grow 进行分配。*/

export default function Home() {
    return (

        <div className="flex h-64 w-full border-2 border-gray-300 rounded-lg overflow-hidden">
            <div className="flex-1 bg-blue-100 text-center p-4">
                <h2 className="text-xl font-bold">左</h2>
                <p>这是一个使用 `flex-1` 的左侧部分。</p>
            </div>
            <div className="flex-[6_1_0%] bg-green-100 text-center p-4">
                <h2 className="text-xl font-bold">中</h2>
                <p>这是一个使用 `flex-2` 的中间部分。</p>
            </div>
            <div className="flex-1 bg-red-100 text-center p-4">
                <h2 className="text-xl font-bold">右</h2>
                <p>这是一个使用 `flex-1` 的右侧部分。</p>
            </div>
        </div>
    )
}