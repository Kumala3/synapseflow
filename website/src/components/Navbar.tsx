import Image from "next/image";
import Link from "next/link";
import CompanyLogo from "../../public/company-logo.png";
import UserLogo from "../../public/User.svg";
import MenuLogo from "../../public/Menu.svg";
import { navLinks } from "@/constants/navLinks";
import { Button } from "@nextui-org/react";
import { ROUTES } from "../utils/routes";

export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto xl:w-full">
            <Link href="/">
                <Image src={CompanyLogo} alt="website-logo" width={100} className="rounded-lg"/>
            </Link>

            <div>
                <ul className="hidden lg:flex gap-10 xl:text-[25px]">
                    {navLinks.map((item, index) => (
                        <li
                            key={index}
                            className="text-gray-500 font-semibold hover:text-black transition-colors duration-300">
                            <Link href={item.to}>{item.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-5">
                <div className="flex items-center gap-2.5">
                    <Image src={UserLogo} alt="user-logo" className="xl:w-16"/>
                    <Link href={ROUTES.SIGN_IN}>
                        <Button size="sm" variant="ghost" radius="sm" className="hidden lg:flex lg:hover:rounded-2xl">
                            Sign in
                        </Button>
                    </Link>
                </div>

                <Image src={MenuLogo} alt="menu-logo" className="lg:hidden" />
            </div>
        </nav>
    );
}
