"use client";

import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import PasswordIcon from "./Icons/PasswordIcon";
import EmailIcon from "./Icons/EmailIcon";
import { usePathname } from "next/navigation";

export default function CredentialsLoginForm() {
    const pathName = usePathname();
    const resetPasswordPath = pathName.replace(/signin$/, "forgot-password");
    const SignUpPath = pathName.replace(/signin$/, "signup");

    return (
        <main className="p-5 flex flex-column items-center">
            <div className="flex flex-col gap-4 p-[44px] bg-[#afb3b8] w-[550px] h-[380px] rounded-md shadow-lg">
                <Input
                    startContent={<EmailIcon width={19} height={19} />}
                    className=""
                    variant="faded"
                    type="email"
                    placeholder="email32@gmail.com"
                    label="Email"
                />
                <Input
                    startContent={<PasswordIcon width={19} height={19} />}
                    className=""
                    variant="faded"
                    type="password"
                    placeholder="(min. 8 characters)"
                    label="Password"
                />
                <Button
                    className="mt-1 font-semibold text-[18px]"
                    size="md"
                    type="submit">
                    Login
                </Button>
                <div className="flex flex-row justify-center items-center">
                    <Link
                        href={resetPasswordPath}
                        className="text-[16px] text-[#181818] font-normal hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <div className="text-sm text-gray-600">
                        Don&apos;t have an account?
                    </div>
                    <Link
                        href={SignUpPath}
                        className="text-blue-500 hover:underline">
                        Sign Up
                    </Link>
                </div>
            </div>
        </main>
    );
}
