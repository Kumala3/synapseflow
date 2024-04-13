import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "./providers";
import CustomNavbar from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "SynapseFlow",
    description: "Empower your Business with AI solutions",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className} dark:bg-dark`} >
                <Providers>
                    <CustomNavbar />
                    {children}
                    <Footer />
                    <SpeedInsights />
                    <Analytics />
                </Providers>
            </body>
        </html>
    );
}
