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
import { ModeToggle } from "../ui/mode-toggle"; // Import ModeToggle
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState(SERVICES_DATA[0]);
  const navRef = useRef(null);

  useGSAP(() => {
    // Initial materialization animation
    gsap.fromTo(navRef.current, 
      { y: -20, opacity: 0, scale: 0.95 },
      { 
        y: 0, 
        opacity: 1, 
        scale: 1, 
        duration: 1.2, 
        ease: "power3.out", 
        delay: 0.5 
      }
    );
  }, []);

  return (
    <>
      <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none">
        <div 
          ref={navRef}
          className="pointer-events-auto bg-background/70 backdrop-blur-2xl border border-border/40 rounded-full px-6 py-3 shadow-2xl flex items-center gap-8 max-w-5xl w-full justify-between transition-all duration-300 hover:bg-background/90 hover:border-border/60 hover:shadow-primary/10"
        >
            {/* LEFT: Logo - Minimal */}
            <div className="shrink-0 scale-90">
                <Logo />
            </div>

            {/* CENTER: Compact Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
                <NavigationMenu>
                    <NavigationMenuList>
                        <NavigationMenuItem>
                            <NavigationMenuLink href="/" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-secondary/20 text-foreground/80 hover:text-foreground rounded-full data-[active]:bg-secondary/20")}>
                                Home
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                             <NavigationMenuTrigger className="bg-transparent hover:bg-secondary/20 text-foreground/80 hover:text-foreground rounded-full data-[active]:bg-secondary/20">
                                Solutions
                             </NavigationMenuTrigger>
                             <NavigationMenuContent>
                                <div className="w-[600px] p-0 bg-popover/95 backdrop-blur-3xl border border-border/40 rounded-2xl overflow-hidden shadow-2xl">
                                    <div className="grid grid-cols-[1fr_1.5fr] p-2 gap-2 h-[320px]">
                                        
                                        {/* LEFT: Categories */}
                                        <div className="flex flex-col gap-2 p-2">
                                            <h4 className="text-xs font-mono font-bold text-muted-foreground uppercase tracking-wider mb-2 px-2">Capabilities</h4>
                                            {SERVICES_DATA.slice(0, 3).map((s, i) => (
                                                <div 
                                                    key={i} 
                                                    onMouseEnter={() => setActiveCategory(s)}
                                                    className={cn(
                                                        "group flex items-start gap-3 p-3 rounded-xl transition-all cursor-pointer",
                                                        activeCategory.category === s.category ? "bg-secondary/50" : "hover:bg-secondary/20"
                                                    )}
                                                >
                                                    <div className={cn(
                                                        "mt-1 transition-transform duration-300",
                                                        activeCategory.category === s.category ? "text-primary scale-110" : "text-muted-foreground group-hover:text-primary group-hover:scale-110"
                                                    )}>
                                                        {s.icon}
                                                    </div>
                                                    <div>
                                                        <div className={cn(
                                                            "font-medium transition-colors",
                                                            activeCategory.category === s.category ? "text-foreground" : "text-foreground/70 group-hover:text-foreground"
                                                        )}>
                                                            {s.category}
                                                        </div>
                                                        <div className="text-xs text-muted-foreground line-clamp-1 opacity-70">
                                                            Everything needed for {s.category.split(' ')[0]}
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* RIGHT: Dynamic Service List */}
                                        <div className="relative bg-secondary/10 rounded-xl border border-white/5 p-6 overflow-hidden flex flex-col group">
                                            {/* Dynamic Background Gradient */}
                                            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                            
                                            <div className="relative z-10 flex items-center justify-between mb-4 border-b border-border/10 pb-4">
                                                <h4 className="text-lg font-bold text-foreground">{activeCategory.category}</h4>
                                                <ArrowUpRight className="w-4 h-4 text-primary opacity-50" />
                                            </div>
                                            
                                            <div className="relative z-10 grid grid-cols-2 gap-3 overflow-y-auto pr-2 custom-scrollbar">
                                                {activeCategory.items.map((item, idx) => (
                                                    <a key={idx} href={item.href} className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 transition-colors group/item">
                                                        <div className="text-muted-foreground group-hover/item:text-primary transition-colors">
                                                            {item.icon}
                                                        </div>
                                                        <span className="text-sm text-foreground/70 group-hover/item:text-foreground transition-colors line-clamp-1">
                                                            {item.name}
                                                        </span>
                                                    </a>
                                                ))}
                                            </div>

                                            <div className="mt-auto pt-4 relative z-10">
                                                 <a href="#" className="flex items-center gap-2 text-primary font-bold text-xs uppercase hover:gap-3 transition-all">
                                                    View All {activeCategory.category} <ArrowUpRight className="w-3 h-3" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                             </NavigationMenuContent>
                        </NavigationMenuItem>
                         <NavigationMenuItem>
                            <NavigationMenuLink href="/portfolio" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-secondary/20 text-foreground/80 hover:text-foreground rounded-full")}>
                                Work
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                         <NavigationMenuItem>
                            <NavigationMenuLink href="/about" className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-secondary/20 text-foreground/80 hover:text-foreground rounded-full")}>
                                Studio
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>

            {/* RIGHT: Actions */}
            <div className="flex items-center gap-2">
                 
                 {/* Theme Toggle */}
                 <ModeToggle />

                 {/* Search Trigger */}
                 <Button variant="ghost" size="icon" className="rounded-full text-foreground/70 hover:text-foreground hover:bg-secondary/20 w-9 h-9">
                    <Search className="w-4 h-4" />
                 </Button>

                 {/* Get Started Button - Glowing */}
                 <Button className="hidden md:flex rounded-full px-6 bg-primary text-primary-foreground font-semibold hover:bg-primary/90 shadow-[0_0_20px_rgba(var(--primary),0.4)] hover:shadow-[0_0_30px_rgba(var(--primary),0.6)] transition-all duration-300">
                    Get Started
                 </Button>

                 {/* Mobile Menu */}
                 <Sheet open={isOpen} onOpenChange={setIsOpen}>
                    <SheetTrigger asChild>
                         <Button variant="ghost" size="icon" className="lg:hidden rounded-full text-foreground hover:bg-secondary/20">
                            <Menu className="w-5 h-5" />
                         </Button>
                    </SheetTrigger>
                    <SheetContent side="top" className="w-full h-screen bg-background/95 backdrop-blur-3xl border-none p-0">
                         <div className="container mx-auto h-full flex flex-col justify-center items-center gap-8 relative">
                             <Button onClick={() => setIsOpen(false)} variant="ghost" size="icon" className="absolute top-6 right-6 rounded-full text-muted-foreground hover:text-foreground hover:bg-secondary/20">
                                <X className="w-6 h-6" />
                             </Button>
                             
                             {/* Mobile Links */}
                             <div className="flex flex-col items-center gap-6">
                                {["Home", "Solutions", "Work", "Studio", "Contact"].map((item) => (
                                    <a 
                                        key={item} 
                                        href="#" 
                                        className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-foreground to-foreground/40 hover:to-primary transition-all duration-300"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item}
                                    </a>
                                ))}
                             </div>

                             <div className="absolute bottom-10 flex gap-6 text-muted-foreground">
                                <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
                                <a href="#" className="hover:text-primary transition-colors">Twitter/X</a>
                                <a href="#" className="hover:text-primary transition-colors">Instagram</a>
                             </div>
                         </div>
                    </SheetContent>
                 </Sheet>
            </div>
        </div>
      </nav>
      {/* Spacer is removed because Nav is floating and effectively translucent overlay */}
    </>
  );
};

export default Nav;