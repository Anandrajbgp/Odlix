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
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-6xl">
        <div className="mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400 mb-2 block">
            Core Highlights
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Odlix</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((f, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border border-slate-800 transition-all duration-300 text-left shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:border-cyan-500/50"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${f.accent} border border-slate-800 flex items-center justify-center shadow-md`}>
                    {f.icon}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-slate-950 text-slate-300 border border-slate-800">
                    {f.badge}
                  </span>
                </div>
                <h3 className="text-lg font-bold tracking-tight mb-2 text-white">
                  {f.title}
                </h3>
                <p className="text-slate-400 font-normal text-sm leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
