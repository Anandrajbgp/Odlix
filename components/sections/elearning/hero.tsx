"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-transparent text-white border-b border-white/10">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/30 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/25 blur-3xl" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 text-sm font-black uppercase mb-8 backdrop-blur-md"
        >
          <Zap className="w-4 h-4" />
          <span>Unified Skill Ecosystem</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] mb-5 md:mb-6 text-white">
          Learn Skills. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-teal-200 to-cyan-300">Earn Wealth.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-200 mb-0 font-semibold leading-relaxed">
          Transform your digital future with HD training, expert mentorship,
          and a high-paying skill-sharing income ecosystem.
        </p>
      </div>
    </section>
  );
}
