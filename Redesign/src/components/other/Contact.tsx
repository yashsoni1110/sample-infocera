import { useRef } from "react";
import { Mail, MapPin, Phone, ArrowRight, Diamond } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
    const formRef = useRef(null);

    useGSAP(() => {
        gsap.fromTo(formRef.current, 
            { opacity: 0, y: 50, scale: 0.98 },
            { opacity: 1, y: 0, scale: 1, duration: 1.5, ease: "power4.out", scrollTrigger: { trigger: formRef.current, start: "top 85%" } }
        );
    }, []);

    return (
        <section className="relative py-32 lg:py-40 bg-background overflow-hidden border-t border-border/40" id="contact">
            
            {/* Ambient Base Light */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,var(--primary)/3%,transparent_60%)] pointer-events-none mix-blend-screen" />

            <div className="container relative z-10 mx-auto px-6 max-w-7xl">

                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 lg:mb-32">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 text-xs font-mono font-bold tracking-[0.3em] uppercase text-primary mb-6">
                            <Diamond className="w-3 h-3 fill-primary/30" />
                            Transmission Status
                        </div>
                        <h2 className="text-5xl md:text-[5rem] lg:text-[6rem] font-sans font-black tracking-tighter text-foreground leading-[1] text-balance drop-shadow-sm">
                            Initiate <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-br from-[#cda24e] to-primary pb-2 drop-shadow-lg">Protocol.</span>
                        </h2>
                    </div>
                    
                    {/* Status Beacon */}
                    <div className="flex flex-col items-start gap-3 bg-secondary/30 backdrop-blur-md p-6 rounded-2xl border border-white/5 border-l-primary/50 shadow-sm relative overflow-hidden group">
                        <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                        <div className="flex items-center gap-4 text-xs font-mono uppercase tracking-[0.2em] font-bold text-foreground/80 relative z-10">
                            <span className="relative flex h-3 w-3">
                                <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 shadow-[0_0_10px_rgba(16,185,129,0.5)]"></span>
                            </span>
                            Uplink Active
                        </div>
                        <div className="text-[10px] text-muted-foreground font-mono tracking-widest relative z-10 pl-7">
                            Expected Latency: 2-3 hrs
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20">

                    {/* --- LEFT: INFRASTRUCTURE PING --- */}
                    <div className="lg:col-span-5 flex flex-col gap-6 order-2 lg:order-1">
                        <ContactTile
                            icon={Phone}
                            label="DIRECT COMMS"
                            value="+91 88828 24948"
                            subValue="Mon-Fri, 0900 - 1800 IST"
                            href="tel:+918882824948"
                        />
                        <ContactTile
                            icon={Mail}
                            label="DATA STREAM"
                            value="info@infocera.in"
                            subValue="Global Architecture Inquiries"
                            href="mailto:info@infocera.in"
                        />
                        <ContactTile
                            icon={MapPin}
                            label="PHYSICAL NODE"
                            value="Connaught Place, Delhi"
                            subValue="Block L, Level 1 - 110001"
                            href="#"
                        />

                        {/* Social Verification Block */}
                        <div className="mt-8 lg:mt-auto p-8 rounded-3xl bg-background border border-border/40 shadow-xl shadow-black/5 flex flex-col items-start relative overflow-hidden group">
                            <div className="absolute inset-0 bg-gradient-to-tr from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000" />
                            <div className="flex -space-x-4 mb-6 relative z-10">
                                {[
                                    "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&h=100&fit=crop&q=80",
                                    "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&q=80",
                                    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&q=80",
                                    "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&q=80"
                                ].map((src, i) => (
                                    <img 
                                        key={i} 
                                        src={src} 
                                        alt="Avatar"
                                        className="w-12 h-12 rounded-full border-[3px] border-background object-cover shadow-sm group-hover:-translate-y-1 transition-transform"
                                        style={{ transitionDelay: `${i * 50}ms` }}
                                    />
                                ))}
                            </div>
                            <p className="text-sm font-medium text-foreground/80 leading-relaxed max-w-[250px] relative z-10">
                                Architecture backed by <strong className="font-bold text-foreground">500+ enterprises</strong> scaling the digital frontier.
                            </p>
                        </div>
                    </div>

                    {/* --- RIGHT: HIGH TECH FORM --- */}
                    <div className="lg:col-span-7 order-1 lg:order-2">
                        <form
                            ref={formRef}
                            className="bg-card/40 backdrop-blur-2xl border border-border/60 rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden group/form shadow-2xl transition-all duration-[2s] hover:bg-card/60 hover:shadow-primary/5"
                        >
                            {/* Form Ambient Glare */}
                            <div className="absolute top-[-50px] right-[-50px] w-64 h-64 bg-primary/20 blur-[100px] z-0 pointer-events-none mix-blend-screen group-hover/form:bg-primary/30 transition-colors duration-1000" />

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                                <FloatingInput label="SYSTEM ID (NAME)" type="text" />
                                <FloatingInput label="ENCRYPTED EMAIL" type="email" />
                            </div>

                            <div className="relative z-10 grid md:grid-cols-2 gap-8 md:gap-12 mb-8 md:mb-12">
                                <FloatingInput label="ENTERPRISE ENTITY" type="text" />
                                <FloatingSelect label="PROTOCOL TYPE" options={["System Architecture", "Neural AI Deploy", "Cloud Migration", "General Comms"]} />
                            </div>

                            <div className="relative z-10 mb-12">
                                <label className="block text-[10px] font-mono text-muted-foreground font-bold tracking-[0.2em] uppercase mb-4 group-focus-within:text-primary transition-colors">Data Payload</label>
                                <textarea
                                    rows={5}
                                    className="w-full bg-background/50 border border-border/40 focus:border-primary/50 text-foreground text-sm font-medium p-5 resize-none transition-all placeholder:text-muted-foreground/30 focus:outline-none rounded-xl focus:shadow-[0_0_15px_rgba(var(--primary),0.1)] focus:bg-background"
                                    placeholder="Execute payload configuration here..."
                                />
                            </div>

                            <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-8 pt-6 border-t border-border/40">
                                <p className="text-[10px] font-mono text-muted-foreground max-w-[200px] text-center sm:text-left opacity-70 uppercase tracking-widest">
                                    Transmission secured via RSA-4096 handshake protocol.
                                </p>
                                <button type="button" className="w-full sm:w-auto px-10 h-16 bg-foreground hover:bg-primary text-background hover:text-primary-foreground font-bold text-sm tracking-widest uppercase rounded-full flex items-center justify-center gap-4 transition-all duration-300 hover:scale-[1.02] shadow-xl shadow-black/10 hover:shadow-[0_0_30px_rgba(var(--primary),0.4)] group/btn">
                                    Transmit
                                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
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

const ContactTile = ({ icon: Icon, label, value, subValue, href }: { icon: any, label: string, value: string, subValue?: string, href?: string }) => {
    const Component = href ? 'a' : 'div';
    return (
        <Component
            href={href}
            className="group flex flex-col md:flex-row items-start md:items-center gap-5 p-6 rounded-3xl bg-transparent hover:bg-card/40 border border-transparent hover:border-border/50 transition-all duration-500 cursor-pointer"
        >
            <div className="p-4 rounded-2xl bg-secondary/40 text-muted-foreground/60 group-hover:text-primary group-hover:bg-primary/10 transition-colors border border-border/20 group-hover:border-primary/30">
                <Icon className="w-6 h-6 group-hover:scale-110 transition-transform duration-500" strokeWidth={1.5} />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-[10px] font-mono font-bold text-muted-foreground uppercase tracking-[0.2em] mb-1.5">{label}</p>
                <h4 className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors truncate">{value}</h4>
                {subValue && <p className="text-sm font-medium text-muted-foreground/70 mt-1 truncate">{subValue}</p>}
            </div>
            <div className="hidden md:flex self-center w-12 h-12 rounded-full border border-border/40 items-center justify-center translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500 group-hover:bg-primary group-hover:border-primary">
                <ArrowRight className="w-5 h-5 text-primary-foreground" />
            </div>
        </Component>
    );
};

// High-end Animated Input Pattern
const FloatingInput = ({ label, type }: { label: string, type: string }) => (
    <div className="relative group/input flex flex-col-reverse">
        <input
            type={type}
            id={label}
            className="peer w-full bg-transparent border-b-2 border-border/40 py-3 text-foreground text-lg font-medium placeholder-transparent focus:outline-none focus:border-primary transition-all duration-300"
            placeholder={label}
        />
        <label 
            htmlFor={label} 
            className="absolute left-0 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground peer-placeholder-shown:text-base peer-placeholder-shown:font-sans peer-placeholder-shown:font-medium peer-placeholder-shown:tracking-normal peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-[10px] peer-focus:font-mono peer-focus:font-bold peer-focus:tracking-[0.2em] peer-focus:text-primary transition-all duration-300 -top-6"
        >
            {label}
        </label>
    </div>
);

const FloatingSelect = ({ label, options }: { label: string, options: string[] }) => (
    <div className="relative flex flex-col-reverse">
        <select 
            id={label}
            className="peer w-full bg-transparent border-b-2 border-border/40 py-3 text-foreground text-lg font-medium focus:outline-none focus:border-primary appearance-none cursor-pointer transition-colors"
        >
            {options.map((opt: string) => <option key={opt} className="bg-background text-foreground font-sans">{opt}</option>)}
        </select>
        <label 
            htmlFor={label} 
            className="absolute left-0 -top-6 text-[10px] font-mono font-bold tracking-[0.2em] uppercase text-muted-foreground peer-focus:text-primary transition-colors duration-300"
        >
            {label}
        </label>
        <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/50 peer-focus:text-primary transition-colors">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
        </div>
    </div>
);

export default Contact;