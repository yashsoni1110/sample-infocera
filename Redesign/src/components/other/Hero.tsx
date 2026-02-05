import { useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import { Button } from "../ui/button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Hero = () => {
    const containerRef = useRef(null);
    const titleRef = useRef(null);
    const portalRef = useRef(null);

    useGSAP(() => {
        const tl = gsap.timeline();

        // 1. Atmosphere fade in
        tl.fromTo(".blob-bg", 
            { opacity: 0 }, 
            { opacity: 0.3, duration: 2, ease: "power2.inOut" }
        , 0);

        // 2. Portal Scale Up
        tl.fromTo(portalRef.current,
            { scale: 0, opacity: 0, rotate: 180 },
            { scale: 1, opacity: 1, rotate: 0, duration: 1.5, ease: "back.out(1.2)" }
        , 0.2);

        // 3. Title Stagger
        if (titleRef.current) {
            const lines = (titleRef.current as any).children;
             tl.fromTo(lines,
                { y: 50, opacity: 0, filter: "blur(10px)" },
                { y: 0, opacity: 1, filter: "blur(0px)", stagger: 0.15, duration: 1, ease: "power3.out" }
            , 0.8);
        }

        // 4. Scan Line Loop
        gsap.to(".scan-line", {
            top: "100%",
            duration: 3,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true
        });

    }, []);

    return (
        <section ref={containerRef} className="relative min-h-screen w-full bg-background overflow-hidden flex flex-col items-center justify-center pt-30 pb-20">
            
            {/* --- ATMOSPHERE --- */}
            <div className="absolute inset-0 pointer-events-none">
                 {/* Center Glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/20 blob-bg rounded-full mix-blend-screen animate-pulse-slow" />
                
                {/* Accent Blobs */}
                <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[120px] rounded-full" />
                <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full" />
                
                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-150 contrast-200 mix-blend-overlay" />
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[length:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
            </div>

            {/* --- CONTENT --- */}
            <div className="container relative z-10 flex flex-col items-center text-center max-w-5xl px-4">
                
                {/* 1. Badge */}
                <div className="mb-1 inline-flex items-center gap-2 px-4 py-0 rounded-full bg-white/5 border border-white/10 backdrop-blur-md text-xs font-mono tracking-[0.2em] text-primary/80 uppercase animate-in fade-in slide-in-from-bottom-1 duration-1000 delay-300 fill-mode-backwards">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                    System Reboot V.2.0
                </div>

                {/* 2. Main Title */}
                <div ref={titleRef} className="space-y-4 mb-8">
                    <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-foreground via-foreground to-foreground/30 drop-shadow-2xl">
                        INFOCERA
                    </h1>
                    <p className="text-xl md:text-3xl font-light text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                        Architecting the <span className="text-foreground font-medium text-glow">digital sublime</span> for modern enterprises.
                    </p>
                </div>

                {/* 3. Actions */}
                <div className="flex flex-col sm:flex-row items-center gap-6 mt-4 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700 fill-mode-backwards">
                     <Button 
                        size="lg" 
                        className="rounded-full px-10 h-14 text-base font-bold shadow-[0_0_40px_rgba(var(--primary),0.3)] hover:shadow-[0_0_60px_rgba(var(--primary),0.5)] transition-all duration-500 hover:scale-110 bg-foreground text-background hover:bg-foreground/90"
                    >
                        Enter System
                        <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                    <Button variant="ghost" className="rounded-full px-8 h-14 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-foreground/5">
                        <Play className="w-4 h-4 mr-2" />
                        Showreel
                    </Button>
                </div>

                 {/* 4. Portal Graphic Centerpiece */}
                <div className="relative mt-10 w-full max-w-4xl aspect-[16/9] perspective-1000 group">
                    <div ref={portalRef} className="relative w-full h-full">
                         {/* Transforming inner container for 3D effect */}
                        <div className="absolute inset-0 rounded-2xl border border-border/40 bg-card/80 backdrop-blur-xl overflow-hidden shadow-2xl shadow-primary/20 transform rotate-x-12 group-hover:rotate-x-0 transition-transform duration-1000 ease-out">
                             
                             {/* --- INNER CONSOLE UI --- */}
                             <div className="absolute inset-0 p-1 flex flex-col font-mono text-xs">
                                
                                {/* Window Header */}
                                <div className="flex items-center justify-between px-4 py-3 bg-secondary/20 border-b border-border/20">
                                    <div className="flex items-center gap-2">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
                                    </div>
                                    <div className="text-[10px] text-primary/60 tracking-[0.2em] font-bold uppercase flex items-center gap-2">
                                        <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
                                        Live Environment
                                    </div>
                                </div>

                                {/* Main Workspace */}
                                <div className="flex-1 flex overflow-hidden">
                                    
                                    {/* Sidebar */}
                                    <div className="w-48 border-r border-border/20 bg-secondary/5 hidden sm:flex flex-col p-4 gap-4">
                                        <div className="h-20 rounded bg-secondary/10 border border-border/10 p-3">
                                            <div className="text-[9px] text-muted-foreground uppercase mb-2">CPU Load</div>
                                            <div className="flex items-end h-8 gap-1">
                                                {[40, 70, 50, 90, 60, 80, 50].map((h, i) => (
                                                    <div key={i} className="flex-1 bg-primary/40 rounded-[1px]" style={{ height: `${h}%` }} />
                                                ))}
                                            </div>
                                        </div>
                                        <div className="h-20 rounded bg-secondary/10 border border-border/10 p-3">
                                            <div className="text-[9px] text-muted-foreground uppercase mb-2">Memory</div>
                                            <div className="w-full bg-secondary/20 h-1.5 rounded-full overflow-hidden">
                                                <div className="h-full w-[75%] bg-blue-500" />
                                            </div>
                                            <div className="mt-2 text-right text-[10px] font-bold text-blue-400">12.4 GB / 16 GB</div>
                                        </div>
                                         <div className="mt-auto space-y-2">
                                            {[1,2,3].map(i => (
                                                <div key={i} className="h-2 w-full bg-secondary/10 rounded" />
                                            ))}
                                        </div>
                                    </div>

                                    {/* Code/Terminal Area */}
                                    <div className="flex-1 p-6 relative overflow-hidden bg-background/50">
                                        {/* Background Grid */}
                                        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(var(--foreground),0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(var(--foreground),0.03)_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none" />

                                        {/* Code Content */}
                                        <div className="space-y-1.5 opacity-80">
                                            <div className="flex gap-2 text-emerald-500/80">
                                                <span>➜</span>
                                                <span>~</span>
                                                <span className="text-foreground">init_sequence</span>
                                                <span className="text-muted-foreground">--force</span>
                                            </div>
                                            <div className="text-muted-foreground/60 pb-4">Loading modules...</div>
                                            
                                            {Array.from({ length: 8 }).map((_, i) => (
                                                <div key={i} className="flex gap-4 text-[11px]">
                                                    <span className="text-muted-foreground/40 select-none w-6 text-right">{i + 10}</span>
                                                    <span className="text-blue-500/60 dark:text-blue-300/60">
                                                        <span className="text-purple-600 dark:text-purple-400">import</span> {"{ system_core }"} <span className="text-purple-600 dark:text-purple-400">from</span> <span className="text-orange-500 dark:text-orange-300 font-mono">'@infocera/v2'</span>;
                                                    </span>
                                                </div>
                                            ))}
                                             <div className="flex gap-4 text-[11px]">
                                                <span className="text-muted-foreground/40 select-none w-6 text-right">18</span>
                                                <span className="text-green-500/80 animate-pulse">
                                                    System ready...
                                                </span>
                                            </div>
                                        </div>
                                        
                                        {/* Scan Line */}
                                        <div className="scan-line absolute top-0 left-0 w-full h-[2px] bg-primary/50 shadow-[0_0_20px_rgba(var(--primary),0.8)] z-20" />
                                    </div>
                                </div>
                             </div>

                             {/* Glass Reflection Overlay */}
                             <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none" />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Hero;