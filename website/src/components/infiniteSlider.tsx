import Image from "next/image";
import Link from "next/link";
import { linksCompanies } from "@/utils/companies";

export default function InfiniteSlider() {
    return (
        <div className="relative max-w-[600px] h-[130px] p-5 mx-auto flex flex-nowrap [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-200px),transparent_100%)]">
            <ul className="flex items-center gap-16 [&_img]:max-w-none animate-infinite-scroll">
                {linksCompanies.map((item, index) => (
                    <Link href={item.to} key={index}>
                        <Image
                            src={item.image}
                            alt="company-logo"
                            width={120}
                            className="hover:scale-125 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                ))}
            </ul>

            <ul className="flex items-center gap-16 [&_img]:max-w-none animate-infinite-scroll">
                {linksCompanies.map((item, index) => (
                    <Link href={item.to} key={index}>
                        <Image
                            src={item.image}
                            alt="company-logo"
                            width={120}
                            className="hover:scale-125 transition-all duration-300 ease-in-out"
                        />
                    </Link>
                ))}
            </ul>
        </div>
    );
}
