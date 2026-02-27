import { Button } from "../ui/button";
import { ArrowRight, Sparkles, Diamond } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const CTA = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, 
            { y: 80, opacity: 0, scale: 0.95 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 1.5,
                ease: "power4.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="py-32 lg:py-48 bg-background relative overflow-hidden flex items-center justify-center border-t border-border/40">
            
            {/* Monumental Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120vw] max-w-[1200px] aspect-square bg-[#cda24e]/10 dark:bg-primary/20 rounded-full blur-[150px] mix-blend-screen animate-pulse-slow z-0" />
                <div className="absolute inset-0 bg-aurora mix-blend-overlay opacity-30 z-0" />
            </div>

            <div ref={sectionRef} className="container container-width relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">
                
                {/* Micro Badge */}
                <div className="flex items-center gap-3 px-5 py-2 rounded-full border border-primary/40 bg-background/50 backdrop-blur-3xl text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary mb-10 shadow-[0_0_20px_rgba(var(--primary),0.2)]">
                    <Sparkles className="w-3.5 h-3.5 fill-primary/30" />
                    Final Action Sequence
                </div>

                <h2 className="text-5xl md:text-7xl lg:text-[7rem] font-sans font-black tracking-tighter mb-8 leading-[0.95] drop-shadow-lg text-balance">
                    Architect <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-[#ffdf73] to-[#8c6b14] pb-2 drop-shadow-xl inline-block">Dominance.</span>
                </h2>
                
                <p className="text-xl md:text-2xl text-muted-foreground/80 font-medium mb-16 max-w-3xl mx-auto leading-relaxed">
                    Align with elite engineering forces. We construct the digital infrastructure necessary to obliterate your competition.
                </p>
                
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 w-full sm:w-auto">
                    <Button size="lg" className="h-20 px-14 rounded-full text-lg font-bold uppercase tracking-widest border border-primary/50 shadow-[0_0_60px_rgba(var(--primary),0.4)] hover:shadow-[0_0_100px_rgba(var(--primary),0.6)] hover:scale-110 transition-all duration-500 bg-primary text-primary-foreground group">
                        Deploy Protocol <ArrowRight className="w-6 h-6 ml-4 group-hover:translate-x-2 transition-transform duration-300" />
                    </Button>
                    <Button variant="outline" size="lg" className="h-20 px-14 rounded-full text-lg font-bold uppercase tracking-widest bg-background/20 backdrop-blur-3xl border-border/80 hover:bg-secondary/40 hover:border-primary/50 hover:text-primary transition-all duration-500 hover:scale-[1.05] group text-foreground">
                        <Diamond className="w-4 h-4 mr-4 fill-primary/20 group-hover:fill-primary transition-colors" />
                        Executive Briefing
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
