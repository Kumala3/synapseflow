"use client";

import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PasswordIcon from "../Icons/PasswordIcon";
import EmailIcon from "../Icons/EmailIcon";
import UserIcon from "../Icons/UserIcon";

export default function SignUpLoginForm() {

    const handleRegister = () => {
        // Register user
    };

    return (
        <main className="justify-center flex flex-column items-center">
            <div className="p-5 rounded-md flex flex-col gap-4 bg-[#cbcac5]">
                <Input
                    className=""
                    startContent={<UserIcon width={21} height={21} />}
                    variant="faded"
                    type="text"
                    placeholder="Username"
                    label="Username"
                />
                <Input
                    className=""
                    startContent={<EmailIcon width={19} height={19} />}
                    variant="faded"
                    type="email"
                    placeholder="Email"
                    label="Email"
                />
                <Input
                    className=""
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Password"
                    label="Password"
                />
                <Input
                    className=""
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Confirm Password"
                    label="Password"
                />
                <Button onClick={handleRegister}>Register</Button>
            </div>
        </main>
    );
}
