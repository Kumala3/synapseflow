import Link from "next/link";
import Image from "next/image";
import ArrowButton from "../../public/arrow-button.svg";

export default function Hero() {
    return (
        <div className="pt-4">
            <div className="px-[20px]">
                <h1 className="text-center text-[36px] leading-[40px] font-medium ">
                    Start monitoring your page like a pro👨‍💻
                </h1>

                <p className="font-bold pt-4 text-center text-[#36485c]">
                    Get a birds eye view with our customizable dashboard. Stay
                    on top of things! Revamp your work process with our
                    game-changing feature. Boost productivity and efficiency!
                </p>

                <div className="flex w-full gap-10 pt-4">
                    <button className="bg-[#3913df] w-1/2 py-4 rounded-md text-white hover:opacity-85 transition-all duration-300 ease-in-out">
                        Try For Free
                    </button>

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

                </div>
            </div>
        </div>
    );
}
