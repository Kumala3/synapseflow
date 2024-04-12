import { PlanCard } from "./PlanCard";

export default function Plans() {
    return (
        <div className="pb-10">
            <div className="flex flex-col items-center pt-7">
                <h1 className="font-bold text-[20px] text-[#af26e5]">
                    Choose your plan
                </h1>
                <p className="font-medium">No contracts and no hidden fees!</p>
            </div>

            <div className="flex flex-col gap-10 pt-5 items-center lg:flex-row lg:px-32">
                <PlanCard />

                <PlanCard plan_name="pro" />

                <PlanCard plan_name="business" />
            </div>
        </div>
    );
}
