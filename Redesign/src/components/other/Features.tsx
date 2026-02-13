import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Code, Cpu, Globe, Layers, ShieldCheck, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const features = [
    {
        title: "Global Infrastructure",
        description: "Deploy your applications to our edge network in milliseconds.",
        icon: <Globe className="w-6 h-6" />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20",
    },
    {
        title: "99.99% Uptime",
        description: "Enterprise-grade reliability standards.",
        icon: <ShieldCheck className="w-6 h-6" />,
        className: "col-span-1 bg-card/50",
    },
    {
        title: "Real-time Analytics",
        description: "Monitor your data streams with zero latency.",
        icon: <Zap className="w-6 h-6" />,
        className: "col-span-1 bg-card/50",
    },
    {
        title: "Neural Processing",
        description: "AI-driven monitoring and automated scaling.",
        icon: <Cpu className="w-6 h-6" />,
        className: "col-span-1 md:col-span-2 lg:col-span-2 bg-gradient-to-tl from-purple-500/10 to-blue-500/5",
    },
     {
        title: "API First",
        description: "Built for developers, by developers.",
        icon: <Code className="w-6 h-6" />,
        className: "col-span-1 lg:col-span-1 bg-card/50",
    },
    {
        title: "Microservices",
        description: "Modular architecture for maximum flexibility.",
        icon: <Layers className="w-6 h-6" />,
        className: "col-span-1 md:col-span-1 lg:col-span-1 bg-card/50",
    }
];

const Features = () => {
    const sectionRef = useRef(null);

    useGSAP(() => {
        const cards = gsap.utils.toArray(".feature-card");
        
        gsap.fromTo(cards, 
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                stagger: 0.1,
                duration: 0.8,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                    toggleActions: "play none none reverse"
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className="py-24 w-full bg-background relative overflow-hidden">
             {/* Background Elements */}
             <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px]" />
            </div>

            <div className="container container-width relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        Built for <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-500">Hyper-Scale</span>
                    </h2>
                    <p className="text-muted-foreground text-lg">
                        Our platform provides the building blocks for modern digital experiences. 
                        Scalable, secure, and blazing fast.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-[250px]">
                    {features.map((feature, i) => (
                        <div 
                            key={i} 
                            className={`feature-card group relative p-8 rounded-3xl border border-white/10 backdrop-blur-sm overflow-hidden transition-all duration-300 hover:border-primary/30 hover:shadow-2xl hover:-translate-y-1 ${feature.className || "bg-card"}`}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                            
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div className="w-12 h-12 rounded-2xl bg-background/50 border border-white/10 flex items-center justify-center text-primary mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {feature.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">{feature.title}</h3>
                                    <p className="text-muted-foreground text-sm leading-relaxed">
                                        {feature.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
