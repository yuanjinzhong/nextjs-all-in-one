const github = () => {
    return (
        <div className="text-sm text-gray-900">

            {/* justify-between 项目之间均匀分配空间，第一个项目和最后一个项目靠边 */}
            <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">

                {/* 左边的的 */}
                <div className="flex items-center space-x-4">

                    <a className="w-6  hover:text-red-300" href="https://github.com/" >
                        <svg className="fill-current" height="32" viewBox="0 0 16 16" version="1.1" width="32" >
                            <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                        </svg>
                    </a>

                    {/* 相对加绝对定位 */}
                    <div className=" block relative">
                        <input type="text" className="  rounded  bg-gray-900  border border-gray-600  placeholder-gray-400   w-72  px-3  py-1  " placeholder="Search or jump to ..." />
                        <div className="  absolute   top-0   right-0  flex  items-center  h-full  "  >
                            <div className="   border border-gray-600  rounded   text-xs text-gray-400 px-2  mr-2 " >  /  </div>
                        </div>
                    </div>

                    {/* 纯粹flex布局,视觉上有缺陷的 */}
                    {/* <div className="flex items-center rounded  border border-gray-600">
                        <input type="text" className="rounded bg-gray-900  border-gray-600 placeholder-gray-400 w-72 px-3 py-1" placeholder="Search or jump to ..." />
                        <div className="flex items-center h-full ">
                            <div className="border border-gray-600 rounded text-xs text-gray-400 px-2 mr-2">/</div>
                        </div>
                    </div> */}

                    <ul className="flex justify-center items-center font-semibold space-x-4">
                        <li>
                            <a href="#" className="hover:text-gray-400">Pull Request</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Issues</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Marketplace</a>
                        </li>
                        <li>
                            <a href="#" className="hover:text-gray-400">Explore</a>
                        </li>
                    </ul>
                </div>

                {/* 右边的 */}
                <div className="  flex items-center space-x-4 text-white h-full">

                    <a href="#" className="relative hover:text-gray-400">

                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" ></path>
                        </svg>

                        {/* 绝对定位，定在a标签的右上角 */}
                        <div className=" bg-blue-400 rounded-full  w-2  h-2  absolute  top-0 right-0 "></div>
                    </a>
                    {/* 加号+向下箭头 */}
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" ></path>
                        </svg>
                        <svg className="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" >
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"  ></path>
                        </svg>
                    </a>


                </div>

            </nav>

        </div>
    );
}

export default github;