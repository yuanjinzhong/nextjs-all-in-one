import React from 'react';

/*flex-wrap 的三种不同属性
nowrap: 不换行
wrap ：从上到下换行
wrap-reverse : 反转换行*/

function Page() {
    return (
        <div>
            <div className="p-5">
                <h2 className="text-lg font-bold mb-2">Flex Wrap: nowrap</h2>
                <div className="flex flex-nowrap bg-gray-200 p-2">
                    <div className="bg-red-500 text-white p-5 m-1">1</div>
                    <div className="bg-green-500 text-white p-5 m-1">2</div>
                    <div className="bg-blue-500 text-white p-5 m-1">3</div>
                    <div className="bg-yellow-500 text-white p-5 m-1">4</div>
                </div>

                <h2 className="text-lg font-bold mb-2 mt-5">Flex Wrap: wrap</h2>
                <div className="flex flex-wrap bg-gray-200 p-2">
                    <div className="bg-red-500 text-white p-5 m-1">1</div>
                    <div className="bg-green-500 text-white p-5 m-1">2</div>
                    <div className="bg-blue-500 text-white p-5 m-1">3</div>
                    <div className="bg-yellow-500 text-white p-5 m-1">4</div>
                </div>

                <h2 className="text-lg font-bold mb-2 mt-5">Flex Wrap: wrap-reverse</h2>
                <div className="flex flex-wrap-reverse bg-gray-200 p-2">
                    <div className="bg-red-500 text-white p-5 m-1">1</div>
                    <div className="bg-green-500 text-white p-5 m-1">2</div>
                    <div className="bg-blue-500 text-white p-5 m-1">3</div>
                    <div className="bg-yellow-500 text-white p-5 m-1">4</div>
                </div>
            </div>

        </div>
    );
}

export default Page;