"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

const stats = [
  { end: 250, label: "Projects Delivered" },
  { end: 120, label: "Happy Clients" },
  { end: 5, label: "Years Experience" },
  { end: 24, label: "Support" },
];

export function AgencyStats() {
  return (
    <section className="relative overflow-hidden py-12 md:py-14 bg-background border-y border-border">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((stat) => (
            <div key={stat.label}>
              <AnimatedCounter
                end={stat.end}
                suffix="+"
                className="block text-3xl font-black tracking-tight text-foreground md:text-4xl"
              />
              <p className="mt-2 text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
