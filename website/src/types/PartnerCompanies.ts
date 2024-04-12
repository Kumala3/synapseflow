export interface PartnerCompany {
    company_name: string;
    company_logo: string;
    company_website: string;
}

export interface PartnerCompaniesResponse {
    partner_companies: PartnerCompany[];
}
