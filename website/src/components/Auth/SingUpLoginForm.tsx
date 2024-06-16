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

interface FormErrors {
    email?: string;
    password?: string;
    confirmationPassword?: string;
}

export default function SignUpLoginForm() {
    const [form, setForm] = useState<FormState>({
        email: "",
        password: "",
        confirmationPassword: "",
    });
    const [errors, setErrors] = useState<FormErrors>({});

    const pathName = usePathname();
    const logInPath = pathName.replace(/signup$/, "signin");

    // Handle input changes
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));

        // Clear errors for that field when the user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
        }
    };

    // Clear the input field
    const handleClear = (name: string) => {
        setForm(prevForm => ({ ...prevForm, [name]: "" }));
    };

    // Check if the email is valid
    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    // Check if password is meets the requirements
    const validatePasswordLength = (password: string) => {
        if (password.length < 8) {
            return false;
        }
        return true;
    };

    const validatePasswordsAccuracy = (pass1: string, pass2: string) => {
        if (pass1 !== pass2) {
            return false;
        }
        return true;
    };

    // Register user
    const handleRegister = async () => {
        // Validates the email
        if (!form.email) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Please enter your email address",
            }));
        } else if (!validateEmail(form.email)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                email: "Please enter a valid email address",
            }));
        }

        // Validates the password
        if (!form.password) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: "Please enter a password",
            }));
        } else if (!validatePasswordLength(form.password)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                password: "Password must be at least 8 characters long",
            }));
        }

        // Validates the confirmation password
        if (!form.confirmationPassword) {
            setErrors(prevErrors => ({
                ...prevErrors,
                confirmationPassword: "Please confirm the password",
            }));
        } else if (!validatePasswordsAccuracy(form.password, form.confirmationPassword)) {
            setErrors(prevErrors => ({
                ...prevErrors,
                confirmationPassword: "Passwords do not match",
            }));
        }
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
                    errorMessage={errors.email}
                    isRequired={true}
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
                    errorMessage={errors.password}
                    isRequired={true}
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
                    errorMessage={errors.confirmationPassword}
                    isRequired={true}
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
