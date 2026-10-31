"use client";

import { motion, useReducedMotion } from "framer-motion";

export function Hero() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative pt-28 pb-14 md:pt-36 md:pb-20 lg:pt-40 lg:pb-24 flex flex-col items-center bg-transparent">
      {/* Background ambient lighting */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 h-96 w-[90%] max-w-6xl rounded-full bg-[#00d4ca]/10 blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-6xl">
        {/* Hero Banner Card */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          animate={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
          transition={shouldReduceMotion ? undefined : { duration: 0.6 }}
          className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-8 sm:p-12 md:p-16 text-[#0f1d26] shadow-[0_25px_70px_rgba(0,212,202,0.3)] border border-white/40"
        >
          {/* Diagonal Light Arc Overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.12)_40%,transparent_65%)] pointer-events-none" />

          <div className="relative z-10 max-w-4xl text-left">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tight leading-[1.04] text-[#0f1d26]">
              One Identity. Infinite Growth across the Digital Ecosystem.
            </h1>

            <p className="text-sm sm:text-base md:text-xl font-semibold text-[#0f1d26]/85 max-w-2xl leading-relaxed">
              Explore a powerful digital ecosystem designed for reliable experiences, seamless learning, trading, and unified access.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
