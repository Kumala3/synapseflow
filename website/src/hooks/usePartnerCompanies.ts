import useSWR from "swr";
import axios from "axios";
import { PartnerCompaniesResponse } from "@/types/PartnerCompanies";

export function usePartnerCompanies() {
    const fetcher = async (url: string) => {
        const result = await axios.get(url);
        return result.data;
    };

    const { data, error, isLoading } = useSWR<PartnerCompaniesResponse>(
        `${process.env.NEXT_PUBLIC_BASE_API_URL}/partner-companies/`,
        fetcher
    );
    
    return {
        partnerCompanies: data,
        isLoading: isLoading,
        isError: error,
    };
}
 