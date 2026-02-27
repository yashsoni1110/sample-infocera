import { useState, useRef } from "react";
import {
  Monitor, Code, Smartphone, TrendingUp,
  Palette, Users, Brain, Bug,
  ArrowUpRight, Sparkles, Terminal, Diamond
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { id: "software", icon: Monitor, title: "System Architecture", description: "Enterprise-grade CRM, HR, and backend structural systems meticulously designed for infinite scalability.", features: ["CRM Ecosystems", "HR Platforms", "ERP Solutions"], color: "text-primary", border: "hover:border-primary/40", shadow: "hover:shadow-[0_0_80px_-20px_rgba(var(--primary),0.2)]", span: "md:col-span-2", bg: "bg-background" },
  { id: "webdev", icon: Code, title: "Web Mastery", description: "Immersive frontend portals and highly optimized web engines.", features: ["React/Next.js", "WebGL", "E-commerce"], color: "text-foreground", border: "hover:border-white/20", shadow: "hover:shadow-2xl", span: "md:col-span-1", bg: "bg-card" },
  { id: "mobile", icon: Smartphone, title: "Mobile Innovation", description: "Native multi-platform applications that dominate app stores.", features: ["iOS Ecosystem", "Android", "Cross-Platform"], color: "text-foreground", border: "hover:border-white/20", shadow: "hover:shadow-2xl", span: "md:col-span-1", bg: "bg-card" },
  { id: "datascience", icon: Brain, title: "Neural Networks", description: "Deploying sophisticated AI models and deep predictive analytics.", features: ["Machine Learning", "LLM Inference", "Data Ops"], color: "text-primary", border: "hover:border-primary/40", shadow: "hover:shadow-[0_0_80px_-20px_rgba(var(--primary),0.2)]", span: "md:col-span-2", bg: "bg-background" },
  { id: "design", icon: Palette, title: "Avant-Garde UI/UX", description: "Visually arresting brand identities and user interfaces.", features: ["Design Systems", "Prototyping", "Motion Graphics"], color: "text-foreground", border: "hover:border-white/20", shadow: "hover:shadow-2xl", span: "md:col-span-2", bg: "bg-card" },
  { id: "marketing", icon: TrendingUp, title: "Growth Operations", description: "Aggressive, data-driven strategies for market saturation.", features: ["SEO Engineering", "Funnel Ops", "Analytics"], color: "text-foreground", border: "hover:border-white/20", shadow: "hover:shadow-2xl", span: "md:col-span-1", bg: "bg-background" },
  { id: "consulting", icon: Users, title: "Strategic Advisory", description: "Elite boardroom-level technical consulting.", features: ["IT Infrastructure", "Cloud Migration", "Auditing"], color: "text-primary", border: "hover:border-primary/40", shadow: "hover:shadow-[0_0_80px_-20px_rgba(var(--primary),0.2)]", span: "md:col-span-1", bg: "bg-card" },
  { id: "testing", icon: Bug, title: "Quality Assurance", description: "Rigorous stress testing and security vulnerability analysis.", features: ["Pen Testing", "QA Automation", "Load Testing"], color: "text-foreground", border: "hover:border-white/20", shadow: "hover:shadow-2xl", span: "md:col-span-2", bg: "bg-background" },
];

const OurServices = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const visibleServices = isExpanded ? SERVICES : SERVICES.slice(0, 5);
  const containerRef = useRef(null);
  const gridRef = useRef(null);

  useGSAP(() => {
    if (gridRef.current) {
        ScrollTrigger.batch((gridRef.current as any).children, {
            onEnter: (elements) => {
                gsap.fromTo(elements, 
                    { opacity: 0, y: 100, scale: 0.95 },
                    { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 1.2, ease: "expo.out" }
                );
            },
            once: true
        });
    }
  }, [visibleServices]);

  return (
    <section ref={containerRef} className="relative py-40 bg-background overflow-hidden border-b border-border/40">
      
      {/* Decorative Glare */}
      <div className="absolute top-0 right-0 w-[500px] h-full bg-gradient-to-l from-primary/5 to-transparent pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-background via-background to-transparent pointer-events-none z-20" />

      <div className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Luxury Header */}
        <div className="flex flex-col items-center text-center gap-6 mb-28">
            <div className="flex items-center gap-3 px-4 py-1.5 rounded-full border border-primary/20 backdrop-blur-md text-[10px] font-mono font-bold tracking-[0.3em] uppercase text-primary mb-2 shadow-sm">
                <Diamond className="w-3 h-3 fill-primary/20" />
                Capabilities Matrix
            </div>
            
            <h2 className="text-5xl md:text-[5.5rem] font-sans font-black tracking-tighter text-foreground leading-[1] max-w-4xl text-balance drop-shadow-sm">
                Architecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#c29b2b] pb-2 drop-shadow-md">Impossible.</span>
            </h2>
            
            <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-light max-w-2xl mt-4">
                We deploy uncompromising technological prowess to solve complex challenges with elite precision.
            </p>
        </div>

        {/* Elegant Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
            {visibleServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                    <div 
                        key={service.id}
                        className={cn(
                            "group relative p-10 rounded-[2rem] border border-border/60 transition-all duration-700 flex flex-col justify-between overflow-hidden cursor-default",
                            service.span,
                            service.border,
                            service.shadow,
                            service.bg
                        )}
                    >
                        {/* Elite Hover Gradient Override */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
                        
                        {/* Subtle inner border glow */}
                        <div className="absolute inset-px rounded-[calc(2rem-1px)] border border-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-8">
                                <div className={cn("p-4 rounded-[1.25rem] bg-secondary/30 border border-white/5 group-hover:bg-primary/10 group-hover:border-primary/20 transition-all duration-500 shadow-sm", service.color)}>
                                    <Icon className="w-8 h-8 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
                                </div>
                                <span className="text-[12rem] leading-none absolute -right-12 -top-16 text-foreground opacity-[0.02] dark:opacity-[0.04] font-black pointer-events-none select-none group-hover:scale-110 group-hover:text-primary transition-all duration-1000">
                                    0{idx + 1}
                                </span>
                            </div>

                            <h3 className="text-3xl font-bold text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors duration-500">{service.title}</h3>
                            <p className="text-muted-foreground/90 text-lg leading-relaxed mb-8 max-w-md font-medium">{service.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-10">
                                {service.features.map((f, i) => (
                                    <span key={i} className="text-[11px] font-mono tracking-wider uppercase border border-border/50 px-3 py-1.5 rounded-md text-foreground/60 group-hover:text-foreground group-hover:border-primary/30 transition-all duration-300 bg-background/50 backdrop-blur-sm">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 pt-6 border-t border-border/50 flex items-center justify-between group-hover:border-primary/30 transition-colors duration-500 cursor-pointer w-fit gap-6">
                            <span className="text-xs font-bold font-mono tracking-[0.2em] transform transition-transform group-hover:translate-x-2 text-foreground/80 group-hover:text-primary uppercase">Explore Matrix</span>
                            <div className="w-10 h-10 rounded-full border border-border/50 flex items-center justify-center group-hover:bg-primary group-hover:border-primary group-hover:text-primary-foreground transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(var(--primary),0.5)]">
                                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:scale-110" />
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
        
        {/* Elite Minimal CTA */}
        <div className="mt-20 text-center relative z-30">
             <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="outline"
                className="rounded-full px-10 h-16 bg-background/80 backdrop-blur-xl border-border/80 hover:bg-card hover:border-primary/50 text-foreground font-bold text-sm tracking-widest uppercase transition-all duration-500 hover:shadow-[0_0_30px_rgba(var(--primary),0.2)] group"
            >
                {isExpanded ? "Collapse Matrix" : "Deploy Full Arsenal"}
                <Sparkles className="ml-3 w-4 h-4 text-primary group-hover:animate-pulse" />
            </Button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;