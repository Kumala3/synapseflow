"use client";

import React, { useState } from "react";
import { Input, Button } from "@nextui-org/react";
import Link from "next/link";
import PasswordIcon from "../Icons/PasswordIcon";
import EmailIcon from "../Icons/EmailIcon";
import { usePathname } from "next/navigation";

interface FormProps {
    email: string;
    password: string;
}

interface FormErrors {
    email: string;
    password: string;
    [key: string]: string;
}

export default function SignInLoginForm() {
    const [form, setForm] = useState<FormProps>({email: "", password: ""});
    const [errors, setErrors] = useState<FormErrors>({});

    const pathName = usePathname();
    const resetPasswordPath = pathName.replace(/signin$/, "forgot-password");
    const SignUpPath = pathName.replace(/signin$/, "signup");

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        // Update the form state to reflect the new value from the input
        setForm(prevForm => ({ ...prevForm, [name]: value }));

        // If user starts typing clear the error of a specific input
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: "" }));
        }
    };

    const handleLogin = () => {
        // Validates the email
        if (!form.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: "Please enter an email"}));
        }

        // Validates the password
        if (!form.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: "Please enter a password" }));
        }
    };

    return (
        <main className="flex flex-column">
            <div className="flex flex-col gap-4 p-8 rounded-md shadow-xl">
                <Input
                    name="email"
                    startContent={<EmailIcon width={19} height={19} />}
                    className=""
                    variant="faded"
                    type="email"
                    placeholder="email32@gmail.com"
                    label="Email"
                    value={form.email}
                    onChange={handleChange}
                    errorMessage={errors.email}
                />
                <Input
                    name="password"
                    startContent={<PasswordIcon width={19} height={19} />}
                    className=""
                    variant="faded"
                    type="password"
                    placeholder="Password"
                    label="Password"
                    value={form.password}
                    onChange={handleChange}
                    errorMessage={errors.password}
                />
                <Button
                    className=""
                    size="md"
                    type="submit"
                    color="primary"
                    onClick={handleLogin}
                >
                    Login
                </Button>
                <div className="flex flex-row justify-center items-center">
                    <Link
                        href={resetPasswordPath}
                        className="text-[16px] text-[#181818] font-normal hover:underline">
                        Forgot password?
                    </Link>
                </div>
                <div className="flex flex-row gap-7 items-center">
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
