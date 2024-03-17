import Image from "next/image";
import Link from "next/link";
import { linksCompanies } from "@/utils/companies";

export default function InfiniteSlider() {
    return (
        <div className="mt-10 p-4 overflow-hidden outline-double mx-auto">
            <ul className="flex items-center gap-1 ">
                {linksCompanies.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                        <Link href={item.to}>
                            <Image
                                src={item.image}
                                alt="company-logo"
                                width={180}
                                className=""
                            />
                        </Link>
                    </li>
                ))}

                {linksCompanies.map((item, index) => (
                    <li key={index} className="flex-shrink-0">
                        <Link href={item.to}>
                            <Image
                                src={item.image}
                                alt="company-logo"
                                width={180}
                                className=""
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
