export interface PricingPlan {
    plan: string;
    description: string;
    cost: number;
    button_text: string;
    advantages?: { advantage: string }[];
}
