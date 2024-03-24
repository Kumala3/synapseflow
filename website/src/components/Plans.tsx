import { PlanCard } from "./PlanCard";
import {
    freeTrialAdvantages,
    ProAdvantages,
    BusinessAdvantages,
    EnterpriseAdvantages,
} from "@/utils/plansAdvantages";

export default function Plans() {
    return (
        <div className="">
            <div className="flex flex-col pt-16 items-center">
                <h1 className="font-bold text-[20px] text-[#af26e5]">
                    Choose your plan
                </h1>
                <p className="font-medium">No contracts and no hidden fees!</p>
            </div>

            <div className="flex flex-col gap-10 pt-5 items-center lg:flex-row lg:px-32">
                <PlanCard
                    plan="Free Trial"
                    description="Perfect for testing our features"
                    cost={0}
                    advantages={freeTrialAdvantages}
                    buttonText="Start free trial"
                />

                <PlanCard
                    plan="Pro"
                    description="For professional users"
                    cost={80}
                    advantages={ProAdvantages}
                    buttonText="Get started"
                />

                <PlanCard
                    plan="Business"
                    description="For small/medium businesses"
                    cost={200}
                    advantages={BusinessAdvantages}
                    buttonText="Get started"
                />

                {/* <PlanCard
                    plan="Enterprise"
                    description="For enterprise companies"
                    advantages={EnterpriseAdvantages}
                    buttonText="Contact Sales"
                /> */}
            </div>
        </div>
    );
}
