import Image from "next/image";
import FacebookLogo from "@public/social/facebook-mark.svg";
import FacebookWhiteLogo from "@public/social/facebook-mark-white.svg";

export default function FacebookIcon() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image
                    src={FacebookLogo}
                    alt="Facebook Logo"
                    width={30}
                    height={30}
                    className=""
                />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={FacebookWhiteLogo}
                    alt="Facebook White Logo"
                    width={30}
                    height={30}
                    className=""
                />
            </div>
        </div>
    );
}
