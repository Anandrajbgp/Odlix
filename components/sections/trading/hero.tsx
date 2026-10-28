"use client";

import { motion } from "framer-motion";
import { Smartphone, Monitor, Apple } from "lucide-react";

export function Hero() {
    return (
      <section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-8 text-foreground">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,#7CFC00,transparent_70%)] opacity-40" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-center gap-8 lg:flex-row lg:items-center lg:justify-center">
          <div className="max-w-2xl text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4 text-4xl font-black leading-[1.05] tracking-tight md:text-5xl text-center"
            >
              Trade in everything.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-6 max-w-lg text-base font-medium leading-relaxed text-slate-600 md:text-lg text-center"
            >
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center gap-2"
            >
              <button className="group flex items-center gap-2 rounded-xl border border-[#7CFC00]/40 bg-[#7CFC00]/10 px-3 py-2 text-xs font-black uppercase tracking-tight text-[#7CFC00] transition-all hover:bg-[#7CFC00]/20 active:scale-95">
                <Smartphone className="h-3.5 w-3.5" />
                <span>Download App</span>
              </button>
              <button className="group flex items-center gap-2 rounded-xl border border-[#7CFC00]/40 bg-[#7CFC00]/10 px-3 py-2 text-xs font-black uppercase tracking-tight text-[#7CFC00] transition-all hover:bg-[#7CFC00]/20 active:scale-95">
                <Monitor className="h-3.5 w-3.5" />
                <span>Download App</span>
              </button>
              <button className="group flex items-center gap-2 rounded-xl border border-[#7CFC00]/40 bg-[#7CFC00]/10 px-3 py-2 text-xs font-black uppercase tracking-tight text-[#7CFC00] transition-all hover:bg-[#7CFC00]/20 active:scale-95">
                <Apple className="h-3.5 w-3.5" />
                <span>Download App</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

