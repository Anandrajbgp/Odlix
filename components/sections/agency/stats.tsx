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
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 text-center">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white border border-[#E2E8F0] rounded-2xl p-5 shadow-sm">
              <AnimatedCounter
                end={stat.end}
                suffix="+"
                className="block text-3xl font-black tracking-tight text-[#D97706] md:text-5xl"
              />
              <p className="mt-2 text-xs font-black uppercase tracking-[0.2em] text-[#475569]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
