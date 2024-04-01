import Image from "next/image";
import GradientBg from "@public/Gradient-BG.svg";
import { Button } from "@nextui-org/react";
import { ROUTES } from "@/utils/routes";
import Link from "next/link";
import Partners from "./Partners";

export default function Introduction() {

    return (
        <div className="pt-4 overflow-hidden">
            <div className="px-[20px]">
                <h1 className="text-center text-[36px] leading-[40px] font-medium text-[#148459]">
                    Empower Your Product with AI👨‍💻
                </h1>

                <p className="font-bold pt-4 text-center text-[#36485c] dark:text-white">
                    Seamlessly integrate advanced AI models into your workflow.
                    No hassle, just smart solutions.
                </p>

                <div className="flex w-full justify-center gap-10 pt-4 pb-5 lg:gap-[250px] lg:pb-5">
                    <Link href={ROUTES.TEST_AI}>
                        <Button
                            size="lg"
                            variant="shadow"
                            color="primary"
                            radius="md"
                            className="w-full lg:w-auto">
                            Try AI Now
                        </Button>
                    </Link>

                    <Link href={ROUTES.PRICING}>
                        <Button size="lg" variant="shadow" color="primary">
                            Learn More
                        </Button>
                    </Link>
                </div>
            </div>

            <div className="relative flex h-full justify-center">
                <Image
                    src={GradientBg}
                    alt="gradient-bg"
                    className="min-h-[550px] lg:min-h-[800px] object-cover"
                    priority={true}
                />

                <div className="absolute flex flex-col w-full items-center pt-[50px] lg:pt-16">
                    <div className="pb-[110px] lg:pb-[115px]">
                        <iframe
                            className="flex rounded-md w-[350px] h-[250px] lg:w-[900px] lg:h-[500px]"
                            src="https://www.youtube.com/embed/reUZRyXxUs4"
                            title="How AI Could Empower Any Business | Andrew Ng | TED"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                        />
                    </div>

                    <div className="flex flex-col w-full items-center -mt-[70px] lg:-mt-[103px]">
                        <p className="font-tilt font-bold text-center text-[17px] lg:text-[22px] text-white">
                            Trusted by the world&apos;s best companies
                        </p>
                    </div>
                </div>
            </div>

            <Partners />
        </div>
    );
}
