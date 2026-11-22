"use client";

import { motion } from "framer-motion";
import { MessageCircle, ArrowRight } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "917372891228";
const DEFAULT_MESSAGE =
  "Hi Odlix Team, I want a free consultation for my project. Please guide me on the next steps.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-28 pb-12 md:pt-36 md:pb-16 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 text-center max-w-5xl">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-3xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight text-[#0F172A] mb-6"
        >
          Crafting Digital Masterpieces that <span className="text-[#D97706]">Scale Your Vision.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mx-auto max-w-2xl text-base font-semibold leading-relaxed text-[#475569] md:text-lg mb-10"
        >
          End-to-end engineering, design, and product development handled by one elite enterprise team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-extrabold text-sm shadow-md hover:shadow-lg active:scale-95 transition-all cursor-pointer"
            style={{ backgroundColor: "#18181B", color: "#FFFFFF" }}
          >
            <MessageCircle className="h-5 w-5 text-[#D97706]" />
            <span style={{ color: "#FFFFFF" }}>Get Free Consultation</span>
          </a>

          <Link
            href="/agency#services"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full font-bold text-sm shadow-sm active:scale-95 transition-all hover:bg-slate-200 cursor-pointer"
            style={{ backgroundColor: "#F1F5F9", border: "1px solid #CBD5E1", color: "#0F172A" }}
          >
            <span style={{ color: "#0F172A" }}>Explore Services</span>
            <ArrowRight className="w-4 h-4 text-[#D97706]" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
