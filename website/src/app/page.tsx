import Navbar from "@/components/Navbar";
import Overview from "@/components/Overview";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Plans from "@/components/Plans";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Overview />
            <Features />
            <Faq />
            <Plans />
        </div>
    );
}
