import Introduction from "@/components/Introduction";
import Features from "@/components/Features";
import { Footer } from "@/components/Footer";
import { GlobalNavbar } from "@/components/Navbar";

export default function Home() {
    return (
        <main className="xl:mx-auto xl:container">
            <GlobalNavbar />
            <Introduction />
            <Features />
            <Footer />
        </main>
    );
}
