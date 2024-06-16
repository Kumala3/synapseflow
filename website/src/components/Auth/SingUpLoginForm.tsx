"use client";

import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PasswordIcon from "../Icons/PasswordIcon";
import EmailIcon from "../Icons/EmailIcon";

export default function SignUpLoginForm() {
    const pathName = usePathname();

    const logInPath = pathName.replace(/signup$/, "signin");

    const handleRegister = () => {
        // Register user
    };

    return (
        <main className="justify-center flex flex-column items-center">
            <div className="p-16 rounded-md flex flex-col gap-4 bg-[#cbcac5]">
                <h1 className="flex justify-center font-bold text-[24px]">Create your account</h1>
                <Input
                    className=""
                    size="lg"
                    startContent={<EmailIcon width={19} height={19} />}
                    variant="faded"
                    type="email"
                    placeholder="Email"
                    label="Email"
                />
                <Input
                    className=""
                    size="lg"
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Password"
                    label="Password"
                />
                <Input
                    className=""
                    size="lg"
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Confirm Password"
                    label="Password"
                />
                <Button size="lg" onClick={handleRegister}>Register</Button>
                <div className="flex flex-row gap-3">
                    Already have an account?
                    <Link href={logInPath} className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </main>
    );
}
