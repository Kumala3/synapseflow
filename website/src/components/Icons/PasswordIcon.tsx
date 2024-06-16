import PasswordLight from "@public/icons/password-light.svg";
import PasswordDark from "@public/icons/password-dark.svg";
import Image from "next/image";

interface PasswordIconProps {
    width?: number;
    height?: number;
}

export default function PasswordIcon({width, height}: PasswordIconProps) {
    return (
        <div>
            <Image src={PasswordLight} alt="Password Icon" width={width} height={height} className="hidden dark:flex" />
            <Image src={PasswordDark} alt="Password Icon" width={width} height={height} className="flex dark:hidden" />
        </div>
    );
}
