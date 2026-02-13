import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stats = [
    { value: 99, suffix: "%", label: "Uptime SLA" },
    { value: 150, suffix: "M+", label: "API Requests / Day" },
    { value: 50, suffix: "k+", label: "Global Developers" },
    { value: 12, suffix: "", label: "Data Centers" },
];

const Stats = () => {
    const containerRef = useRef(null);

    useGSAP(() => {
        const items = gsap.utils.toArray(".stat-item");
        
        items.forEach((item: any) => {
            const valueEl = item.querySelector(".stat-value");
            const targetValue = parseInt(valueEl.getAttribute("data-value"));
            
            gsap.fromTo(valueEl, 
                { innerText: 0 },
                {
                    innerText: targetValue,
                    duration: 2,
                    ease: "power2.out",
                    snap: { innerText: 1 },
                    scrollTrigger: {
                        trigger: containerRef.current,
                        start: "top 80%",
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
        <section ref={containerRef} className="py-20 border-y border-white/5 bg-white/2 backdrop-blur-sm">
            <div className="container container-width">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                    {stats.map((stat, i) => (
                        <div key={i} className="stat-item text-center space-y-2">
                             <div className="text-4xl lg:text-5xl font-black text-foreground tracking-tighter flex items-center justify-center gap-1">
                                <span className="stat-value" data-value={stat.value}>0</span>
                                <span className="text-primary">{stat.suffix}</span>
                             </div>
                             <p className="text-sm font-mono text-muted-foreground uppercase tracking-widest">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;