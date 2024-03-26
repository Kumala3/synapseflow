import MoonLogo from "../../../public/moonlogo.svg";
import Image from "next/image";

export default function MoonIcon() {
    return <Image src={MoonLogo} alt="Moon Logo" width={24} height={24} />;
}
