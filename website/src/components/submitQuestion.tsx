"use client";

import React, { useState } from "react";
import { Input } from "@nextui-org/react";
import { Textarea } from "@nextui-org/react";
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

    const handleText = () => {
        return (
            <h4 className="flex flex-row gap-1 text-[12px] text-[#1e37d9]">
                You have typed <p className="font-semibold">{form.question.length} / 800</p> characters
            </h4>
        );
    };

    const handleClear = (name: string) => {
        // Clear textarea when button clear was clicked
        setForm(prevForm => ({ ...prevForm, [name]: "" }));

        // Clear errors for that field when user has clicked on clear button
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
        } else if (form.question.length > 800) {
            newErrors.question = "Question should not exceed 800 characters.";
        }

        // Update error state
        setErrors(newErrors);

        // Check if errors object is empty
        if (Object.keys(newErrors).length === 0) {
            // You can submit the form
            console.log("Submitting form:", form);
            console.log("Submit Question component works perfectly!");
            // Here you would normally make an API call
        }
    };

    return (
        <div className="">
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
                radius="md"
                size="md"
                isRequired={true}
                onClear={() => handleClear("email")}
                className="pt-5"
                variant="bordered"
            />

            <Textarea
                name="question"
                label="Question"
                placeholder="Write your question here..."
                errorMessage={errors.question}
                isInvalid={!!errors.question}
                value={form.question}
                onChange={handleChange}
                radius="sm"
                size="lg"
                isRequired={true}
                onClear={() => handleClear("question")}
                description={handleText()}
                className="pt-5"
                variant="bordered"
                maxRows={4}
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
