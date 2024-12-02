import React from 'react';
import SignIn from "@/components/sign-in";
import UserAvatar from '@/components/UserAvatar';
import SignOut from '@/components/sign-out';

const Page = () => {

    return (
        <div>
            <SignIn></SignIn>

            {/* 先认证才能拿到头像数据 */}

            <UserAvatar></UserAvatar>
            <SignOut>退出登陆</SignOut>



        </div>
    );
};

export default Page;