import Image from "next/image";
import Link from "next/link";
import { linksCompanies } from "@/utils/companies";

interface InfiniteSliderProps {
    time?: number;
    way?: number;
}

export default function InfiniteSlider({ time = 40, path = 1 }: InfiniteSliderProps) {

    return (
        <div className="relative max-w-[600px]  overflow-hidden h-[130px] mx-auto flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center [&_img]:max-w-none animate-infinite-scroll">
                {linksCompanies.map((item, index) => (
                    <li key={index} className="inline-block p-8">
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

            <ul className="flex items-center [&_img]:max-w-none animate-infinite-scroll">
                {linksCompanies.map((item, index) => (
                    <li key={index} className="inline-block p-8">
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
