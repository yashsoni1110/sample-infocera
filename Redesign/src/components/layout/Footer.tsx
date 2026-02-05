import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-background border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
                    
                    {/* Col 1: Brand */}
                    <div className="col-span-2 lg:col-span-1 space-y-6">
                        <div className="flex items-center gap-2">
                             <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
                                 <span className="font-bold text-white text-xl">I</span>
                             </div>
                             <span className="text-2xl font-bold tracking-tight">INFOCERA</span>
                        </div>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                            Leading IT services provider delivering innovative technology solutions that drive business growth and digital transformation.
                        </p>
                        
                        <div className="flex gap-4">
                             <SocialIcon icon={Linkedin} />
                             <SocialIcon icon={Twitter} />
                             <SocialIcon icon={Instagram} />
                             <SocialIcon icon={Facebook} />
                        </div>
                    </div>
                    
                    {/* Links */}
                    <FooterColumn 
                        title="Services"
                        links={[
                            "Online Marketing", "Web Design & Development", "Mobile Application", 
                            "Software", "Creative Design", "Consultant", "Data Science", "Testing"
                        ]}
                    />
                    
                    <FooterColumn 
                        title="Industries"
                        links={[
                            "Automotive", "Ecommerce", "Education", "Finance", 
                            "Gaming", "Healthcare", "Manufacturing", "Real Estate"
                        ]}
                    />
                    
                    <FooterColumn 
                        title="Technologies"
                        links={[
                            "UI Design", "Server Side Scripting", "Cloud Computing",
                            "Data Mining and Analytics", "Web Server Technology",
                            "Testing", "Software Process"
                        ]}
                    />
                     
                    <FooterColumn 
                        title="Company"
                        links={[
                            "About Us", "Team", "Culture", "Careers", 
                            "Portfolio", "Contact", "Privacy Policy", "Terms of Service"
                        ]}
                    />

                </div>
                
                <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-muted-foreground">
                        © {new Date().getFullYear()} Infocera. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-muted-foreground">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Use</a>
                        <a href="#" className="hover:text-primary transition-colors">Sitemap</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

const FooterColumn = ({ title, links }: { title: string, links: string[] }) => {
    return (
        <div className="space-y-6">
            <h4 className="font-semibold text-foreground text-lg">{title}</h4>
            <ul className="space-y-3">
                {links.map((link) => (
                    <li key={link}>
                        <a 
                            href="#" 
                            className="text-sm text-muted-foreground hover:text-primary hover:translate-x-1 transition-all inline-block"
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
        <a href="#" className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-white hover:border-primary transition-all duration-300">
            <Icon className="w-5 h-5" />
        </a>
    )
}

export default Footer;
