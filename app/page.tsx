import React from "react";
import {ArrowRightIcon} from "@heroicons/react/20/solid";
import Link from "next/link";

const Page = () => {

    return (
        <div
            className='flex justify-center items-center flex-col py-2 min-h-screen bg-blue-100 font-semibold text-lg text-pink-500'>
            <span>NEXT.JS ALL IN ONE</span>

            <Link
                href="/login"
                className="mt-4 flex h-10 items-center rounded-lg bg-blue-500 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500 active:bg-blue-600 aria-disabled:cursor-not-allowed aria-disabled:opacity-50"
            >
                <span>Log in</span> <ArrowRightIcon className="w-5 md:w-6"/>
            </Link>

        </div>
    );
};

export default Page;