"use client";
import InfiniteSlider from "./infiniteSlider";
import { usePartnerCompanies } from "@/hooks/usePartnerCompanies";
import { PartnersSkeleton } from "./PartnersSkeleton";

export default function Partners() {
    const { partnerCompanies, isError, isLoading } = usePartnerCompanies();

    if (isError) return <div>Failed to load data about partner_companies</div>;

    const partner_companies = partnerCompanies?.partner_companies;

    return (
        <div className="flex flex-col">
            {isLoading ? (
                <div className="-mt-40">
                    <PartnersSkeleton />
                </div>
            ) : (
                <div className="-mt-[220px] gap-0">
                    <InfiniteSlider
                        time={20}
                        companies={partner_companies || []}
                    />
                    <InfiniteSlider
                        direction={2}
                        time={20}
                        companies={partner_companies || []}
                    />
                </div>
            )}
        </div>
    );
}
