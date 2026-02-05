import { useState, useRef } from "react";
import {
  Monitor, Code, Smartphone, TrendingUp,
  Palette, Users, Brain, Bug,
  ArrowUpRight, Sparkles, Terminal
} from "lucide-react";
import { Button } from "../ui/button";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
  { id: "software", icon: Monitor, title: "Software Products", description: "Enterprise CRM, HR, and management systems built for scale.", features: ["CRM Solutions", "HR & Payroll", "Inventory", "Custom ERP"], color: "text-blue-500", border: "hover:border-blue-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(59,130,246,0.3)]", span: "md:col-span-2" },
  { id: "webdev", icon: Code, title: "Web Development", description: "Custom websites and portals.", features: ["Responsive", "Web Apps", "E-commerce"], color: "text-violet-500", border: "hover:border-violet-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(139,92,246,0.3)]", span: "md:col-span-1" },
  { id: "mobile", icon: Smartphone, title: "Mobile Apps", description: "Native and cross-platform mobile solutions.", features: ["iOS/Android", "Cross-Platform", "PWA"], color: "text-emerald-500", border: "hover:border-emerald-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(16,185,129,0.3)]", span: "md:col-span-1" },
  { id: "marketing", icon: TrendingUp, title: "Online Marketing", description: "Comprehensive digital and social media marketing.", features: ["SEO", "Content Strategy", "Analytics"], color: "text-orange-500", border: "hover:border-orange-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(249,115,22,0.3)]", span: "md:col-span-1" },
  { id: "design", icon: Palette, title: "Creative Design", description: "UI/UX, logo, and brand identity services.", features: ["UI/UX", "Branding", "Illustrations"], color: "text-pink-500", border: "hover:border-pink-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(236,72,153,0.3)]", span: "md:col-span-2" },
  { id: "consulting", icon: Users, title: "Consulting", description: "Expert NetSuite and IT strategy consulting.", features: ["NetSuite", "IT Strategy", "Recruitment"], color: "text-indigo-500", border: "hover:border-indigo-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(99,102,241,0.3)]", span: "md:col-span-1" },
  { id: "datascience", icon: Brain, title: "Data Science", description: "AI, ML, and advanced analytics solutions.", features: ["Machine Learning", "AI Models", "Predictive"], color: "text-cyan-500", border: "hover:border-cyan-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(34,211,238,0.3)]", span: "md:col-span-1" },
  { id: "testing", icon: Bug, title: "Testing Services", description: "Security and performance testing solutions.", features: ["QA Automation", "Security", "Manual"], color: "text-red-500", border: "hover:border-red-500/50", shadow: "hover:shadow-[0_0_50px_-10px_rgba(239,68,68,0.3)]", span: "md:col-span-1" },
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
                    { opacity: 0, y: 50, scale: 0.9 },
                    { opacity: 1, y: 0, scale: 1, stagger: 0.1, duration: 0.6, ease: "back.out(1.2)" }
                );
            },
            once: true
        });
    }
  }, [visibleServices]);

  return (
    <section ref={containerRef} className="relative py-32 bg-background overflow-hidden">
      
      {/* Decorative Gradients */}
      <div className="absolute top-1/4 -right-[20%] w-[1000px] h-[1000px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 -left-[20%] w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-start gap-6 mb-20 max-w-4xl">
            <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/20 border border-border/20 backdrop-blur-sm text-xs font-mono text-primary animate-pulse">
                <Terminal className="w-3 h-3" />
                <span>SYSTEM MODULES</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground">
                Core <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-400 font-black">Capabilities</span>
            </h2>
            <p className="text-xl text-muted-foreground/80 leading-relaxed max-w-2xl">
                Deploying advanced technological infrastructure to solve complex business challenges with precision and elegance.
            </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 gap-5">
            {visibleServices.map((service, idx) => {
                const Icon = service.icon;
                return (
                    <div 
                        key={service.id}
                        className={cn(
                            "group relative p-8 rounded-3xl bg-card border border-border/40 transition-all duration-500 flex flex-col justify-between overflow-hidden shadow-sm hover:shadow-2xl",
                            service.span,
                            service.border,
                            service.shadow
                        )}
                    >
                        {/* Hover Gradient Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                        <div className="relative z-10">
                            <div className="flex justify-between items-start mb-6">
                                <div className={cn("p-3 rounded-2xl bg-secondary/30 border border-border/10 group-hover:bg-secondary/50 transition-colors", service.color)}>
                                    <Icon className="w-8 h-8" />
                                </div>
                                <span className="text-[10rem] leading-none absolute -right-8 -top-12 opacity-[0.03] text-foreground font-black pointer-events-none select-none group-hover:scale-110 transition-transform duration-700">
                                    0{idx + 1}
                                </span>
                            </div>

                            <h3 className="text-2xl font-bold text-foreground mb-2 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h3>
                            <p className="text-muted-foreground mb-6 line-clamp-2">{service.description}</p>
                            
                            <div className="flex flex-wrap gap-2 mb-8">
                                {service.features.map((f, i) => (
                                    <span key={i} className="text-[10px] font-mono border border-border/20 px-2 py-1 rounded text-muted-foreground group-hover:text-foreground group-hover:border-border/40 transition-colors">
                                        {f}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="relative z-10 pt-4 border-t border-border/10 flex items-center justify-between group-hover:border-border/20 transition-colors">
                            <span className="text-xs font-mono text-muted-foreground group-hover:text-primary transition-colors">EXPLORE MODULE</span>
                            <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300" />
                        </div>
                    </div>
                )
            })}
        </div>
        
        <div className="mt-12 text-center">
             <Button
                onClick={() => setIsExpanded(!isExpanded)}
                variant="outline"
                className="rounded-full px-8 py-6 bg-transparent border-white/10 hover:bg-white/5 text-muted-foreground hover:text-white transition-all hover:scale-105 active:scale-95"
            >
                {isExpanded ? "Collapse Modules" : "View All Capabilities"}
                <Sparkles className="ml-2 w-4 h-4" />
            </Button>
        </div>

      </div>
    </section>
  );
};

export default OurServices;