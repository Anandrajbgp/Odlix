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
    <section className="relative overflow-hidden py-16 md:py-20 border-b border-white/10 bg-transparent text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10 md:mb-12 text-white">
          <p className="inline-flex items-center gap-2 rounded-full border border-indigo-500/30 bg-indigo-500/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-indigo-300 backdrop-blur-md">
            <ShieldCheck className="h-3.5 w-3.5" />
            Trust Signals
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-white">
            Real Learner Momentum.
          </h2>
          <p className="mt-3 text-sm md:text-base text-slate-200 font-semibold">
            Transparent outcomes that help new students trust the platform quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <article
              key={item.label}
              className="rounded-2xl border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-5 md:p-6 shadow-xl"
            >
              <div className="mb-4 inline-flex rounded-xl bg-indigo-500/20 p-2 text-indigo-300">
                {item.icon}
              </div>
              <AnimatedCounter
                end={item.value}
                suffix={item.suffix}
                format="compact"
                className="block text-2xl md:text-3xl font-black tracking-tight text-white"
              />
              <p className="mt-2 text-xs md:text-sm font-semibold text-slate-200">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
