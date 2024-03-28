import Image from "next/image";
import GitHubLogo from "../../../public/github-mark/github-mark.svg";
import GitHubWhiteLogo from "../../../public/github-mark/github-mark-white.svg";

export default function GitHubIcon() {
    return (
        <div>
            <div className="flex dark:hidden">
                <Image
                    src={GitHubLogo}
                    alt="GitHub Logo"
                    width={30}
                    height={30}
                    className="rounded-lg lg:hover:opacity-85 lg:transform: ease-in-out duration-300"
                />
            </div>

            {/* Display this SVG only in dark mode */}
            <div className="hidden dark:flex">
                <Image
                    src={GitHubWhiteLogo}
                    alt="GitHub White Logo"
                    width={30}
                    height={30}
                    className="rounded-lg lg:hover:opacity-85 lg:transform: ease-in-out duration-300"
                />
            </div>
        </div>
    );
}
