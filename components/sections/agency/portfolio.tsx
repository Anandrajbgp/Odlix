"use client";

import { Globe, ShoppingBag, BarChart3, Smartphone } from "lucide-react";

const projects = [
  { name: "Vedanta Interiors", category: "Lead Generation Website + SEO", metric: "+212% Qualified Leads", timeline: "8 Weeks" },
  { name: "NexaKart Fashion", category: "Shopify Store Revamp + Ads Funnel", metric: "2.9x ROAS", timeline: "6 Weeks" },
  { name: "Finpilot Academy", category: "Course Platform + Automation", metric: "₹14.6L Launch Cycle", timeline: "10 Weeks" },
  { name: "QuickMeds Care", category: "Healthcare App UX + Dashboard", metric: "+64% Booking Completion", timeline: "7 Weeks" },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="relative overflow-hidden py-12 md:py-14 border-b border-border">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <h2 className="text-2xl font-black uppercase tracking-tight text-foreground md:text-4xl">Portfolio</h2>
        <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
          Real execution snapshots with measurable outcomes.
        </p>

        <div className="mt-8 divide-y divide-border">
          {projects.map((project) => (
            <div key={project.name} className="py-5">
              <div className="flex flex-col gap-1 md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-lg font-black tracking-tight text-foreground">{project.name}</h3>
                  <p className="text-sm text-muted-foreground">{project.category}</p>
                </div>
                <div className="text-sm font-black text-[var(--platform-accent)]">{project.metric}</div>
              </div>
              <p className="mt-1 text-xs text-muted-foreground">{project.timeline} delivery</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
