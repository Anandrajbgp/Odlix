"use client";

import { Fingerprint, ShieldCheck, BarChart3, Zap } from "lucide-react";

const features = [
  {
    title: "Single Login (SSO)",
    desc: "One secure account to access every Odlix platform instantly without repeated sign-ins.",
    icon: <Fingerprint className="h-7 w-7 text-cyan-400" />,
    badge: "SSO Security",
    accent: "from-cyan-500/20 to-blue-600/20",
    border: "border-cyan-500/30 group-hover:border-cyan-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(6,182,212,0.25)]"
  },
  {
    title: "100% Verified Freelancers",
    desc: "Agency client projects are delivered by thoroughly vetted professional freelancers.",
    icon: <ShieldCheck className="h-7 w-7 text-emerald-400" />,
    badge: "Quality Assured",
    accent: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-500/30 group-hover:border-emerald-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(16,185,129,0.25)]"
  },
  {
    title: "High-Converting Tracking",
    desc: "Affiliate tracking systems built for reliable attribution, transparency, and top conversions.",
    icon: <BarChart3 className="h-7 w-7 text-purple-400" />,
    badge: "Real-time Stats",
    accent: "from-purple-500/20 to-indigo-600/20",
    border: "border-purple-500/30 group-hover:border-purple-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(168,85,247,0.25)]"
  },
  {
    title: "Super-Fast Utility Apps",
    desc: "Lightweight, performance-first applications that load blazingly fast on all devices.",
    icon: <Zap className="h-7 w-7 text-amber-400" />,
    badge: "Ultra Performance",
    accent: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/30 group-hover:border-amber-400",
    glow: "group-hover:shadow-[0_0_30px_rgba(245,158,11,0.25)]"
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-black uppercase tracking-[0.25em] text-cyan-400 mb-3 block">
            Core Highlights
          </span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300">Odlix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className={`group relative p-8 rounded-[2rem] bg-slate-900/15 backdrop-blur-md border border-slate-700/60 transition-all duration-300 text-left shadow-xl flex flex-col justify-between ${f.glow} hover:-translate-y-1.5 hover:bg-slate-900/35 hover:border-cyan-400`}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${f.accent} border border-slate-700/60 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full bg-slate-900/40 text-slate-200 border border-slate-700/50 backdrop-blur-md">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-xl font-black tracking-tight mb-3 text-white group-hover:text-cyan-300 transition-colors">
                  {f.title}
                </h3>
                <p className="text-slate-200 font-semibold text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
