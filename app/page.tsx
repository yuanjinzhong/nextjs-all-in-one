import React from 'react';
import SignIn from "@/components/sign-in";
import UserAvatar from '@/components/UserAvatar';
import SignOut from '@/components/sign-out';
import {CredentialsSignInButton, GithubSignButtons} from "@/components/AuthButtons";

const Page = () => {

    return (

        /**
         * 本来最外面的div 其实只是内容的高度，但是加了 min-h-screen之后这个外面的div就变成浏览器窗口的高度了，
         * 并且设置我垂直居中，所以 视觉上以下组件在整个窗口的中间
         * <GithubSignButtons/>
         * <span> Or </span>
         * <CredentialsSignInButton/>
         *
         */
        <div className='flex justify-center items-center flex-col py-2 min-h-screen'>
            <UserAvatar/>
            <GithubSignButtons/>
            <span className={"text-red-500 font-semibold"}> Or </span>
            <CredentialsSignInButton/>
        </div>
    );
};

export default Page;