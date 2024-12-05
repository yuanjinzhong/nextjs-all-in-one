import Image from 'next/image';


const github = () => {
    return (
        <div className="text-sm text-gray-900">

            {/* 导航栏 */}
            {/* justify-between 项目之间均匀分配空间，第一个项目和最后一个项目靠边 */}
            <nav className="bg-gray-900 text-white px-4 py-3 flex justify-between items-center">

                {/* 导航栏左边 */}
                <div className="flex items-center space-x-4">

                    <a className="w-6  hover:text-red-300" href="#" >
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
                {/* 导航栏左边 */}

                {/* 导航栏右边的 */}
                <div className="  flex items-center space-x-4 text-white h-full">

                    <a href="#" className=" relative hover:text-gray-400">
                        <svg className="w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" ></path>
                        </svg>
                        {/* 绝对定位，定在a标签的右上角 */}
                        <div className=" bg-blue-400 rounded-full  w-2  h-2 absolute top-0 right-0   "></div>
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
                    {/* 右侧头像 */}
                    <a href="#" className="flex items-center hover:text-gray-400">
                        <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                        <svg className="w-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                        </svg>
                    </a>
                </div>
                {/* 导航栏右边的 */}


            </nav>
            {/* 导航栏 */}

            {/* 仓库状态 */}
            <div className="flex justify-between items-center  px-8 py-4 bg-gray-100">
                {/* 项目名称 */}
                <div className="flex">
                    <svg aria-hidden="true" className="w-4 fill-current text-gray-600" viewBox="0 0 16 16" data-view-component="true">
                        <path fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path>
                    </svg>
                    <div className="flex items center text-xl ml-2">
                        <a href="#" className="text-blue-600 hover:underline"  >tailwindcss</a  >
                        <span className="mx-1">/</span>
                        <a href="#" className="text-blue-600 hover:underline font-semibold">tailwindcss</a>
                    </div>
                </div>
                {/* 项目名称 */}

                {/* 仓库状态 */}
                <div className="flex space-x-2  ">
                    <div className="flex text-xs ">
                        <button className=" border border-gray-300  rounded rounded-r-none  px-3  py-1  flex items-center  space-x-1  "  >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" ></path>
                            </svg>
                            <span>Notifications</span>
                        </button>
                    </div>
                    <div className="flex text-xs">
                        <button className=" border border-gray-300  rounded rounded-r-none  px-3  py-1  flex items-center  space-x-1  "  >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"  >
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" ></path>
                            </svg>
                            <span>Star</span>
                        </button>
                        <a href="#" className="flex items-center border border-gray-300 rounded rounded-l-none px-3 py-1 border-l-0 font-semibold hover:text-blue-400">66.8K</a>
                    </div>
                    <div className="flex text-xs">
                        <button className=" border border-gray-300  rounded rounded-r-none  px-3  py-1  flex items-center  space-x-1  "  >
                            <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="w-5 h-5" >
                                <path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"  ></path>
                            </svg>
                            <span>Fork</span>
                        </button>
                        <a href="#" className="flex items-center border border-gray-300 rounded rounded-l-none  px-3 py-1 border-l-0 font-semibold hover:text-blue-400">21.6K</a>
                    </div>
                </div>
            </div>
            {/* 仓库状态 */}

            {/* 仓库导航栏 */}
            <ul className="flex  items-center  space-x-2 border-b border-gray-300 bg-gray-100 px-8 pt-4">
                <li className="font-semibold">
                    <a href="#" className="flex items-center border-b-2 border-red-500  px-4 pb-3">
                        <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"  >
                            <path fill-rule="evenodd" d="M4.72 3.22a.75.75 0 011.06 1.06L2.06 8l3.72 3.72a.75.75 0 11-1.06 1.06L.47 8.53a.75.75 0 010-1.06l4.25-4.25zm6.56 0a.75.75 0 10-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 101.06 1.06l4.25-4.25a.75.75 0 000-1.06l-4.25-4.25z" ></path>
                        </svg>
                        <span className="ml-2">Code</span>
                    </a>
                </li>
                <li className="font-semibold">
                    <a href="#" className="flex   px-4 pb-3  hover:border-gray-400  border-b">
                        <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true"  >
                            <path fill-rule="evenodd" d="M7.177 3.073L9.573.677A.25.25 0 0110 .854v4.792a.25.25 0 01-.427.177L7.177 3.427a.25.25 0 010-.354zM3.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122v5.256a2.251 2.251 0 11-1.5 0V5.372A2.25 2.25 0 011.5 3.25zM11 2.5h-1V4h1a1 1 0 011 1v5.628a2.251 2.251 0 101.5 0V5A2.5 2.5 0 0011 2.5zm1 10.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0zM3.75 12a.75.75 0 100 1.5.75.75 0 000-1.5z" ></path>
                        </svg>
                        <span className="ml-2">Pull Request</span>
                    </a>
                </li>
                <li className="font-semibold">
                    <a href="#" className="flex   px-4 pb-3  hover:border-gray-400  border-b">
                        <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" >
                            <path fill-rule="evenodd" d="M1.5 8a6.5 6.5 0 1113 0 6.5 6.5 0 01-13 0zM8 0a8 8 0 100 16A8 8 0 008 0zM6.379 5.227A.25.25 0 006 5.442v5.117a.25.25 0 00.379.214l4.264-2.559a.25.25 0 000-.428L6.379 5.227z"></path>
                        </svg>
                        <span className="ml-2">Actions</span>
                    </a>
                </li>
                <li className="font-semibold">
                    <a href="#" className="flex  px-4 pb-3   hover:border-gray-400  border-b">
                        <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" >
                            <path fill-rule="evenodd" d="M7.467.133a1.75 1.75 0 011.066 0l5.25 1.68A1.75 1.75 0 0115 3.48V7c0 1.566-.32 3.182-1.303 4.682-.983 1.498-2.585 2.813-5.032 3.855a1.7 1.7 0 01-1.33 0c-2.447-1.042-4.049-2.357-5.032-3.855C1.32 10.182 1 8.566 1 7V3.48a1.75 1.75 0 011.217-1.667l5.25-1.68zm.61 1.429a.25.25 0 00-.153 0l-5.25 1.68a.25.25 0 00-.174.238V7c0 1.358.275 2.666 1.057 3.86.784 1.194 2.121 2.34 4.366 3.297a.2.2 0 00.154 0c2.245-.956 3.582-2.104 4.366-3.298C13.225 9.666 13.5 8.36 13.5 7V3.48a.25.25 0 00-.174-.237l-5.25-1.68zM9 10.5a1 1 0 11-2 0 1 1 0 012 0zm-.25-5.75a.75.75 0 10-1.5 0v3a.75.75 0 001.5 0v-3z"></path>
                        </svg>
                        <span className="ml-2">Security</span>
                    </a>
                </li>
            </ul>
            {/* 仓库导航栏 */}


            {/* 仓库正文 */}
            <div className=" container flex  mx-auto my-8 px-4 ">
                {/* 文件浏览 */}
                <div className="file-explorer-container  w-3/4 mr-8">
                    <div className=" branch-navigation flex  justify-between items-center">
                        <div className=" flex space-x-1 items-center">
                            <button className="flex border  border-gray-300  bg-gray-100 hover:bg-gray-200 rounded space-x-2  items-center   px-4 py-1">
                                <svg className="w-4 h-4" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                                </svg>
                                <span>8.x</span>
                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                            <div className="flex space-x-1  items-center hover:text-blue-400     px-4  py-1">
                                <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                    <path fill-rule="evenodd" d="M11.75 2.5a.75.75 0 100 1.5.75.75 0 000-1.5zm-2.25.75a2.25 2.25 0 113 2.122V6A2.5 2.5 0 0110 8.5H6a1 1 0 00-1 1v1.128a2.251 2.251 0 11-1.5 0V5.372a2.25 2.25 0 111.5 0v1.836A2.492 2.492 0 016 7h4a1 1 0 001-1v-.628A2.25 2.25 0 019.5 3.25zM4.25 12a.75.75 0 100 1.5.75.75 0 000-1.5zM3.5 3.25a.75.75 0 111.5 0 .75.75 0 01-1.5 0z"></path>
                                </svg>
                                <span>14 </span>
                                <span>branches </span>
                            </div>
                            <div className="flex space-x-1  items-center hover:text-blue-400    py-1">
                                <svg aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true" className="w-4 h-4 fill-current">
                                    <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                                </svg>
                                <span>159 </span>
                                <span>tags </span>
                            </div>
                        </div>
                        <div className=" flex space-x-2">
                            <button className="flex border border-gray-300 bg-gray-100 hover:bg-gray-200 rounded  px-4 py-1 items-center ">
                                <span>Go to file</span>
                            </button>
                            <button className="flex border border-green-800   bg-green-600 hover:bg-green-700  rounded text-white  px-4 py-1 items-center ">
                                <span>Code</span>
                                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <div className="commits-container bg-gray-100 rounded-md rounded-b-none border border-gray-300 border-b-0 flex items-center justify-between px-4 py-4 mt-5">
                        <div className="flex items-center space-x-2">
                            <div className="w-6 h-6 rounded-full bg-blue-500"></div>
                            <a href="#" className="font-semibold hover:underline">adamwathan</a>
                            <a href="#" className="hover:underline hover:text-blue-600">Update changelog</a>
                        </div>
                        <div className="flex items-center">
                            <svg className="w-4 h-4 fill-current text-green-700" aria-label="11 / 11 checks OK" role="img" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                <path fill-rule="evenodd" d="M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z"></path>
                            </svg>

                            <a href="#" className="hover:underline hover:text-blue-600 text-gray-600 ml-1 hidden lg:block">0e0d721</a>
                            <a href="#" className="hover:underline hover:text-blue-600 text-gray-600 ml-1">2 days ago</a>
                            <a className="flex items-center space-x-1 hover:text-blue-600 cursor-pointer ml-3">
                                <svg className="w-4 h-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                    <path fill-rule="evenodd" d="M1.643 3.143L.427 1.927A.25.25 0 000 2.104V5.75c0 .138.112.25.25.25h3.646a.25.25 0 00.177-.427L2.715 4.215a6.5 6.5 0 11-1.18 4.458.75.75 0 10-1.493.154 8.001 8.001 0 101.6-5.684zM7.75 4a.75.75 0 01.75.75v2.992l2.028.812a.75.75 0 01-.557 1.392l-2.5-1A.75.75 0 017 8.25v-3.5A.75.75 0 017.75 4z"></path>
                                </svg>
                                <span className="font-semibold">4,242</span>
                                <span className="hidden lg:inline">commits</span>
                            </a>
                        </div>
                    </div>
                    {/* end of commits-container */}

                    <div className="file-explorer rounded-md rounded-t-none border border-gray-300 divide-y divide-gray-300">
                        <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                            <div className="w-4/12 flex items-center">
                                <svg className="w-4 h-4 fill-current text-blue-400" aria-label="Directory" aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true">
                                    <path fill-rule="evenodd" d="M1.75 1A1.75 1.75 0 000 2.75v10.5C0 14.216.784 15 1.75 15h12.5A1.75 1.75 0 0016 13.25v-8.5A1.75 1.75 0 0014.25 3h-6.5a.25.25 0 01-.2-.1l-.9-1.2c-.33-.44-.85-.7-1.4-.7h-3.5z"></path>
                                </svg>
                                <a href="#" className="hover:underline hover:text-blue-600 ml-3">.github</a>
                            </div>
                            <div className="w-6/12 truncate">
                                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Update release.yml</a>
                            </div>
                            <div className="w-2/12 text-right">
                                <span className="text-gray-600">10 days ago</span>
                            </div>
                        </div>

                        <div className="flex justify-between items-center px-4 py-2 hover:bg-gray-100">
                            <div className="w-4/12 flex items-center">
                                <svg className="w-4 h-4 fill-current text-gray-600" aria-label="File" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                    <path fill-rule="evenodd" d="M3.75 1.5a.25.25 0 00-.25.25v11.5c0 .138.112.25.25.25h8.5a.25.25 0 00.25-.25V6H9.75A1.75 1.75 0 018 4.25V1.5H3.75zm5.75.56v2.19c0 .138.112.25.25.25h2.19L9.5 2.06zM2 1.75C2 .784 2.784 0 3.75 0h5.086c.464 0 .909.184 1.237.513l3.414 3.414c.329.328.513.773.513 1.237v8.086A1.75 1.75 0 0112.25 15h-8.5A1.75 1.75 0 012 13.25V1.75z"></path>
                                </svg>
                                <a href="#" className="hover:underline hover:text-blue-600 ml-3">.editorconfig</a>
                            </div>
                            <div className="w-6/12 truncate">
                                <a href="#" className="text-gray-600 hover:text-blue-600 hover:underline">Convert new stuff to use ES6 modules Lorem ipsum dolor sit, amet consectetur adipisicing elit. Totam, expedita.</a>
                            </div>
                            <div className="w-2/12 text-right">
                                <span className="text-gray-600">10 days ago</span>
                            </div>
                        </div>
                    </div>
                    {/* end of file-explorer */}
                    <div className="flex items-center readme-container rounded-md rounded-b-none border border-gray-300 px-4 py-4 mt-4">
                        <svg className="w-4 h-4 fill-current text-gray-600 mr-3" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path fill-rule="evenodd" d="M2 4a1 1 0 100-2 1 1 0 000 2zm3.75-1.5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zm0 5a.75.75 0 000 1.5h8.5a.75.75 0 000-1.5h-8.5zM3 8a1 1 0 11-2 0 1 1 0 012 0zm-1 6a1 1 0 100-2 1 1 0 000 2z"></path>
                        </svg>
                        <h4 className="font-semibold">README.md</h4>
                    </div>
                    {/* end of readme-container */}
                    <div className="rounded-md rounded-t-none border border-gray-300 border-t-0 px-6 py-6">
                        <Image
                            alt="Tailwind CSS"
                            width={350}
                            height={0} // 可以设置合适的高度，或用 layout="responsive" 自适应高度
                            src="https://refactoringui.nyc3.cdn.digitaloceanspaces.com/tailwind-logo-sticker.svg"
                            style={{ maxWidth: '100%' }}
                            priority
                        />                            <span>A utility-first CSS framework for rapidly building custom user interfaces.</span>

                    </div>

                </div>
                {/* 侧边栏 */}
                <div className="sidebar   w-1/4  mt-0">
                    <div className="about">
                        <span className="font-semibold text-base">About</span>
                        <p className="text-base mt-4">A utility-first CSS framework for rapid UI development</p>
                        <div className="flex items-center space-x-2 mt-4">
                            <svg className="w-4 fill-current" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                <path fill-rule="evenodd" d="M7.775 3.275a.75.75 0 001.06 1.06l1.25-1.25a2 2 0 112.83 2.83l-2.5 2.5a2 2 0 01-2.83 0 .75.75 0 00-1.06 1.06 3.5 3.5 0 004.95 0l2.5-2.5a3.5 3.5 0 00-4.95-4.95l-1.25 1.25zm-4.69 9.64a2 2 0 010-2.83l2.5-2.5a2 2 0 012.83 0 .75.75 0 001.06-1.06 3.5 3.5 0 00-4.95 0l-2.5 2.5a3.5 3.5 0 004.95 4.95l1.25-1.25a.75.75 0 00-1.06-1.06l-1.25 1.25a2 2 0 01-2.83 0z"></path>
                            </svg>
                            <a href="#" className="text-blue-600 hover:underline font-semibold">tailwindcss.com/</a>
                        </div>
                        <div className="tags text-xs font-semibold flex flex-wrap items-center mt-2">
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                css
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                postcss
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                responsive
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                css-framework
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                functional-css
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                utility-class
                            </a>
                            <a href="#" className="bg-blue-100 hover:bg-blue-200 text-blue-600 rounded-full px-2 py-1 mt-2 mr-2">
                                tailwindcss
                            </a>
                        </div>
                    </div>
                    <a className="flex items-center space-x-2 mt-4 group">
                        <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path fill-rule="evenodd" d="M0 1.75A.75.75 0 01.75 1h4.253c1.227 0 2.317.59 3 1.501A3.744 3.744 0 0111.006 1h4.245a.75.75 0 01.75.75v10.5a.75.75 0 01-.75.75h-4.507a2.25 2.25 0 00-1.591.659l-.622.621a.75.75 0 01-1.06 0l-.622-.621A2.25 2.25 0 005.258 13H.75a.75.75 0 01-.75-.75V1.75zm8.755 3a2.25 2.25 0 012.25-2.25H14.5v9h-3.757c-.71 0-1.4.201-1.992.572l.004-7.322zm-1.504 7.324l.004-5.073-.002-2.253A2.25 2.25 0 005.003 2.5H1.5v9h3.757a3.75 3.75 0 011.994.574z"></path>
                        </svg>
                        <span className="group-hover:text-blue-600">Readme</span>
                    </a>

                    <a className="flex items-center space-x-2 mt-4 group">
                        <svg className="w-4 fill-current text-gray-600 group-hover:text-blue-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                            <path fill-rule="evenodd" d="M8.75.75a.75.75 0 00-1.5 0V2h-.984c-.305 0-.604.08-.869.23l-1.288.737A.25.25 0 013.984 3H1.75a.75.75 0 000 1.5h.428L.066 9.192a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.514 3.514 0 00.686.45A4.492 4.492 0 003 11c.88 0 1.556-.22 2.023-.454a3.515 3.515 0 00.686-.45l.045-.04.016-.015.006-.006.002-.002.001-.002L5.25 9.5l.53.53a.75.75 0 00.154-.838L3.822 4.5h.162c.305 0 .604-.08.869-.23l1.289-.737a.25.25 0 01.124-.033h.984V13h-2.5a.75.75 0 000 1.5h6.5a.75.75 0 000-1.5h-2.5V3.5h.984a.25.25 0 01.124.033l1.29.736c.264.152.563.231.868.231h.162l-2.112 4.692a.75.75 0 00.154.838l.53-.53-.53.53v.001l.002.002.002.002.006.006.016.015.045.04a3.517 3.517 0 00.686.45A4.492 4.492 0 0013 11c.88 0 1.556-.22 2.023-.454a3.512 3.512 0 00.686-.45l.045-.04.01-.01.006-.005.006-.006.002-.002.001-.002-.529-.531.53.53a.75.75 0 00.154-.838L13.823 4.5h.427a.75.75 0 000-1.5h-2.234a.25.25 0 01-.124-.033l-1.29-.736A1.75 1.75 0 009.735 2H8.75V.75zM1.695 9.227c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L3 6.327l-1.305 2.9zm10 0c.285.135.718.273 1.305.273s1.02-.138 1.305-.273L13 6.327l-1.305 2.9z"></path>
                        </svg>
                        <span className="group-hover:text-blue-600">MIT license</span>
                    </a>

                    <div className="releases border-t border-gray-300 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Releases</span>
                            <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">163</div>
                        </h4>

                        <a href="#" className="flex items-start mt-4 group">
                            <svg className="mt-1 w-4 fill-current text-green-500 group-hover:text-blue-500" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                                <path fill-rule="evenodd" d="M2.5 7.775V2.75a.25.25 0 01.25-.25h5.025a.25.25 0 01.177.073l6.25 6.25a.25.25 0 010 .354l-5.025 5.025a.25.25 0 01-.354 0l-6.25-6.25a.25.25 0 01-.073-.177zm-1.5 0V2.75C1 1.784 1.784 1 2.75 1h5.025c.464 0 .91.184 1.238.513l6.25 6.25a1.75 1.75 0 010 2.474l-5.026 5.026a1.75 1.75 0 01-2.474 0l-6.25-6.25A1.75 1.75 0 011 7.775zM6 5a1 1 0 100 2 1 1 0 000-2z"></path>
                            </svg>
                            <span className="ml-2">
                                <span className="font-semibold group-hover:text-blue-600">v2.2.6</span>
                                <span className="ml-1 text-xs border border-green-500 text-green-600 rounded-full font-semibold inline-block px-2">Latest</span>
                                <span className="block text-xs group-hover:text-blue-600">16 days ago</span>
                            </span>
                        </a>

                        <div className="mt-4">
                            <a href="#" className="text-blue-600 hover:underline">+ 162 releases</a>
                        </div>
                    </div>
                    {/* end of releases */}

                    <div className="packages border-t border-gray-300 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Packages</span>
                        </h4>
                        <div className="mt-6">
                            <span className="text-xs text-gray-600">No packages published</span>
                        </div>
                    </div>
                    {/* end of packages */}

                    <div className="used-by border-t border-gray-300 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Used by</span>
                            <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">320k</div>
                        </h4>

                        <div className="flex items-center mt-4">
                            <a href="#" className="inline-flex items-center group -space-x-2">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <span className="text-xs font-semibold text-blue-500 group-hover:underline ml-2 h-full"> + 320,428</span>
                        </div>
                    </div>
                    {/* end of used by */}

                    <div className="contributors border-t border-gray-300 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Contributors</span>
                            <div className="text-xs rounded-lg bg-gray-100 text-gray-800 px-2 ml-1">201</div>
                        </h4>

                        <div className="flex flex-wrap items-center mt-4">
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                            <a href="#">
                                <div className="w-7 h-7 rounded-full bg-blue-500 border-2 border-white"></div>
                            </a>
                        </div>

                        <div className="mt-4">
                            <span className="text-blue-500 hover:underline">+ 190 contributors</span>
                        </div>
                    </div>
                    {/* end of contributors */}

                    <div className="languages border-t border-gray-300 mt-6 pt-6">
                        <h4 className="text-base font-semibold flex items-center">
                            <span>Languages</span>
                        </h4>

                        <div className="mt-4 flex">
                            <div className="w-8/12 h-2 rounded-md rounded-r-none bg-yellow-300"></div>
                            <div className="w-3/12 h-2 bg-purple-300 border-l border-white"></div>
                            <div className="w-1/12 h-2 bg-red-300 border-l border-white"></div>
                        </div>

                        <ul className="mt-2 flex flex-wrap space-y-1 items-center text-xs">
                            <li className="flex items-center mr-8">
                                <span className="w-2 h-2 rounded-full bg-yellow-300"></span>
                                <span className="ml-4 group cursor-pointer">
                                    <span className="font-semibold group-hover:text-blue-600">Javascript</span>
                                    <span className="group-hover:text-blue-600">77.0%</span>
                                </span>
                            </li>
                            <li className="flex items-center mr-8">
                                <span className="w-2 h-2 rounded-full bg-purple-300"></span>
                                <span className="ml-4 group cursor-pointer">
                                    <span className="font-semibold group-hover:text-blue-600">Css</span>
                                    <span className="group-hover:text-blue-600">16.8%</span>
                                </span>
                            </li>
                            <li className="flex items-center mr-8">
                                <span className="w-2 h-2 rounded-full bg-red-300"></span>
                                <span className="ml-4 group cursor-pointer">
                                    <span className="font-semibold group-hover:text-blue-600">Html</span>
                                    <span className="group-hover:text-blue-600">6.1%</span>
                                </span>
                            </li>
                            <li className="flex items-center mr-8">
                                <span className="w-2 h-2 rounded-full bg-gray-300"></span>
                                <span className="ml-4">
                                    <span className="font-semibold">other</span>
                                    <span>0.1%</span>
                                </span>
                            </li>
                        </ul>
                    </div>
                    {/* end of languages */}

                </div>  {/* 侧边栏end */}
            </div>
            {/* 仓库正文 */}

            {/* 页脚 */}
            <footer className="container mx-auto text-xs border-t border-gray-300 py-10 flex flex-col lg:flex-row items-center justify-between">
                <ul className="flex items-center space-x-6 lg:space-x-12">
                    <li>&copy; 2021 Github,Inc.</li>
                    <li><a href="#" className="text-blue-600 hover:underline">Terms</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Privacy</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Security</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Status</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Docs</a></li>
                </ul>

                <div className="hidden lg:block">
                    <svg className="w-6 fill-current text-gray-400 hover:text-gray-600" aria-hidden="true" viewBox="0 0 16 16" version="1.1" data-view-component="true">
                        <path fill-rule="evenodd" d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path>
                    </svg>
                </div>

                <ul className="flex items-center space-x-6 lg:space-x-12 mt-4 lg:mt-0">
                    <li><a href="#" className="text-blue-600 hover:underline">Contact Github</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Pricing</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Api</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Training</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">Blog</a></li>
                    <li><a href="#" className="text-blue-600 hover:underline">About</a></li>
                </ul>
            </footer>
            {/* end of footer */}
        </div>
    );
}

export default github;