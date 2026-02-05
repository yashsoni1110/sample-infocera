import { useRef } from "react";
import {
  Server, ShieldCheck, Feather, Cat,
  Globe, Layers, CheckCircle,
  GitBranch, Box, Code, Coffee,
  Terminal, List, Database, Cloud,
  Zap
} from "lucide-react";
import { Button } from "../ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { cn } from "../../lib/utils";

const ALL_TECH = [
  { category: "Web Server", name: "Apache", icon: Feather, color: "text-orange-500", bg: "bg-orange-500/10" },
  { category: "Web Server", name: "Tomcat", icon: Cat, color: "text-yellow-500", bg: "bg-yellow-500/10" },
  { category: "Web Server", name: "Nginx", icon: Server, color: "text-green-500", bg: "bg-green-500/10" },
  { category: "Web Server", name: "IIS", icon: Layers, color: "text-blue-500", bg: "bg-blue-500/10" },
  { category: "Testing", name: "Jest", icon: Code, color: "text-pink-500", bg: "bg-pink-500/10" },
  { category: "Testing", name: "Selenium", icon: CheckCircle, color: "text-emerald-500", bg: "bg-emerald-500/10" },
  { category: "Process", name: "Git", icon: GitBranch, color: "text-red-500", bg: "bg-red-500/10" },
  { category: "CI/CD", name: "Jenkins", icon: Box, color: "text-amber-500", bg: "bg-amber-500/10" },
  { category: "CI/CD", name: "Travis CI", icon: Terminal, color: "text-teal-500", bg: "bg-teal-500/10" },
  { category: "Testing", name: "Mocha", icon: Coffee, color: "text-yellow-600", bg: "bg-yellow-600/10" },
  { category: "Web Server", name: "Caddy", icon: ShieldCheck, color: "text-cyan-500", bg: "bg-cyan-500/10" },
  { category: "Web Server", name: "Lighttpd", icon: Globe, color: "text-purple-500", bg: "bg-purple-500/10" },
  { category: "Database", name: "PostgreSQL", icon: Database, color: "text-blue-400", bg: "bg-blue-400/10" },
  { category: "Cloud", name: "AWS", icon: Cloud, color: "text-orange-400", bg: "bg-orange-400/10" }
];

const SCROLL_ITEMS = [...ALL_TECH, ...ALL_TECH, ...ALL_TECH];
const REVERSE_ITEMS = [...ALL_TECH].reverse().concat([...ALL_TECH].reverse()).concat([...ALL_TECH].reverse());

const groupedTech = ALL_TECH.reduce((acc, tech) => {
  if (!acc[tech.category]) {
    acc[tech.category] = [];
  }
  acc[tech.category].push(tech);
  return acc;
}, {} as Record<string, typeof ALL_TECH>);

const Techno = () => {
    const row1Ref = useRef(null);
    const row2Ref = useRef(null);

    useGSAP(() => {
        // Row 1
        gsap.to(row1Ref.current, {
            xPercent: -50,
            repeat: -1,
            duration: 60,
            ease: "linear"
        });

        // Row 2 (Reverse)
        gsap.fromTo(row2Ref.current, 
            { xPercent: -50 },
            { xPercent: 0, repeat: -1, duration: 80, ease: "linear" }
        );
    }, []);

  return (
    <section className="relative py-24 bg-background overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay" />
      
        <div className="container relative z-10 mx-auto px-4 mb-16 flex flex-col items-center text-center">
            
            <div className="flex items-center gap-2 mb-6">
                 <span className="relative flex h-3 w-3">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                 </span>
                 <span className="text-xs font-mono font-bold tracking-[0.2em] text-primary/80 uppercase">The Engine Room</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-foreground mb-6">
                Built on <span className="text-foreground box-decoration-clone shadow-[0_0_30px_rgba(var(--primary),0.5)]">Hyper-Scale</span> Infrastructure
            </h2>
            
            <p className="text-lg text-muted-foreground/80 max-w-xl mx-auto mb-10">
                Leveraging battle-tested technologies to deliver sub-millisecond latency and 99.99% uptime.
            </p>

            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" className="rounded-full px-6 border border-border/20 hover:bg-secondary/20 hover:text-foreground text-muted-foreground transition-all">
                        <List className="w-4 h-4 mr-2" />
                        Explore Full Tech Stack
                    </Button>
                </SheetTrigger>
                <SheetContent className="overflow-y-auto border-l-border/10 bg-background/95 backdrop-blur-2xl">
                    <SheetHeader className="mb-8">
                        <SheetTitle className="text-2xl font-bold flex items-center gap-3">
                            <Zap className="w-6 h-6 text-primary fill-primary" />
                             Tech Stack
                        </SheetTitle>
                        <SheetDescription>
                             A comprehensive list of our utilized technologies.
                        </SheetDescription>
                    </SheetHeader>
                    <div className="space-y-8">
                        {Object.entries(groupedTech).map(([category, items]) => (
                            <div key={category} className="space-y-4">
                                <h4 className="text-xs font-mono font-bold uppercase tracking-widest text-muted-foreground/60 border-b border-border/10 pb-2">
                                    {category}
                                </h4>
                                <div className="grid grid-cols-1 gap-2">
                                    {items.map((tech) => (
                                        <div key={tech.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-secondary/20 transition-colors group">
                                            <div className={cn("p-2 rounded-md transition-colors", tech.bg, tech.color)}>
                                                <tech.icon className="w-4 h-4" />
                                            </div>
                                            <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">{tech.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </SheetContent>
            </Sheet>
        </div>

      {/* --- SCROLLERS --- */}
      <div className="flex flex-col gap-8 opacity-80 hover:opacity-100 transition-opacity duration-500">
          
        {/* Row 1 */}
        <div className="relative flex overflow-hidden w-full mask-gradient">
            <div ref={row1Ref} className="flex gap-4 whitespace-nowrap px-4">
                {SCROLL_ITEMS.map((tech, index) => (
                    <div key={`r1-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-border/10 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-300 hover:bg-secondary/20 hover:border-border/30 hover:scale-105 cursor-default">
                        <tech.icon className={cn("w-5 h-5", tech.color)} />
                        <span className="text-sm font-bold text-foreground/80">{tech.name}</span>
                    </div>
                ))}
            </div>
             <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
             <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

        {/* Row 2 */}
        <div className="relative flex overflow-hidden w-full mask-gradient">
             <div ref={row2Ref} className="flex gap-4 whitespace-nowrap px-4">
                {REVERSE_ITEMS.map((tech, index) => (
                    <div key={`r2-${index}`} className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary/10 border border-border/10 backdrop-blur-sm grayscale hover:grayscale-0 transition-all duration-300 hover:bg-secondary/20 hover:border-border/30 hover:scale-105 cursor-default">
                        <tech.icon className={cn("w-5 h-5", tech.color)} />
                        <span className="text-sm font-bold text-foreground/80">{tech.name}</span>
                    </div>
                ))}
            </div>
            <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-10" />
             <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-10" />
        </div>

      </div>
    </section>
  );
};

export default Techno;