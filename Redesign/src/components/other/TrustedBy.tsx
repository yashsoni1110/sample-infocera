
const brands = [
    "TechCorp", "InnovateX", "FutureScale", "DataFlow", "NexaGrid", 
    "OrbitSystems", "QuantumLeap", "CyberSync", "Velocify", "HyperNet"
];

const TrustedBy = () => {
    return (
        <section className="py-20 bg-background overflow-hidden border-b border-border/40 relative">
            
            {/* Ambient Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent -translate-y-1/2" />

            <div className="container container-width mb-12 text-center relative z-10">
                <p className="text-[10px] font-mono font-bold uppercase tracking-[0.4em] text-muted-foreground/60">
                    Trusted By Elite Architecture Teams
                </p>
            </div>
            
            <div className="relative flex overflow-hidden group">
                {/* Gradient Masks */}
                <div className="absolute top-0 left-0 w-48 h-full bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
                <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

                {/* Marquee Content */}
                <div className="flex animate-marquee whitespace-nowrap items-center">
                    {brands.map((brand, i) => (
                        <div key={i} className="mx-12 lg:mx-20 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-700 cursor-default hover:text-primary">
                            <span className="text-3xl lg:text-4xl font-black font-sans tracking-tighter text-foreground/80 hover:text-primary transition-colors">{brand}</span>
                        </div>
                    ))}
                    {brands.map((brand, i) => (
                        <div key={`dup-${i}`} className="mx-12 lg:mx-20 flex items-center justify-center opacity-40 hover:opacity-100 transition-all duration-700 cursor-default hover:text-primary">
                            <span className="text-3xl lg:text-4xl font-black font-sans tracking-tighter text-foreground/80 hover:text-primary transition-colors">{brand}</span>
                        </div>
                    ))}
                </div>
            </div>
            

        </section>
    );
};

export default TrustedBy;
