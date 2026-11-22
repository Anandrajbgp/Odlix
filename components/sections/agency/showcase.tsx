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
    <section className="relative overflow-hidden bg-transparent py-10 md:py-16 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-3xl font-black uppercase tracking-tight text-[#0F172A] md:text-5xl">
              Portfolio &amp; Client Proof
            </h2>
            <p className="mt-2 text-sm font-medium text-[#475569] md:text-base">
              Projects and real outcomes in one view.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={prev}
              className="rounded-xl border border-[#E2E8F0] bg-white p-3 text-[#0F172A] transition hover:bg-slate-100 shadow-sm cursor-pointer"
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={next}
              className="rounded-xl border border-[#E2E8F0] bg-white p-3 text-[#0F172A] transition hover:bg-slate-100 shadow-sm cursor-pointer"
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 md:p-12 shadow-sm">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#D97706]">
            {current.type === "project" ? "Project" : "Client Proof"}
          </p>
          <h3 className="mt-3 text-3xl font-black tracking-tight text-[#0F172A]">{current.title}</h3>
          <p className="mt-1 text-xs font-semibold text-[#475569]">{current.subtitle}</p>

          <div className="mt-4 inline-block rounded-xl border border-[#D97706]/30 bg-[#FEF3C7] px-4 py-2 text-base font-black text-[#18181B]">
            {current.result}
          </div>
          <p className="mt-2 text-xs font-bold text-[#475569]">{current.note}</p>
        </div>
      </div>
    </section>
  );
}
