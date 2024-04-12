import axios, { AxiosError } from "axios";
import { useState } from "react";
import { FaqQuestionProps } from "@/types/FaqQuestion";

export function useFaqQuestion() {
    const [error, setError] = useState<AxiosError | null >(null);
    const [isLoading, setLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const sendFaqQuestion = async ({ email, question }: FaqQuestionProps) => {
        setLoading(true);
        try {
            const response = await axios.post(
                `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq-question/`,
                { email, question }
            );

            setIsSuccess(response.status === 201);
            setError(null); // Reset any errors from previous requests
        } catch (error) {
            if (axios.isAxiosError(error)) {
                setError(error);
            } else {
                console.log(`Unexpected error: ${error}`);
            }
            setIsSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return { sendFaqQuestion, error, isLoading, isSuccess };
}
