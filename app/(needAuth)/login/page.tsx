import {CredentialsSignInButton, GithubSignButtons} from "@/components/AuthButtons";

const Page = () => {
    return (
        <div className='flex justify-center items-center flex-col py-2 min-h-screen'>
            <GithubSignButtons/>
            <span className={"text-red-500 font-semibold"}> Or </span>
            <CredentialsSignInButton/>
        </div>
    );
};

export default Page;