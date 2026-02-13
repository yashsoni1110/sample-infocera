import { useEffect, useRef } from "react";
import { ArrowRight, Globe, Shield, Zap } from "lucide-react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);
    const visualRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

        // Initial Setup
        gsap.set(contentRef.current?.children || [], { y: 50, opacity: 0 });
        gsap.set(visualRef.current, { x: 100, opacity: 0, scale: 0.9 });

        // Animation Sequence
        tl.to(contentRef.current?.children || [], {
            y: 0,
            opacity: 1,
            stagger: 0.1,
            duration: 1,
            delay: 0.2
        })
        .to(visualRef.current, {
            x: 0,
            opacity: 1,
            scale: 1,
            duration: 1.2,
            ease: "back.out(1.7)"
        }, "-=0.8");

        // Floating Animation for Visual
        gsap.to(".hero-float", {
            y: -20,
            duration: 6,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

        // Background Pulse
        gsap.to(".hero-glow", {
            scale: 1.2,
            opacity: 0.4,
            duration: 8,
            repeat: -1,
            yoyo: true,
            ease: "sine.inOut"
        });

    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-background overflow-hidden flex items-center justify-center pt-20 lg:pt-0">
            
            {/* --- BACKGROUND --- */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="hero-glow absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vw] max-w-[1000px] max-h-[1000px] bg-primary/10 rounded-full blur-[100px] mix-blend-screen" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,oklch(var(--primary)/0.03)_1px,transparent_1px),linear-gradient(to_bottom,oklch(var(--primary)/0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
            </div>

            <div className="container container-width relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                
                {/* --- LEFT CONTENT --- */}
                <div ref={contentRef} className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-8">
                    
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-mono font-medium text-primary tracking-wider uppercase">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                        </span>
                        Next Gen Intelligence
                    </div>

                    {/* Headline */}
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tight leading-[1.1] text-balance">
                        <span className="block text-foreground">Digital</span>
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-500 to-blue-500">Evolution</span>
                    </h1>

                    {/* Subheadline */}
                    <p className="text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed">
                        We engineer high-performance digital ecosystems that scale with your ambition. Transform your data into decisive action.
                    </p>

                    {/* Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto pt-4">
                        <Button size="lg" className="h-14 px-8 rounded-full text-base gap-2 shadow-lg hover:shadow-primary/25 transition-all duration-300 hover:-translate-y-1">
                            Start Transformation <ArrowRight className="w-5 h-5" />
                        </Button>
                        <Button variant="outline" size="lg" className="h-14 px-8 rounded-full text-base gap-2 border-primary/20 hover:bg-primary/5 transition-all duration-300 hover:-translate-y-1">
                            Explore Solutions
                        </Button>
                    </div>

                    {/* Trust Indicators */}
                    <div className="pt-8 flex items-center gap-6 text-sm text-muted-foreground font-medium">
                        <div className="flex items-center gap-2">
                            <Shield className="w-4 h-4 text-primary" />
                            <span>Enterprise Grade</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Zap className="w-4 h-4 text-primary" />
                            <span>99.9% Uptime</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Globe className="w-4 h-4 text-primary" />
                            <span>Global Scale</span>
                        </div>
                    </div>
                </div>

                {/* --- RIGHT VISUAL --- */}
                <div ref={visualRef} className="relative flex items-center justify-center lg:h-[800px] perspective-[2000px]">
                    
                    {/* 3D Floating Interface */}
                    <div className="hero-float relative w-full max-w-lg aspect-square lg:aspect-[4/5] preserve-3d rotate-y-[-10deg] rotate-x-[5deg]">
                        
                        {/* Back Layer - Glow */}
                        <div className="absolute inset-4 bg-primary/20 blur-[80px] rounded-full translate-z-[-50px]" />

                        {/* Main Card */}
                        <div className="absolute inset-0 bg-card/80 backdrop-blur-2xl border border-white/10 rounded-3xl shadow-2xl flex flex-col overflow-hidden translate-z-[0px]">
                            {/* Card Header */}
                            <div className="px-6 py-4 border-b border-white/5 flex items-center justify-between bg-white/5">
                                <div className="flex gap-2">
                                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                                    <div className="w-3 h-3 rounded-full bg-green-500/80" />
                                </div>
                                <div className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">System Monitor</div>
                            </div>
                            
                            {/* Card Body - Abstract Data */}
                            <div className="p-6 flex-1 flex flex-col gap-6 relative">
                                <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.5))] pointer-events-none" />
                                
                                <div className="space-y-2">
                                    <div className="flex justify-between text-xs font-mono text-muted-foreground">
                                        <span>Server Load</span>
                                        <span className="text-primary">84%</span>
                                    </div>
                                    <div className="h-2 w-full bg-secondary rounded-full overflow-hidden">
                                        <div className="h-full w-[84%] bg-gradient-to-r from-primary to-purple-500 rounded-full animate-pulse-slow" />
                                    </div>
                                </div>

                                <div className="flex-1 rounded-xl bg-secondary/30 border border-white/5 p-4 flex items-end gap-2">
                                    {[30, 45, 25, 60, 75, 50, 80, 55, 90, 65].map((h, i) => (
                                        <div key={i} className="flex-1 bg-primary/40 rounded-t-sm hover:bg-primary/60 transition-colors" style={{ height: `${h}%` }} />
                                    ))}
                                </div>

                                <div className="grid grid-cols-2 gap-4">
                                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                        <div className="text-xs text-muted-foreground mb-1">Active Users</div>
                                        <div className="text-2xl font-bold">128k</div>
                                    </div>
                                    <div className="p-4 rounded-xl bg-primary/5 border border-primary/10">
                                        <div className="text-xs text-muted-foreground mb-1">Latency</div>
                                        <div className="text-2xl font-bold text-emerald-500">24ms</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-10 -right-10 p-4 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-float translate-z-[60px]" style={{ animationDelay: "1s" }}>
                            <Zap className="w-8 h-8 text-yellow-400 fill-yellow-400/20" />
                        </div>

                        <div className="absolute -bottom-5 -left-5 p-5 bg-card/90 backdrop-blur-xl border border-white/10 rounded-2xl shadow-xl animate-float translate-z-[40px]" style={{ animationDelay: "2s" }}>
                            <div className="text-xs font-mono text-muted-foreground uppercase mb-1">Status</div>
                            <div className="flex items-center gap-2 text-sm font-bold text-emerald-500">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse" />
                                Operational
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;