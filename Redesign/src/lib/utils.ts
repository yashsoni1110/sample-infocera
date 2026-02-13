import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const getTechIconUrl = (tech: string) => {
    const slug = tech.toLowerCase().replace(/\./g, '').replace(/\s+/g, '');
    const map: Record<string, string> = {
        "nextjs": "nextdotjs",
        "reactnative": "react",
        "nodejs": "nodedotjs",
        "d3js": "d3",
        "aws": "amazonaws",
        "googlecloud": "googlecloud",
        "azure": "microsoftazure",
        "jenkins": "jenkins",
        "docker": "docker",
        "kubernetes": "kubernetes",
        "postgresql": "postgresql",
        "mongodb": "mongodb",
        "redis": "redis",
        "go": "go",
        "mqtt": "mqtt",
        "shopifyplus": "shopify",
        "clickhouse": "clickhouse",
        "apache": "apache",
        "tomcat": "apachetomcat",
        "nginx": "nginx",
        "iis": "microsoft", // approximations
        "jest": "jest",
        "selenium": "selenium",
        "git": "git",
        "travisci": "travisci",
        "mocha": "mocha",
        "caddy": "caddy",
        "lighttpd": "lighttpd",
        "logistics": "dhl", // conceptual fallback or just generic
        "vehicle": "tesla", // conceptual
        "strategy": "chessdotcom", // conceptual
        "qa": "selenium",
        "automation": "robotframework",
        "web": "w3c",
        "ai": "openai",
        "edge": "cloudflare",
        "technology": "cpu" // fallback generic? No, better key specific
    };
    return `https://cdn.simpleicons.org/${map[slug] || slug}`;
};
