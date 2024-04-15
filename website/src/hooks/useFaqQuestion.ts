import axios from "axios";
import { useState } from "react";
import { FaqQuestionProps, BackendErrors } from "@/types/FaqQuestion";

export function useFaqQuestion() {
    const [error, setError] = useState<BackendErrors | null>(null);
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
        } catch (error) {
            if (axios.isAxiosError(error) && error.response) {
                const backendErrors = error.response.data;
                setError(backendErrors);
            } else {
                setError({
                    error_messages: { question: "An unexpected error occurred" },
                });
            }
            setIsSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return { sendFaqQuestion, error, isLoading, isSuccess };
}
