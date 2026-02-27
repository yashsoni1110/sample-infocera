import { useEffect, useRef } from "react";
import { ArrowRight, Play, Compass, Diamond } from "lucide-react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        // Initial Setup
        gsap.set(contentRef.current?.children || [], { y: 60, opacity: 0 });
        gsap.set(visualRef.current?.children || [], { scale: 0.8, opacity: 0, rotateY: 45 });

        // Animation Sequence
        tl.to(contentRef.current?.children || [], {
            y: 0,
            opacity: 1,
            stagger: 0.15,
            duration: 1.4,
            delay: 0.2
        })
        .to(visualRef.current?.children || [], {
            scale: 1,
            opacity: 1,
            rotateY: 0,
            duration: 1.8,
            ease: "expo.out"
        }, "-=1.2");

        // Epic slow rotation of the main orb
        gsap.to(".luxury-orb", {
            rotateZ: 360,
            duration: 60,
            repeat: -1,
            ease: "linear"
        });

        // Breathing effect for ambient light
        gsap.to(".hero-glow", {
            scale: 1.1,
            opacity: 0.5,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section ref={containerRef} className="relative min-h-[100dvh] w-full bg-background overflow-hidden flex items-center justify-center pt-40 pb-20 lg:pt-48 lg:pb-24">
            
            {/* --- PREMIUM AMBIENCE --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="hero-glow absolute top-[-20%] right-[-10%] w-[80vw] h-[80vw] max-w-[1200px] max-h-[1200px] bg-primary/20 rounded-full blur-[150px] mix-blend-screen mix-blend-color-dodge dark:mix-blend-screen" />
                <div className="hero-glow absolute bottom-[-20%] left-[-10%] w-[60vw] h-[60vw] max-w-[800px] max-h-[800px] bg-primary/10 rounded-full blur-[120px] mix-blend-screen mix-blend-color-dodge dark:mix-blend-screen" style={{ animationDelay: "3s" }} />
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
            </div>

            <div className="container container-width relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center h-full">
                
                {/* --- MASONRY LEFT CONTENT --- */}
                <div ref={contentRef} className="lg:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left space-y-10 z-20">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 backdrop-blur-xl text-xs font-mono font-bold text-primary tracking-[0.2em] shadow-[0_0_20px_rgba(var(--primary),0.1)] uppercase">
                        <Diamond className="w-3.5 h-3.5" />
                        Exclusive Digital Mastery
                    </div>

                    {/* Headline - High Contrast, Sharp */}
                    <h1 className="text-6xl md:text-7xl lg:text-[6rem] font-sans font-black tracking-tighter leading-[0.95] text-balance">
                        <span className="block text-foreground drop-shadow-sm">Crafting</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-br from-primary via-[#ffdf73] to-[#8c6b14] pb-2 drop-shadow-lg">Excellence.</span>
                    </h1>

                    {/* Subheadline - Elegant */}
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-lg leading-relaxed font-light">
                        We forge unmatched digital experiences that elevate elite brands. <strong className="font-semibold text-foreground">Precision engineered. Boldly designed.</strong>
                    </p>

                    {/* Elegant CTA Cluster */}
                    <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto pt-6">
                        <Button size="lg" className="h-16 px-10 rounded-full text-lg font-semibold bg-primary text-primary-foreground hover:bg-primary/90 shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] transition-all duration-500 hover:scale-105 group border border-primary/50">
                            Partner With Us
                            <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-16 px-10 rounded-full text-lg font-medium border-border/50 hover:bg-secondary/30 backdrop-blur-md transition-all duration-500 hover:scale-105 group bg-background/20">
                            <Play className="w-4 h-4 mr-3 fill-foreground group-hover:text-primary group-hover:fill-primary transition-colors" />
                            View Showreel
                        </Button>
                    </div>

                    {/* Mini Stats Footer */}
                    <div className="pt-10 flex items-center justify-center lg:justify-start gap-10 border-t border-border/40 w-full sm:w-auto mt-6">
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-foreground">500+</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mt-1">Clients worldwide</span>
                        </div>
                        <div className="w-px h-12 bg-border/50" />
                        <div className="flex flex-col">
                            <span className="text-3xl font-black text-primary">Awwwards</span>
                            <span className="text-xs uppercase tracking-widest text-muted-foreground font-mono mt-1">Studio of the Year</span>
                        </div>
                    </div>
                </div>

                {/* --- AVANT-GARDE RIGHT VISUAL --- */}
                <div className="lg:col-span-6 relative flex items-center justify-center h-[500px] lg:h-[800px] perspective-[2000px] pointer-events-none">
                    <div ref={visualRef} className="relative w-full aspect-square max-w-[600px] flex items-center justify-center preserve-3d">
                        
                        {/* Obsidian & Gold Abstract Structure */}
                        
                        {/* The Halo */}
                        <div className="absolute inset-10 border-[1px] border-primary/30 rounded-full animate-float" style={{ animationDelay: "1s" }} />
                        <div className="absolute inset-0 border-[2px] border-dashed border-primary/20 rounded-full luxury-orb" />
                        
                        {/* The Core Monolith */}
                        <div className="absolute w-[60%] h-[80%] bg-gradient-to-tr from-foreground/10 to-foreground/5 backdrop-blur-3xl rounded-t-full rounded-b-full border border-white/10 dark:border-white/5 shadow-2xl flex items-center justify-center overflow-hidden animate-float-delayed">
                            
                            {/* Inner Gold Inlay */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[90%] border border-primary/40 rounded-t-[40%] rounded-b-[40%] overflow-hidden mix-blend-overlay">
                                 <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent" />
                            </div>

                            {/* Minimal Emblem */}
                            <Compass className="w-24 h-24 text-primary opacity-80 mix-blend-screen drop-shadow-[0_0_30px_rgba(var(--primary),1)] animate-pulse-slow" strokeWidth={1} />
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;