import PasswordSvg from "@public/icons/password.svg";
import Image from "next/image";

interface PasswordIconProps {
    width?: number;
    height?: number;
}

export default function PasswordIcon({width, height}: PasswordIconProps) {
    return (
        <Image src={PasswordSvg} alt="password-icon" width={width} height={height} />
    );
}
