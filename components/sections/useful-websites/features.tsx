"use client";

import { Bookmark, RefreshCw, Smartphone, Zap, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { title: "One-Click Access", desc: "Open any website directly without typing long URLs.", icon: <Zap className="h-5 w-5 text-[#0284C7]" /> },
  { title: "Verified Sites", desc: "Every website is manually checked for safety and quality.", icon: <ShieldCheck className="h-5 w-5 text-[#0284C7]" /> },
  { title: "Bookmark Support", desc: "Save your favorite websites for quick access anytime.", icon: <Bookmark className="h-5 w-5 text-[#0284C7]" /> },
  { title: "Mobile Friendly", desc: "All websites work perfectly on mobile phones and tablets.", icon: <Smartphone className="h-5 w-5 text-[#0284C7]" /> },
  { title: "Instant Sync", desc: "Your saved sites sync across all your devices instantly.", icon: <RefreshCw className="h-5 w-5 text-[#0284C7]" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F0F9FF] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0284C7] border border-[#0284C7]/30 shadow-sm mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#0284C7]" />
            Why Choose Odlix Useful Websites
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            The Ultimate <span className="text-[#0284C7]">Website Directory</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Handpicked websites for productivity, learning, design, and daily tools — all in one clean directory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-center shadow-sm hover:border-[#0284C7]/50 hover:bg-white transition-all">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#0284C7]/30 bg-[#F0F9FF] shadow-sm">
                {f.icon}
              </div>
              <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">{f.title}</h4>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
