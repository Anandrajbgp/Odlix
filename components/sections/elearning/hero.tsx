"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Zap, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden bg-transparent text-[#0F172A]">
      <div className="container mx-auto px-4 relative z-10 text-center max-w-5xl">
        {/* Top Light Tint Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/30 text-[#6366F1] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-6 shadow-sm"
        >
          <Zap className="w-4 h-4 text-[#6366F1]" />
          <span>Unified Skill Ecosystem</span>
        </motion.div>

        {/* Hero Title */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-5 text-[#0F172A]">
          Learn Skills. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6366F1] to-indigo-600">
            Earn Wealth.
          </span>
        </h1>

        {/* Hero Description */}
        <p className="max-w-2xl mx-auto text-base sm:text-lg md:text-xl text-[#475569] mb-8 font-semibold leading-relaxed">
          Transform your digital future with HD training, expert mentorship, and a high-paying skill-sharing income ecosystem.
        </p>

        {/* Action Buttons - Both Primary and Secondary clearly styled */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="#packages"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#6366F1] hover:bg-[#4F46E5] text-white font-semibold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <span>Explore Skill Packages</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <Link
            href="/elearning/dashboard"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-200 font-semibold text-sm shadow-sm active:scale-95 transition-all"
          >
            <span>Student Dashboard</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
