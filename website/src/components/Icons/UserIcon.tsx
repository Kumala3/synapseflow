import Image from "next/image";
import UserDark from "@public/icons/user-dark.svg";
import UserLight from "@public/icons/user-light.svg";

interface UserIconProps {
    width?: number;
    height?: number;
}

export default function UserIcon({ width = 19, height = 19 }: UserIconProps) {
    return (
        <div>
            <Image
                src={UserDark}
                alt="User Icon"
                width={width}
                height={height}
                className="flex dark:hidden"
            />

            <Image
                src={UserLight}
                alt="User Light Icon"
                width={width}
                height={height}
                className="hidden dark:flex"
            />
        </div>
    );
}
