"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Trophy } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-12 md:py-14">
      <div className="container relative z-10 mx-auto px-4 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto max-w-3xl text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl"
        >
          Practice smarter. Rank higher.
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mx-auto mt-4 max-w-2xl text-sm font-medium leading-relaxed text-foreground/70 md:text-base"
        >
          Full-length mock tests, section practice, and AI-guided improvement for competitive exams.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <Link
            href="#test-library"
            className="rounded-lg bg-foreground px-6 py-3 text-sm font-black uppercase tracking-wide text-background transition-all hover:opacity-90 active:scale-95"
          >
            Start Free Mock
          </Link>
          <Link
            href="#plans"
            className="rounded-lg border border-border px-6 py-3 text-sm font-black uppercase tracking-wide text-foreground/80 transition-all hover:bg-muted active:scale-95"
          >
            View Plans
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
