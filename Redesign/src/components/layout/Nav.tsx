import { useState, useRef } from "react";
import { Menu, Search, X, ArrowUpRight } from "lucide-react"; 
import { Button } from "../ui/button";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "../ui/navigation-menu";
import { cn } from "../../lib/utils";
import { Logo, SERVICES_DATA } from "../../lib/NavData";
import { ModeToggle } from "../ui/mode-toggle";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(SERVICES_DATA[0]);
  const navRef = useRef(null);

  useGSAP(() => {
    // Elegant fade-in for premium look
    gsap.fromTo(navRef.current, 
      { y: -30, opacity: 0 },
      { 
        y: 0, 
        opacity: 1, 
        duration: 1.5, 
        ease: "power4.out", 
        delay: 0.2 
      }
    );
  }, []);

  return (
    <>
      <nav className="fixed top-8 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
        <div 
          ref={navRef}
          className="pointer-events-auto bg-background/50 backdrop-blur-3xl border border-white/5 dark:border-white/10 rounded-2xl px-8 py-4 shadow-2xl flex items-center gap-10 max-w-7xl w-full justify-between transition-all duration-700 hover:bg-background/80 hover:border-primary/20"
        >
            {/* LEFT: Elite Monogram Logo */}
            <div className="shrink-0 scale-90 md:scale-100 flex items-center gap-2 cursor-pointer group">
                <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                     <span className="font-serif font-black text-foreground text-xl">I</span>
                </div>
                <span className="text-xl font-medium tracking-widest uppercase ml-2 select-none group-hover:text-primary transition-colors">INFOCERA</span>
            </div>

            {/* CENTER: Ultra-sleek Desktop Nav */}
            <div className="hidden lg:flex items-center gap-2 font-mono uppercase tracking-widest text-xs">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:bg-white/5 text-foreground/60 hover:text-foreground rounded-lg data-[active]:text-primary")}>
                                Overview
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <NavigationMenuTrigger className="bg-transparent font-medium hover:bg-white/5 text-foreground/60 hover:text-foreground rounded-lg data-[state=open]:text-primary">
                                Capability
                             </NavigationMenuTrigger>
                             <NavigationMenuContent>
                                <div className="w-[600px] p-0 bg-popover/95 backdrop-blur-3xl border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                                    <div className="grid grid-cols-[1fr_1.5fr] p-2 gap-2 h-[340px]">
                                        
                                        {/* LEFT: Categories */}
                                        <div className="flex flex-col gap-2 p-3 bg-secondary/20 rounded-lg">
                                            <h4 className="text-[10px] text-primary mb-3 px-2 tracking-[0.3em]">SERVICES</h4>
                                            {SERVICES_DATA.slice(0, 3).map((s, i) => (
                                                <div 
                                                    key={i} 
                                                    onMouseEnter={() => setActiveCategory(s)}
                                                    className={cn(
                                                        "group flex items-start gap-4 p-3 rounded-lg transition-all cursor-pointer border border-transparent",
                                                        activeCategory.category === s.category ? "bg-card border-white/5 shadow-md" : "hover:bg-white/5"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "mt-1 transition-transform duration-500",
                                                        activeCategory.category === s.category ? "text-primary scale-110" : "text-muted-foreground group-hover:text-primary group-hover:scale-110"
                                                    )}>
                                                        {s.icon}
                                                    </div>
                                                    <div>
                                                        <div className={cn(
                                                            "font-bold transition-colors tracking-widest text-[11px]",
                                                            activeCategory.category === s.category ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                                                        )}>
                                                            {s.category}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* RIGHT: Dynamic Service List */}
                                        <div className="relative p-6 flex flex-col group">
                                            
                                            <div className="relative z-10 flex items-center justify-between mb-6 pb-4 border-b border-white/5">
                                                <h4 className="text-base font-black text-foreground tracking-widest">{activeCategory.category}</h4>
                                            </div>
                                            
                                            <div className="relative z-10 grid grid-cols-1 gap-1 overflow-y-auto custom-scrollbar">
                                                {activeCategory.items.map((item, idx) => (
                                                    <a key={idx} href={item.href} className="flex items-center justify-between p-3 rounded-md hover:bg-secondary/30 transition-colors group/item">
                                                        <div className="flex items-center gap-4">
                                                            <div className="text-muted-foreground group-hover/item:text-primary transition-colors scale-90">
                                                                {item.icon}
                                                            </div>
                                                            <span className="text-xs text-foreground/80 font-medium group-hover/item:text-foreground transition-colors tracking-wide">
                                                                {item.name}
                                                            </span>
                                                        </div>
                                                        <ArrowUpRight className="w-3 h-3 text-muted-foreground opacity-0 group-hover/item:opacity-100 transition-opacity" />
                                                    </a>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-6 relative z-10 border-t border-white/5">
                                                 <a href="#" className="flex items-center justify-between w-full text-primary font-bold text-[10px] tracking-[0.2em] hover:text-foreground transition-colors group/link">
                                                    EXPLORE ALL
                                                    <ArrowUpRight className="w-3 h-3 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </NavigationMenuContent>
                        </NavigationMenuItem>
                         <NavigationMenuItem>
                            <NavigationMenuLink href="/portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:bg-white/5 text-foreground/60 hover:text-foreground rounded-lg")}>
                                Showcase
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                         <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent font-medium hover:bg-white/5 text-foreground/60 hover:text-foreground rounded-lg")}>
                                Studio
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* RIGHT: Minimal Actions */}
            <div className="flex items-center gap-4">
                 
                 <ModeToggle />

                 <Button variant="ghost" size="icon" className="hidden md:flex rounded-full text-foreground/60 hover:text-foreground hover:bg-secondary/50 w-10 h-10 border border-transparent hover:border-white/10 transition-colors">
                    <Search className="w-4 h-4" />
                 </Button>

                 <Button className="hidden md:flex rounded-lg px-8 py-5 bg-foreground text-background font-bold text-xs uppercase tracking-[0.2em] hover:bg-primary hover:text-primary-foreground shadow-2xl transition-all duration-500">
                    Initiate
                 </Button>

                 {/* Mobile Menu */}
                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                         <Button variant="ghost" size="icon" className="lg:hidden rounded-lg border border-white/10 text-foreground hover:bg-secondary/20">
                            <Menu className="w-5 h-5" />
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="w-full h-[80vh] bg-background/98 backdrop-blur-3xl border-b border-white/10 p-0 rounded-b-3xl">
                         <div className="container mx-auto h-full flex flex-col justify-center items-center gap-10 relative">
                             <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="absolute top-8 right-8 rounded-full border border-white/10 text-muted-foreground hover:text-foreground hover:bg-secondary/50 transition-colors">
                                <X className="w-6 h-6" />
                             </Button>
                             
                             <div className="flex flex-col items-center gap-8 w-full">
                                {["Overview", "Capability", "Showcase", "Studio", "Contact"].map((item, i) => (
                                    <a 
                                        key={item} 
                                        href="#" 
                                        className="group w-full max-w-sm flex items-center justify-between text-3xl font-black text-foreground/50 hover:text-foreground transition-all duration-500 border-b border-white/5 pb-4"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        <span className="tracking-tight">{item}</span>
                                        <span className="font-mono text-sm tracking-widest text-primary opacity-0 group-hover:opacity-100 transition-opacity">0{i+1}</span>
                                    </a>
                                ))}
                             </div>

                             <div className="absolute bottom-10 flex gap-10 text-xs font-mono tracking-widest uppercase text-muted-foreground">
                                <a href="#" className="hover:text-primary transition-colors">IN</a>
                                <a href="#" className="hover:text-primary transition-colors">X</a>
                                <a href="#" className="hover:text-primary transition-colors">IG</a>
                             </div>
                         </div>
                    </SheetContent>
                 </Sheet>
            </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;