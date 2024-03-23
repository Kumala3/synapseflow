"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";

interface FormState {
    email: string;
    question: string;
}

interface FormErrors {
    email?: string;
    question?: string;
    [key: string]: string | undefined;
}

export default function SubmitQuestion() {
    const [form, setForm] = useState<FormState>({ email: "", question: "" });
    const [errors, setErrors] = useState<FormErrors>({});

    const validateEmail = (email: string) => {
        // Check if the email is valid
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setForm(prevForm => ({ ...prevForm, [name]: value }));

        // Clear errors for that field when the user starts typing
        if (errors[name]) {
            setErrors(prevErrors => ({ ...prevErrors, [name]: undefined }));
        }
    };

    const handleSubmit = () => {
        let newErrors: FormErrors = {};

        // Validate entered email
        if (!form.email) {
            newErrors.email =
                "Please enter an email address; it cannot be empty.";
        } else if (!validateEmail(form.email)) {
            newErrors.email = "Please enter a valid email address.";
        }

        // Validate if question is empty
        if (!form.question) {
            newErrors.question = "Please write a question before submitting.";
        }

        // Update error state
        setErrors(newErrors);

        // Check if errors object is empty
        if (Object.keys(newErrors).length === 0) {
            // You can submit the form
            console.log("Submitting form:", form);
            // Here you would normally make an API call
        }
    };

    return (
        <div>
            <h1 className="font-bold text-[28px]">
                Ask your personal question:
            </h1>

            <Input
                name="email"
                type="email"
                placeholder="gesha22@gmail.com"
                errorMessage={errors.email}
                isInvalid={!!errors.email}
                value={form.email}
                onChange={handleChange}
                radius="lg"
                size="md"
                isRequired={true}
                isClearable={true}
                className="pt-5"
                variant="bordered"
            />

            <Input
                name="question"
                type="text"
                placeholder="Your question"
                errorMessage={errors.question}
                isInvalid={!!errors.question}
                value={form.question}
                onChange={handleChange}
                radius="sm"
                size="lg"
                isRequired={true}
                isClearable={true}
                className="pt-5"
                variant="bordered"
            />

            <div className="flex pt-5 justify-center">
                <Button
                    variant="shadow"
                    color="primary"
                    radius="full"
                    size="md"
                    onClick={handleSubmit}
                    className="">
                    Submit
                </Button>
            </div>
        </div>
    );
}