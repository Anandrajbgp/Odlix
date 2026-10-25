"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const slides = [
  { type: "project", title: "Vedanta Interiors", subtitle: "Lead Generation Website + SEO", result: "+212% Qualified Leads", note: "8 weeks delivery" },
  { type: "proof", title: "Rohit Gupta", subtitle: "Founder, Vedanta Interiors", result: "+212% Qualified Leads in 60 days", note: "B2B Lead Generation Website" },
  { type: "project", title: "NexaKart Fashion", subtitle: "Shopify Store Revamp + Ads Funnel", result: "2.9x ROAS", note: "6 weeks delivery" },
  { type: "proof", title: "Niharika Jain", subtitle: "Co-Founder, NexaKart Fashion", result: "2.9x ROAS with +176% revenue growth", note: "D2C Store Revamp + Ads" },
  { type: "project", title: "Finpilot Academy", subtitle: "Course Platform + Automation", result: "₹14.6L Launch Cycle", note: "10 weeks delivery" },
  { type: "proof", title: "Aman Verma", subtitle: "Director, Finpilot Academy", result: "₹14.6L launch cycle in first campaign", note: "Course Platform + Automation" },
];

export function AgencyShowcase() {
  const [index, setIndex] = useState(0);
  const current = slides[index];

  const prev = () => setIndex((i) => (i > 0 ? i - 1 : slides.length - 1));
  const next = () => setIndex((i) => (i < slides.length - 1 ? i + 1 : 0));

  return (
    <section className="py-12 md:py-14 border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between gap-4">
          <div>
            <h2 className="text-2xl font-black uppercase tracking-tight text-foreground md:text-4xl">
              Portfolio & Client Proof
            </h2>
            <p className="mt-2 text-sm font-medium text-muted-foreground md:text-base">
              Projects and real outcomes in one view.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-lg border border-border p-2 text-foreground transition hover:bg-muted"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-lg border border-border p-2 text-foreground transition hover:bg-muted"
              aria-label="Next slide"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="mt-8 rounded-xl border border-border bg-card p-6 md:p-8">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--platform-accent)]">
            {current.type === "project" ? "Project" : "Client Proof"}
          </p>
          <h3 className="mt-3 text-2xl font-black tracking-tight text-foreground">{current.title}</h3>
          <p className="mt-1 text-sm text-muted-foreground">{current.subtitle}</p>
          <div className="mt-6 text-xl font-black text-[var(--platform-accent)]">{current.result}</div>
          <p className="mt-2 text-xs text-muted-foreground">{current.note}</p>
        </div>

        <div className="mt-4 text-center text-xs text-muted-foreground">
          {index + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
