import dayjs from "dayjs"
import {auth} from "../auth"


export default async function UserAvatar() {
    const session = await auth()
    if (!session?.user) return null


    return (
        <div>
            <div className="flex justify-center items-center flex-col space-y-4 font-semibold  text-red-500 ">
                <div className="w-12 h-12 "> {session?.user?.image && <img src={session?.user?.image} alt=""/>}</div>
                <div>{session?.user?.name}</div>
                <div>{session?.user?.email}</div>
                <div>会话过期时间：{dayjs(session?.expires).format('YYYY-MM-DD HH:mm:ss')}</div>
            </div>

        </div>
    )
}