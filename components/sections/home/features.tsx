"use client";

import { Fingerprint, ShieldCheck, BarChart3, Zap } from "lucide-react";

const features = [
  {
    title: "Single Login (SSO)",
    desc: "One secure account to access every Odlix platform instantly without repeated sign-ins.",
    icon: <Fingerprint className="h-6 w-6 text-cyan-400" />,
    badge: "SSO Security",
    accent: "from-cyan-500/10 to-blue-500/10",
  },
  {
    title: "100% Verified Freelancers",
    desc: "Agency client projects are delivered by thoroughly vetted professional freelancers.",
    icon: <ShieldCheck className="h-6 w-6 text-emerald-400" />,
    badge: "Quality Assured",
    accent: "from-emerald-500/10 to-teal-500/10",
  },
  {
    title: "High-Converting Tracking",
    desc: "Affiliate tracking systems built for reliable attribution, transparency, and top conversions.",
    icon: <BarChart3 className="h-6 w-6 text-purple-400" />,
    badge: "Real-time Stats",
    accent: "from-purple-500/10 to-indigo-500/10",
  },
  {
    title: "Super-Fast Utility Apps",
    desc: "Lightweight, performance-first applications that load blazingly fast on all devices.",
    icon: <Zap className="h-6 w-6 text-amber-400" />,
    badge: "Ultra Performance",
    accent: "from-amber-500/10 to-orange-500/10",
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 bg-transparent border-t border-white/40">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-6xl">
        <span className="text-xs font-bold uppercase tracking-widest text-[#0f1d26] mb-2 block inline-flex items-center gap-2">
          Core Highlights
        </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f1d26] mb-10">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3da] to-[#00f5c4]">Odlix</span>
          </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 transition-all duration-300 text-left shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-white/50"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${f.accent} border border-white/30 flex items-center justify-center shadow-sm`}>
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/30 text-[#0f1d26]/70 border border-white/30">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 text-[#0f1d26]">
                  {f.title}
                </h3>
                <p className="text-[#0f1d26]/70 font-normal text-xs sm:text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
