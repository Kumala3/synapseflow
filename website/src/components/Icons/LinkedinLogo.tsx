import Image from "next/image";
import LinkedinLogo from "@public/social/linkedin-mark.svg";
import LinkedinWhiteLogo from "@public/social/linkedin-mark-white.svg";

export default function LinkedInLogo() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image
                    src={LinkedinLogo}
                    alt="LinkedIn Logo"
                    width={30}
                    height={30}
                    className=""
                />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={LinkedinWhiteLogo}
                    alt="LinkedIn White Logo"
                    width={30}
                    height={30}
                    className=""
                />
            </div>
        </div>
    );
}
