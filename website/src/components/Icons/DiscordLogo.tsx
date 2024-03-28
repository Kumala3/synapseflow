import Image from "next/image";
import DiscordLogo from "@public/social/discord-mark.svg";
import DiscordWhiteLogo from "@public/social/discord-mark-white.svg";

export default function DiscordIcon() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image
                    src={DiscordLogo}
                    alt="Discord Logo"
                    width={30}
                    height={30}
                    className="social-icon-hover"
                />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={DiscordWhiteLogo}
                    alt="Discord White Logo"
                    width={30}
                    height={30}
                    className="social-icon-hover"
                />
            </div>
        </div>
    );
}
