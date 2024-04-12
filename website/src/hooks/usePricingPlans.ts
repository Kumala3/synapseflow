import useSWR from "swr";
import axios from "axios";

interface PricingPlan {
    plan: string;
    description: string;
    cost: number;
    button_text: string;
    advantages?: { advantage: string }[];
}

export function usePricingPlans() {
    const fetcher = async (url: string) => {
        const result = await axios.get(url);
        return result.data.pricing_plans;
    };

    const { data, error, isLoading } = useSWR<PricingPlan[]>(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/pricing-plans/`,
        fetcher
    );

    return {
        pricingPlans: data,
        isLoading: isLoading,
        isError: error,
    };
}
