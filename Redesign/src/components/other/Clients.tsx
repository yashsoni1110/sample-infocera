import { useRef } from "react";
import { cn } from "../../lib/utils";
import {
    Activity,
    Box,
    Cloud,
    Code2,
    Cpu,
    Database,
    Fingerprint,
    Globe,
    Layers,
    Layout,
    Link,
    Lock,
    Search,
    Server,
    Shield,
    Smartphone,
    Terminal,
    Wifi
} from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Diverse Client Data
const row1 = [
  { name: "TechFlow", icon: Cpu },
  { name: "InnovateX", icon: Box },
  { name: "WaveForm", icon: Activity },
  { name: "CyberSphere", icon: Globe },
  { name: "AlphaBuild", icon: Layers },
  { name: "OrbitSystems", icon: Server },
  { name: "DataPeak", icon: Database },
  { name: "NexGen", icon: Code2 },
  { name: "TechFlow", icon: Cpu },
  { name: "InnovateX", icon: Box },
  { name: "WaveForm", icon: Activity },
  { name: "CyberSphere", icon: Globe },
];

const row2 = [
  { name: "CloudScale", icon: Cloud },
  { name: "SecureNet", icon: Shield },
  { name: "AppForge", icon: Smartphone },
  { name: "WebWorks", icon: Layout },
  { name: "LinkHub", icon: Link },
  { name: "DevCore", icon: Terminal },
  { name: "BioPass", icon: Fingerprint },
  { name: "NetGuard", icon: Lock },
  { name: "FindIt", icon: Search },
  { name: "Connect", icon: Wifi },
  { name: "CloudScale", icon: Cloud },
  { name: "SecureNet", icon: Shield },
  { name: "AppForge", icon: Smartphone },
  { name: "WebWorks", icon: Layout },
];


const Clients = () => {
    const textRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(textRef.current, 
            { opacity: 0, y: 20 },
            { opacity: 1, y: 0, duration: 1, scrollTrigger: { trigger: textRef.current, start: "top 80%" } }
        );
    }, []);

  return (
    <section className="py-24 bg-background relative overflow-hidden">
       {/* Ambient Lighting */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] -z-10 animate-pulse" />
       <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <div
           ref={textRef}
           className="space-y-4"
        >
             <h2 className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Innovation Leaders</span>
             </h2>
             <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Join 500+ forward-thinking companies building the future with us.
             </p>
        </div>
      </div>

      {/* Marquee Setup */}
      <div className="relative flex flex-col gap-8 w-full overflow-hidden mask-linear-fade">
         
         {/* Row 1: Left Scroll */}
         <MarqueeRow items={row1} direction="left" duration={35} />
         
         {/* Row 2: Right Scroll */}
         <MarqueeRow items={row2} direction="right" duration={45} />

         {/* Gradient Masks */}
         <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointers-events-none" />
         <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointers-events-none" />
      </div>
    </section>
  );
};

const MarqueeRow = ({ items, direction, duration }: { items: any[], direction: "left" | "right", duration: number }) => {
    const rowRef = useRef(null);

    useGSAP(() => {
        gsap.to(rowRef.current, {
            xPercent: direction === 'left' ? -50 : 50, // Move half due to duplication
            repeat: -1,
            duration: duration,
            ease: "linear",
            runBackwards: direction === 'right' // Simpler than calc? No, xPercent 50 moves right
        });
        
        // Correct logic for Marquee
        if (direction === "left") {
            gsap.to(rowRef.current, {
                xPercent: -50,
                repeat: -1,
                duration: duration,
                ease: "linear"
            });
        } else {
            // Start from -50% and go to 0
            gsap.fromTo(rowRef.current, 
                { xPercent: -50 },
                { xPercent: 0, repeat: -1, duration: duration, ease: "linear" }
            );
        }

    }, [direction, duration]);

    return (
        <div className="flex w-full overflow-hidden select-none group">
            <div
              ref={rowRef}
              className="flex gap-6 whitespace-nowrap px-3"
            >
              {[...items, ...items, ...items].map((client, index) => (
                <div
                  key={`${client.name}-${index}`}
                  className={cn(
                    "flex-shrink-0 w-56 h-20 rounded-xl border border-white/5",
                    "bg-white/5 backdrop-blur-md", // Premium Glass
                    "flex items-center justify-start px-6 gap-4",
                    "text-muted-foreground transition-all duration-300",
                    "hover:scale-105 hover:bg-white/10 hover:border-primary/20 hover:text-foreground hover:shadow-[0_0_20px_rgba(var(--primary),0.1)]",
                    "cursor-pointer group/card"
                  )}
                >
                   <div className="p-2 rounded-lg bg-white/5 group-hover/card:bg-primary/20 group-hover/card:text-primary transition-colors">
                        <client.icon className="w-6 h-6" />
                   </div>
                   <span className="font-semibold text-sm tracking-wide group-hover/card:text-foreground/90 transition-colors">
                        {client.name}
                   </span>
                </div>
              ))}
            </div>
        </div>
    )
}

export default Clients;
