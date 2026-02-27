import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Diamond } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 100, suffix: "%", label: "SLA Delivered" },
    { value: 150, suffix: "M", label: "API Requests Daily" },
    { value: 50, suffix: "K", label: "Global Developers" },
    { value: 12, suffix: "", label: "Strategic Data Centers" },
];

const Stats = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".stat-item");
        
        items.forEach((item: any, i) => {
            const valueEl = item.querySelector(".stat-value");
            const targetValue = parseInt(valueEl.getAttribute("data-value"));
            
            // Staggered reveal
            gsap.fromTo(item,
                { opacity: 0, scale: 0.9 },
                { opacity: 1, scale: 1, duration: 1, delay: i * 0.1, ease: "power3.out",
                  scrollTrigger: { trigger: containerRef.current, start: "top 85%" }
                }
            );

            // Counter animation
            gsap.fromTo(valueEl, 
                { innerText: 0 },
                {
                    innerText: targetValue,
                    duration: 3,
                    ease: "expo.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 85%",
                        toggleActions: "play none none reverse"
                    },
                    onUpdate: function() {
                        valueEl.innerText = Math.ceil(this.targets()[0].innerText);
                    }
                }
            );
        });

    }, []);

    return (
        <section ref={containerRef} className="py-24 border-y border-border/40 bg-background relative overflow-hidden">
            
            {/* Ambient Lighting */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent pointer-events-none" />

            <div className="container container-width text-center">
                
                {/* Subtle header for the stats */}
                <div className="flex items-center justify-center gap-2 mb-12 text-muted-foreground/50 tracking-[0.3em] font-mono text-xs uppercase">
                    <Diamond className="w-2.5 h-2.5 fill-current" />
                    Metrics of Success
                    <Diamond className="w-2.5 h-2.5 fill-current" />
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-16 gap-x-8 lg:gap-x-0 relative z-10 w-full max-w-6xl mx-auto lg:divide-x lg:divide-border/40">


                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item flex flex-col items-center justify-center space-y-4">
                             <div className="flex items-start justify-center gap-1">
                                <span className="stat-value text-5xl lg:text-[5rem] font-sans font-black tracking-tighter text-foreground drop-shadow-md leading-none" data-value={stat.value}>
                                    0
                                </span>
                                <span className="text-3xl lg:text-5xl font-bold text-primary mt-1">
                                    {stat.suffix}
                                </span>
                             </div>
                             <p className="text-sm font-mono text-muted-foreground uppercase tracking-[0.15em] font-medium opacity-80">
                                {stat.label}
                             </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;