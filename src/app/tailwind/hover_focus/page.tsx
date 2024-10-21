import React from 'react';


/*
* 处理悬停、焦点和其他状态, 原子类上加上  hover: 就可以
*/
function Page() {
    return (
        <div className="flex justify-evenly items-center ">
            <button className="bg-sky-500 hover:bg-sky-700 mt-3.5 ">
                Save changes
            </button>
        </div>
    );
}

export default Page;