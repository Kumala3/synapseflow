"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqElements } from "@/utils/faq";
import SubmitQuestion from "./SubmitQuestion";

export default function Faq() {
    const itemClasses = {
        base: "w-[350px] lg:w-full",
    };

    const styledTitle = (title: string) => (
        <p className="font-semibold">{title}</p>
    );

    return (
        <div className="flex flex-col overflow-hidden lg:flex-row pt-0 lg:px-[60px] lg:gap-[150px]">
            <div className="flex flex-col gap-4 px-5 pt-[60px] lg:hidden">
                <h2 className="font-bold text-[#f362af] text-[18px]">
                    Frequently Asked Question
                </h2>

                <h1 className="font-bold text-[17px]">
                    Let&apos;s Clarify some of your questions here!
                </h1>
            </div>

            <div className="pt-5 lg:pt-16">
                <div className="h-[600px]">
                    <Accordion
                        variant="splitted"
                        itemClasses={itemClasses}
                        className="flex max-w-[600px] ml-5 lg:w-[500px]"
                        selectionMode="single"
                        fullWidth={true}
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

                <div className="pt-10 px-5 lg:hidden">
                    <SubmitQuestion />
                </div>
            </div>

            <div className="hidden lg:flex flex-col gap-4 px-5 pt-[60px]">
                <h2 className="flex flex-row gap-1 font-bold text-[#f362af] text-[18px]">
                    Frequently Asked Question{" "}
                    <p className="font-bold text-[#20a797dc]">(FAQ)</p>
                </h2>

                <h1 className="font-bold text-[17px]">
                    Let&apos;s Clarify some of your questions here!
                </h1>

                <div className="pt-1 px-0">
                    <SubmitQuestion />
                </div>
            </div>
        </div>
    );
}
