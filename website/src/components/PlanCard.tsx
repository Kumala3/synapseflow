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

function toTitleCase(str: string) {
    return str.replace(/\w\S*/g, function (txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
}

interface PlanCardProps {
    plan?: string;
    description?: string;
    advantages?: { advantage: string }[];
    cost?: number;
    buttonText?: string;
}

export function PlanCard({ plan = "Free Trial" }: PlanCardProps) {
    // const [planConfig, setPlanConfig] = useState<PlanCardProps>({});

    // useEffect(() => {
    //     const fetchConfig = async () => {
    //         const configData = await getPlanConfig(plan);
    //         setPlanConfig(configData);
    //     };

    //     fetchConfig();
    // }, [plan]);

    let bgPlan = "";

    switch (plan) {
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

    const { description, advantages, cost, buttonText } = getPlanConfig(plan);

    return (
        <div className={`${bgPlan} text-white rounded-md max-w-[380px] max-h-[900px] p-6`}>
            <div className="flex flex-col">
                <h1 className="text-[18px] font-semibold">
                    {toTitleCase(plan)}
                </h1>
                <span className="font-medium">
                    {description}
                </span>
            </div>

            <p className="pt-2 text-[22px] font-bold">${cost}/mon</p>

            <ul className="flex flex-col pt-2 gap-1">
                {advantages?.map((item, index) => (
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
                        {buttonText}
                    </Button>
                </Link>
            </div>
        </div>
    );
}
