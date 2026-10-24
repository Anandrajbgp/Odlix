"use client";

import type { ReactNode } from "react";
import { ShieldCheck, Users, BookOpenCheck, TrendingUp } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";

type StatItem = {
  label: string;
  value: number;
  suffix: string;
  icon: ReactNode;
};

const stats: StatItem[] = [
  {
    label: "Active Learners",
    value: 25000,
    suffix: "+",
    icon: <Users className="h-5 w-5" />,
  },
  {
    label: "Course Modules",
    value: 420,
    suffix: "+",
    icon: <BookOpenCheck className="h-5 w-5" />,
  },
  {
    label: "Placement & Internship Wins",
    value: 3200,
    suffix: "+",
    icon: <TrendingUp className="h-5 w-5" />,
  },
  {
    label: "Verified Certificates Issued",
    value: 18000,
    suffix: "+",
    icon: <ShieldCheck className="h-5 w-5" />,
  },
];

export function Stats() {
  return (
    <section className="py-12 md:py-14 border-b border-border bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-7 md:mb-8 text-foreground">
          <p className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-cyan-700 dark:text-cyan-400">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust Signals
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight">
            Real Learner Momentum.
          </h2>
          <p className="mt-3 text-sm md:text-base text-muted-foreground font-medium">
            Transparent outcomes that help new students trust the platform quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-border bg-card p-5 md:p-6 shadow-sm"
            >
              <div className="mb-4 inline-flex rounded-xl bg-cyan-500/10 p-2 text-cyan-700 dark:text-cyan-400">
                {item.icon}
              </div>
              <AnimatedCounter
                end={item.value}
                suffix={item.suffix}
                format="compact"
                className="block text-2xl md:text-3xl font-black tracking-tight text-foreground"
              />
              <p className="mt-2 text-xs md:text-sm font-semibold text-muted-foreground">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
