import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Faq from "@/components/Faq";

export default function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Features />
            <Faq />
        </div>
    );
}
