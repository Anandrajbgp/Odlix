"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Apple } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-16 pt-28 md:pt-36 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-center">
          <div className="max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl text-center text-[#0F172A]"
            >
              Trade in everything.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-3 mt-6"
            >
              <button
                type="button"
                className="group flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#ECFDF5] px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-[#0F172A] transition-all hover:bg-slate-200 cursor-pointer shadow-sm"
              >
                <Smartphone className="h-4 w-4 text-[#10B981]" />
                <span>Download App</span>
              </button>
              <button
                type="button"
                className="group flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#ECFDF5] px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-[#0F172A] transition-all hover:bg-slate-200 cursor-pointer shadow-sm"
              >
                <Monitor className="h-4 w-4 text-[#10B981]" />
                <span>Download App</span>
              </button>
              <button
                type="button"
                className="group flex items-center gap-2 rounded-full border border-[#10B981]/40 bg-[#ECFDF5] px-4 py-2.5 text-xs font-bold uppercase tracking-tight text-[#0F172A] transition-all hover:bg-slate-200 cursor-pointer shadow-sm"
              >
                <Apple className="h-4 w-4 text-[#10B981]" />
                <span>Download App</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
