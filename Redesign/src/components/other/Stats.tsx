import { useRef } from "react";
import { Users, CheckCircle, Trophy, Globe2, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

interface Stat {
  label: string;
  value: number;
  suffix: string;
  icon: LucideIcon;
  color: string;
}

const STATS: Stat[] = [
  { label: "Happy Clients", value: 100, suffix: "+", icon: Users, color: "text-blue-500" },
  { label: "Projects Done", value: 250, suffix: "+", icon: CheckCircle, color: "text-emerald-500" },
  { label: "Success Rate", value: 98, suffix: "%", icon: Trophy, color: "text-yellow-500" },
  { label: "Global Presence", value: 20, suffix: "+", icon: Globe2, color: "text-purple-500" },
];

const Stats = () => {
    const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="relative py-12 lg:py-24 z-20 bg-background text-foreground">
      <div className="container mx-auto px-4 sm:px-6">

        {/* Main Floating Container */}
        <div className="relative rounded-[2rem] bg-card border border-border shadow-2xl overflow-hidden">

          {/* Ambient Background Glow */}
          <div className="absolute top-0 left-1/4 w-full h-full bg-gradient-to-r from-transparent via-foreground/[0.03] to-transparent skew-x-12 pointer-events-none" />

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-y lg:divide-y-0 divide-border/50">
            {STATS.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  stat: Stat;
}

const StatItem = ({ stat }: StatItemProps) => {
  const ref = useRef(null);
  const counterRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // Pulse animation (if needed, can be added here)
    
    // Counter animation
    if(counterRef.current) {
        ScrollTrigger.create({
            trigger: ref.current,
            start: "top 85%",
            once: true,
            onEnter: () => {
                 gsap.to(counterRef.current, {
                    textContent: stat.value,
                    duration: 2.5,
                    ease: "power2.out",
                    roundProps: "textContent",
                    onUpdate: function() {
                        this.target.innerHTML = Math.ceil(Number(this.target.textContent)); // Ensure integer updates
                    }
                });
            }
        });
    }

  }, []);

  return (
    <div
      ref={ref}
      className={cn(
        "relative p-6 lg:p-10 flex flex-col items-center justify-center text-center group",
      )}
    >
      {/* Icon with Pulse Effect */}
      <div className={cn(
        "stat-icon-container mb-4 p-4 rounded-2xl bg-secondary/10 border border-border/50 group-hover:bg-secondary/20 transition-all duration-500 relative",
        stat.color
      )}>
        <stat.icon className="w-6 h-6 lg:w-8 lg:h-8" />
        <span className={cn("stat-ping absolute inset-0 rounded-2xl opacity-20 animate-ping", stat.color, "bg-current")} />
      </div>

      {/* Number Display */}
      <div className="flex items-baseline gap-1">
        <div 
            ref={counterRef} 
            className="text-4xl lg:text-5xl font-bold font-mono text-foreground tracking-tighter"
        >
          0
        </div>
        <span className={cn("text-xl lg:text-2xl font-bold", stat.color)}>
          {stat.suffix}
        </span>
      </div>

      {/* Label */}
      <p className="mt-2 text-xs lg:text-sm font-medium uppercase tracking-[0.2em] text-muted-foreground group-hover:text-foreground transition-colors">
        {stat.label}
      </p>
    </div>
  );
};

export default Stats;