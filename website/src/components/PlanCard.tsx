import Check from "../../public/check.svg";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { ROUTES } from "../utils/routes";
import { plansConfigs } from "@/constants/plansConfigs";

function getPlanConfig(plan: string) {
    // TODO: Fetch the plan config from the api
    // Getting the plan config from the planName
    const planConfig = plansConfigs.find(
        config => config.plan?.toLowerCase() === plan
    );

    return planConfig || plansConfigs[0];
}

interface PlanCardProps {
    plan?: string;
    description?: string;
    advantages?: { advantage: string }[];
    cost?: number;
    buttonText?: string;
}

export function PlanCard({
    plan = "Free Trial",
}: // description = "",
// cost = 0,
// advantages = [{ advantage: "" }],
// buttonText = "",
PlanCardProps) {
    // const [planConfig, setPlanConfig] = useState<PlanCardProps>({});

    // useEffect(() => {
    //     const fetchConfig = async () => {
    //         const configData = await getPlanConfig(plan);
    //         setPlanConfig(configData);
    //     };

    //     fetchConfig();
    // }, [plan]);

    const {description, buttonText, cost, advantages} = getPlanConfig(plan);

    return (
        <div className="bg-[#f5f4ff] rounded-md max-w-[380px] max-h-[900px] p-6">
            <div className="flex flex-col">
                <h1 className="text-[18px] font-semibold">{plan.toLocaleUpperCase()}</h1>
                <span className="font-medium text-[#36485c]">
                    {description}
                </span>
            </div>

            <p className="pt-2 text-[22px] font-bold">${cost}/mon</p>

            <ul className="flex flex-col pt-2 gap-1">
                {advantages?.map((item, index) => (
                    <li key={index} className="flex gap-1">
                        <Image src={Check} alt="Check" width={20} />
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
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
