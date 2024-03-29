"use client";

import Image from "next/image";
import CompanyLogo from "@public/company-logo.png";
// import UserLogo from "../../public/User.svg";
import { MenuIcon } from "./Icons/MenuIcon";
import { useState } from "react";
import { navLinks } from "@/constants/navLinks";
import { Button } from "@nextui-org/react";
import GitHubIcon from "./Icons/GitHubIcon";
import { ROUTES } from "../utils/routes";
import { ThemeSwitcher } from "./ThemeSwitcher";
import {
    Navbar,
    NavbarBrand,
    NavbarContent,
    NavbarItem,
    NavbarMenuToggle,
    NavbarMenu,
    NavbarMenuItem,
    Link,
} from "@nextui-org/react";

export default function CustomNavbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <Navbar
            className={"pt-1 dark:bg-[#1f1f1f]"}
            onMenuOpenChange={setIsMenuOpen}>
            <NavbarBrand>
                <Link href="/">
                    <Image
                        src={CompanyLogo}
                        alt="website-logo"
                        width={100}
                        className="rounded-lg"
                    />
                </Link>
            </NavbarBrand>

            <NavbarContent className="hidden lg:flex gap-10 mr-[20px]" justify="center">
                {navLinks.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link href={item.to}>
                            <span className="text-gray-500 font-semibold hover:text-black hover:font-bold hover:scale-110 transform ease-in-out dark:text-white duration-250">
                                {item.name}
                            </span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-1">
                <div className="flex flex-row gap-3 absolute mr-[40px] lg:mr-[90px]">
                    <NavbarItem>
                        <Link href="https://github.com/Kumala3/synapseflow">
                            <GitHubIcon />
                        </Link>
                    </NavbarItem>

                    <NavbarItem>
                        <ThemeSwitcher />
                    </NavbarItem>
                </div>

                <NavbarItem>
                    <Link href={ROUTES.SIGN_IN}>
                        <Button
                            size="md"
                            variant="ghost"
                            radius="sm"
                            className="hidden lg:flex lg:hover:rounded-2xl">
                            Sign in
                        </Button>
                    </Link>
                </NavbarItem>

                <NavbarMenuToggle
                    aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                    className="flex lg:hidden"
                    icon={<MenuIcon />}
                />

                <NavbarMenu className="pt-5">
                    <NavbarMenuItem>
                        <Link
                            href={ROUTES.SIGN_IN}
                            size="lg"
                            className="w-full"
                            color="success">
                            Sign in
                        </Link>
                    </NavbarMenuItem>
                    {navLinks.map((item, index) => (
                        <NavbarMenuItem key={index}>
                            <Link
                                className="w-full"
                                color="foreground"
                                href={item.to}
                                size="lg">
                                {item.name}
                            </Link>
                        </NavbarMenuItem>
                    ))}
                </NavbarMenu>
            </NavbarContent>
        </Navbar>
    );
}
