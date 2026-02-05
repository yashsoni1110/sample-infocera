import { useState, useRef } from "react";
import {
  Car, ShoppingCart, Landmark,
  Stethoscope, Truck, ArrowRight, ChevronRight, type LucideIcon
} from "lucide-react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const INDUSTRIES = [
  { id: "01", name: "Automotive", icon: Car, desc: "Building smart mobility platforms and autonomous driving interfaces.", color: "from-blue-500 to-cyan-400" },
  { id: "02", name: "Ecommerce", icon: ShoppingCart, desc: "High-conversion retail engines with AI-driven personalization.", color: "from-orange-500 to-yellow-400" },
  { id: "03", name: "Finance", icon: Landmark, desc: "Secure, blockchain-ready fintech ecosystems for global banking.", color: "from-emerald-500 to-teal-400" },
  { id: "04", name: "Healthcare", icon: Stethoscope, desc: "HIPAA-compliant telemedicine and patient management portals.", color: "from-rose-500 to-pink-400" },
  { id: "05", name: "Logistics", icon: Truck, desc: "Real-time supply chain tracking and fleet optimization software.", color: "from-purple-500 to-indigo-400" },
];

const Industry = () => {
  const [active, setActive] = useState(INDUSTRIES[0]);
  const previewRef = useRef(null);

  // Animation for the Preview Panel
  useGSAP(() => {
    if (previewRef.current) {
        gsap.fromTo(previewRef.current,
            { opacity: 0, scale: 0.95, y: 20 },
            { opacity: 1, scale: 1, y: 0, duration: 0.4, ease: "circ.out", overwrite: true }
        );
    }
  }, [active]);

  return (
    <section className="relative py-24 bg-background text-foreground overflow-hidden">
      {/* Background Decor */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[length:4rem_4rem]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-secondary/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-mono tracking-[0.3em] text-primary uppercase mb-4">
            Domain Expertise
          </h2>
          <h3 className="text-4xl md:text-6xl font-bold leading-tight">
            Tailored solutions for <br />
            <span className="text-muted-foreground italic">every ecosystem.</span>
          </h3>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* --- LEFT: INTERACTIVE LIST --- */}
          <div className="space-y-3">
            {INDUSTRIES.map((item) => (
              <div key={item.id} className="flex flex-col">
                <button
                  onMouseEnter={() => setActive(item)}
                  onClick={() => setActive(item)}
                  className={cn(
                    "group w-full flex items-center justify-between p-6 rounded-2xl transition-all duration-300 border backdrop-blur-sm relative z-10",
                    active.id === item.id
                      ? "bg-secondary/40 border-primary/20 shadow-lg shadow-primary/5 translate-x-2"
                      : "border-transparent opacity-60 hover:opacity-100 hover:bg-secondary/10 hover:translate-x-1"
                  )}
                >
                  <div className="flex items-center gap-6">
                    <span className={cn(
                      "font-mono text-sm transition-colors",
                      active.id === item.id ? "text-primary" : "text-muted-foreground"
                    )}>{item.id}</span>
                    <h4 className={cn(
                      "text-xl md:text-2xl font-bold tracking-tight transition-colors text-left",
                      active.id === item.id ? "text-foreground" : "text-muted-foreground group-hover:text-foreground"
                    )}>
                      {item.name}
                    </h4>
                  </div>
                  <div className={cn(
                    "w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500",
                    active.id === item.id
                      ? "bg-primary text-primary-foreground rotate-90 lg:rotate-0 scale-110 shadow-lg shadow-primary/20"
                      : "bg-secondary/20 text-muted-foreground rotate-0 lg:-rotate-45 group-hover:rotate-90 lg:group-hover:rotate-0 group-hover:bg-secondary/40"
                  )}>
                    <ArrowRight className="w-5 h-5 hidden lg:block" />
                    <ChevronRight className="w-5 h-5 lg:hidden" />
                  </div>
                </button>

                {/* Mobile Details Accordion */}
                <AccordionContent 
                    isActive={active.id === item.id} 
                    item={item} 
                />
              </div>
            ))}
          </div>

          {/* --- RIGHT: DYNAMIC PREVIEW PANEL (Desktop Only) --- */}
          <div className="hidden lg:block relative aspect-square md:aspect-video lg:aspect-square group">
              <div
                ref={previewRef}
                className="relative h-full w-full rounded-[2.5rem] bg-secondary/5 border border-white/10 p-8 md:p-12 flex flex-col justify-between overflow-hidden backdrop-blur-2xl"
              >
                {/* Visual Backdrop */}
                <div className={cn(
                  "absolute -top-24 -right-24 w-64 h-64 blur-[100px] opacity-20 rounded-full bg-gradient-to-br",
                  active.color
                )} />

                <div className="relative z-10">
                  <div className={cn(
                    "inline-flex p-4 rounded-3xl bg-gradient-to-br mb-8 shadow-2xl shadow-black/50",
                    active.color
                  )}>
                    <active.icon className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold mb-6">
                    Revitalizing <br /> {active.name}
                  </h3>
                  <p className="text-muted-foreground text-lg leading-relaxed max-w-sm">
                    {active.desc}
                  </p>
                </div>

                <div className="relative z-10 mt-auto flex items-center gap-4">
                  <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all group/btn">
                    Case Studies <ChevronRight className="w-4 h-4" />
                  </button>
                  <div className="h-px flex-1 bg-border/50" />
                </div>
              </div>

            {/* Background floating element */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 blur-3xl rounded-full animate-pulse" />
          </div>

        </div>
      </div>
    </section>
  );
};

interface IndustryItem {
    id: string;
    name: string;
    icon: LucideIcon;
    desc: string;
    color: string;
}

// Helper component for Accordion to isolate GSAP logic per item
const AccordionContent = ({ isActive, item }: { isActive: boolean, item: IndustryItem }) => {
    const contentRef = useRef(null);

    useGSAP(() => {
        if (isActive) {
            gsap.to(contentRef.current, { height: "auto", opacity: 1, duration: 0.3, ease: "power2.out" });
        } else {
            gsap.to(contentRef.current, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
        }
    }, [isActive]);

    return (
        <div 
            ref={contentRef} 
            className="lg:hidden overflow-hidden h-0 opacity-0"
        >
            <div className="p-6 pt-8 -mt-4 mb-4 rounded-b-2xl border-x border-b border-primary/20 bg-secondary/10 mx-2 relative z-0">
                <div className={cn(
                    "absolute inset-0 bg-gradient-to-b opacity-10",
                    item.color
                )} />
                <p className="text-muted-foreground text-base leading-relaxed mb-6 relative z-10">
                    {item.desc}
                </p>
                <button className="flex items-center gap-2 text-primary font-bold hover:gap-4 transition-all text-sm uppercase tracking-wider relative z-10">
                    Explore Case Study <ArrowRight className="w-4 h-4" />
                </button>
            </div>
        </div>
    )
}

export default Industry;