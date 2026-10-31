"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-slate-700/60 bg-transparent pt-32 pb-16 md:pt-40 md:pb-24 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-4xl font-black leading-tight tracking-tight text-white md:text-6xl mb-6"
        >
          Practice smarter. Rank higher.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base font-semibold leading-relaxed text-slate-200 md:text-lg mb-10"
        >
          Full-length mock tests, section practice, and AI-guided improvement for competitive exams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="/competition/exams"
            className="rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-8 py-4 text-sm font-black uppercase tracking-wide text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-xl shadow-sky-500/30"
          >
            Explore Popular &amp; Latest Vacancy
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
