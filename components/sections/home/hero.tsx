"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, BookOpen, Briefcase, GraduationCap, BarChart3, LayoutGrid, ShoppingBag, type LucideIcon } from "lucide-react";
import Link from "next/link";

const platformIcons: Array<{ Icon: LucideIcon; color: string }> = [
  { Icon: BookOpen, color: "text-[#32FF00]" },
  { Icon: Briefcase, color: "text-[#00F5FF]" },
  { Icon: GraduationCap, color: "text-[#FF1493]" },
  { Icon: BarChart3, color: "text-[#FF5F1F]" },
  { Icon: LayoutGrid, color: "text-[#FF1E1E]" },
  { Icon: ShoppingBag, color: "text-white" }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-16 pb-16 md:pt-20 md:pb-20 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#DFFF00,transparent_60%)] opacity-25 dark:opacity-40" />

        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
          className="container mx-auto px-4 relative z-10"
        >
        <motion.div
           initial={shouldReduceMotion ? false : { scale: 0.95, opacity: 0 }}
           animate={shouldReduceMotion ? undefined : { scale: 1, opacity: 1 }}
           className="inline-flex items-center space-x-2 px-4 py-2 mb-8 text-xs sm:text-sm font-black tracking-[0.2em] uppercase border border-border bg-background/80 dark:border-white/10 dark:bg-white/5 rounded-full backdrop-blur-md text-foreground"
        >
          <div className="w-2 h-2 rounded-full bg-[#DFFF00] animate-pulse" />
          <span>Unified Digital Ecosystem</span>
        </motion.div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tight leading-[0.95] text-foreground">
          One Account. <br />
          <span className="gradient-text from-[#DFFF00] via-[#00F5FF] to-[#FF1493]">
            Infinite Life.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-muted-foreground mb-12 md:mb-16 leading-relaxed font-medium">
          Explore 6 premium platforms built to empower your education,
          career, investments, and digital lifestyle.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16 md:mb-24">
          <Link
            href="/signup"
            className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl bg-primary text-primary-foreground font-black text-base sm:text-lg flex items-center group transition-all hover:scale-105 shadow-xl shadow-primary/20 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            Get Started
            <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="#platforms"
            className="px-8 sm:px-10 py-4 sm:py-5 rounded-2xl border border-border font-black text-base sm:text-lg hover:bg-muted transition-all backdrop-blur-sm active:scale-95 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            View Ecosystem
          </Link>
        </div>

         <div className="flex flex-wrap justify-center gap-8 sm:gap-10 opacity-70 dark:opacity-80" aria-hidden="true">
           {platformIcons.map(({ Icon, color }, i) => (
             <motion.div
               key={i}
               animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
               transition={shouldReduceMotion ? undefined : { duration: 3, repeat: Infinity, delay: i * 0.4 }}
             >
               <Icon className={`h-9 w-9 sm:h-10 sm:w-10 ${color}`} />
             </motion.div>
           ))}
        </div>
      </motion.div>
    </section>
  );
}
