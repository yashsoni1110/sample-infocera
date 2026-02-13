import Nav from "../layout/Nav";
import Hero from "../other/Hero";
import TrustedBy from "../other/TrustedBy";
import Clients from "../other/Clients";
import Features from "../other/Features";
import Stats from "../other/Stats";
import OurServices from "../other/OurServices";
import Techno from "../other/Techno";
import Industry from "../other/Industry";
import Portfolio from "../other/Portfolio";
import CTA from "../other/CTA";
import Insights from "../other/Insights";
import Contact from "../other/Contact";
import Footer from "../layout/Footer";

function Home() {
    return (
        <div className="min-h-screen bg-background selection:bg-primary/30">
            <Nav />
            <main className="flex flex-col">
                <Hero />
                <TrustedBy />
                <Features />
                <Stats />
                <OurServices />
                <Techno />
                <Industry />
                <Portfolio />
                <Clients />
                <CTA />
                <Insights />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default Home;