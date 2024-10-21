import React from 'react';

function Page() {
    return (
        <div>

            {/*justify-start items-end space-x-2， 从主轴方向头部对齐， 交叉轴地步对齐，两个子元素之间‘2’个单位的间隙*/}

            {/*<div className="flex max-w-2xl mx-auto justify-around  items-end space-x-2" id="main">*/}
            {/*    <div className="bg-red-50 w-1/5 h-52" id="left">左</div>*/}
            {/*    <div className="bg-blue-50 w-1/5 h-36" id="mid">中</div>*/}
            {/*    <div className="bg-blue-50 w-1/5 h-36" id="right">右</div>*/}
            {/*</div>*/}


            {/*响应式，移动设备优先原则
            在移动设备上 #left 和 #right 是垂直排列的，并且占满整个 #main 的宽度 它们之间的间隙是 3
            在桌面设备上 #left 和 #right 是水平排列的，分别占 1/3 和 2/3 的宽度 它们之间的间隙是 2*/}
            {/*md:flex-row md:space-y-0 md:space-x-2   宽度大于768px时，主轴为水平布局，y方向间距为0，x方向间距为2
            flex-col space-y-3 justify-start items-end 移动设置优先，主轴为垂直方向， y方向间距为3个单位，主轴起点排开，交叉轴底部排开*/}
            <div
                className="flex max-w-2xl mx-auto flex-col space-y-3 justify-start items-end  md:flex-row md:space-y-0 md:space-x-2"
                id="main">
                <div className="bg-red-50 w-full  h-52  md:w-1/3" id="left">左</div>
                <div className="bg-blue-50 w-full  h-36 md:w-2/3" id="right">右</div>
            </div>

            <div className="bg-red-500 sm:bg-green-500 md:bg-blue-500">
                这个背景色会根据屏幕大小变化。
            </div>


        </div>
    );
}

export default Page;