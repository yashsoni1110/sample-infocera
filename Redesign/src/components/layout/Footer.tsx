import { Facebook, Instagram, Linkedin, Twitter, Diamond } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-border/50 pt-32 pb-16 relative overflow-hidden">
            
            {/* Ambient Base Glow */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-[80vw] h-[400px] bg-primary/5 rounded-[100%] blur-[120px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-12 gap-16 lg:gap-10 mb-24">
                    
                    {/* Col 1: Brand (Takes up more space) */}
                    <div className="col-span-2 lg:col-span-4 flex flex-col items-start pr-12">
                        <div className="flex items-center gap-4 mb-10 group cursor-pointer">
                             <div className="w-12 h-12 rounded-xl bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-all duration-500 shadow-[0_0_20px_rgba(var(--primary),0.1)]">
                                 <span className="font-serif font-black text-foreground text-2xl">I</span>
                             </div>
                             <span className="text-3xl font-sans font-black tracking-widest uppercase transition-colors group-hover:text-primary">INFOCERA</span>
                        </div>
                        <p className="text-muted-foreground/80 text-base leading-relaxed font-medium mb-12 max-w-sm">
                            We deploy uncompromising technological prowess to construct elite digital fortresses and hyper-scale web infrastructure.
                        </p>
                        
                        <div className="flex gap-4">
                             <SocialIcon icon={Linkedin} />
                             <SocialIcon icon={Twitter} />
                             <SocialIcon icon={Instagram} />
                             <SocialIcon icon={Facebook} />
                        </div>
                    </div>
                    
                    {/* Links Grid */}
                    <div className="col-span-2 lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-12 lg:gap-8">
                        <FooterColumn 
                            title="Arsenal"
                            links={[
                                "System Architecture", "Web Mastery", "Mobile Innovation", 
                                "Neural Networks", "Avant-Garde UI", "Growth Ops"
                            ]}
                        />
                        
                        <FooterColumn 
                            title="Matrix"
                            links={[
                                "React/Next.js Ecosystem", "Cloud Orchestration", "Python Analytics", 
                                "WebGL Experiences", "Cyber Security", "Database Theory"
                            ]}
                        />
                        
                        <FooterColumn 
                            title="Sectors"
                            links={[
                                "FinTech Global", "Healthcare IT", "Automotive Edge", 
                                "High-Frequency Retail", "Strategic Defense"
                            ]}
                        />
                         
                        <FooterColumn 
                            title="Entity"
                            links={[
                                "Company Overview", "Executive Team", "Careers", 
                                "Showcase Repository", "Contact Protocol"
                            ]}
                        />
                    </div>
                </div>
                
                {/* Micro Footer */}
                <div className="pt-12 border-t border-border/40 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-xs font-mono font-bold tracking-[0.2em] text-muted-foreground/50 uppercase">
                        © {new Date().getFullYear()} INFOCERA. ALL RIGHTS RESERVED.
                    </p>
                    <div className="flex gap-8 text-[10px] font-mono font-bold uppercase tracking-[0.2em] text-muted-foreground/70">
                        <a href="#" className="hover:text-primary transition-colors">Privacy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms</a>
                        <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => {
    return (
        <div className="space-y-8">
            <h4 className="font-mono text-xs font-bold tracking-[0.3em] uppercase text-primary drop-shadow-sm flex items-center gap-2">
                <Diamond className="w-2 h-2 fill-primary/30" /> {title}
            </h4>
            <ul className="space-y-4">
                {links.map((link) => (
                    <li key={link}>
                        <a 
                            href="#" 
                            className="text-sm font-medium text-foreground/70 hover:text-primary hover:translate-x-2 transition-all duration-300 inline-block"
                        >
                            {link}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    )
}

const SocialIcon = ({ icon: Icon }: { icon: any }) => {
    return (
        <a href="#" className="w-12 h-12 rounded-full bg-secondary/30 border border-border/50 flex items-center justify-center text-muted-foreground/80 hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-500 hover:scale-110 hover:-translate-y-1 shadow-lg shadow-black/5 hover:shadow-[0_0_20px_rgba(var(--primary),0.4)]">
            <Icon className="w-5 h-5" />
        </a>
    )
}

export default Footer;
