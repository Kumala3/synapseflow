import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/Logo.svg";
import UserLogo from "../../public/User.svg";
import MenuLogo from "../../public/Menu.svg";

const navLinks = [
    { name: "Features", to: "/features" },
    { name: "Pricing", to: "/pricing" },
    { name: "Enterprise", to: "/enterprise" },
    { name: "Careers", to: "/careers" },
];

export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto xl:w-full">
            <Link href="/">
                <Image src={Logo} alt="website-logo" />
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
                    <Link href="/signin">
                        <span className="hidden font-medium lg:block hover:bg-slate-200 rounded duration-150 xl:text-[22px]">
                            Sign in
                        </span>
                    </Link>
                </div>

                <Image src={MenuLogo} alt="menu-logo" className="lg:hidden" />
            </div>
        </nav>
    );
}
