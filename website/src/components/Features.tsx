import Feature1 from "../../public/feature-1.svg";
import Feature2 from "../../public/feature-2.svg";
import Feature3 from "../../public/feature-3.svg";
import Check from "../../public/check.svg";
import Image from "next/image";
import { DetailInfoButton } from "./Buttons/detailInfoButton";
import Link from "next/link";

const advantagesFeature1 = [
    { advantage: "Track your sales in real-time" },
    { advantage: "Get insights on your sales performance" },
    { advantage: "Customize your dashboard" },
    { advantage: "Monitor your sales from anywhere" },
];

const advantagesFeature2 = [
    { advantage: "Easy communication with customers" },
    { advantage: "Immediately notifications from customers" },
    { advantage: "Customize your dashboard" },
    { advantage: "Monitor sales from anywhere" },
];

export default function Features() {
    return (
        <div className="flex flex-col py-[36px] gap-10 lg:py-[70px] lg:gap-[100px]">
            <div className="lg:flex items-center flex-row gap-[90px]">
                <div className="flex flex-col lg:items-start lg:px-[80px]">
                    <div className="ml-8 lg:ml-0">
                        <h3 className="text-[#0085ff] font-semibold text-[20px]">
                            Sales monitoring
                        </h3>
                        <h1 className="font-bold pt-2 text-[16px] lg:text-[26px]">
                            Simplify your sales monitoring
                        </h1>
                    </div>

                    <div className="flex overflow-hidden justify-center pt-3">
                        <Image
                            src={Feature1}
                            alt="feature-1"
                            className="sm:hidden"
                            width={360}
                            priority={true}
                        />
                    </div>

                    <div className="pt-3 max-w-[360px] lg:max-w-[390px] lg:pt-0">
                        <p className="text-center text-[#333232] font-semibold ml-6 lg:ml-0">
                            Stay on top of things and revamp your work process
                            with our game-changing feature. Get a bird&apos;s
                            eye view with our customizable dashboard.
                        </p>
                    </div>

                    <ul className="flex flex-col items-center pt-5 gap-2">
                        {advantagesFeature1.map((item, index) => (
                            <li key={index} className="flex items-center gap-1">
                                <span>
                                    <Image
                                        src={Check}
                                        alt="check-sign-image"
                                        width={20}
                                    />
                                </span>
                                <p className="font-semibold text-[#5a1cb1]">
                                    {item.advantage}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center pt-3 lg:pt-5">
                        <DetailInfoButton />
                    </div>
                </div>

                <div className="">
                    <Image
                        src={Feature1}
                        alt="feature-1"
                        className="hidden lg:flex lg:hover:opacity-50"
                        width={500}
                        priority={true}
                    />
                </div>
            </div>

            <div className="lg:flex flex-row gap-[90px] items-center">
                <div className="lg:ml-14">
                    <Image
                        src={Feature1}
                        alt="feature-1"
                        className="hidden lg:flex"
                        width={500}
                        priority={true}
                    />
                </div>

                <div className="flex flex-col">
                    <div className="flex flex-col ml-8 lg:ml-0 gap-2">
                        <p className="text-[#00a424] font-medium text-[20px]">
                            Customer Support
                        </p>
                        <h1 className="font-bold text-[16px] lg:text-[24px]">
                            Get in touch with your customers
                        </h1>
                    </div>

                    <div className="flex pt-3 justify-center">
                        <Image
                            src={Feature2}
                            alt="feature-2"
                            width={360}
                            priority={true}
                            className="sm:hidden lg:hover:opacity-50"
                        />
                    </div>

                    <div className="flex pt-5 max-w-[360px] lg:pt-0">
                        <p className="ml-6 text-center font-semibold text-[#333232] lg:ml-0">
                            Stay on top of things and revamp your work process
                            with our game-changing feature. Get a bird&apos;s
                            eye view with our customizable dashboard.
                        </p>
                    </div>

                    <ul className="flex flex-col items-center pt-5 gap-2 max-w-[400px]">
                        {advantagesFeature2.map((item, index) => (
                            <li key={index} className="flex items-center gap-1">
                                <span>
                                    <Image
                                        src={Check}
                                        alt="check-sign-image"
                                        width={20}
                                    />
                                </span>
                                <p className="font-semibold text-[#5a1cb1]">
                                    {item.advantage}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center pt-3 lg:justify-start lg:pt-5">
                        <DetailInfoButton />
                    </div>
                </div>
            </div>

            <div className="lg:flex flex-row gap-[90px] items-center">
                <div className="lg:flex flex-col items-start px-[80px]">
                    <div className="flex flex-col gap-2 ml-8 lg:ml-0">
                        <p className="font-medium text-[#eb2891] text-[20px]">
                            Growth monitoring
                        </p>
                        <h1 className="font-bold text-[16px] lg:text-[24px]">
                            Monitor your site’s new subscribers{" "}
                        </h1>
                    </div>

                    <div className="flex justify-center pt-3">
                        <Image
                            src={Feature3}
                            alt="feature-3"
                            className="rounded-lg sm:hidden"
                            width={360}
                            priority={true}
                        />
                    </div>

                    <div className="flex max-w-[360px] pt-5 overflow-hidden lg:pt-0">
                        <p className="ml-6 text-center font-medium text-[#333232] lg:ml-0">
                            Stay on top of things and revamp your work process
                            with our game-changing feature. Get a bird&apos;s
                            eye view with our customizable dashboard.
                        </p>
                    </div>

                    <div className="flex flex-row gap-5 pt-10 ml-11 lg:pt-5 lg:ml-6">
                        <div className="flex flex-col gap-1">
                            <p className="font-bold lg:text-[22px]">1000+</p>
                            <p className="font-semibold">
                                Reviews on{" "}
                                <Link
                                    href={"https://trustpilot.com/"}
                                    className="text-[#09be78]">
                                    Trust Pilot
                                </Link>
                            </p>
                        </div>

                        <div className="flex flex-col gap-1">
                            <p className="font-bold lg:text-[22px]">600+</p>
                            <p className="font-semibold">
                                Reviews on{" "}
                                <Link
                                    href={"https://trustpilot.com/"}
                                    className="text-[#09be78]">
                                    Trust Pilot
                                </Link>
                            </p>
                        </div>
                    </div>

                    <div className="flex ml-11 pt-4 lg:ml-6 lg:pt-5">
                        <DetailInfoButton />
                    </div>

                </div>

                <div className="lg:flex">
                    <Image
                        src={Feature3}
                        alt="feature-3"
                        className="hidden lg:flex rounded-xl"
                        width={500}
                        priority={true}
                    />
                </div>
            </div>
        </div>
    );
}
