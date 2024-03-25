import Image from "next/image";
import MenuSVG from "../../public/Menu.svg";

export function MenuLogo() {
    return (
        <Image
            src={MenuSVG}
            alt="menu-logo"
            width={80}
            height={80}
        />
    );
}
