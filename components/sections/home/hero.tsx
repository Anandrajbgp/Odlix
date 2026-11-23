"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, Sparkles, Layers, ShieldCheck, Zap } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 flex flex-col items-center bg-white text-[#0F172A] overflow-hidden">
      {/* Background Subtle Ambient Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[320px] bg-[#EFF6FF]/70 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        {/* Top Ecosystem Pill Badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EFF6FF] border border-[#2563EB]/30 text-[#2563EB] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-[#2563EB]" />
          <span>Next-Gen Integrated Digital Platform</span>
        </motion.div>

        {/* High-Impact Visible Hero Title */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.12] mb-6"
        >
          One Identity. <span className="text-[#2563EB]">Infinite Growth.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-base sm:text-lg md:text-xl font-semibold text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Master high-income skills, trade global markets, shop smart technology, and scale digital products — all with a single unified account.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-extrabold text-sm sm:text-base shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer group"
            style={{ backgroundColor: "#2563EB", color: "#FFFFFF" }}
          >
            <span style={{ color: "#FFFFFF" }}>Get Started Free</span>
            <ArrowRight className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-200 font-bold text-sm sm:text-base shadow-sm active:scale-95 transition-all cursor-pointer"
            style={{ backgroundColor: "#F1F5F9", color: "#0F172A" }}
          >
            <span style={{ color: "#0F172A" }}>Learn About Odlix</span>
          </Link>
        </motion.div>

        {/* Feature Ticker Pills */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-6 text-xs sm:text-sm font-bold text-[#475569]"
        >
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
            <Layers className="w-4 h-4 text-[#2563EB]" />
            <span>8 Unified Platforms</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
            <ShieldCheck className="w-4 h-4 text-[#2563EB]" />
            <span>Single SSO Login</span>
          </div>
          <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-[#F8FAFC] border border-[#E2E8F0] shadow-sm">
            <Zap className="w-4 h-4 text-[#2563EB]" />
            <span>Instant Access</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
