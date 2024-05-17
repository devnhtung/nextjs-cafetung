"use client"
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Button } from './button';
const Social = () => {

    const onClick = (provider: "google" | "github" | "facebook") => {
        signIn(provider, {
            callbackUrl: '/dashboard/'
        })
    }

    return (
        <div className="flex w-full gap-x-2 justify-center items-center">
            <Button
                onClick={() => onClick("google")}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                onClick={() => onClick("github")}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
            <Button
                onClick={() => onClick("facebook")}
            >
                <FaFacebook className="h-5 w-5" />
            </Button>
        </div>
    )
}

export default Social