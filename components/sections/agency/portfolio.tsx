"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, Globe, ShoppingBag, Smartphone } from "lucide-react";
import Link from "next/link";

const projects = [
  {
    name: "Vedanta Interiors",
    category: "Lead Generation Website + SEO",
    summary:
      "Rebuilt local business website with high-intent landing pages, fast mobile performance, and local SEO structure.",
    metric1: "+212% Qualified Leads",
    metric2: "3.8x Organic Traffic",
    timeline: "8 Weeks Delivery",
    stack: "Next.js • Technical SEO • Conversion CRO",
    icon: Globe,
  },
  {
    name: "NexaKart Fashion",
    category: "Shopify Store Revamp + Ads Funnel",
    summary:
      "Complete D2C storefront redesign with product storytelling, trust badges, and ad-ready conversion funnel pages.",
    metric1: "+176% Revenue Growth",
    metric2: "2.9x ROAS",
    timeline: "6 Weeks Delivery",
    stack: "Shopify • Meta Ads • Landing Funnels",
    icon: ShoppingBag,
  },
  {
    name: "Finpilot Academy",
    category: "Course Platform + Automation",
    summary:
      "Built course launch architecture with payment automation, onboarding flow, and WhatsApp nurture journey.",
    metric1: "₹14.6L Launch Cycle",
    metric2: "41% Better Retention",
    timeline: "10 Weeks Delivery",
    stack: "LMS Stack • Email/WA Automation • Analytics",
    icon: BarChart3,
  },
  {
    name: "QuickMeds Care",
    category: "Healthcare App UX + Dashboard",
    summary:
      "Redesigned patient booking journey and admin dashboard with accessibility-first UI and reduced friction touchpoints.",
    metric1: "-38% Drop-off",
    metric2: "+64% Booking Completion",
    timeline: "7 Weeks Delivery",
    stack: "Product UX • Dashboard UI • Growth Analytics",
    icon: Smartphone,
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="bg-background py-20 md:py-24 text-foreground border-b border-border">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col justify-between gap-5 text-foreground md:mb-12 md:flex-row md:items-end">
          <div>
            <h2 className="mb-3 text-4xl font-black uppercase leading-none tracking-tighter md:text-6xl">Portfolio.</h2>
            <p className="max-w-2xl text-sm font-medium text-muted-foreground md:text-base">
              Real execution snapshots with measurable outcomes that build trust.
            </p>
          </div>
          <Link
            href="/agency#testimonials"
            className="flex items-center text-sm font-black uppercase tracking-wide text-[var(--platform-primary)] transition hover:underline active:scale-95"
          >
            Client Proof <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:gap-6 text-foreground">
          {projects.map((project) => {
            const Icon = project.icon;

            return (
              <motion.article
                key={project.name}
                whileHover={{ y: -5 }}
                className="group rounded-3xl border border-border bg-card p-5 shadow-sm transition-colors hover:border-[var(--platform-accent)]/40 md:p-6"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--platform-accent)]">{project.category}</p>
                    <h3 className="mt-2 text-2xl font-black tracking-tight text-foreground">{project.name}</h3>
                  </div>
                  <div className="rounded-xl border border-border bg-background p-2 text-[var(--platform-accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                </div>

                <p className="text-sm font-medium leading-relaxed text-muted-foreground">{project.summary}</p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-border/80 bg-background/70 p-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">Outcome 01</p>
                    <p className="mt-1 text-sm font-black text-foreground">{project.metric1}</p>
                  </div>
                  <div className="rounded-xl border border-border/80 bg-background/70 p-3">
                    <p className="text-[10px] font-black uppercase tracking-[0.16em] text-muted-foreground">Outcome 02</p>
                    <p className="mt-1 text-sm font-black text-foreground">{project.metric2}</p>
                  </div>
                </div>

                <div className="mt-4 flex flex-wrap items-center justify-between gap-2 border-t border-border pt-4">
                  <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-muted-foreground">{project.timeline}</p>
                  <p className="text-[11px] font-semibold text-muted-foreground">{project.stack}</p>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
