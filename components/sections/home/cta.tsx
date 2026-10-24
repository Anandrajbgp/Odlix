"use client";

import { motion } from "framer-motion";
import { Globe } from "lucide-react";
import Link from "next/link";

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-32">
      <motion.div
         whileHover={{ scale: 0.98 }}
         className="relative p-16 md:p-32 rounded-[5rem] overflow-hidden group cursor-pointer shadow-2xl shadow-primary/10 border border-primary/5"
      >
        <div className="absolute inset-0 gradient-platform opacity-90 group-hover:opacity-100 transition-opacity" />
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-7xl lg:text-8xl font-black mb-10 tracking-tighter leading-[0.9] text-white">Create Your <br /> Odlix ID.</h2>
          <p className="text-lg md:text-2xl text-white/85 mb-14 font-bold max-w-2xl mx-auto leading-relaxed">
            Create your Odlix ID today and access all 6 platforms instantly.
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
