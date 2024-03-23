import Link from "next/link";
import Image from "next/image";
import ArrowButton from "../../../public/arrow-button.svg";

export function PricingButton() {
    return (
        <button className="flex items-center justify-center gap-x-2 text-[#3612d5] w-1/2 rounded-md font-semibold">
            View Pricing
            <Link href="/pricing">
                <Image
                    src={ArrowButton}
                    alt="arrow-button"
                    width={40}
                    className="hover:scale-110 hover:opacity-70 transition-all duration-300 ease-in-out"
                />
            </Link>
        </button>
    );
}
