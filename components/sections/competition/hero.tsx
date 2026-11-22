"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-6 md:pt-32 md:pb-8 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0FDFA] border border-[#0D9488]/30 text-[#0D9488] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-4 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#0D9488]" />
          <span>AI-Guided Exam Prep & Mock Test Ecosystem</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-3xl sm:text-5xl md:text-6xl font-extrabold leading-tight tracking-tight text-[#0F172A] mb-4"
        >
          Practice Smarter. <span className="text-[#0D9488]">Rank Higher.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto max-w-2xl text-base font-medium leading-relaxed text-[#475569] md:text-lg mb-6"
        >
          Full-length mock tests, sectional practice, real exam time simulation, and AI-guided improvement for competitive exams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          {/* Primary Button - High contrast solid teal with pure white text */}
          <Link
            href="/competition/exams"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all hover:bg-[#0F766E]"
            style={{ backgroundColor: "#0D9488", color: "#FFFFFF" }}
          >
            <span style={{ color: "#FFFFFF" }}>Explore Latest Exams & Mocks</span>
            <ArrowRight className="w-4 h-4 text-white shrink-0" />
          </Link>

          {/* Secondary Button - Light gray with dark slate text */}
          <Link
            href="/competition/mock-tests"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all hover:bg-slate-200"
            style={{ backgroundColor: "#F1F5F9", border: "1px solid #CBD5E1", color: "#0F172A" }}
          >
            <span style={{ color: "#0F172A" }}>Free Mock Tests</span>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
