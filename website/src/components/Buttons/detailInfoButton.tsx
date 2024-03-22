import Link from "next/link";
import Image from "next/image";
import ArrowButton from "../../../public/arrow-button.svg";

export function DetailInfoButton() {
    return (
        <div className="flex flex-row items-center gap-2">
            <p className="text-[#3612d5] font-medium">Learn More</p>
            <Link href="/details">
                <Image
                    src={ArrowButton}
                    alt="arrow-button"
                    width={40}
                    className="hover:scale-110 hover:opacity-70 transition-all duration-300 ease-in-out"
                />
            </Link>
        </div>
    );
}
