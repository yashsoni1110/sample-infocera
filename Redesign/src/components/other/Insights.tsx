import { useRef } from "react";
import { ArrowUpRight, Clock, Hash, Calendar, ArrowRight, Diamond } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTechIconUrl } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const insights = [
    {
        category: "Machine Learning",
        date: "17 June 2025",
        title: "The Architecture of Predictive Intelligence",
        excerpt: "An elite breakdown of how we deploy billion-parameter models to the edge with zero latency degradation...",
        tags: ["AI", "Edge", "Strategy"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1200&auto=format",
        featured: true
    },
    {
        category: "System Design",
        date: "12 June 2025",
        title: "Unbreakable Microservices",
        excerpt: "Our proprietary blueprint for constructing fault-tolerant distributed systems capable of handling 200M+ requests.",
        tags: ["Architecture", "Scale"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format",
        featured: false
    },
    {
        category: "Web Engineering",
        date: "05 June 2025",
        title: "Sub-Millisecond Rendering",
        excerpt: "Bypassing the DOM: How to utilize WebGL and WASM for ultra-performant interactive experiences.",
        tags: ["Web", "WASM", "WebGL"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format",
        featured: false
    }
];

const Insights = () => {
    const featuredRef = useRef(null);
    const listRef = useRef(null);

    useGSAP(() => {
        // High-end cinematic reveal
        gsap.fromTo(featuredRef.current, 
            { opacity: 0, scale: 0.98, filter: "blur(10px)" },
            { opacity: 1, scale: 1, filter: "blur(0px)", duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: featuredRef.current, start: "top 80%" } }
        );

        // Precise staggered entry
        if (listRef.current) {
            gsap.fromTo((listRef.current as any).children,
                { opacity: 0, x: 50 },
                { opacity: 1, x: 0, duration: 1, stagger: 0.15, ease: "expo.out", scrollTrigger: { trigger: listRef.current, start: "top 80%" } }
            );
        }
    }, []);

    return (
        <section className="relative py-32 bg-background overflow-hidden border-t border-border/40">
            {/* Monumental Watermark Text */}
            <div className="absolute top-0 right-[-10%] text-[20vw] font-black text-foreground/[0.015] dark:text-foreground/[0.02] select-none pointer-events-none leading-none tracking-tighter whitespace-nowrap">
                INTELLIGENCE
            </div>

            <div className="container mx-auto px-6 relative z-10 max-w-7xl">
                
                {/* Minimal Elite Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 gap-8">
                    <div className="max-w-3xl">
                         <div className="flex items-center gap-3 text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary mb-6">
                            <Diamond className="w-3 h-3 fill-primary/20" />
                            Research Laboratory 
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-black tracking-tighter text-foreground leading-[0.95] drop-shadow-sm">
                            Elite <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ffdf73] pb-2 drop-shadow-md">Insights.</span>
                        </h2>
                    </div>
                    <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-widest border-b border-primary/50 pb-2 hover:border-primary hover:text-primary transition-all duration-300">
                        Access Archives <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-500" />
                    </button>
                </div>

                {/* Editorial Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

                    {/* --- MONOLITHIC FEATURED (Left) --- */}
                    <div
                        ref={featuredRef}
                        className="lg:col-span-7 group cursor-pointer flex flex-col h-full"
                    >
                        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-3xl mb-8 shadow-2xl border border-white/5 bg-card/50">
                            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity duration-700" />
                            <img
                                src={insights[0].image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[1.5s] ease-out"
                                alt="Featured"
                            />
                            {/* Inner Glass Badge */}
                            <div className="absolute top-6 left-6 z-20">
                                <span className="px-5 py-2 bg-background/60 backdrop-blur-xl border border-white/10 rounded-full text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-foreground shadow-lg">
                                    {insights[0].category}
                                </span>
                            </div>
                        </div>
                        
                        <div className="space-y-5 px-2 flex-grow flex flex-col">
                            <div className="flex items-center gap-4 text-muted-foreground/60 text-xs font-mono tracking-widest uppercase font-bold">
                                <span className="flex items-center gap-2"><Calendar className="w-3.5 h-3.5" /> {insights[0].date}</span>
                                <span className="w-1 h-1 rounded-full bg-primary/50" />
                                <span className="flex items-center gap-2"><Clock className="w-3.5 h-3.5 text-primary" /> 8 min</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black leading-[1.1] tracking-tight group-hover:text-primary transition-colors duration-500 text-balance">
                                {insights[0].title}
                            </h3>
                            <p className="text-muted-foreground text-xl font-medium max-w-2xl leading-relaxed opacity-90">
                                {insights[0].excerpt}
                            </p>
                            <div className="mt-auto pt-6 flex gap-3">
                                {insights[0].tags.map(tag => (
                                    <span key={tag} className="text-[10px] font-mono tracking-[0.1em] uppercase border border-border/40 px-3 py-1 rounded-md text-foreground/50">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* --- INDEXED ARTICLES (Right) --- */}
                    <div ref={listRef} className="lg:col-span-5 flex flex-col gap-10">
                        {insights.slice(1).map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col sm:flex-row gap-6 cursor-pointer p-4 -ml-4 rounded-2xl hover:bg-card/40 transition-colors border border-transparent hover:border-border/50"
                            >
                                <div className="sm:w-32 sm:h-32 shrink-0 overflow-hidden rounded-xl bg-card border border-white/5">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1s] ease-out opacity-80 group-hover:opacity-100"
                                        alt="Insight"
                                    />
                                </div>
                                <div className="space-y-3 flex flex-col justify-center">
                                    <div className="flex items-center gap-2 text-[10px] font-mono font-bold text-primary uppercase tracking-[0.2em]">
                                        <Hash className="w-3 h-3 opacity-50" /> {item.category}
                                    </div>
                                    <h4 className="text-2xl font-bold leading-tight tracking-tight group-hover:text-primary transition-colors duration-500">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground/80 line-clamp-2 font-medium">
                                        {item.excerpt}
                                    </p>
                                </div>
                            </div>
                        ))}

                        {/* Elite Terminal Newsletter Widget */}
                         <div className="mt-auto p-10 rounded-3xl bg-secondary/20 border border-primary/20 relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            
                            <div className="relative z-10">
                                <div className="flex items-center gap-2 mb-4 text-[10px] font-mono text-primary uppercase tracking-widest">
                                    <span className="w-2 h-2 rounded-full bg-primary animate-pulse" /> NETWORK UPLINK
                                </div>
                                <h4 className="text-3xl font-black mb-3">Subscribe</h4>
                                <p className="text-sm font-medium text-foreground/60 mb-8 max-w-[200px]">Secure encrypted delivery of top-tier engineering insights.</p>
                                
                                <div className="flex gap-0 group-focus-within/form:shadow-[0_0_20px_rgba(var(--primary),0.2)] rounded-lg transition-shadow">
                                    <input
                                        type="email"
                                        placeholder="Identify: Email"
                                        className="bg-background border border-border/50 rounded-l-xl p-4 text-sm font-mono flex-1 placeholder:text-muted-foreground focus:outline-none focus:border-primary/50 transition-colors"
                                    />
                                    <button className="bg-foreground text-background px-6 rounded-r-xl font-bold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                                        <ArrowRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            {/* Ambient Tech Ring */}
                            <div className="absolute -bottom-20 -right-20 w-64 h-64 border border-primary/10 rounded-full group-hover:scale-110 transition-transform duration-1000 ease-out" />
                            <div className="absolute -bottom-10 -right-10 w-32 h-32 border border-primary/20 rounded-full group-hover:scale-150 transition-transform duration-[1.5s] ease-out" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Insights;