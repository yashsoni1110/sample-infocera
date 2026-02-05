/**
 * COMPREHENSIVE DATA CONFIGURATION
 * All services organized by category with icons
 */

import {
  Briefcase, Code, Smartphone, ShoppingCart, GraduationCap,
  Heart, Building, Gem, Users, Globe, Laptop, Hospital, School
} from "lucide-react";
export const SERVICES_DATA = [
  {
    category: "Software Products",
    icon: <Laptop className="w-4 h-4" />,
    items: [
      { name: "HR & Payroll Management", icon: <Users className="w-3.5 h-3.5" />, href: "/services/hr-payroll" },
      { name: "Jewellery Software", icon: <Gem className="w-3.5 h-3.5" />, href: "/services/jewellery" },
      { name: "CRM Software", icon: <Users className="w-3.5 h-3.5" />, href: "/services/crm" },
      { name: "Real Estate Solutions", icon: <Building className="w-3.5 h-3.5" />, href: "/services/real-estate" },
      { name: "Inventory Management", icon: <ShoppingCart className="w-3.5 h-3.5" />, href: "/services/inventory" },
      { name: "Hospital Management", icon: <Hospital className="w-3.5 h-3.5" />, href: "/services/hospital" },
      { name: "School Management", icon: <School className="w-3.5 h-3.5" />, href: "/services/school" },
    ],
  },
  {
    category: "Web & Development",
    icon: <Code className="w-4 h-4" />,
    items: [
      { name: "Website Design", icon: <Globe className="w-3.5 h-3.5" />, href: "/services/web-design" },
      { name: "Web Development", icon: <Code className="w-3.5 h-3.5" />, href: "/services/web-dev" },
      { name: "CRM Development", icon: <Briefcase className="w-3.5 h-3.5" />, href: "/services/crm-dev" },
      { name: "Software Development", icon: <Laptop className="w-3.5 h-3.5" />, href: "/services/software-dev" },
      { name: "Educational Portals", icon: <GraduationCap className="w-3.5 h-3.5" />, href: "/services/edu-portals" },
      { name: "Health Care Portals", icon: <Heart className="w-3.5 h-3.5" />, href: "/services/healthcare-portals" },
      { name: "E-commerce Solutions", icon: <ShoppingCart className="w-3.5 h-3.5" />, href: "/services/ecommerce" },
    ],
  },
  {
    category: "Mobile Solutions",
    icon: <Smartphone className="w-4 h-4" />,
    items: [
      { name: "iOS Development", icon: <Smartphone className="w-3.5 h-3.5" />, href: "/services/ios" },
      { name: "Android Development", icon: <Smartphone className="w-3.5 h-3.5" />, href: "/services/android" },
      { name: "Cross-Platform Apps", icon: <Smartphone className="w-3.5 h-3.5" />, href: "/services/cross-platform" },
      { name: "Progressive Web Apps", icon: <Globe className="w-3.5 h-3.5" />, href: "/services/pwa" },
    ],
  },
];

export const ADDITIONAL_LINKS = [
  {
    name: "Industries",
    href: "#",
    subLinks: [
      { name: "Healthcare", href: "/industries/healthcare" },
      { name: "Education", href: "/industries/education" },
      { name: "Real Estate", href: "/industries/real-estate" },
      { name: "Retail & E-commerce", href: "/industries/retail" },
      { name: "Manufacturing", href: "/industries/manufacturing" },
      { name: "Finance", href: "/industries/finance" },
    ]
  },
  {
    name: "Technologies",
    href: "#",
    subLinks: [
      { name: "React & Next.js", href: "/tech/react" },
      { name: "Node.js & Express", href: "/tech/nodejs" },
      { name: "Python & Django", href: "/tech/python" },
      { name: "Mobile (React Native)", href: "/tech/mobile" },
      { name: "Cloud & DevOps", href: "/tech/cloud" },
      { name: "AI & Machine Learning", href: "/tech/ai" },
    ]
  },
  {
    name: "Resources",
    href: "#",
    subLinks: [
      { name: "Blog", href: "/blog" },
      { name: "Case Studies", href: "/case-studies" },
      { name: "White Papers", href: "/whitepapers" },
      { name: "Documentation", href: "/docs" },
      { name: "FAQ", href: "/faq" },
    ]
  },
];

/**
 * Premium Logo Component with Enhanced Animation
 */
export const Logo = () => (
  <a href="/" className="flex items-center gap-2.5 group cursor-pointer z-10">
    <div className="relative w-10 h-10 bg-gradient-to-br from-primary to-primary/80 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110 group-hover:rotate-[360deg] shadow-lg shadow-primary/25">
      <span className="text-primary-foreground font-bold text-xl">I</span>
      <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
    </div>
    <div className="flex flex-col leading-none">
      <span className="text-xl font-bold tracking-tight text-foreground">
        INFO<span className="text-primary">CERA</span>
      </span>
      <span className="text-[9px] text-muted-foreground tracking-[0.15em] uppercase font-semibold">
        Seamless Connections
      </span>
    </div>
  </a>
);
