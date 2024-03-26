"use client";

import Image from "next/image";
import CompanyLogo from "../../public/company-logo.png";
// import UserLogo from "../../public/User.svg";
import { MenuLogo } from "./MenuLogo";
import { useState } from "react";
import { navLinks } from "@/constants/navLinks";
import { Button } from "@nextui-org/react";
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
            className={"pt-1  dark:bg-[#636368]"}
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

            <NavbarContent className="hidden lg:flex gap-10" justify="center">
                {navLinks.map((item, index) => (
                    <NavbarItem key={index}>
                        <Link href={item.to}>
                            <span className="text-gray-500 font-semibold hover:text-black transition-colors duration-300 dark:text-white dark:hover:text-black">
                                {item.name}
                            </span>
                        </Link>
                    </NavbarItem>
                ))}
            </NavbarContent>

            <NavbarContent justify="end" className="gap-1">
                <NavbarItem>
                    <ThemeSwitcher />
                </NavbarItem>

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
                    icon={<MenuLogo />}
                />

                <NavbarMenu className="pt-5">
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
