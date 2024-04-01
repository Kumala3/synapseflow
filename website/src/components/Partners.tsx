"use client";
import InfiniteSlider from "./infiniteSlider";
import { usePartnerCompanies } from "@/hooks/usePartnerCompanies";
import LoadingData from "./LoadingData";

export default function Partners() {
    const { partnerCompanies, isError, isLoading} = usePartnerCompanies();

    if (isLoading) return <LoadingData />;

    if (isError) return <div>Failed to load data about partner_companies</div>;

    const partner_companies = partnerCompanies?.partner_companies;

    return (
        <div className="flex flex-col">
                <div className="-mt-52 lg:">
                    <InfiniteSlider time={60} companies={partner_companies || []} />
                </div>

                <div className="-mt-10">
                    <InfiniteSlider direction={2} time={60} companies={partner_companies || []} />
                </div>
            </div>
    );
}
