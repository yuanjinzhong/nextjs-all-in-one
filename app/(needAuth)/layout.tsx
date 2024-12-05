import {SignOut} from '@/components/AuthButtons';
import React from 'react';
import UserAvatar from "@/components/UserAvatar";

const Layout = ({children}: { children: React.ReactNode }) => {
    return (
        <div>
            <nav>
                <UserAvatar/>
                <SignOut>点我退出登陆</SignOut>
            </nav>
            {children}
        </div>
    );
};

export default Layout;
