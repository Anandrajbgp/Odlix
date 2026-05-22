"use client";

import { motion } from "framer-motion";
import { Sparkles, Terminal, ShieldCheck, Zap, Globe } from "lucide-react";

const STATS_MATRIX = [
  {
    icon: Zap,
    label: "ACTIVE LEARNERS",
    value: "14,200+",
    desc: "Unlocking real potential daily.",
    color: "group-hover:text-cyan-400"
  },
  {
    icon: ShieldCheck,
    label: "SUCCESS MATRIX",
    value: "94.8%",
    desc: "Conquering freelance & trading nodes.",
    color: "group-hover:text-teal-400"
  },
  {
    icon: Globe,
    label: "STUDENT REVENUE",
    value: "₹2.4Cr+",
    desc: "Generated through applied skill loops.",
    color: "group-hover:text-blue-400"
  }
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#010204] pt-28 pb-16 px-4 font-sans">
      
      {/* Advanced Geometric Grid & Cyber Ambient Lighting */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[350px] bg-gradient-to-b from-cyan-500/[0.08] via-blue-500/[0.02] to-transparent blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-teal-500/[0.01] blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center flex-grow justify-center">
        
        {/* Dynamic Glowing Cyber Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: -10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="relative group mb-8"
        >
          <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-md opacity-50 group-hover:opacity-100 transition-opacity duration-500" />
          <span className="relative inline-flex items-center gap-2 px-4 py-1.5 text-xs font-bold border rounded-full border-cyan-500/30 bg-black/60 text-cyan-300 font-mono tracking-widest uppercase backdrop-blur-md">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400 animate-spin-slow" />
            Unleash Your True Potential
          </span>
        </motion.div>

        {/* Cinematic Main Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
          className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-200 to-neutral-500 mb-6 leading-[1.1]"
        >
          Learn The Ultimate Skills. <br />
          <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500 bg-clip-text drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
            Conquer Every Single Field.
          </span>
        </motion.h1>

        {/* High-Concept Contextual Copy */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
        >
          Stop limiting your capabilities. Transform from a passive learner into an absolute master by 
          commanding the core engineering, marketing, and analytical skills required to build real-world dominance 
          across our interconnected ecosystem nodes.
        </motion.p>

        {/* Real-Time Live System Analytics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full max-w-4xl mt-auto">
          {STATS_MATRIX.map((stat, idx) => {
            const StatIcon = stat.icon;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.25 + idx * 0.08 }}
                className="relative bg-neutral-950/40 border border-white/[0.03] hover:border-cyan-500/30 rounded-2xl p-5 text-left group backdrop-blur-xl transition-all duration-300 hover:shadow-[0_15px_30px_-10px_rgba(6,182,212,0.05)]"
              >
                {/* Micro Top Accent Glow */}
                <div className="absolute top-0 left-6 right-6 h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:via-cyan-400/40 transition-all duration-500" />
                
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-white/[0.02] border border-white/5 text-neutral-500 group-hover:bg-cyan-500/10 transition-all duration-300 group-hover:border-cyan-500/20">
                    <StatIcon className={`w-4 h-4 transition-colors duration-300 ${stat.color}`} />
                  </div>
                  <span className="text-[10px] font-mono tracking-widest text-neutral-500 group-hover:text-neutral-400 transition-colors font-bold uppercase">
                    // {stat.label}
                  </span>
                </div>
                
                <div className="text-2xl font-black font-mono text-white tracking-tight mb-0.5">
                  {stat.value}
                </div>
                <p className="text-[11px] text-neutral-500 font-medium leading-normal">
                  {stat.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}