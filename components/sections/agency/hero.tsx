"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "917372891228";
const DEFAULT_MESSAGE =
  "Hi Odlix Team, I want a free consultation for my project. Please guide me on the next steps.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent text-white border-b border-slate-700/60 pt-28 pb-16 md:pt-36 md:pb-20">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight text-white md:text-6xl mb-6"
        >
          Crafting Digital Masterpieces that <span className="text-amber-400">Scale Your Vision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mx-auto max-w-2xl text-base font-semibold leading-relaxed text-slate-200 md:text-lg mb-10"
        >
          End-to-end engineering, design, and product development handled by one elite enterprise team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-7 py-3.5 text-sm font-black uppercase tracking-wide text-slate-950 transition-transform hover:scale-105 active:scale-95 shadow-xl shadow-[#25D366]/20"
          >
            <MessageCircle className="h-5 w-5 fill-slate-950" />
            Get Free Consultation
          </a>
          <Link
            href="/agency#services"
            className="rounded-xl border border-amber-500/40 bg-amber-500/10 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-amber-300 transition-all hover:bg-amber-500/20 active:scale-95 shadow-lg shadow-amber-500/10"
          >
            Explore Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
