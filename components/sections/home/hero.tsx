"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, ShoppingBag, BookOpen, BarChart3, Sparkles } from "lucide-react";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-16 md:pt-36 md:pb-24 flex flex-col items-center bg-transparent overflow-hidden">
      <div className="container mx-auto px-4 relative z-10 max-w-5xl text-center">
        {/* Top Ecosystem Pill Badge */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: -10 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 text-xs sm:text-sm font-semibold mb-6 shadow-sm"
        >
          <Sparkles className="w-4 h-4 text-blue-600" />
          <span>World-Class Integrated Digital Ecosystem</span>
        </motion.div>

        {/* Hero Main Heading */}
        <motion.h1
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.1 }}
          className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] max-w-4xl mx-auto leading-[1.15] mb-5"
        >
          One Identity. Infinite Growth across the <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">Digital Ecosystem</span>.
        </motion.h1>

        {/* Hero Sub-description */}
        <motion.p
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.2 }}
          className="text-sm sm:text-base md:text-lg font-medium text-[#475569] max-w-2xl mx-auto leading-relaxed mb-8"
        >
          Experience integrated e-learning, smart e-commerce, professional trading, and enterprise agency services with a single unified account.
        </motion.p>

        {/* Action Buttons - Both Primary and Secondary clearly styled */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/signup"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-semibold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all"
          >
            <span>Get Started Free</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            href="/about"
            className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-full bg-[#F1F5F9] border border-[#CBD5E1] text-[#0F172A] hover:bg-slate-200 font-semibold text-sm shadow-sm active:scale-95 transition-all"
          >
            <span>Learn About Odlix</span>
          </Link>
        </motion.div>

        {/* Feature Cards Grid */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left"
        >
          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm hover:border-blue-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 text-blue-600">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Odlix Mart</h3>
              <p className="text-xs text-[#475569] leading-relaxed">Smart gadgets, creator kits, and lifestyle products.</p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm hover:border-indigo-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 flex items-center justify-center shrink-0 text-indigo-600">
              <BookOpen className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Odlix eLearning</h3>
              <p className="text-xs text-[#475569] leading-relaxed">Interactive courses, mentorship, and certifications.</p>
            </div>
          </div>

          <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-2xl p-4 sm:p-5 flex items-start gap-3.5 shadow-sm hover:border-emerald-300 transition-colors">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0 text-emerald-600">
              <BarChart3 className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#0F172A] mb-1">Odlix Trading</h3>
              <p className="text-xs text-[#475569] leading-relaxed">Portfolio analytics and trading workflows.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
