"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, BarChart3, LayoutGrid, ShoppingBag, Globe, Send, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";

type PlatformItem = {
  Icon: LucideIcon;
  href: string;
  label: string;
  color: string;
  glow: string;
};

const platformIcons: PlatformItem[] = [
  { Icon: BookOpen, href: "/elearning", label: "E-Learning", color: "text-[#6366f1]", glow: "group-hover:shadow-[0_0_25px_rgba(99,102,241,0.35)]" },
  { Icon: ShoppingBag, href: "/mart", label: "Mart", color: "text-[#f97316]", glow: "group-hover:shadow-[0_0_25px_rgba(249,115,22,0.35)]" },
  { Icon: GraduationCap, href: "/competition", label: "Mock Tests", color: "text-[#0284c7]", glow: "group-hover:shadow-[0_0_25px_rgba(2,132,199,0.35)]" },
  { Icon: Briefcase, href: "/agency", label: "Agency", color: "text-[#eab308]", glow: "group-hover:shadow-[0_0_25px_rgba(234,179,8,0.35)]" },
  { Icon: BarChart3, href: "/trading", label: "Trading", color: "text-[#22c55e]", glow: "group-hover:shadow-[0_0_25px_rgba(34,197,94,0.35)]" },
  { Icon: LayoutGrid, href: "/apps", label: "App Store", color: "text-[#38bdf8]", glow: "group-hover:shadow-[0_0_25px_rgba(56,189,248,0.35)]" },
  { Icon: Globe, href: "/useful-websites", label: "Useful Websites", color: "text-[#14b8a6]", glow: "group-hover:shadow-[0_0_25px_rgba(20,184,166,0.35)]" },
  { Icon: Send, href: "/telegram-bots", label: "Telegram Bots", color: "text-[#3b82f6]", glow: "group-hover:shadow-[0_0_25px_rgba(59,130,246,0.35)]" }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 flex flex-col items-center bg-[#050b14]">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-[90%] max-w-6xl rounded-full bg-[#00d4ca]/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">

        {/* Hero Banner Card - matching exact design and fonts from reference image */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-8 sm:p-12 md:p-16 text-[#0f1d26] shadow-[0_25px_70px_rgba(0,212,202,0.3)] border border-white/40"
        >
          {/* Diagonal Light Arc Overlay - exact match to the YouTube banner image sheen */}
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.12)_40%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl text-left">
            {/* Tag line - matching "YouTube featured" */}
            <span className="text-[#0f1d26]/90 font-extrabold tracking-wider text-sm sm:text-base mb-3 block uppercase">
              Odlix Ecosystem featured
            </span>

            {/* Title - matching "Buy YouTube Premium prepaid plans with UPI" */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-4 tracking-tight leading-[1.04] text-[#0f1d26]">
              Buy, Learn, Trade & Grow with One Unified Identity
            </h1>

            {/* Subtext - matching "Terms apply. Cancel anytime" */}
            <p className="text-sm sm:text-base md:text-xl font-semibold text-[#0f1d26]/85 mb-8 max-w-2xl leading-relaxed">
              Explore 8 connected platforms designed for reliable digital experiences.
            </p>

            {/* Pill Action Buttons - matching "Get it now" pill button style */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-full bg-[#0f1d26]/15 backdrop-blur-md px-7 py-2.5 text-sm font-extrabold text-[#0f1d26] hover:bg-[#0f1d26]/25 border border-[#0f1d26]/20 shadow-sm active:scale-95 transition-all"
              >
                Get it now
              </Link>
              <Link
                href="#platforms"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f1d26] px-8 py-3 text-sm font-black text-white shadow-2xl hover:bg-[#182e3c] hover:scale-105 active:scale-95 transition-all"
              >
                Explore Platforms <ArrowRight className="h-4 w-4 text-cyan-300" />
              </Link>
            </div>
          </div>
        </motion.div>

        {/* 8 Connected Platforms Row */}
        <div id="platforms" className="mt-16 pt-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-sm font-black uppercase tracking-[0.25em] text-cyan-400">
              8 Connected Platforms
            </h3>
            <span className="text-xs font-bold text-slate-400 uppercase tracking-widest hidden sm:inline-block">
              One Login Access
            </span>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3.5">
            {platformIcons.map(({ Icon, href, label, color, glow }, i) => (
              <motion.div
                key={label}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 15 }}
                animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
                transition={shouldReduceMotion ? undefined : { duration: 0.4, delay: i * 0.04 }}
              >
                <Link
                  href={href}
                  className={`group flex flex-col items-center justify-center p-4 rounded-2xl bg-slate-900/80 border border-slate-800 hover:border-cyan-400/50 hover:bg-slate-900 transition-all duration-300 text-center h-full active:scale-95 shadow-md ${glow}`}
                >
                  <div className={`h-11 w-11 rounded-xl bg-slate-950 flex items-center justify-center ${color} group-hover:scale-110 transition-transform mb-2.5 border border-slate-800`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="text-xs font-bold text-slate-300 group-hover:text-white transition-colors">
                    {label}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
