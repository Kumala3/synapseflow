import React from "react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import { Providers } from "@/app/providers";

export default function ApiLayout({
    children,
}: Readonly<{ children: React.ReactNode }>) {
    return (
        <Providers>
            <h1>Api Layout for Auth Pages</h1>
            {children}
            <Analytics />
            <SpeedInsights />
        </Providers>
    );
}
