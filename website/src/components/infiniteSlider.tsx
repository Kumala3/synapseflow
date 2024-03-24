import React from "react";
import Image from "next/image";
import Link from "next/link";
import { linksCompanies } from "@/constants/companies";

interface InfiniteSliderProps {
    time?: number;
    direction?: number;
}

export default function InfiniteSlider({
    time = 30,
    direction = 1,
}: InfiniteSliderProps) {
    const durationTime = { "--duration-time": `${time}s` };
    const animationStyle =
        direction === 1
            ? "animate-infinite-scroll-left"
            : "animate-infinite-scroll-right";

    return (
        <div className="relative lg:max-w-[600px] max-w-[1000px] md:max-w-[650px] overflow-hidden h-[130px] mx-auto flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul
                style={durationTime as React.CSSProperties}
                className={`flex items-center [&_img]:max-w-none ${animationStyle}`}>
                {linksCompanies.map((item, index) => (
                    <li key={index} className="inline-block p-6 lg:p-8">
                        <Link href={item.to}>
                            <Image
                                src={item.image}
                                alt={`logo-${item.brand.toLowerCase()}`}
                                width={110}
                                className="lg:hover:scale-125 transition-all duration-300 ease-in-out"
                            />
                        </Link>
                    </li>
                ))}
            </ul>

            <ul
                style={durationTime as React.CSSProperties}
                className={`flex items-center [&_img]:max-w-none ${animationStyle}`}>
                {linksCompanies.map((item, index) => (
                    <li key={index} className="inline-block p-6 lg:p-8">
                        <Link href={item.to}>
                            <Image
                                src={item.image}
                                alt={`logo-${item.brand.toLowerCase()}`}
                                width={110}
                                className="lg:hover:scale-125 transition-all duration-300 ease-in-out"
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
