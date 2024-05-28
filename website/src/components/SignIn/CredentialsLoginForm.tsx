"use client";

import { Input, Button } from "@nextui-org/react";
import Image from "next/image";
import BrandImage from "@public/candeel.webp";
import LeftArrow from "../Icons/LeftArrow";
import { useRouter } from "next/navigation";

export default function CredentialsLoginForm() {
    const router = useRouter();

    const handleBack = () => {
        // Go back to the previous page
        router.back();
    };

    return (
        <main className="p-20 flex flex-row items-center gap-[80px]">
            <div className="">
                <Image className="rounded-md w-[85%]" src={BrandImage} alt="brand-image"/>
            </div>

            <div className="flex flex-col gap-4 p-[44px] bg-[#0d1117] w-[450px] h-[380px] rounded-md shadow-lg">
                <Button isIconOnly className="bg-[#]" onClick={handleBack}>
                    <LeftArrow />
                </Button>


                <Input
                    className=""
                    type="text"
                    placeholder="Username"
                    label="Username"
                />
                <Input
                    className=""
                    type="password"
                    placeholder="Password"
                    label="Password"
                />
                <Button className="mt-1" size="md" type="submit">
                    Sign In
                </Button>
            </div>
        </main>
    );
}
