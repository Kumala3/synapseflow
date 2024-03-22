import Feature1 from "../../public/feature-1.svg";
import Feature2 from "../../public/feature-2.svg";
import Feature3 from "../../public/feature-3.svg";
import Check from "../../public/check.svg";
import Image from "next/image";
import { DetailInfoButton } from "./Buttons/detailInfoButton";

const advantagesFeature1 = [
    { advantage: "Track your sales in real-time" },
    { advantage: "Get insights on your sales performance" },
    { advantage: "Customize your dashboard" },
    { advantage: "Monitor your sales from anywhere" },
];

export default function Features() {
    return (
        <div className="flex flex-col py-[36px]">
            <div className="flex flex-col">
                <div className="ml-8">
                    <h3 className="text-[#0085ff] font-semibold ">
                        Sales monitoring
                    </h3>
                    <h1 className="font-bold pt-2">
                        Simplify your sales monitoring
                    </h1>
                </div>

                <div className="flex overflow-hidden justify-center">
                    <Image src={Feature1} alt="feature-1" className="pt-3" />
                </div>

                <p className="text-center font-semibold pt-3">
                    Stay on top of things and revamp your work process with our
                    game-changing feature. Get a bird&apos;s eye view with our
                    customizable dashboard.
                </p>

                <ul className="flex flex-col items-center pt-5 gap-1">
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
        </div>
    );
}
