import Navbar from "@/components/Navbar";
import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Plans from "@/components/Plans";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Introduction />
            <Features />
            <Faq />
            <Plans />
        </div>
    );
}
