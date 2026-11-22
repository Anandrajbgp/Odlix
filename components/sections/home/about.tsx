"use client";

import React from "react";
import { CheckCircle2, ShieldCheck, Zap, Award, Sparkles } from "lucide-react";
import { AnimatedCounter } from "@/components/shared/animated-counter";

const Counter = ({ end, label, icon: Icon }: { end: number; label: string; icon: React.ComponentType<{ className?: string }> }) => {
  return (
    <div className="group relative overflow-hidden p-6 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 transition-all duration-300 shadow-sm">
      <div className="absolute top-3 right-3 p-2 rounded-xl bg-white/30 text-[#0f1d26] group-hover:scale-110 transition-transform">
        <Icon className="h-5 w-5 text-[#0f1d26]" />
      </div>
      <AnimatedCounter
        end={end}
        suffix="+"
        className="mb-1 block text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#0f1d26] via-[#0f1d26] to-[#0f1d26] md:text-5xl"
      />
      <div className="text-[#0f1d26]/80 font-black uppercase text-xs tracking-widest">{label}</div>
    </div>
  );
};

export function About() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 bg-transparent border-t border-white/40">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center relative z-10">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#00a3da] px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#0f1d26] mb-4">
                <ShieldCheck className="h-4 w-4 text-[#0f1d26]" />
                Trusted Multipurpose Ecosystem
              </div>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-black mb-4 leading-[1.08] tracking-tight text-[#0f1d26]">
                A World-Class <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3da] to-[#00f5c4]">
                  Digital Vision.
                </span>
              </h2>
              <p className="text-[#0f1d26]/85 text-sm md:text-base leading-relaxed mb-6 font-semibold">
                Odlix is designed to deliver enterprise-level service reliability.
                We seamlessly integrate learning, freelancing, mock test competitions, trading insights, applications, and commerce under one single secure login identity.
              </p>
              <div className="space-y-3">
                {[
                  "Verified Trust across all 8 connected platforms",
                  "Seamless 24/7 Dedicated Support & Grievance Response",
                  "Integrated Cashfree & Instant UPI Secure Payments"
                ].map((text) => (
                  <div key={text} className="flex items-center space-x-3 text-sm md:text-base font-black text-[#0f1d26]/80">
                    <div className="h-6 w-6 rounded-full bg-[#00a3da]/20 flex items-center justify-center shrink-0 text-[#0f1d26]">
                      <CheckCircle2 className="w-4 h-4" />
                    </div>
                    <span>{text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              <Counter end={25000} label="Total Users" icon={Sparkles} />
              <Counter end={1200} label="Verified Vendors" icon={ShieldCheck} />
              <Counter end={500} label="Premium Courses" icon={Award} />
              <Counter end={4} label="Years Innovation" icon={Zap} />
            </div>
          </div>
      </div>
    </section>
  );
}
