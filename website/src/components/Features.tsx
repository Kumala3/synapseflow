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
        <div className="flex flex-col py-[36px]">
            <div className="flex flex-col">
                <div className="ml-11">
                    <h3 className="text-[#0085ff] font-semibold ">
                        Sales monitoring
                    </h3>
                    <h1 className="font-bold pt-2">
                        Simplify your sales monitoring
                    </h1>
                </div>

                <div className="flex overflow-hidden justify-center pt-3">
                    <Image src={Feature1} alt="feature-1" className="" />
                </div>

                <div className="pt-3 max-w-[380px]">
                    <p className="text-center font-semibold ml-11">
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&apos;s eye view
                        with our customizable dashboard.
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
                            <p className="font-medium">{item.advantage}</p>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center pt-3">
                    <DetailInfoButton />
                </div>
            </div>

            <div className="flex flex-col pt-16">
                <div className="flex flex-col ml-11 gap-2">
                    <p className="text-[#00a424] font-medium">
                        Customer Support
                    </p>
                    <h1 className="font-bold text-[18px]">
                        Get in touch with your customers
                    </h1>
                </div>

                <div className="flex pt-5 justify-center">
                    <Image src={Feature2} alt="feature-2" />
                </div>

                <div className="flex pt-5 max-w-[390px] overflow-hidden">
                    <p className="ml-11 font-medium">
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&apos;s eye view
                        with our customizable dashboard.
                    </p>
                </div>

                <ul className="flex flex-col items-center pt-10 gap-2 max-w-[400px]">
                    {advantagesFeature2.map((item, index) => (
                        <li key={index} className="flex items-center gap-1">
                            <span>
                                <Image
                                    src={Check}
                                    alt="check-sign-image"
                                    width={20}
                                />
                            </span>
                            <p className="font-medium">{item.advantage}</p>
                        </li>
                    ))}
                </ul>

                <div className="flex justify-center pt-3">
                    <DetailInfoButton />
                </div>
            </div>

            <div className="pt-10">
                <div className="flex flex-col gap-2 ml-11">
                    <p className="font-medium text-[#eb2891]">
                        Growth monitoring
                    </p>
                    <h1 className="font-bold">
                        Monitor your site’s new subscribers{" "}
                    </h1>
                </div>

                <div className="flex justify-center pt-5">
                    <Image
                        src={Feature3}
                        alt="feature-3"
                        className="rounded-md"
                    />
                </div>

                <div className="flex max-w-[380px] pt-5 overflow-hidden">
                    <p className="ml-7 font-medium">
                        Stay on top of things and revamp your work process with
                        our game-changing feature. Get a bird&apos;s eye view
                        with our customizable dashboard.
                    </p>
                </div>

                <div className="flex flex-row gap-5 pt-10 ml-11">
                    <div className="flex flex-col gap-1">
                        <p className="font-bold">1000+</p>
                        <p className="font-semibold">
                            Reviews on{" "}
                            <Link href={"https://trustpilot.com/"} className="text-[#09be78]">
                                Trust Pilot
                            </Link>
                        </p>
                    </div>

                    <div className="flex flex-col gap-1">
                        <p className="font-bold">600+</p>
                        <p className="font-semibold">Reviews on{" "}
                            <Link href={"https://trustpilot.com/"} className="text-[#09be78]">
                                Trust Pilot
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
