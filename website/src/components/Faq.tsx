"use client";

import React, { useState } from "react";
import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { faqElements } from "@/utils/faq";
import { Input } from "@nextui-org/react";

interface FormState {
    email: string;
    question: string;
}

interface FormErrors {
    email?: string;
    question?: string;
    [key: string]: string | undefined;
}

export default function Faq() {
    const [form, setForm] = useState<FormState>({ email: "", question: "" });
    const [errors, setErrors] = useState<FormErrors>({});

    const itemClasses = {
        base: "w-[400px] lg:w-full",
    };

    const styledTitle = (title: string) => (
        <p className="font-semibold">{title}</p>
    );

    const validateEmail = (email: string) => {
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
        <div className="flex flex-col lg:flex-row pt-5 lg:px-[60px] lg:gap-[150px]">
            <div className="flex flex-col gap-4 px-5 pt-[60px]">
                <h2 className="font-bold text-[#f362af] text-[18px]">
                    Frequently Asked Question
                </h2>

                <h1 className="font-bold text-[17px]">
                    Let&apos;s Clarify some of your questions here!
                </h1>

                <div className="pt-10">
                    <p className="font-bold text-[28px]">
                        Ask your personal question:
                    </p>

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

                    <div className="flex pt-[60px] justify-center">
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
            </div>

            <div className="pt-5">
                <Accordion
                    variant="splitted"
                    itemClasses={itemClasses}
                    className="flex max-w-[600px] ml-5 lg:w-[500px]"
                    selectionMode="single"
                    selectionBehavior="toggle">
                    {faqElements.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={styledTitle(item.title)}
                            className=" lg:hover:scale-105 transform: ease-in-out duration-200">
                            <p className="text-[#113c68] font-medium">
                                {item.content}
                            </p>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    );
}
