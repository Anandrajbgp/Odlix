"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div
         whileHover={{ scale: 0.98 }}
         className="relative p-12 md:p-24 rounded-[3rem] md:rounded-[4rem] overflow-hidden group cursor-pointer shadow-2xl bg-slate-950/80 backdrop-blur-2xl border border-slate-700/80"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/40 via-[#f59e0b]/30 via-[#10b981]/30 to-[#0ea5e9]/40 opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#4f46e5]/25 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#10b981]/20 blur-3xl" />
        <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-[#24a1ee]/20 blur-3xl" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-white">Create Your <br /> Odlix ID.</h2>
          <p className="text-lg md:text-2xl text-white/85 mb-14 font-bold max-w-2xl mx-auto leading-relaxed">
            Create your Odlix ID today and access the digital ecosystem instantly.
          </p>
          <Link
            href="/signup"
            className="inline-block px-16 py-8 rounded-3xl bg-white text-[#001f3f] font-black text-2xl hover:scale-110 transition-transform shadow-[0_20px_80px_rgba(255,255,255,0.4)] uppercase tracking-tighter"
          >
            Sign Up for Free
          </Link>
        </div>
        <div className="absolute top-10 right-10 opacity-10 rotate-12 group-hover:rotate-45 transition-transform">
           <Globe className="w-64 h-64 text-white" />
        </div>
      </motion.div>
    </section>
  );
}
