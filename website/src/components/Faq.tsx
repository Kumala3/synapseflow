"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { faqElements } from "@/utils/faq";

export default function Faq() {
    const itemClasses = {
        base: "flex flex-col w-1/3 lg:w-full",
    };

    const styledTitle = (title: string) => (
        <p className="font-semibold">{title}</p>
    );

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
                    <p className="font-bold text-[28px]">Ask your personal question:</p>
                    <div className="">
                        <Button className="">Submit</Button>
                    </div>
                </div>
            </div>

            <div className="pt-5 overflow-hidden">
                <Accordion
                    variant="splitted"
                    itemClasses={itemClasses}
                    className="flex w-[1000px] ml-5 lg:w-[500px]"
                    selectionMode="single"
                    selectionBehavior="toggle"
                >
                    {faqElements.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={styledTitle(item.title)}
                            className="hover:scale-105 transform: ease-in-out duration-200"
                        >
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
