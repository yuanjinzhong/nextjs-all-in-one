import React from 'react';

const people = [
    { name: '张三', title: '工程师', email: 'zhangsan@example.com' },
    { name: '李四', title: '产品经理', email: 'lisi@example.com' },
    { name: '王五', title: '设计师', email: 'wangwu@example.com' },
    { name: '赵六', title: '前端开发', email: 'zhaoliu@example.com' },
    { name: '钱七', title: '数据分析师', email: 'qianqi@example.com' },
];

const PeopleList = () => {
    return (
        <React.Fragment>
            <div className="flex flex-col">
                {/* 表头 */}
                <div className="flex p-4 font-bold bg-gray-200">
                    <div className="flex-1">姓名</div>
                    <div className="flex-1">职位</div>
                    <div className="flex-1">电子邮件</div>
                </div>
                {people.map((person, index) => (
                    <div key={person.email} className={`flex p-4 ${index % 2 === 0 ? 'bg-amber-50' : 'bg-slate-100'}`}>
                        <div className="flex-1">{person.name}</div>
                        <div className="flex-1">{person.title}</div>
                        <div className="flex-1">{person.email}</div>
                    </div>
                ))}
            </div>

            <a href="#"
                className="group block max-w-xs mx-auto rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500">
                <div className="flex items-center space-x-3">
                    <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none"
                        viewBox="0 0 24 24"></svg>
                    <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">New project</h3>
                </div>
                <p className="text-slate-500 group-hover:text-white text-sm">Create a new project from a variety of
                    starting templates.</p>
            </a>


            <div className="flex justify-center items-center">
                <form>
                    <label className="block">
                        <span className="block text-sm font-medium text-slate-700">Social Security Number</span>
                        <input
                            className="border-slate-200 placeholder-slate-400 contrast-more:border-slate-400 contrast-more:placeholder-slate-500" />
                        <p className="mt-2 opacity-10 contrast-more:opacity-100 text-slate-600 text-sm">
                            We need this to steal your identity.
                        </p>
                    </label>
                </form>
            </div>


            <div className="flex justify-center items-center max-w-lg mx-auto p-8">
                <details
                    className="open:bg-white dark:open:bg-slate-900 open:ring-1 open:ring-black/5 dark:open:ring-white/10 open:shadow-lg p-6 rounded-lg"
                    open>
                    <summary className="text-sm leading-6 text-slate-900 dark:text-white font-semibold select-none">
                        Why do they call it Ovaltine?
                    </summary>
                    <div className="mt-3 text-sm leading-6 text-slate-600 dark:text-slate-400">
                        <p>The mug is round. The jar is round. They should call it Roundtine.</p>
                    </div>
                </details>
            </div>


            <div className="flex justify-center items-center flex-col p-8">
                <div className="shadow-md bg-blue-100 p-6 w-64 text-center rounded mb-3">
                    <p className="text-blue-700 font-semibold">Shadow MD</p>
                </div>
                <div className="shadow-lg bg-green-100 p-6 w-64 text-center rounded mb-3">
                    <p className="text-green-700 font-semibold">Shadow LG</p>
                </div>
                <div className="shadow-xl bg-yellow-100 p-6 w-64 text-center rounded mb-3">
                    <p className="text-yellow-700 font-semibold">Shadow XL</p>
                </div>
                <div className="shadow-2xl bg-red-100 p-6 w-64 text-center rounded mb-3">
                    <p className="text-red-700 font-semibold">Shadow 2XL</p>
                </div>
            </div>


            <div className="flex justify-center items-center">
                <button className="shadow-lg">Subscribe</button>

                <button className="shadow-lg shadow-indigo-500/40 ...">Subscribe</button>
            </div>


            <div className="flex justify-center items-center gap-4">
                <button className="shadow-lg bg-white py-2 px-4 rounded">Subscribe</button>

                <button
                    className="shadow-lg shadow-indigo-500/40 bg-indigo-600 text-white py-2 px-4 rounded">Subscribe
                </button>
            </div>

            <div className="flex justify-center items-center mt-4">
                <button
                    className="transition ease-in-out delay-150 bg-blue-500 hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300 ...">
                    Save Changes
                </button>
            </div>

        </React.Fragment>

    );
};

export default PeopleList;
