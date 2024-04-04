import axios from "axios";
import { useState } from "react";

interface FaqQuestionProps {
    email: string;
    question: string;
}

export function useFaqQuestion() {
    const [error, setError] = useState(null);
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
            setError(error);
            setIsSuccess(false);
        } finally {
            setLoading(false);
        }
    };

    return { sendFaqQuestion, error, isLoading, isSuccess };
}