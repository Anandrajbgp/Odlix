"use client";

import { Bookmark, RefreshCw, Moon, Smartphone, Zap, ShieldCheck, Sparkles } from "lucide-react";

const features = [
  { title: "One-Click Access", desc: "Open any website directly without typing long URLs.", icon: <Zap className="h-5 w-5" /> },
  { title: "Verified Sites", desc: "Every website is manually checked for safety and quality.", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Bookmark Support", desc: "Save your favorite websites for quick access anytime.", icon: <Bookmark className="h-5 w-5" /> },
  { title: "Mobile Friendly", desc: "All websites work perfectly on mobile phones and tablets.", icon: <Smartphone className="h-5 w-5" /> },
  { title: "Instant Sync", desc: "Your saved sites sync across all your devices instantly.", icon: <RefreshCw className="h-5 w-5" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-transparent py-16 md:py-24 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#a855f7]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#c084fc]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c084fc]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#c084fc] border border-[#c084fc]/40 backdrop-blur-md mb-3">
            <Sparkles className="h-4 w-4 text-[#c084fc]" />
            Why Choose Odlix Useful Websites
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#c084fc]">Website Directory</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Handpicked websites for productivity, learning, design, and daily tools — all in one clean directory.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-transparent p-6 text-center shadow-xl transition-all hover:bg-white/10 hover:border-[#a855f7]/50">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/10 text-[#a855f7] shadow-md">
                {f.icon}
              </div>
              <h4 className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-white">{f.title}</h4>
              <p className="text-xs font-semibold text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
