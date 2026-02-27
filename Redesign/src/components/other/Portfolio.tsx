import { useRef } from "react";
import { ArrowUpRight, Diamond } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn, getTechIconUrl } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        title: "E-comm Evolution",
        client: "Vogue Retail",
        desc: "Headless commerce architecture unblocking 50k+ daily concurrent checkouts with zero friction.",
        tech: ["Next.js", "Redis", "Stripe"],
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "TeleHealth AI",
        client: "MediCare Plus",
        desc: "HIPAA-certified telemedicine ecosystem featuring on-device real-time AI vitals analysis.",
        tech: ["React Native", "TensorFlow", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80"
    },
    {
        title: "Quantum Ledger",
        client: "FinTech Global",
        desc: "Predictive algorithmic analytics dashboard built for high-frequency trading dominance.",
        tech: ["Python", "D3.js", "ClickHouse"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80"
    }
];

const Portfolio = () => {
    return (
        <section className="relative bg-background py-40 overflow-hidden" id="portfolio">
            
            {/* Monumental Atmosphere */}
            <div className="absolute top-0 right-0 w-[80vw] h-[80vw] bg-primary/5 rounded-full blur-[150px] mix-blend-color-dodge -translate-y-1/2 translate-x-1/2 pointer-events-none" />

            <div className="container mx-auto px-6 max-w-7xl">
                
                {/* Minimal Elite Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-32 gap-10 border-b border-border/40 pb-12">
                    <div className="max-w-3xl">
                        <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-primary mb-6">
                            <Diamond className="w-3 h-3 fill-primary/30" />
                            Elite Showcase
                        </div>
                        <h2 className="text-5xl md:text-7xl lg:text-[6rem] font-sans font-black tracking-tighter text-foreground leading-[1] drop-shadow-sm">
                            Proof of <br/> <span className="text-gradient-gold drop-shadow-md">Concept.</span>
                        </h2>
                    </div>
                </div>

                {/* Vertical Showcase */}
                <div className="flex flex-col gap-32 lg:gap-40">
                    {PROJECTS.map((project, i) => (
                        <Card key={i} project={project} index={i} />
                    ))}
                </div>

            </div>
        </section>
    );
};

const Card = ({ project, index }: { project: any, index: number }) => {
    const cardRef = useRef(null);
    const { title, client, desc, tech, image } = project;

    useGSAP(() => {
         // Elite Parallax Reveal
         gsap.fromTo(cardRef.current, 
            { opacity: 0, y: 150, rotateX: 10, scale: 0.95 },
            { 
                opacity: 1, 
                y: 0, 
                rotateX: 0, 
                scale: 1, 
                duration: 1.5, 
                ease: "power3.out",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top 85%",
                }
            }
         );
         
         const imgContainer = (cardRef.current as any).querySelector('.img-parallax');
         
         gsap.fromTo(imgContainer,
            { scale: 1.2, y: -50 },
            {
                scale: 1, y: 50,
                ease: "none",
                scrollTrigger: {
                    trigger: cardRef.current,
                    start: "top bottom",
                    end: "bottom top",
                    scrub: true
                }
            }
         )

    }, []);

    const isEven = index % 2 === 0;

    return (
        <div 
            ref={cardRef}
            className="group relative w-full perspective-[2000px]"
        >
            <div className={cn(
                "relative grid lg:grid-cols-12 gap-10 lg:gap-16 items-center",
                isEven ? "" : "lg:flex-row-reverse"
            )}>
                
                {/* --- CONTENT BLOCK --- */}
                <div className={cn(
                    "lg:col-span-4 flex flex-col justify-center space-y-8 lg:space-y-12 z-20",
                    isEven ? "order-2 lg:order-1" : "order-2 lg:order-2 lg:col-start-9"
                )}>
                    <div>
                        <div className="flex items-center gap-4 mb-8">
                            <span className="text-sm font-mono font-bold text-muted-foreground/60 tracking-widest leading-none">0{index + 1}</span>
                            <span className="w-12 h-px bg-primary/40 leading-none" />
                            <span className="text-xs font-mono font-bold text-primary tracking-[0.2em] leading-none uppercase">{client}</span>
                        </div>
                        <h3 className="text-4xl md:text-5xl lg:text-5xl font-black leading-[1.1] tracking-tight mb-6">
                            {title}
                        </h3>
                        <p className="text-muted-foreground/80 font-medium text-lg leading-relaxed max-w-md">
                            {desc}
                        </p>
                    </div>

                    <div className="flex flex-col gap-6">
                        <div className="flex flex-wrap gap-2">
                            {tech.map((t: string) => (
                                <span key={t} className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/30 backdrop-blur-sm border border-border/50 text-[10px] uppercase tracking-widest font-mono text-muted-foreground transition-colors hover:text-primary hover:border-primary/50 cursor-pointer">
                                    <img 
                                        src={getTechIconUrl(t)} 
                                        alt={t} 
                                        className="w-3 h-3 opacity-60 invert dark:invert-0" 
                                    />
                                    {t}
                                </span>
                            ))}
                        </div>
                        
                        <div className="pt-6 border-t border-border/40">
                             <a href="#" className="inline-flex items-center gap-4 text-xs font-mono font-bold tracking-[0.2em] uppercase origin-left hover:text-primary transition-all duration-300 group/link">
                                EXAMINE PROJECT
                                <div className="w-10 h-10 rounded-full border border-border/80 flex items-center justify-center group-hover/link:bg-primary group-hover/link:border-primary group-hover/link:text-primary-foreground transition-colors shadow-sm">
                                    <ArrowUpRight className="w-4 h-4" />
                                </div>
                            </a>
                        </div>
                    </div>
                </div>

                {/* --- VISUAL BLOCK --- */}
                <div className={cn(
                    "lg:col-span-8 relative aspect-[4/3] lg:aspect-[16/10] w-full rounded-[2rem] overflow-hidden bg-card border border-white/5",
                    isEven ? "order-1 lg:order-2" : "order-1 lg:order-1 lg:col-start-1"
                )}>
                    {/* Shadow & Glow Behind img */}
                    <div className="absolute inset-0 bg-primary/5 group-hover:bg-primary/10 transition-colors duration-1000 blur-2xl z-0" />
                    
                    {/* Image Parallax Container */}
                    <div className="absolute inset-[-10%] z-10 img-parallax opacity-90 group-hover:opacity-100 transition-opacity duration-1000">
                         <img 
                            src={image} 
                            alt={title}
                            className="w-full h-full object-cover filter saturate-[0.85] contrast-[1.1] group-hover:saturate-100 transition-all duration-1000"
                         />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Portfolio;