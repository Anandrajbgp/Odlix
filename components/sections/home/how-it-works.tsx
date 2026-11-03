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
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3.5 py-1.5 text-[10px] sm:text-xs font-bold uppercase tracking-widest text-cyan-400 border border-slate-800 mb-3">
            <Compass className="h-3.5 w-3.5 text-cyan-400" />
            Simple 3-Step Journey
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-extrabold tracking-tight text-white break-words">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Odlix Works</span>
          </h2>
          <p className="text-slate-400 text-xs sm:text-sm md:text-base font-normal mt-3 max-w-xl mx-auto">
            Experience the simplicity of one unified login for all your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-6 sm:p-8 rounded-3xl bg-slate-900/90 backdrop-blur-xl border ${step.border} transition-all duration-300 text-left shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:border-cyan-500/50 overflow-hidden`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} border border-slate-800 flex items-center justify-center shadow-md`}>
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className="text-lg sm:text-xl font-bold text-slate-500 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold tracking-tight mb-3 text-white break-words">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 font-normal text-xs sm:text-sm leading-relaxed">
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
