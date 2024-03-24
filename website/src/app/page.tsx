import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";
import Plans from "@/components/Plans";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Faq />
            <Plans />
        </div>
    );
}
