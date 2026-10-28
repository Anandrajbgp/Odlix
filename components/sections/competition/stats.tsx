"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

export function Stats() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-14">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto grid grid-cols-2 gap-8 px-4 text-center text-foreground md:grid-cols-4">
        <div>
          <AnimatedCounter end={5200000} format="compact" suffix="+" className="text-3xl font-black tracking-tight md:text-5xl" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/45">Learners</div>
        </div>
        <div>
          <AnimatedCounter end={76000} format="compact" suffix="+" className="text-3xl font-black tracking-tight md:text-5xl" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/45">Mock Tests</div>
        </div>
        <div>
          <AnimatedCounter end={128} suffix="+" className="text-3xl font-black tracking-tight md:text-5xl" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/45">Exam Streams</div>
        </div>
        <div>
          <AnimatedCounter end={97} suffix="%" className="text-3xl font-black tracking-tight md:text-5xl" />
          <div className="mt-2 text-[10px] font-black uppercase tracking-[0.18em] text-foreground/45">Satisfaction</div>
        </div>
      </div>
    </section>
  );
}
