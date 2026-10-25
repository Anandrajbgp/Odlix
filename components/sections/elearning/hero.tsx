"use client";

import { motion } from "framer-motion";
import { Zap } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-20 pb-14 md:pt-24 md:pb-16 overflow-hidden bg-slate-950 text-white border-b border-white/10">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,#4f46e5,transparent_50%)] opacity-10" />
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(2,6,23,0.35),rgba(2,6,23,0.8))]" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-sm font-black uppercase mb-8"
        >
          <Zap className="w-4 h-4" />
          <span>Unified Skill Ecosystem</span>
        </motion.div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter leading-[0.92] mb-5 md:mb-6">
          Learn Skills. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-500 text-white">Earn Wealth.</span>
        </h1>
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-300 mb-0 font-medium leading-relaxed">
          Transform your digital future with HD training, expert mentorship,
          and a high-paying affiliate ecosystem.
        </p>
      </div>
    </section>
  );
}

