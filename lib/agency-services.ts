export type AgencyService = {
  slug: string;
  title: string;
  summary: string;
  description: string;
  highlights: string[];
  process: string[];
  deliverables: string[];
};

export const agencyServices: AgencyService[] = [
  {
    slug: "website-development",
    title: "Website Development",
    summary: "Fast, premium websites that convert visitors into clients.",
    description:
      "We design and build high-performance websites that combine brand positioning, conversion-focused UX, and technical reliability. From landing pages to full business websites, every build is optimized for speed, SEO, and measurable growth.",
    highlights: [
      "Conversion-first page architecture",
      "Mobile-first responsive design",
      "Technical SEO and performance optimization",
      "CMS and analytics integration",
    ],
    process: ["Discovery and scope", "Wireframe and visual design", "Development and QA", "Launch and optimization"],
    deliverables: ["Responsive website", "CMS setup", "SEO baseline", "Analytics and tracking"],
  },
  {
    slug: "app-development",
    title: "App Development",
    summary: "Smooth apps your users enjoy and trust every day.",
    description:
      "We build scalable mobile and web applications with clean UX, robust architecture, and release-ready workflows. Our focus is long-term maintainability and user retention.",
    highlights: [
      "Android and iOS ready experiences",
      "Scalable backend-ready architecture",
      "Performance and security best practices",
      "Release and iteration support",
    ],
    process: ["Product discovery", "UX flow and prototyping", "App development", "Testing and release"],
    deliverables: ["Production-ready app", "Admin/dashboard modules", "API integration", "Launch checklist"],
  },
  {
    slug: "video-production",
    title: "Video Production",
    summary: "High-impact videos that make your brand look powerful.",
    description:
      "We produce ad creatives, brand stories, and short-form videos designed for retention and response. Every edit is aligned with platform behavior and campaign goals.",
    highlights: [
      "Hook-first creative strategy",
      "Brand storytelling and ad creatives",
      "Platform-optimized formats",
      "Performance-driven iterations",
    ],
    process: ["Creative brief", "Script and storyboard", "Shoot and edit", "Optimization and delivery"],
    deliverables: ["Final video assets", "Multiple aspect ratios", "Captioned versions", "Campaign-ready exports"],
  },
  {
    slug: "graphic-design",
    title: "Graphic Design",
    summary: "Visual identity that makes your business look elite.",
    description:
      "We create consistent visual systems that elevate brand perception and improve campaign performance across social, web, and print touchpoints.",
    highlights: [
      "Brand kits and identity systems",
      "Social creatives for engagement",
      "Sales and marketing assets",
      "Consistent visual language",
    ],
    process: ["Brand audit", "Concept exploration", "Design execution", "Final handoff"],
    deliverables: ["Brand kit", "Social templates", "Marketing assets", "Usage guidelines"],
  },
  {
    slug: "digital-marketing",
    title: "Digital Marketing",
    summary: "Growth campaigns focused on leads, sales, and ROI.",
    description:
      "We plan and execute performance marketing with conversion tracking, funnel optimization, and weekly reporting. Campaigns are continuously optimized for business outcomes.",
    highlights: [
      "Performance ad strategy and execution",
      "Conversion tracking and attribution",
      "Funnel optimization",
      "Weekly reporting and insights",
    ],
    process: ["Audit and strategy", "Campaign setup", "Optimization cycles", "Reporting and scaling"],
    deliverables: ["Campaign plan", "Ad creatives support", "Tracking setup", "Performance reports"],
  },
];

export function serviceBySlug(slug: string) {
  return agencyServices.find((service) => service.slug === slug);
}
