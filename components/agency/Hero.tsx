"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Terminal } from "lucide-react";

export function AgencyHero() {
  return (
    <section className="relative w-full min-h-[85vh] flex flex-col items-center justify-center px-4 md:px-6 overflow-hidden bg-[#0A0A0A]">
      {/* Premium Cyber Yellow Radial Matrix Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] md:w-[700px] h-[300px] sm:h-[500px] bg-yellow-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-4xl text-center relative z-10 space-y-6 md:space-y-8">
        
        {/* Elite Indicator Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-yellow-500/20 bg-yellow-500/5 text-yellow-500 text-[11px] font-bold tracking-[0.2em] uppercase backdrop-blur-md"
        >
          <Terminal className="w-3.5 h-3.5 text-yellow-500" /> Oblivent Digital Engine
        </motion.div>

        {/* Dynamic Title Headers */}
        <div className="space-y-4">
          <motion.h1 
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 60, delay: 0.1 }}
            className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white tracking-tight leading-[1.05]"
          >
            Your Brand.<br /> Our Innovation.<br />
            <span className="text-yellow-500 shadow-yellow-500/20">
              Infinite Growth.
            </span>
          </motion.h1>
        </div>

        {/* Description Text Layer */}
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-neutral-400 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed font-normal"
        >
          We design, build & scale enterprise-grade architectural modules with cutting-edge digital ecosystems. Engineered for modern high-performance dominance.
        </motion.p>

        {/* CTA Action Control Blocks */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4"
        >
          <button className="w-full sm:w-auto px-8 py-4 bg-yellow-500 hover:bg-yellow-400 text-black font-black rounded-2xl transition-all shadow-[0_0_25px_rgba(234,179,8,0.25)] hover:shadow-[0_0_35px_rgba(234,179,8,0.4)] flex items-center justify-center gap-2 group text-sm md:text-base">
            Get Free Consultation 
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform stroke-[3]" />
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#111111] hover:bg-[#161616] text-white font-bold rounded-2xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all text-sm md:text-base">
            View Portfolio
          </button>
        </motion.div>
      </div>
    </section>
  );
}