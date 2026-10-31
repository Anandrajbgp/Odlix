"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-slate-700/60 bg-transparent py-16 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto grid grid-cols-2 gap-8 px-4 text-center md:grid-cols-4 max-w-6xl">
        <div>
          <AnimatedCounter end={5200000} format="compact" suffix="+" className="text-3xl font-black tracking-tight md:text-5xl text-white" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">Learners</div>
        </div>
        <div>
          <AnimatedCounter end={76000} format="compact" suffix="+" className="text-3xl font-black tracking-tight md:text-5xl text-white" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">Mock Tests</div>
        </div>
        <div>
          <AnimatedCounter end={128} suffix="+" className="text-3xl font-black tracking-tight md:text-5xl text-white" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">Exam Streams</div>
        </div>
        <div>
          <AnimatedCounter end={97} suffix="%" className="text-3xl font-black tracking-tight md:text-5xl text-white" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-slate-300">Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
