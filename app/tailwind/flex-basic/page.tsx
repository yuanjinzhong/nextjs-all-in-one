import React from 'react';

// justify-start  从主轴方向头部对齐
// justify-around
// items-end  交叉轴底部对齐
// space-x-2 两个子元素之间‘2’个单位的间隙（8px）

function Page() {
    return (
        <div>
            <div className="flex max-w-2xl mx-auto justify-around  items-end space-x-2" id="main">
                <div className="bg-red-50 w-1/5 h-52" id="left">左</div>
                <div className="bg-blue-50 w-1/5 h-36" id="mid">中</div>
                <div className="bg-blue-50 w-1/5 h-36" id="right">右</div>
            </div>

        </div>
    );
}

export default Page;