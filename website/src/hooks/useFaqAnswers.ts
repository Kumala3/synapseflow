import useSWR from "swr";
import axios from "axios";
import { FaqResponse } from "@/types/FaqAnswers";

export function useFaqAnswers() {
    const fetcher = async (url: string) => {
        const result = await axios.get(url);
        return result.data;
    };

    const { data, error, isLoading } = useSWR<FaqResponse>(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq-answers/`,
        fetcher
    );

    return {
        faqData: data,
        isLoading: isLoading,
        isError: error,
    };
}
