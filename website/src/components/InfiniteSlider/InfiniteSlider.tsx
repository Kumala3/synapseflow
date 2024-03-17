import Image from "next/image";
import { linksCompanies } from "@/utils/companies";

export default function InfiniteSlider() {
    return (
        <div className="">
            <ul className="">
                {linksCompanies.map((item, index) => (
                    <li key={index}>
                        {/* <Image
                            src={item.image}
                            alt="company-logo"
                            width={110}
                        /> */}
                        <p>{item.brand}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
