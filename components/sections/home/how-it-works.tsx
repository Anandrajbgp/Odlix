"use client";

import { motion } from "framer-motion";
import { UserPlus, Compass, Rocket } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create One Odlix Account",
    desc: "Register once using Single Sign-On (SSO) to get a unified digital identity for all connected platforms.",
    icon: UserPlus,
    accent: "from-cyan-500/20 to-blue-600/20",
    border: "border-cyan-500/40",
    glow: "shadow-[0_0_30px_rgba(6,182,212,0.25)]",
  },
  {
    number: "02",
    title: "Pick Your Ecosystem Engine",
    desc: "Switch effortlessly between E-Learning, Trading, Agency, Mart, Mock Tests, Apps, and Telegram Bots with zero re-logins.",
    icon: Compass,
    accent: "from-amber-500/20 to-orange-600/20",
    border: "border-amber-500/40",
    glow: "shadow-[0_0_30px_rgba(245,158,11,0.25)]",
  },
  {
    number: "03",
    title: "Grow, Trade & Scale",
    desc: "Track learning progress, manage agency orders, trade insights, and receive instant payouts under one unified dashboard.",
    icon: Rocket,
    accent: "from-emerald-500/20 to-teal-600/20",
    border: "border-emerald-500/40",
    glow: "shadow-[0_0_30px_rgba(16,185,129,0.25)]",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-3">
            <Compass className="h-4 w-4 text-cyan-300" />
            Simple 3-Step Journey
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">Odlix Works</span>
          </h2>
          <p className="text-slate-300 text-sm md:text-base font-semibold mt-3 max-w-xl mx-auto">
            Experience the simplicity of one unified login for all your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.12 }}
                viewport={{ once: true }}
                className={`group relative p-8 sm:p-10 rounded-[2.5rem] bg-slate-900/95 backdrop-blur-2xl border ${step.border} transition-all duration-300 text-left shadow-2xl flex flex-col justify-between hover:-translate-y-2 ${step.glow}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.accent} border border-slate-700 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}>
                      <Icon className="h-7 w-7 text-cyan-300" />
                    </div>
                    <span className="text-2xl font-black text-slate-500 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl md:text-2xl font-black tracking-tight mb-3 text-white group-hover:text-cyan-300 transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-slate-300 font-medium text-sm sm:text-base leading-relaxed">
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
