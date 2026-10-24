"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const Counter = ({ end, label }: { end: number; label: string }) => {
  return (
    <div className="text-center">
      <AnimatedCounter
        end={end}
        suffix="+"
        className="mb-2 block text-3xl font-black text-foreground md:text-5xl"
      />
      <div className="text-foreground/40 font-bold uppercase text-xs tracking-widest">{label}</div>
    </div>
  );
};

export function About() {
  return (
    <section className="py-20 md:py-24 bg-muted/20 border-y border-border text-foreground">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center">
           <div>
              <h2 className="text-4xl md:text-7xl font-black mb-8 leading-none">A World-Class <br /> Digital Vision.</h2>
              <p className="text-muted-foreground text-xl leading-relaxed mb-12">
                 Odlix is not just a website; it's a premium SaaS-level multipurpose ecosystem
                 designed to compete with the world's best. We bridge the gap between
                 learning, building, and earning.
              </p>
              <div className="space-y-6">
                 {[
                   "Verified Trust across all 6 platforms",
                   "Seamless 24/7 Premium Support",
                   "Integrated Cashfree secure payments"
                 ].map(text => (
                   <div key={text} className="flex items-center space-x-3 text-lg font-bold">
                      <CheckCircle2 className="text-magenta-500 w-6 h-6" />
                      <span>{text}</span>
                   </div>
                 ))}
              </div>
           </div>
           <div className="grid grid-cols-2 gap-8 text-foreground">
              <Counter end={25000} label="Total Users" />
              <Counter end={1200} label="Verified Vendors" />
              <Counter end={500} label="Premium Courses" />
              <Counter end={4} label="Years of Innovation" />
           </div>
        </div>

      </div>
    </section>
  );
}
