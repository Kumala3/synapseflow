import Image from "next/image";
import Logo from "../../public/Logo.svg";
import UserLogo from "../../public/User.svg";
import MenuLogo from "../../public/Menu.svg";

const navLinks = [
    { name: "Features" },
    { name: "Pricing" },
    { name: "Enterprise" },
    { name: "Careers" },
];

export default function Navbar() {
    return (
        <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
            <div>
                <Image src={Logo} alt="website-logo"/>
            </div>

            <div>
                <ul className="hidden lg:flex gap-10">
                    {navLinks.map((link, index) => (
                        <li key={index} className="text-gray-500 font-semibold hover:text-black transition-colors duration-300">
                            {link.name}
                        </li>
                    ))}
                </ul>
            </div>

            <div className="flex gap-5">
                <div className="flex items-center gap-2.5">
                    <Image src={UserLogo} alt="user-logo" />
                    <button className="hidden font-medium lg:block">Sign in</button>
                </div>

                <Image src={MenuLogo} alt="menu-logo" className="lg:hidden" />
            </div>
        </nav>
    );
}
