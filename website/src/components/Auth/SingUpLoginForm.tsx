"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import PasswordIcon from "../Icons/PasswordIcon";
import EmailIcon from "../Icons/EmailIcon";

interface FormState {
    email: string;
    password: string;
    confirmationPassword: string;
}

export default function SignUpLoginForm() {
    const pathName = usePathname();
    const logInPath = pathName.replace(/signup$/, "signin");
    const [form, setForm] = useState<FormState>({
        email: "",
        password: "",
        confirmationPassword: "",
    });

    const handlePasswordCorrectness = () => {
        // Check if password is meets the requirements
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // Handle input changes
        const { name, value } = event.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));
    };

    const handleClear = (name: string) => {
        // Clear the input field
        setForm(prevForm => ({ ...prevForm, [name]: "" }));
    };

    const validateEmail = (email: string) => {
        // Check if the email is valid
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleRegister = () => {
        // Register user
    };

    return (
        <main className="justify-center flex flex-column">
            <div className="rounded-md flex flex-col gap-4">
                <h1 className="flex justify-center font-bold text-[24px]">
                    Create your account
                </h1>
                <Input
                    className=""
                    name="email"
                    size="lg"
                    startContent={<EmailIcon width={19} height={19} />}
                    variant="faded"
                    type="email"
                    placeholder="Email"
                    label="Email"
                    value={form.email}
                    onChange={handleChange}
                    onClear={() => handleClear("email")}
                />
                <Input
                    className=""
                    name="password"
                    size="lg"
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    value={form.password}
                    onChange={handleChange}
                    onClear={() => handleClear("password")}
                />
                <Input
                    className=""
                    name="confirmationPassword"
                    size="lg"
                    startContent={<PasswordIcon width={19} height={19} />}
                    variant="faded"
                    type="password"
                    placeholder="Confirm Password"
                    label="Password"
                    value={form.confirmationPassword}
                    onChange={handleChange}
                    onClear={() => handleClear("confirmationPassword")}
                />
                <Button size="lg" onClick={handleRegister}>
                    Register
                </Button>
                <div className="flex flex-row gap-3">
                    Already have an account?
                    <Link
                        href={logInPath}
                        className="text-blue-500 hover:underline">
                        Log in
                    </Link>
                </div>
            </div>
        </main>
    );
}
