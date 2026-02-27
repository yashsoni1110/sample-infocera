import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Cpu, Globe, Layers, ShieldCheck, Zap, Diamond } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Global Infrastructure",
        description: "Deploy applications directly to the edge with millisecond precision.",
        icon: <Globe className="w-5 h-5 text-foreground" />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-card to-background border-r border-b",
        number: "01"
    },
    {
        title: "Zero Latency",
        description: "Hyper-optimized data streams ensuring real-time capabilities.",
        icon: <Zap className="w-5 h-5 text-primary" />,
        className: "col-span-1 bg-card border-b border-border/50",
        number: "02"
    },
    {
        title: "100% Uptime SLA",
        description: "Enterprise grade reliability. Always operational, no exceptions.",
        icon: <ShieldCheck className="w-5 h-5 text-foreground" />,
        className: "col-span-1 bg-gradient-to-bl from-card to-background bg-background border-b",
        number: "03"
    },
    {
        title: "Microservices",
        description: "Modular, highly cohesive architecture arrays.",
        icon: <Layers className="w-5 h-5 text-foreground" />,
        className: "col-span-1 lg:col-span-1 bg-background border-r border-border/50",
        number: "04"
    },
     {
        title: "Neural Core",
        description: "AI automation and predictive scaling protocols natively embedded.",
        icon: <Cpu className="w-5 h-5 text-primary" />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-t from-card to-background border-r",
        number: "05"
    },
    {
        title: "API Native",
        description: "Extensible endpoints built strictly for massive developer scale.",
        icon: <Code className="w-5 h-5 text-foreground" />,
        className: "col-span-1 md:col-span-1 lg:col-span-1 bg-background",
        number: "06"
    }
];

const Features = () => {
    const sectionRef = useRef(null);
    const gridRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".feature-cell");
        
        gsap.fromTo(cards, 
            { y: 80, opacity: 0, scale: 0.98 },
            {
                y: 0,
                opacity: 1,
                scale: 1,
                stagger: 0.05,
                duration: 1.2,
                ease: "expo.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );

        // Slow pulsing line animation
        gsap.to(".grid-line", {
            opacity: 1,
            duration: 2,
            stagger: 0.2,
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 60%"
            }
        });

    }, []);

    return (
        <section ref={sectionRef} className="py-32 w-full bg-background relative overflow-hidden">
            
            {/* Extremely subtle ambient lighting */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[1000px] aspect-square bg-primary/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container container-width relative z-10 px-0">
                
                {/* Section Header */}
                <div className="px-6 md:px-12 flex flex-col md:flex-row justify-between items-start md:items-end mb-24 gap-10">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 text-xs font-mono font-bold uppercase tracking-[0.3em] text-primary mb-6">
                            <Diamond className="w-3 h-3 fill-primary" />
                            Architecture
                        </div>
                        <h2 className="text-4xl md:text-6xl lg:text-7xl font-sans font-black tracking-tighter text-foreground leading-[1.1]">
                            Engineered for <br/> <span className="text-muted-foreground/50">Absolute Dominance.</span>
                        </h2>
                    </div>
                    <div className="max-w-xs text-sm text-foreground/70 font-medium leading-relaxed border-l-2 border-primary/40 pl-6">
                        We don't just build systems. We construct impregnable digital fortresses optimized for hyper-scale.
                    </div>
                </div>

                {/* Neo-brutalist Grid Lines Structure */}
                <div className="relative border-t border-b border-border/60 mx-6 md:mx-12 h-px mb-[-1px] z-20 grid-line opacity-0" />
                
                <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-[300px] border-x border-border/60 mx-6 md:mx-12 overflow-hidden bg-background">
                    {features.map((feature, i) => (
                        <div 
                            key={i} 
                            className={`feature-cell group relative p-10 flex flex-col justify-between overflow-hidden transition-colors duration-700 hover:bg-card/40 ${feature.className || "bg-card border-border/40"}`}
                        >
                            {/* Hover Reveal Gradient */}
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,var(--primary)/2%,transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[1.5s]" />
                            
                            <div className="relative z-10 flex justify-between items-start">
                                <div className="p-4 bg-background border border-border/50 shadow-sm group-hover:border-primary/30 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.1)] transition-all duration-500">
                                    {feature.icon}
                                </div>
                                <span className="font-mono text-sm tracking-widest text-muted-foreground/40 font-bold group-hover:text-primary transition-colors">
                                    {feature.number}
                                </span>
                            </div>

                            <div className="relative z-10">
                                <h3 className="text-2xl font-black mb-3 tracking-tight group-hover:text-primary transition-colors duration-500">{feature.title}</h3>
                                <p className="text-foreground/60 text-sm font-medium leading-relaxed max-w-[90%]">
                                    {feature.description}
                                </p>
                            </div>

                            {/* Corner Accent Line */}
                            <div className="absolute bottom-0 right-0 w-8 h-8 pointer-events-none origin-bottom-right">
                                <div className="absolute bottom-0 right-0 w-px h-0 bg-primary/50 group-hover:h-8 transition-all duration-500 ease-out" />
                                <div className="absolute bottom-0 right-0 h-px w-0 bg-primary/50 group-hover:w-8 transition-all duration-500 ease-out delay-75" />
                            </div>
                        </div>
                    ))}
                </div>

                <div className="relative border-t border-b border-border/60 mx-6 md:mx-12 h-px mt-[-1px] z-20 grid-line opacity-0" />
                
            </div>
        </section>
    );
};

export default Features;
