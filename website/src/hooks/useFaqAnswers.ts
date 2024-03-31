import useSWR from "swr";
import axios from "axios";

interface FaqAnswer {
    title: string;
    content: string;
}

interface FaqResponse {
    answers: FaqAnswer[];
}

export function useFaqAnswers() {
    const fetcher = async (url: string) => {
        const result = await axios.get(url);
        return result.data;
    };

    const { data, error } = useSWR<FaqResponse>(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/faq-answers/`,
        fetcher
    );

    return {
        faqData: data,
        isLoading: !error && !data ? true : false,
        isError: error,
    };
}
