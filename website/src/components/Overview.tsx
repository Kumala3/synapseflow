import Image from "next/image";
import GradientBg from "../../public/Gradient-BG.svg";
import AiBG from "../../public/home-bg.webp";
import HeroImage from "../../public/Image.svg";
import InfiniteSlider from "./InfiniteSlider";
import { FreeTrialButton } from "./Buttons/freeTrialButton";
import { PricingButton } from "./Buttons/learnMoreButton";

export default function Overview() {
    return (
        <div className="pt-4 overflow-hidden">
            <div className="px-[20px]">
                <h1 className="text-center text-[36px] leading-[40px] font-medium text-[#148459]">
                    Empower Your Product with AI👨‍💻
                </h1>

                <p className="font-bold pt-4 text-center text-[#36485c]">
                    Seamlessly integrate advanced AI models into your workflow.
                    No hassle, just smart solutions.
                </p>

                <div className="flex w-full gap-10 pt-4 pb-5 lg:gap-0 lg:justify-center lg:ml-0 lg:pb-5">
                    <FreeTrialButton />
                    <PricingButton />
                </div>
            </div>

            <div className="relative flex h-full justify-center">
                <Image
                    src={GradientBg}
                    alt="gradient-bg"
                    className="min-h-[550px] lg:min-h-[800px] object-cover"
                    priority={true}
                />

                <div className="absolute flex flex-col w-full items-center pt-1 lg:pt-16">
                    <Image
                        src={HeroImage}
                        alt="hero-image"
                        className="mr-10 h-[400px] lg:w-[800px] lg:h-[600px]"
                        priority={true}
                    />

                    <div className="flex flex-col w-full items-center -mt-16 lg:-mt-[90px]">
                        <p className="font-tilt font-bold text-center text-[17px] lg:text-[22px] text-white">
                            Trusted by the world&apos;s best companies
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col">
                <div className="-mt-52 lg:">
                    <InfiniteSlider time={60} />
                </div>
                <div className="-mt-10">
                    <InfiniteSlider direction={2} time={60} />
                </div>
            </div>
        </div>
    );
}
