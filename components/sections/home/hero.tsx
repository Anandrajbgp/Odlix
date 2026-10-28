"use client";

import { motion, useReducedMotion } from "framer-motion";
import { BookOpen, Briefcase, GraduationCap, BarChart3, LayoutGrid, ShoppingBag, Globe, Send, type LucideIcon } from "lucide-react";
import Link from "next/link";

const platformIcons: Array<{ Icon: LucideIcon; color: string; href: string; label: string }> = [
  { Icon: BookOpen, color: "text-[#4f46e5]", href: "/elearning", label: "E-Learning" },
  { Icon: ShoppingBag, color: "text-white", href: "/mart", label: "Mart" },
  { Icon: GraduationCap, color: "text-[#2563eb]", href: "/competition", label: "Mock Tests" },
  { Icon: Briefcase, color: "text-[#1e3a8a]", href: "/agency", label: "Agency" },
  { Icon: BarChart3, color: "text-[#7CFC00]", href: "/trading", label: "Trading" },
  { Icon: LayoutGrid, color: "text-[#2563eb]", href: "/apps", label: "App Store" },
  { Icon: Globe, color: "text-[#14b8a6]", href: "/apps", label: "Useful Websites" },
  { Icon: Send, color: "text-[#24a1ee]", href: "/apps", label: "Telegram Bots" }
];

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-12 md:pt-36 md:pb-16 lg:pt-40 lg:pb-20 flex flex-col items-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#f59e0b,transparent_60%)] opacity-25 dark:opacity-40" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#4f46e5]/20 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-[#24a1ee]/15 blur-3xl" />

      <motion.div
        initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
        animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={shouldReduceMotion ? undefined : { duration: 0.8 }}
        className="container mx-auto px-4 relative z-10"
      >
        <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-8 md:mb-12 tracking-tight leading-[0.95] text-foreground">
          One Account. <br />
          <span className="gradient-text from-[#f59e0b] via-[#06b6d4] to-[#4f46e5]">
            Infinite Solutions.
          </span>
        </h1>
        <p className="max-w-3xl mx-auto text-base sm:text-lg md:text-2xl text-muted-foreground mb-12 md:mb-16 leading-relaxed font-medium">
          Discover a unified digital ecosystem designed to help you learn, build, trade, and grow.
        </p>

        <div className="flex flex-wrap justify-center gap-8 sm:gap-10 opacity-70 dark:opacity-80">
          {platformIcons.map(({ Icon, color, href, label }, i) => (
            <motion.div
              key={label}
              animate={shouldReduceMotion ? undefined : { y: [0, -8, 0] }}
              transition={shouldReduceMotion ? undefined : { duration: 3, repeat: Infinity, delay: i * 0.4 }}
            >
              <Link href={href} aria-label={label} className="block hover:opacity-100 transition-opacity focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-md">
                <Icon className={`h-9 w-9 sm:h-10 sm:w-10 ${color}`} />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

