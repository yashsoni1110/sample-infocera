import { useRef } from "react";
import { ArrowUpRight, Github, ExternalLink } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
    {
        title: "E-comm Ecosystem",
        category: "Web Architecture",
        desc: "Headless commerce handling 50k+ daily transactions.",
        tech: ["Next.js", "Shopify Plus", "Redis"],
        image: "https://images.unsplash.com/photo-1661956602116-aa6865609028?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "MediCare AI",
        category: "Mobile Health",
        desc: "HIPAA-compliant telemedicine with on-device AI analysis.",
        tech: ["React Native", "TensorFlow", "Node.js"],
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "FinTech Dashboard",
        category: "Data Analytics",
        desc: "Predictive analytics for high-frequency trading firms.",
        tech: ["Python", "ClickHouse", "D3.js"],
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
    },
    {
        title: "Smart Logistics",
        category: "IoT / Systems",
        desc: "Real-time fleet optimization with 500+ IoT nodes.",
        tech: ["Go", "MQTT", "PostgreSQL"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1600&q=80",
    }
];

interface Project {
    title: string;
    category: string;
    desc: string;
    tech: string[];
    image: string;
}

const Portfolio = () => {
    const triggerRef = useRef(null);
    const projectsRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        const mm = gsap.matchMedia();

        mm.add("(min-width: 1024px)", () => {
            const pin = gsap.fromTo(projectsRef.current,
                { translateX: 0 },
                {
                    translateX: "-72%",
                    ease: "none",
                    duration: 1,
                    scrollTrigger: {
                        trigger: triggerRef.current,
                        start: "top top",
                        end: "+=2500",
                        scrub: 1,
                        pin: true,
                        anticipatePin: 1,
                    }
                }
            );
            return () => {
                pin.kill();
            };
        });
        
        return () => mm.revert(); // Cleanup matching media
    }, []);

    return (
        <section
            ref={triggerRef}
            className="relative bg-background text-foreground overflow-hidden z-40 lg:h-screen h-auto py-20 lg:py-0"
        >
            {/* Sticky wrapper */}
            <div className="w-full h-full flex flex-col lg:flex-row">

                {/* --- LEFT PANEL (Static) --- */}
                <div className="flex flex-col justify-center z-30 shrink-0 w-full lg:w-[35%] lg:h-full px-6 lg:pl-12 lg:pr-6 bg-background relative z-10 mb-12 lg:mb-0">
                    <div className="flex items-center gap-3 text-primary mb-4">
                        <div className="h-[1px] w-12 bg-primary" />
                        <span className="text-xs font-mono tracking-widest uppercase">Portfolio</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl xl:text-8xl font-bold tracking-tighter leading-tight lg:leading-[0.8] mb-8">
                        Selected <br /> <span className="text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40">Works.</span>
                    </h2>

                    {/* Progress Bar (Desktop only) */}
                    <div className="hidden lg:flex items-center gap-4 mt-8 w-full max-w-xs">
                        <span className="text-xs font-mono text-muted-foreground">01</span>
                        <div className="flex-1 h-[2px] bg-border/20 rounded-full overflow-hidden">
                            <div className="h-full bg-primary origin-left w-1/4" />
                        </div>
                        <span className="text-xs font-mono text-muted-foreground">0{PROJECTS.length}</span>
                    </div>
                </div>

                {/* --- RIGHT PANEL (Scrollable) --- */}
                <div className="lg:h-full flex items-center lg:pl-8 w-full overflow-hidden lg:overflow-visible">
                    <div
                        ref={projectsRef}
                        className="flex flex-col lg:flex-row gap-8 lg:w-[120vw] w-full px-6 lg:px-0"
                    >
                        {PROJECTS.map((project, index) => (
                            <ProjectCard
                                key={index}
                                project={project}
                                index={index}
                            />
                        ))}

                        {/* Final CTA Card */}
                        <div className="relative shrink-0 flex flex-col justify-center rounded-[2.5rem] bg-primary/5 border border-primary/10 p-10 backdrop-blur-sm w-full h-64 lg:w-[30vw] lg:h-[60vh]">
                            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to build the <span className="text-primary italic">Next</span> thing?</h3>
                            <button className="w-fit px-6 py-3 bg-foreground text-background rounded-full font-bold flex items-center gap-3 hover:scale-105 transition-transform text-sm md:text-base">
                                Start a Project <ExternalLink className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

interface ProjectCardProps {
    project: Project;
    index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
    return (
        <div className="relative shrink-0 group w-full h-[500px] lg:w-[45vw] lg:h-[60vh]">
            {/* Index Background Label */}
            <div className="absolute -top-10 -left-6 text-[8rem] md:text-[10rem] font-bold text-foreground/10 pointer-events-none italic select-none z-0">
                0{index + 1}
            </div>

            <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-border/50 bg-secondary/5 backdrop-blur-sm">
                {/* Image */}
                <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-700">
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="absolute inset-0 z-20 p-6 md:p-10 flex flex-col justify-end">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
                        <div className="max-w-xl">
                            <span className="inline-block px-3 py-1 rounded-full bg-white/10 backdrop-blur-md text-[10px] font-bold text-white uppercase tracking-widest mb-4 border border-white/20">
                                {project.category}
                            </span>
                            <h3 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2 tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-gray-300 text-sm md:text-base font-light leading-relaxed line-clamp-3">
                                {project.desc}
                            </p>
                        </div>

                        <div className="flex gap-3">
                            <button className="w-10 h-10 md:w-12 md:h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all bg-black/40">
                                <Github className="w-5 h-5" />
                            </button>
                            <button className="px-5 h-10 md:px-6 md:h-12 rounded-full bg-primary text-primary-foreground font-bold flex items-center gap-2 group/btn shadow-lg text-sm md:text-base">
                                View <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </button>
                        </div>
                    </div>

                    {/* Tech List */}
                    <div className="flex gap-4 mt-6 border-t border-white/10 pt-6">
                        {project.tech.map((t) => (
                            <span key={t} className="text-[9px] md:text-[10px] font-mono uppercase text-white/50">
                                // {t}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;