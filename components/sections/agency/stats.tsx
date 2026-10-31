"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { end: 250, label: "Projects Delivered" },
  { end: 120, label: "Happy Clients" },
  { end: 5, label: "Years Experience" },
  { end: 24, label: "24/7 Support" },
];

export function AgencyStats() {
  return (
    <section className="relative overflow-hidden py-16 bg-slate-950 text-white border-y border-white/10">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                end={stat.end}
                suffix="+"
                className="block text-3xl font-black tracking-tight text-amber-400 md:text-5xl"
              />
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-slate-400">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
