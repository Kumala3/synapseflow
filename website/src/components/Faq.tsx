"use client";

import { Accordion, AccordionItem } from "@nextui-org/react";
import { faqElements } from "@/utils/faq";

export default function Faq() {
    const itemClasses = {
        base: "w-1/3",
    };

    const styledTitle = (title: string) => (
        <p className="font-semibold">{title}</p>
    );

    return (
        <div className="pt-10">
            <div className="flex flex-col gap-4 px-5">
                <h2 className="font-bold text-[#f362af] text-[18px]">
                    Frequently Asked Question
                </h2>
                <h1 className="font-bold text-[17px]">
                    Let&apos;s Clarify some of your questions here!
                </h1>
                <p className="font-medium text-[#333232]">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore
                </p>
            </div>

            <div className="pt-5 overflow-hidden">
                <Accordion
                    variant="splitted"
                    itemClasses={itemClasses}
                    className="flex w-[1000px] ml-5"
                    selectionMode="single"
                    selectionBehavior="toggle"
                >
                    {faqElements.map((item, index) => (
                        <AccordionItem
                            key={index}
                            title={styledTitle(item.title)}>
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
