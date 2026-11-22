"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function Stats() {
  return (
    <section className="relative overflow-hidden bg-transparent py-6 md:py-8 text-[#0F172A]">
      <div className="container relative z-10 mx-auto grid grid-cols-2 gap-4 md:gap-6 px-4 text-center md:grid-cols-4 max-w-6xl">
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
          <AnimatedCounter end={5200000} format="compact" suffix="+" className="text-2xl font-extrabold tracking-tight md:text-3xl text-[#0D9488]" />
          <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]">Learners Enrolled</div>
        </div>
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
          <AnimatedCounter end={76000} format="compact" suffix="+" className="text-2xl font-extrabold tracking-tight md:text-3xl text-[#0D9488]" />
          <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]">Mock Tests</div>
        </div>
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
          <AnimatedCounter end={128} suffix="+" className="text-2xl font-extrabold tracking-tight md:text-3xl text-[#0D9488]" />
          <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]">Exam Streams</div>
        </div>
        <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 shadow-sm">
          <AnimatedCounter end={97} suffix="%" className="text-2xl font-extrabold tracking-tight md:text-3xl text-[#0D9488]" />
          <div className="mt-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]">Satisfaction Rate</div>
        </div>
      </div>
    </section>
  );
}
