import { useRef } from "react";
import { ArrowUpRight, Clock, Hash, Calendar } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { getTechIconUrl } from "../../lib/utils";

gsap.registerPlugin(ScrollTrigger);

const insights = [
    {
        category: "Technology",
        date: "17 June 2025",
        title: "Logistics for Leaders: Smart Strategies For Vehicle Relocation",
        excerpt: "For business leaders and fleet managers, vehicle relocation is a recurring challenge that requires business intelligence...",
        tags: ["Logistics", "Vehicle", "Strategy"],
        image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=800&auto=format",
        featured: true
    },
    {
        category: "Software",
        date: "12 June 2025",
        title: "The Automation Testing Roadmap",
        excerpt: "Key things to know about automation software testing courses and industry demand...",
        tags: ["QA", "Automation"],
        image: "https://images.unsplash.com/photo-1516116216624-53e697fedbea?q=80&w=800&auto=format",
        featured: false
    },
    {
        category: "Web 3.0",
        date: "05 June 2025",
        title: "Future of Web Development",
        excerpt: "Exploring the rise of AI-driven development and Edge Computing in modern apps...",
        tags: ["Web", "AI", "Edge"],
        image: "https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800&auto=format",
        featured: false
    }
];

const Insights = () => {
    const featuredRef = useRef(null);
    const listRef = useRef(null);

    useGSAP(() => {
        // Featured Article Animation
        gsap.fromTo(featuredRef.current, 
            { opacity: 0, y: 30 },
            { opacity: 1, y: 0, duration: 1, ease: "power3.out", scrollTrigger: { trigger: featuredRef.current, start: "top 80%" } }
        );

        // List Items Animation (Staggered)
        if (listRef.current) {
            gsap.fromTo((listRef.current as any).children,
                { opacity: 0, x: 30 },
                { opacity: 1, x: 0, duration: 0.8, stagger: 0.2, ease: "power3.out", scrollTrigger: { trigger: listRef.current, start: "top 85%" } }
            );
        }
    }, []);

    return (
        <section className="relative py-24 bg-[#fafafa] dark:bg-[#080808] overflow-hidden">
            {/* Background Text - Aesthetic only */}
            <div className="absolute top-10 -left-10 text-[15rem] font-bold text-black/[0.02] dark:text-white/[0.02] select-none pointer-events-none">
                JOURNAL
            </div>

            <div className="container mx-auto px-6 relative z-10">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-2 text-primary font-mono text-xs mb-4 tracking-widest uppercase">
                            <span className="w-8 h-px bg-primary" />
                            Expert Perspectives
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black tracking-tighter text-foreground">
                            Latest <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-blue-500">Insights.</span>
                        </h2>
                    </div>
                    <button className="group flex items-center gap-3 text-sm font-bold uppercase tracking-tighter border-b-2 border-primary pb-1 hover:text-primary transition-colors">
                        View Editorial Feed <ArrowUpRight className="w-4 h-4 group-hover:-translate-y-1 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>

                {/* Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* --- FEATURED ARTICLE (Left) --- */}
                    <div
                        ref={featuredRef}
                        className="lg:col-span-7 group cursor-pointer"
                    >
                        <div className="relative aspect-[16/10] overflow-hidden rounded-[2rem] mb-8 shadow-2xl">
                            <img
                                src={insights[0].image}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                alt="Featured"
                            />
                            <div className="absolute top-6 left-6 flex gap-2">
                                <span className="px-4 py-1.5 bg-white/90 dark:bg-black/90 backdrop-blur-md rounded-full text-[10px] font-bold uppercase tracking-wider text-foreground">
                                    {insights[0].category}
                                </span>
                            </div>
                        </div>
                        <div className="space-y-4 px-2">
                            <div className="flex items-center gap-4 text-muted-foreground text-sm font-mono">
                                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {insights[0].date}</span>
                                <span className="flex items-center gap-1"><Clock className="w-4 h-4" /> 5 min read</span>
                            </div>
                            <h3 className="text-2xl md:text-5xl font-bold leading-tight group-hover:text-primary transition-colors cursor-pointer">
                                {insights[0].title}
                            </h3>
                            <p className="text-muted-foreground text-lg max-w-xl">
                                {insights[0].excerpt}
                            </p>
                        </div>
                    </div>

                    {/* --- SMALLER ARTICLES (Right) --- */}
                    <div ref={listRef} className="lg:col-span-5 flex flex-col gap-12">
                        {insights.slice(1).map((item, idx) => (
                            <div
                                key={idx}
                                className="group flex flex-col md:flex-row gap-6 cursor-pointer"
                            >
                                <div className="md:w-40 md:h-40 shrink-0 overflow-hidden rounded-2xl">
                                    <img
                                        src={item.image}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                        alt="Insight"
                                    />
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-center gap-2 text-[10px] font-bold text-primary uppercase tracking-tighter">
                                        <Hash className="w-3 h-3" /> {item.category}
                                    </div>
                                    <h4 className="text-xl font-bold group-hover:text-primary transition-colors">
                                        {item.title}
                                    </h4>
                                    <p className="text-sm text-muted-foreground line-clamp-2">
                                        {item.excerpt}
                                    </p>
                                    <div className="pt-2 flex gap-2">
                                        {item.tags.map(tag => (
                                            <span key={tag} className="flex items-center gap-1.5 text-[10px] text-muted-foreground bg-secondary px-2 py-0.5 rounded">
                                                 <img 
                                                    src={getTechIconUrl(tag)} 
                                                    alt={tag} 
                                                    className="w-3 h-3 opacity-50 invert dark:invert-0" 
                                                    loading="lazy"
                                                />
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}

                        {/* Newsletter Mini-Card (Note: This is now outside listRef, but visually below it. If we want it animated, we should add it to listRef or separate ref) */}
                         <div className="mt-auto p-8 rounded-[2rem] bg-primary text-primary-foreground relative overflow-hidden">
                            <div className="relative z-10">
                                <h4 className="text-2xl font-bold mb-2">Subscribe to News</h4>
                                <p className="text-sm opacity-80 mb-6">Get weekly tech insights directly.</p>
                                <div className="flex gap-2">
                                    <input
                                        type="text"
                                        placeholder="Email address"
                                        className="bg-white/10 border border-white/20 rounded-lg p-2 md:px-4 text-sm flex-1 placeholder:text-muted-foreground focus:outline-none"
                                    />
                                    <button className="bg-black text-muted-foreground p-2 rounded-lg hover:bg-black hover:text-primary transition-colors">
                                        <ArrowUpRight className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-3xl" />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Insights;