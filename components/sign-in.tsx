import { signIn } from "auth"

export default function SignIn() {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("github")
            }}
        >
            <div className="flex justify-center items-center">
                <button className="border bg-slate-400  rounded-xl mt-4 hover:bg-purple-300">SignIn with GitHub</button>
            </div>
        </form>
    )
} 