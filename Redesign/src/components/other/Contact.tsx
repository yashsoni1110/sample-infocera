import { useRef } from "react";
import { Mail, MapPin, Phone, ArrowRight, Globe, type LucideIcon } from "lucide-react";
import { cn } from "../../lib/utils";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(formRef.current, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power2.out", scrollTrigger: { trigger: formRef.current, start: "top 80%" } }
        );
    }, []);

    return (
        <section className="relative py-12 lg:py-24 bg-background overflow-hidden">
            {/* --- ABSTRACT BACKGROUND MAP --- */}
            <div className="absolute inset-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,var(--foreground)_1px,transparent_1px)] bg-[size:20px_20px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_70%)] opacity-20" />
            </div>

            <div className="container relative z-10 mx-auto px-4 sm:px-6">

                {/* --- HEADER --- */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 mb-12 lg:mb-20 border-b border-border/40 pb-8">
                    <div className="max-w-2xl">
                        <span className="text-primary font-mono text-xs tracking-widest uppercase mb-2 block">
                            // Contact Interface
                        </span>
                        <h2 className="text-4xl md:text-7xl font-bold text-foreground tracking-tighter leading-none">
                            Let's start the <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-blue-400 to-primary animate-gradient-x">conversation.</span>
                        </h2>
                    </div>
                    <div className="flex gap-3 text-xs font-mono">
                        <StatusBadge label="Online" color="bg-green-500" />
                        <StatusBadge label="Resp: ~2h" color="bg-blue-500" />
                    </div>
                </div>

                <div className="grid lg:grid-cols-12 gap-10 lg:gap-12">

                    {/* --- LEFT: CONTACT TILES --- */}
                    <div className="lg:col-span-4 flex flex-col gap-4 order-2 lg:order-1">
                        <ContactTile
                            icon={Phone}
                            label="Direct Line"
                            value="+91 88828 24948"
                            subValue="Mon-Fri, 9am - 6pm"
                            href="tel:+918882824948"
                        />
                        <ContactTile
                            icon={Mail}
                            label="Electronic Mail"
                            value="info@infocera.in"
                            subValue="For project inquiries"
                            href="mailto:info@infocera.in"
                        />
                        <ContactTile
                            icon={MapPin}
                            label="HQ Location"
                            value="Connaught Place, Delhi"
                            subValue="Block L, First Floor - 110001"
                            href="#"
                        />

                        {/* Social Proof Mini-Card */}
                        <div className="mt-4 lg:mt-auto p-6 rounded-2xl bg-secondary/5 border border-border/50">
                            <div className="flex -space-x-3 mb-4">
                                {[1, 2, 3, 4].map((i) => (
                                    <div key={i} className="w-8 h-8 rounded-full border-2 border-background bg-secondary" />
                                ))}
                            </div>
                            <p className="text-sm text-muted-foreground">
                                Join <span className="text-foreground font-bold">500+ Enterprises</span> transforming their future with us.
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT: INTELLIGENT FORM --- */}
                    <div className="lg:col-span-8 order-1 lg:order-2">
                        <form
                            ref={formRef}
                            className="bg-card/30 border border-border/50 rounded-[2rem] p-6 md:p-10 relative overflow-hidden group shadow-2xl transition-all hover:bg-card/40"
                        >
                            {/* Form Background Highlight */}
                            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[80px] -z-10 group-hover:bg-primary/10 transition-all duration-700" />

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                                <InputGroup label="Full Name" placeholder="ex. Sarah Connor" type="text" />
                                <InputGroup label="Work Email" placeholder="ex. sarah@skynet.com" type="email" />
                            </div>

                            <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
                                <InputGroup label="Company" placeholder="ex. Cyberdyne Systems" type="text" />
                                <SelectGroup label="Inquiry Type" options={["Software Dev", "Consulting", "Cloud Ops", "Other"]} />
                            </div>

                            <div className="mb-8">
                                <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">Message Context</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-secondary/20 border-b border-border/50 focus:border-primary text-foreground text-base p-4 resize-none transition-all placeholder:text-muted-foreground/30 focus:outline-none rounded-t-lg"
                                    placeholder="Tell us about your project goals..."
                                />
                            </div>

                            <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-border/50">
                                <p className="text-xs text-muted-foreground max-w-xs text-center md:text-left">
                                    By submitting, you agree to our privacy policy. We protect your data.
                                </p>
                                <button type="button" className="w-full md:w-auto px-8 py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-bold rounded-full flex items-center justify-center gap-2 group/btn transition-all hover:scale-105 shadow-lg shadow-primary/20">
                                    Initialize Request
                                    <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
};

// --- SUB-COMPONENTS ---

const StatusBadge = ({ label, color }: { label: string, color: string }) => (
    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary/10 border border-border/50">
        <span className={cn("w-1.5 h-1.5 rounded-full animate-pulse", color)} />
        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">{label}</span>
    </div>
);

interface ContactTileProps {
    icon: LucideIcon;
    label: string;
    value: string;
    subValue?: string;
    href?: string;
}

const ContactTile = ({ icon: Icon, label, value, subValue, href }: ContactTileProps) => {
    const Component = href ? 'a' : 'div';
    return (
        <Component
            href={href}
            className="group flex items-start gap-4 p-5 rounded-2xl bg-card/50 border border-border/50 hover:bg-card hover:border-primary/20 transition-all duration-300"
        >
            <div className="p-3 rounded-xl bg-secondary text-muted-foreground group-hover:text-primary group-hover:bg-primary/10 transition-colors">
                <Icon className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono text-muted-foreground uppercase tracking-wider mb-1">{label}</p>
                <h4 className="text-base font-bold text-foreground group-hover:text-primary transition-colors truncate">{value}</h4>
                {subValue && <p className="text-xs text-muted-foreground mt-0.5 truncate">{subValue}</p>}
            </div>
            <div className="self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all duration-300 hidden sm:block">
                <ArrowRight className="w-4 h-4 text-primary" />
            </div>
        </Component>
    );
};

interface InputGroupProps {
    label: string;
    placeholder: string;
    type: string;
}

const InputGroup = ({ label, placeholder, type }: InputGroupProps) => (
    <div className="relative group/input">
        <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2 group-focus-within/input:text-primary transition-colors">
            {label}
        </label>
        <input
            type={type}
            className="w-full bg-transparent border-b border-border/50 py-3 text-foreground text-lg placeholder:text-muted-foreground/30 focus:outline-none focus:border-primary transition-all rounded-none"
            placeholder={placeholder}
        />
    </div>
);

interface SelectGroupProps {
    label: string;
    options: string[];
}

const SelectGroup = ({ label, options }: SelectGroupProps) => (
    <div className="relative">
        <label className="block text-xs font-mono text-muted-foreground uppercase tracking-widest mb-2">
            {label}
        </label>
        <div className="relative">
            <select className="w-full bg-background border-b border-border/50 py-3 text-foreground text-lg focus:outline-none focus:border-primary appearance-none cursor-pointer rounded-none">
                {options.map((opt: string) => <option key={opt} className="bg-background text-foreground">{opt}</option>)}
            </select>
            <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground">
                <Globe className="w-4 h-4" />
            </div>
        </div>
    </div>
);

export default Contact;