import { getServerSession } from "next-auth";
import { options } from "../api/auth/[...nextauth]/options";
import { redirect } from "next/navigation";

export default async function Resources() {
    const session = await getServerSession(options);

    if (!session) {
        redirect("/api/auth/signin");
    }

    return (
        <div>
            <h1 className="font-bold text-[18px]">Hello {session.user?.name}</h1>
            <h1>It&apos;s a Resources page</h1>      
        </div>
    );
}
