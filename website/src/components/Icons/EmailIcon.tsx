import EmailSvg from "@public/icons/email.svg";
import Image from "next/image";

interface EmailIconProps {
    width?: number;
    height?: number;
}

export default function EmailIcon({width, height}: EmailIconProps) {
    return (
        <Image src={EmailSvg} alt="email-icon" width={width} height={height} />
    );
}
