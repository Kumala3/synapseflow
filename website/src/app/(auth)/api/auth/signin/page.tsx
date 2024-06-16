import SignInLoginForm from "@/components/Auth/SignInLoginForm";
import BrandImage from "@public/candeel.webp";
import Image from "next/image";
import Link from "next/link";

export default async function SignIn() {
    return (
        <main className="dark:bg-[#000000] bg-[#fff]">
            <Link href={"/"} className="">
                <Image className="rounded-md w-[100%] h-[40%]" src={BrandImage} alt="brand-image" />
            </Link>
            <div className="dark:bg-[#0165f8] bg-[#fff]">
                <SignInLoginForm />
            </div>
        </main>
    );
}
