"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Award, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: React.ComponentType<{ className?: string }> }) => {
  return (
    <div className="group relative overflow-hidden p-6 rounded-2xl bg-slate-900/25 backdrop-blur-md border border-slate-700/60 hover:border-cyan-400 hover:bg-slate-900/45 transition-all duration-300 shadow-xl">
      <div className="absolute top-3 right-3 p-2 rounded-xl bg-cyan-500/15 text-cyan-300 group-hover:scale-110 transition-transform">
        <Icon className="h-5 w-5" />
      </div>
      <AnimatedCounter
        end={end}
        suffix="+"
        className="mb-1 block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300 md:text-5xl"
      />
      <div className="text-slate-200 font-black uppercase text-xs tracking-widest">{label}</div>
    </div>
  );
};

export function About() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        {/* Creative Dark Glass Section Container with Glowing Electric Border */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-slate-900/15 backdrop-blur-xl p-8 sm:p-12 md:p-16 border border-slate-700/60 shadow-2xl">
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-teal-500/10 blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-6">
                <ShieldCheck className="h-4 w-4 text-cyan-300" />
                Trusted Multipurpose Ecosystem
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-6 leading-[1.08] tracking-tight text-white">
                A World-Class <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">
                  Digital Vision.
                </span>
              </h2>
              <p className="text-slate-100 text-base md:text-lg leading-relaxed mb-8 font-semibold">
                Odlix is designed to deliver enterprise-level service reliability.
                We seamlessly integrate learning, freelancing, mock test competitions, trading insights, applications, and commerce under one single secure login identity.
              </p>
              <div className="space-y-4">
                {[
                  "Verified Trust across all 8 connected platforms",
                  "Seamless 24/7 Dedicated Support & Grievance Response",
                  "Integrated Cashfree & Instant UPI Secure Payments"
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-3 text-sm md:text-base font-black text-slate-100">
                    <div className="h-6 w-6 rounded-full bg-cyan-500/20 flex items-center justify-center shrink-0 text-cyan-300">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              <Counter end={25000} label="Total Users" icon={Sparkles} />
              <Counter end={1200} label="Verified Vendors" icon={ShieldCheck} />
              <Counter end={500} label="Premium Courses" icon={Award} />
              <Counter end={4} label="Years Innovation" icon={Zap} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
