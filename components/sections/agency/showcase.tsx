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
    <section className="relative overflow-hidden py-16 md:py-20 bg-slate-950 text-white border-b border-white/10">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-white md:text-5xl">
              Portfolio &amp; Client Proof
            </h2>
            <p className="mt-2 text-sm font-medium text-slate-300 md:text-base">
              Projects and real outcomes in one view.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white transition hover:bg-slate-800"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-xl border border-white/10 bg-slate-900 p-3 text-white transition hover:bg-slate-800"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 md:p-12 shadow-2xl">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
            {current.type === "project" ? "Project" : "Client Proof"}
          </p>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-white">{current.title}</h3>
          <p className="mt-1 text-base text-slate-300 font-medium">{current.subtitle}</p>
          <div className="mt-6 text-3xl font-black text-amber-400">{current.result}</div>
          <p className="mt-2 text-xs font-semibold text-slate-400">{current.note}</p>
        </div>

        <div className="mt-6 text-center text-xs font-bold text-slate-400">
          {index + 1} / {slides.length}
        </div>
      </div>
    </section>
  );
}
