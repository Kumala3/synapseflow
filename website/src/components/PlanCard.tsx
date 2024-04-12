"use client";

import Link from "next/link";
import { Button } from "@nextui-org/react";
import { ROUTES } from "../utils/routes";
import { useEffect, useState } from "react";
import { usePricingPlans } from "@/hooks/usePricingPlans";
import { LoadingData } from "./LoadingData";

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

interface PlanCardProps {
    plan_name?: string;
}

export function PlanCard({ plan_name = "Hobby" }: PlanCardProps) {
    const { pricingPlans, isError, isLoading } = usePricingPlans();

    const [plan, setPlan] = useState({
        plan: "",
        description: "",
        cost: 0,
        button_text: "",
        advantages: [{ advantage: "" }],
    });

    useEffect(() => {
        if (pricingPlans) {
            const foundPlan = pricingPlans?.find(
                p => p.plan.toLowerCase() === plan_name.toLowerCase()
            );
            setPlan(foundPlan || pricingPlans[0]); // Fallback to the first plan if not found or an empty object if pricingPlans is empty
        }
    }, [pricingPlans, plan_name]);

    if (isError) return <div>Error...</div>;

    if (isLoading) return <LoadingData />;

    let bgPlan = "";

    switch (plan_name.toLowerCase()) {
        case "pro":
            bgPlan = "bg-[#068c57]";
            break;
        case "business":
            bgPlan = "bg-[#624bee]";
            break;
        default:
            bgPlan = "bg-[#3f3f43]";
            break;
    }

    return (
        <div
            className={`${bgPlan} text-white rounded-md max-w-[380px] max-h-[900px] p-6`}>
            <div className="flex flex-col">
                <h1 className="text-[18px] font-semibold">
                    {toTitleCase(plan.plan)}
                </h1>
                <span className="font-medium">{plan.description}</span>
            </div>

            <p className="pt-2 text-[22px] font-bold">${plan.cost}/mon</p>

            <ul className="flex flex-col pt-2 gap-1">
                {plan.advantages?.map((item, index) => (
                    <li key={index} className="flex gap-1">
                        <span className="font-medium">{item.advantage}</span>
                    </li>
                ))}
            </ul>

            <div className="pt-5">
                <Link href={ROUTES.ENTERPRISE}>
                    <Button
                        radius="sm"
                        size="lg"
                        className="w-[200px] text-[#624bee] bg-[#ffffff] font-semibold lg:hover:scale-105">
                        {plan.button_text}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
