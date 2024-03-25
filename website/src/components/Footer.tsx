import {
    CompanySection,
    HelpSection,
    ResourcesSection,
    FeaturesSection,
} from "@/constants/footerSections";
import Link from "next/link";
import Image from "next/image";
import { socialMedia } from "@/constants/socialMedia";

export function Footer() {
    return (
        <div className="p-10 bg-[#f2f2f2]">
            <div className="flex flex-col gap-10 lg:flex-row lg:gap-20 lg:justify-center">
                <div className="">
                    <h2 className="font-bold text-[18px]">Features</h2>

                    <ul className="pt-2 flex flex-col gap-2">
                        {FeaturesSection.map((feature, index) => (
                            <li key={index}>
                                <Link href={feature.to}>
                                    <span className="lg:hover:text-[#3cbd84] lg:hover:transform ease-in-out duration-200 lg:hover:">{feature.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="">
                    <h2 className="font-bold text-[18px]">Company</h2>

                    <ul className="pt-2 flex flex-col gap-2">
                        {CompanySection.map((feature, index) => (
                            <li key={index}>
                                <Link href={feature.to}>
                                    <span className="lg:hover:text-[#3cbd84] lg:hover:transform ease-in-out duration-200 lg:hover:">{feature.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
                
                <div className="">
                    <h2 className="font-bold text-[18px]">Resources</h2>

                    <ul className="pt-2 flex flex-col gap-2">
                        {ResourcesSection.map((feature, index) => (
                            <li key={index}>
                                <Link href={feature.to}>
                                    <span className="lg:hover:text-[#3cbd84] lg:hover:transform ease-in-out duration-200 lg:hover:">{feature.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>


                <div className="">
                    <h2 className="font-bold text-[18px]">Help & FAQs</h2>

                    <ul className="pt-2 flex flex-col gap-2">
                        {HelpSection.map((feature, index) => (
                            <li key={index}>
                                <Link href={feature.to}>
                                    <span className="lg:hover:text-[#3cbd84] lg:hover:transform ease-in-out duration-200 lg:hover:">{feature.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                
            </div>

            <div className="flex flex-col gap-3 pt-16 items-center">
                <ul className="flex flex-row gap-10 mr-10 lg:mr-0">
                    {socialMedia.map((social, index) => (
                        <li key={index}>
                            <Link href={social.url}>
                                <Image
                                    src={social.logo}
                                    alt="social media logo"
                                    width={30}
                                    className="lg:hover:transform ease-in-out duration-250 lg:hover:scale-125"
                                />
                            </Link>
                        </li>
                    ))}
                </ul>
                <span className="">© Copyright 2024. SynapseFlow. All rights reserved.</span>
            </div>
        </div>
    );
}
