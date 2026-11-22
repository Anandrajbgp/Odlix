"use client";

import { motion } from "framer-motion";
import { UserPlus, Compass, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create One Odlix Account",
    desc: "Register once using Single Sign-On (SSO) to get a unified digital identity for all connected platforms.",
    icon: UserPlus,
    accent: "from-indigo-500/10 to-cyan-500/10",
    border: "border-slate-800",
  },
  {
    number: "02",
    title: "Pick Your Ecosystem Engine",
    desc: "Switch effortlessly between E-Learning, Trading, Agency, Mart, Mock Tests, Apps, and Telegram Bots with zero re-logins.",
    icon: Compass,
    accent: "from-amber-500/10 to-orange-500/10",
    border: "border-slate-800",
  },
  {
    number: "03",
    title: "Grow, Trade & Scale",
    desc: "Track learning progress, manage agency orders, trade insights, and receive instant payouts under one unified dashboard.",
    icon: Rocket,
    accent: "from-emerald-500/10 to-teal-500/10",
    border: "border-slate-800",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-10 md:py-16 bg-transparent border-t border-white/40">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-8 md:mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#00a3da] px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#0f1d26] mb-3">
            <Compass className="h-3.5 w-3.5 text-[#0f1d26]" />
            Simple 3-Step Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-[#0f1d26] break-words">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00a3da] to-[#00f5c4]">Odlix Works</span>
          </h2>
          <p className="text-[#0f1d26]/85 text-xs sm:text-sm md:text-base font-normal mt-2 max-w-xl mx-auto">
            Experience the simplicity of one unified login for all your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-5 sm:p-6 rounded-2xl bg-white/40 backdrop-blur-sm border border-white/40 transition-all duration-300 text-left shadow-sm flex flex-col justify-between hover:-translate-y-1 hover:border-[#00f5c4]/50 overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${step.accent} border border-white/40 flex items-center justify-center shadow-sm`}>
                      <Icon className="h-5 w-5 text-[#0f1d26]" />
                    </div>
                    <span className="text-base sm:text-lg font-bold text-[#0f1d26]/70 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-base sm:text-lg font-bold tracking-tight mb-2 text-[#0f1d26] break-words">
                    {step.title}
                  </h3>

                  <p className="text-[#0f1d26]/70 font-normal text-xs sm:text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
