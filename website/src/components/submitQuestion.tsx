"use client";

import React, { useState, useEffect } from "react";
import { Input, Textarea } from "@nextui-org/react";
import { SubmissionConfirmationPopup } from "./SubmissionConfirmationPopup";
import { useFaqQuestion } from "@/hooks/useFaqQuestion";

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
    const [showPopup, setShowPopup] = useState(false);

    const { sendFaqQuestion, isSuccess, error } = useFaqQuestion();

    useEffect(() => {
        if (isSuccess) {
            setShowPopup(true);
            setForm({ email: "", question: "" });
        }

        setTimeout(() => {
            setShowPopup(false);
        }, 5500);
    }, [isSuccess]);

    if (error) <div>There was an error during sending a post request</div>;

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

    const handleDescription = () => {
        return (
            <h4 className="flex flex-row gap-1 text-[12px] text-[#1e37d9] dark:text-[#a32bee]">
                You have typed{" "}
                <p className="font-semibold">{form.question.length} / 800</p>{" "}
                characters
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

    const handleSubmit = async () => {
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
            await sendFaqQuestion({
                email: form.email,
                question: form.question,
            });
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
                description={handleDescription()}
                className="pt-5"
                variant="bordered"
                maxRows={4}
                maxLength={800}
            />

            <div className="flex pt-1 justify-center">
                <SubmissionConfirmationPopup
                    handleSubmit={handleSubmit}
                    showPopup={showPopup}
                />
            </div>
        </div>
    );
}
