import Check from "../../public/check.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";

interface PlanCardProps {
    plan: string;
    description: string;
    advantages: { advantage: string }[];
    cost?: number;
    buttonText: string;
}

export function PlanCard({
    plan,
    description,
    cost = 0,
    advantages,
    buttonText,
}: PlanCardProps) {
    return (
        <div className="bg-[#f5f4ff] rounded-md max-w-[380px] max-h-[900px] p-6">
            <div className="flex flex-col">
                <h1 className="text-[18px] font-semibold">{plan}</h1>
                <span className="font-medium text-[#36485c]">
                    {description}
                </span>
            </div>

            <p className="pt-2 text-[22px] font-bold">${cost}/mon</p>

            <ul className="flex flex-col pt-2 gap-1">
                {advantages.map((item, index) => (
                    <li key={index} className="flex gap-1">
                        <Image src={Check} alt="Check" width={20} />
                        <span className="font-medium">{item.advantage}</span>
                    </li>
                ))}
            </ul>

            <div className="pt-5">
                <Button
                    radius="sm"
                    size="lg"
                    className="w-[200px] text-[#624bee] bg-[#ffffff] font-semibold">
                    {buttonText}
                </Button>
            </div>
        </div>
    );
}
