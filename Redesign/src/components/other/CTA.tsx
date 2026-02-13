import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

const CTA = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(sectionRef.current, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden flex items-center justify-center">
            
            {/* Background Glow */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] aspect-square bg-primary/20 rounded-full blur-[120px] opacity-50 animate-pulse-slow" />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div ref={sectionRef} className="container container-width relative z-10 text-center max-w-4xl px-6">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter mb-6">
                    Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Accelerate?</span>
                </h2>
                <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
                    Join industry leaders who are transforming their digital infrastructure with our platform. Start building today.
                </p>
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button size="lg" className="rounded-full h-16 px-10 text-lg shadow-[0_0_50px_rgba(var(--primary),0.4)] hover:shadow-[0_0_80px_rgba(var(--primary),0.6)] hover:scale-105 transition-all duration-300">
                        Get Started Now <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                    <Button variant="outline" size="lg" className="rounded-full h-16 px-10 text-lg bg-background/50 backdrop-blur-md border-primary/20 hover:bg-primary/10">
                        Talk to Sales
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default CTA;
