import AiInsights from "@public/ai-powered-insights.webp";
import CustomerExperience from "@public/customer-experience.webp";
import MarketExpansion from "@public/market-expansion.webp";
import Image from "next/image";
import { DetailInfoButton } from "./Buttons/detailInfoButton";
import {
    advantagesFeature1,
    advantagesFeature2,
    advantagesFeature3,
} from "@/constants/featuresAdvantages";

export default function Features() {
    return (
        <div className="flex flex-col py-[36px] gap-10 lg:py-[70px] lg:gap-[100px]">
            <div className="lg:flex items-center flex-row lg:gap-[90px] md:flex md:flex-row md:gap-[50px]">
                <div className="flex flex-col lg:items-start lg:px-[80px]">
                    <div className="ml-8 lg:ml-0">
                        <h3 className="text-[#0085ff] font-semibold text-[20px] lg:text-start">
                            AI-Powered Insights
                        </h3>
                        <h1 className="font-bold text-[16px] lg:text-[26px] dark:text-white">
                            Transform Data into Action
                        </h1>
                    </div>

                    <div className="flex overflow-hidden justify-center pt-3 md:hidden lg:hidden">
                        <Image
                            src={AiInsights}
                            alt="ai-powered-insights"
                            className=""
                            width={360}
                            priority={true}
                        />
                    </div>

                    <div className="pt-3 max-w-[360px] lg:max-w-[500px] lg:pt-0">
                        <p className="text-center lg:text-start text-[#333232] font-semibold ml-6 lg:ml-0 dark:text-fuchsia-500">
                            Leverage AI to uncover deep insights from your data.
                            Our cutting-edge models analyze trends, predict
                            outcomes, and offer recommendations so you can make
                            informed decisions with confidence.
                        </p>
                    </div>

                    <ul className="flex flex-col items-center pt-5 gap-2 ml-10 max-w-[300px] lg:max-w-[500px] lg:ml-0 md:ml-5 ">
                        {advantagesFeature1.map((item, index) => (
                            <li key={index} className="flex items-center gap-1">
                                <p className="font-semibold text-[#5a1cb1] dark:text-[#622eff]">
                                    {item.advantage}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex justify-center pt-3 lg:pt-5">
                        <DetailInfoButton />
                    </div>
                </div>

                <Image
                    src={AiInsights}
                    alt="ai-powered-insights"
                    className="hidden lg:flex lg:w-[500px] md:flex md:w-[400px] md:mr-5 rounded-md"
                    width={500}
                    priority={true}
                />
            </div>

            <div className="lg:flex flex-row gap-[90px] items-center md:flex md:flex-row md:gap-[50px]">
                <div className="hidden lg:ml-16 lg:flex lg:w-[500px] md:flex md:w-[400px] md:ml-5">
                    <Image
                        src={CustomerExperience}
                        alt="customer-experience"
                        className="rounded-md"
                        width={500}
                        priority={true}
                    />
                </div>

                <div className="flex flex-col lg:ml-16 md:mr-5">
                    <div className="flex flex-col ml-8 gap-2 lg:ml-0">
                        <p className="text-[#00a424] font-medium text-[20px]">
                            Customer Experience Enhancement
                        </p>
                        <h1 className="font-bold text-[16px] lg:text-[24px]">
                            Personalize Your Customer Interactions
                        </h1>
                    </div>

                    <div className="flex pt-3 justify-center md:hidden lg:hidden">
                        <Image
                            src={CustomerExperience}
                            alt="customer-experience"
                            width={360}
                            priority={true}
                            className=""
                        />
                    </div>

                    <div className="flex pt-5 max-w-[360px] lg:max-w-[600px] lg:mr-14 lg:pt-0">
                        <p className="ml-6 text-center lg:text-start font-semibold text-[#333232] lg:ml-0 dark:text-fuchsia-500">
                            Harness the power of AI to provide a tailored
                            experience for each customer. Our AI solutions
                            understand and predict customer preferences, driving
                            engagement and satisfaction.
                        </p>
                    </div>

                    <ul className="flex flex-col items-center pt-5 gap-2 ml-12 max-w-[300px] lg:ml-0 lg:max-w-[500px]">
                        {advantagesFeature2.map((item, index) => (
                            <li key={index} className="flex items-center gap-1">
                                <p className="font-semibold text-[#5a1cb1] dark:text-[#622eff]">
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

            <div className="lg:flex flex-row gap-[90px] items-center md:flex md:gap-[50px]">
                <div className="lg:flex flex-col items-start lg:px-[80px]">
                    <div className="flex flex-col gap-2 ml-8 lg:ml-0">
                        <p className="font-medium text-[#eb2891] text-[20px]">
                            Market Expansion & Innovation
                        </p>
                        <h1 className="font-bold text-[16px] lg:text-[24px]">
                            Harness AI to Enter New Markets and Drive Innovation
                        </h1>
                    </div>

                    <div className="flex justify-center pt-3 lg:hidden md:hidden">
                        <Image
                            src={MarketExpansion}
                            alt="market-expansion"
                            className="rounded-lg"
                            width={360}
                            priority={true}
                        />
                    </div>

                    <div className="flex max-w-[360px] lg:max-w-[600px] lg:mr-10 pt-5 overflow-hidden lg:pt-0">
                        <p className="ml-6 text-center lg:text-start font-medium text-[#333232] lg:ml-0 dark:text-fuchsia-500">
                            Utilize our AI capabilities to identify new market
                            opportunities and foster innovation within your
                            business. Stay ahead of the curve by leveraging
                            AI-driven market analysis and creative algorithms.
                        </p>
                    </div>

                    <ul className="flex flex-col items-center pt-5 gap-2 ml-12 max-w-[300px] lg:ml-0 lg:max-w-[500px]">
                        {advantagesFeature3.map((item, index) => (
                            <li key={index} className="flex items-center gap-1">
                                <p className="font-semibold text-[#5a1cb1] dark:text-[#622eff]">
                                    {item.advantage}
                                </p>
                            </li>
                        ))}
                    </ul>

                    <div className="flex ml-11 pt-4 lg:ml-6 lg:pt-5">
                        <DetailInfoButton />
                    </div>
                </div>

                <Image
                    src={MarketExpansion}
                    alt="market-expansion"
                    className="hidden lg:flex lg:w-[500px] rounded-xl md:flex md:w-[400px] md:mr-5"
                    width={500}
                    priority={true}
                />
            </div>
        </div>
    );
}
