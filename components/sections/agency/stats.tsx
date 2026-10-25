"use client";

import { AnimatedCounter } from "@/components/shared/animated-counter";

const Counter = ({ end, label }: { end: number; label: string }) => {
  return (
    <div className="text-center">
      <AnimatedCounter
        end={end}
        suffix="+"
        className="mb-2 block text-3xl font-black tracking-tighter text-foreground md:text-5xl"
      />
      <div className="text-foreground/40 font-bold uppercase text-[10px] tracking-[0.2em]">{label}</div>
    </div>
  );
};

export function AgencyStats() {
  return (
    <section className="py-14 md:py-16 bg-background border-y border-border">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <Counter end={250} label="Projects Delivered" />
          <Counter end={120} label="Happy Clients" />
          <Counter end={5} label="Years Experience" />
          <Counter end={24} label="24/7 Support" />
        </div>
      </div>
    </section>
  );
}
