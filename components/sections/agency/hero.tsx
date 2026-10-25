"use client";

import { motion } from "framer-motion";
import { MessageCircle, Sparkles } from "lucide-react";
import Link from "next/link";

const WHATSAPP_NUMBER = "917372891228";
const DEFAULT_MESSAGE =
  "Hi Odlix Team, I want a free consultation for my project. Please guide me on the next steps.";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background pt-12 pb-14 md:pt-16 md:pb-16">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-4xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
        >
          We turn ideas into digital products that grow your business.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.12 }}
          className="mx-auto mt-4 mb-8 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground md:text-base"
        >
          Strategy, design, development, and growth — handled end-to-end by one reliable team.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 flex flex-wrap items-center justify-center gap-2"
        >
          {["Brand", "Website", "Growth"].map((item) => (
            <span
              key={item}
              className="inline-flex items-center gap-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-muted-foreground"
            >
              <Sparkles className="h-3.5 w-3.5 text-[var(--platform-accent)]" />
              {item}
            </span>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.28 }}
          className="flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-base font-black text-white transition-transform hover:scale-105 active:scale-95"
          >
            <MessageCircle className="h-5 w-5" />
            Get Free Consultation
          </a>
          <Link
            href="/agency#services"
            className="rounded-lg border border-border px-6 py-3 text-base font-black text-foreground transition-all hover:bg-muted active:scale-95"
          >
            View Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
