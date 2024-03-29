import Image from "next/image";
import TwitterLogo from "@public/social/twitter-mark.svg";
import TwitterWhiteLogo from "@public/social/twitter-mark-white.svg";

export default function TwitterIcon() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image
                    src={TwitterLogo}
                    alt="Twitter Logo"
                    width={30}
                    height={30}
                    className="social-icon-hover"
                />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={TwitterWhiteLogo}
                    alt="Twitter White Logo"
                    width={30}
                    height={30}
                    className="social-icon-hover"
                />
            </div>
        </div>
    );
}
