import SunLogo from "../../../public/sunlogo.svg";
import Image from "next/image";

export default function SunIcon() {
    return <Image src={SunLogo} alt="Moon Logo" width={24} height={24} />;
}
