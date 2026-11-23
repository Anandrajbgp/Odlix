"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Crown, IndianRupee, ArrowRight, Sparkles, Zap } from "lucide-react";

const steps = [
  {
    num: "01",
    key: "learn",
    title: "Learn",
    subtitle: "Build High-Income Skills",
    desc: "Master in-demand digital skills including video editing, graphic design, copywriting, and affiliate marketing.",
    icon: BrainCircuit,
  },
  {
    num: "02",
    key: "earn",
    title: "Earn",
    subtitle: "Monetize & Scale Cashflow",
    desc: "Earn up to 58% direct commissions, passive 2nd-level tier payouts, and launch freelancing revenue streams.",
    icon: IndianRupee,
  },
  {
    num: "03",
    key: "conquer",
    title: "Conquer",
    subtitle: "Build Long-Term Wealth",
    desc: "Establish brand authority, financial literacy, mutual fund compounding, and executive leadership.",
    icon: Crown,
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-12 md:py-16 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-10 md:mb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/30 text-[#6366F1] text-xs font-extrabold uppercase tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span>Structured Growth Framework</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            Odlix <span className="text-[#6366F1]">Growth Loop</span>
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs sm:text-sm font-semibold text-[#475569] md:text-base leading-relaxed">
            One clean, proven 3-stage system from skill building to digital income and long-term wealth.
          </p>
        </div>

        {/* Modern 3-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group relative rounded-3xl border border-[#E2E8F0] border-t-4 border-t-[#6366F1] bg-white p-7 sm:p-8 shadow-sm hover:border-[#6366F1] hover:shadow-lg transition-all flex flex-col justify-between overflow-hidden"
              >
                {/* Background Watermark Number */}
                <div className="absolute -right-3 -bottom-4 text-7xl font-black text-slate-100 select-none pointer-events-none group-hover:text-[#EEF2FF] transition-colors">
                  {step.num}
                </div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-13 h-13 rounded-2xl bg-[#EEF2FF] border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] shadow-sm group-hover:scale-110 transition-transform">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-black text-[#6366F1] bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#6366F1]/20">
                      STAGE {step.num}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0F172A] tracking-tight mb-1">{step.title}</h3>
                  <p className="text-xs font-extrabold uppercase tracking-wider text-[#6366F1] mb-3">{step.subtitle}</p>
                  <p className="text-xs font-semibold text-[#475569] leading-relaxed mb-6">{step.desc}</p>
                </div>

                <div className="relative z-10 pt-4 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-bold text-[#6366F1]">
                  <span>Explore Stage</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
