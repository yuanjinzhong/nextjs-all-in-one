import React from 'react';
import {signIn} from "@/auth";
import Image from "next/image";
import {Button} from "@/ui/Button";
import {ArrowRightIcon} from "@heroicons/react/20/solid";


/**
 * github登陆组建
 * @constructor
 */
export function GithubSignButtons() {
    return (
        <div>
            <form action={async () => {
                "use server"
                await signIn("github")
            }}>
                <button className="flex justify-center items-center space-x-2">
                    <Image src="/github.png" alt={"github log"} width={25} height={25}/>
                    <span className={"border-4"}>login with github </span>
                </button>
            </form>
        </div>
    );
}


/**
 * 账号密码登陆组件
 * @constructor
 */
export function CredentialsSignInButton() {
    return (
        <div>
            <form action={async (formData) => {
                "use server"
                await signIn("credentials", formData)
            }}>
                <div className="flex justify-center items-center flex-col">

                    <div className="flex justify-center items-center   space-x-2">
                        <label htmlFor="username">Username</label>
                        <input className={"border-4"} name="username" type="text"/>
                    </div>

                    <div className="flex justify-center items-center  space-x-2">
                        <label htmlFor="password">Password</label>
                        <input className={"border-4"} name="password" type="password"/>
                    </div>

                    <Button className="mt-4 w-full">
                        Log in <ArrowRightIcon className="ml-auto h-5 w-5 text-gray-50"/>
                    </Button>
                </div>
            </form>

        </div>
    );
}



