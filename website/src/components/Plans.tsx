import { PlanCard } from "./PlanCard";

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
                <PlanCard />

                <PlanCard plan="pro" />

                <PlanCard plan="business" />
            </div>
        </div>
    );
}
