import { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn, getTechIconUrl } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        title: "E-comm Ecosystem",
        category: "Web Architecture",
        desc: "Headless commerce handling 50k+ daily transactions.",
        tech: ["Next.js", "Redis", "Stripe"],
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1600&q=80", 
        color: "bg-[#0A0A0A]" 
    },
    {
        title: "MediCare AI",
        category: "Mobile Health",
        desc: "HIPAA-compliant telemedicine with on-device AI analysis.",
        tech: ["React Native", "TensorFlow", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
        color: "bg-[#0F0F0F]"
    },
    {
        title: "FinTech Dashboard",
        category: "Data Analytics",
        desc: "Predictive analytics for high-frequency trading firms.",
        tech: ["Python", "ClickHouse", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
        color: "bg-[#141414]"
    },
    {
        title: "Smart Logistics",
        category: "IoT / Systems",
        desc: "Real-time fleet optimization with 500+ IoT nodes.",
        tech: ["Go", "MQTT", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
        color: "bg-[#1A1A1A]"
    }
];

const Portfolio = () => {
    return (
        <section className="relative bg-background py-32" id="portfolio">
            <div className="container mx-auto px-6">
                
                {/* Header */}
                <div className="text-center mb-24 max-w-3xl mx-auto">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono uppercase tracking-widest mb-6">
                        <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                        Selected Works
                    </div>
                    <h2 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
                        Building the <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-600">Future.</span>
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl leading-relaxed">
                        A curated selection of projects where engineering meets design. 
                        Solving complex problems with elegant solutions.
                    </p>
                </div>

                {/* Stack Container */}
                <div className="flex flex-col gap-32">
                    {PROJECTS.map((project, i) => (
                        <Card key={i} project={project} index={i} targetScale={1 - (PROJECTS.length - i) * 0.05} />
                    ))}
                </div>

                {/* Final CTA within flow */}
                <div className="mt-40 text-center">
                   <div className="inline-block relative group cursor-pointer">
                        <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                        <h3 className="text-4xl md:text-6xl font-black tracking-tight relative z-10">
                            Have an idea?
                        </h3>
                        <a href="#contact" className="mt-8 inline-flex items-center gap-3 px-8 py-4 bg-foreground text-background rounded-full font-bold text-lg hover:bg-primary hover:text-white transition-all transform hover:scale-105 relative z-10">
                            Start a Project <ExternalLink className="w-5 h-5" />
                        </a>
                   </div>
                </div>

            </div>
        </section>
    );
};

const Card = ({ project, index, targetScale }: { project: any, index: number, targetScale: number }) => {
    const containerRef = useRef(null);
    const { title, category, desc, tech, image, color } = project;

    useGSAP(() => {
         gsap.to(containerRef.current, {
            scale: targetScale,
            scrollTrigger: {
                trigger: containerRef.current,
                start: "top top",
                end: "bottom top",
                scrub: true,
            }
         })
    }, [targetScale])

    const topOffset = 100 + (index * 25); 

    return (
        <div 
            ref={containerRef}
            className="sticky h-[600px] flex items-center justify-center perspective-1000"
            style={{ top: `${topOffset}px` }}
        >
            <div className={cn(
                "relative w-full max-w-5xl h-full rounded-[3rem] overflow-hidden border border-white/10 shadow-2xl origin-top",
                color
            )}>
                <div className="absolute inset-0 bg-background/90 backdrop-blur-3xl z-0" />
                
                {/* Content Grid */}
                <div className="relative z-10 grid lg:grid-cols-2 h-full">
                    
                    {/* Left: Text */}
                    <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-between h-full order-2 lg:order-1">
                        <div>
                             <div className="flex items-center gap-3 mb-6">
                                <span className="flex items-center justify-center w-10 h-10 rounded-full border border-white/10 bg-white/5 text-sm font-bold font-mono text-muted-foreground">
                                    0{index + 1}
                                </span>
                                <span className="text-primary font-mono text-xs uppercase tracking-widest">{category}</span>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-bold leading-tight mb-6">{title}</h3>
                            <p className="text-muted-foreground text-lg leading-relaxed mb-8">{desc}</p>
                            <div className="flex flex-wrap gap-2">
                                {tech.map((t: string) => (
                                    <span key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 text-xs font-medium text-muted-foreground border border-white/10 transition-colors hover:bg-white/10 hover:text-primary">
                                        <img 
                                            src={getTechIconUrl(t)} 
                                            alt={t} 
                                            className="w-3.5 h-3.5 opacity-70 invert dark:invert-0" 
                                            loading="lazy"
                                        />
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex gap-4 pt-8">
                             <button className="flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-bold text-sm hover:bg-primary hover:text-white transition-colors">
                                View Case <ArrowUpRight className="w-4 h-4" />
                            </button>
                             <button className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 hover:bg-white/10 transition-colors">
                                <Github className="w-5 h-5 text-muted-foreground" />
                            </button>
                        </div>
                    </div>

                    {/* Right: Image */}
                    <div className="relative h-full min-h-[300px] lg:min-h-0 order-1 lg:order-2 overflow-hidden bg-black/20 group">
                         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10" />
                         <img 
                            src={image} 
                            alt={title}
                            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                         />
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Portfolio;