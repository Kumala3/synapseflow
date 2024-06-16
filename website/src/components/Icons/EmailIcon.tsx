import EmailLight from "@public/icons/email-light.svg";
import EmailDark from "@public/icons/email-dark.svg";
import Image from "next/image";

interface EmailIconProps {
    width?: number;
    height?: number;
}

export default function EmailIcon({width, height}: EmailIconProps) {
    return (
        <div>
            <Image src={EmailDark} alt="Email Icon" width={width} height={height} className="flex dark:hidden" />
            <Image src={EmailLight} alt="Email Icon" width={width} height={height} className="hidden dark:flex" />
        </div>
    );
}
