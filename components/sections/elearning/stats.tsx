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
    icon: <Users className="h-5 w-5 text-[#6366F1]" />,
  },
  {
    label: "Course Modules",
    value: 420,
    suffix: "+",
    icon: <BookOpenCheck className="h-5 w-5 text-[#6366F1]" />,
  },
  {
    label: "Placement & Internship Wins",
    value: 3200,
    suffix: "+",
    icon: <TrendingUp className="h-5 w-5 text-[#6366F1]" />,
  },
  {
    label: "Verified Certificates Issued",
    value: 18000,
    suffix: "+",
    icon: <ShieldCheck className="h-5 w-5 text-[#6366F1]" />,
  },
];

export function Stats() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <p className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-[#EEF2FF] px-4 py-1.5 text-[11px] font-bold uppercase tracking-widest text-[#6366F1] shadow-sm">
            <ShieldCheck className="h-3.5 w-3.5 text-[#6366F1]" />
            Trust Signals
          </p>
          <h2 className="mt-4 text-3xl md:text-5xl font-black tracking-tight text-[#0F172A]">
            Real Learner Momentum.
          </h2>
          <p className="mt-3 text-sm md:text-base text-[#475569] font-semibold">
            Transparent outcomes that help new students trust the platform quickly.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((item) => (
            <div
              key={item.label}
              className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-5 md:p-6 text-center shadow-sm hover:border-[#6366F1]/40 transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-[#EEF2FF] flex items-center justify-center mx-auto mb-3">
                {item.icon}
              </div>
              <div className="text-2xl md:text-3xl font-extrabold text-[#0F172A]">
                <AnimatedCounter end={item.value} />
                <span>{item.suffix}</span>
              </div>
              <p className="text-xs md:text-sm font-bold text-[#475569] mt-1">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
