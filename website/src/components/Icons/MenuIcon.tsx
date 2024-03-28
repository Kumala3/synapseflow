import Image from "next/image";
import MenuLogo from "@public/menu-mark.svg";
import MenuWhiteLogo from "@public/menu-mark-white.svg";

export function MenuIcon() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image src={MenuLogo} alt="menu-logo" width={120} height={120} />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={MenuWhiteLogo}
                    width={120}
                    height={120}
                    alt="menu-logo-white"
                />
            </div>
        </div>
    );
}
