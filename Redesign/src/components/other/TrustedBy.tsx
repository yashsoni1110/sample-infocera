
const brands = [
    "TechCorp", "InnovateX", "FutureScale", "DataFlow", "NexaGrid", 
    "OrbitSystems", "QuantumLeap", "CyberSync", "Velocify", "HyperNet"
];

const TrustedBy = () => {
    return (
        <section className="py-12 bg-background overflow-hidden border-b border-white/5">
            <div className="container container-width mb-8 text-center">
                <p className="text-sm font-mono uppercase tracking-[0.2em] text-muted-foreground">Trusted by industry leaders</p>
            </div>
            
            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-background to-transparent z-10" />
                <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-background to-transparent z-10" />

                {/* Marquee Content */}
                <div className="flex animate-marquee whitespace-nowrap">
                    {brands.map((brand, i) => (
                        <div key={i} className="mx-8 lg:mx-16 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <span className="text-xl lg:text-2xl font-black font-sans tracking-wide text-foreground">{brand}</span>
                        </div>
                    ))}
                    {brands.map((brand, i) => (
                        <div key={`dup-${i}`} className="mx-8 lg:mx-16 flex items-center justify-center opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
                            <span className="text-xl lg:text-2xl font-black font-sans tracking-wide text-foreground">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
            

        </section>
    );
};

export default TrustedBy;
