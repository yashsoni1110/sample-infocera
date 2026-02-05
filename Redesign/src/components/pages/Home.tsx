import Nav from "../layout/Nav";
import Hero from "../other/Hero";
import OurServices from "../other/OurServices";
import Techno from "../other/Techno";
import Industry from "../other/Industry";
import Clients from "../other/Clients";
import Stats from "../other/Stats";
import Portfolio from "../other/Portfolio";
import Insights from "../other/Insights";
import Contact from "../other/Contact";
import Footer from "../layout/Footer";


function Home() {
    return (
        <div className="min-h-screen bg-background">
            <Nav />
            {/* Hero Section */}
            <Hero />

            {/* Our services */}
            <OurServices />
            {/* Technology Stack */}
            <Techno />
            {/* Features Grid */}
            <Industry />
            
            {/* Portfolio Grid */}
            <Portfolio />

            {/* Clients Marquee */}
            <Clients />

            {/* Insights / Blog */}
            <Insights />

            {/* Contact Form */}
            <Contact />

            {/* Stats Counter */}
            <Stats />
            
            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;