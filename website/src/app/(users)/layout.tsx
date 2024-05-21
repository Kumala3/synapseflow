import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Providers } from "../providers";
import { Analytics } from "@vercel/analytics/react";
import { Footer } from "@/components/Footer";
import { GlobalNavbar } from "@/components/Navbar";

export default function UsersLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Providers>
            <GlobalNavbar />
            {children}
            <Analytics />
            <SpeedInsights />
            <Footer />
        </Providers>
    );
}
