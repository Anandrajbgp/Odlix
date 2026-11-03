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
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-400 border border-slate-800 mb-3">
            <Compass className="h-4 w-4 text-cyan-400" />
            Simple 3-Step Journey
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white">
            How <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-300">Odlix Works</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-normal mt-3 max-w-xl mx-auto">
            Experience the simplicity of one unified login for all your digital needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className={`group relative p-8 sm:p-10 rounded-3xl bg-slate-900/90 backdrop-blur-xl border ${step.border} transition-all duration-300 text-left shadow-xl flex flex-col justify-between hover:-translate-y-1 hover:border-cyan-500/50`}
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${step.accent} border border-slate-800 flex items-center justify-center shadow-md`}>
                      <Icon className="h-6 w-6 text-cyan-400" />
                    </div>
                    <span className="text-xl font-bold text-slate-500 font-mono">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold tracking-tight mb-3 text-white">
                    {step.title}
                  </h3>

                  <p className="text-slate-400 font-normal text-sm sm:text-base leading-relaxed">
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
