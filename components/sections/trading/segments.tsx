"use client";

import { motion } from "framer-motion";

const segments = [
  "INDIAN INDEX FUTURES",
  "INDIAN INDEX OPTIONS",
  "STOCK OPTIONS",
  "STOCK FUTURES",
  "CRYPTO FUTURES",
  "FOREX FUTURES",
];

export function Segments() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-xs font-black uppercase tracking-[0.24em] text-slate-300"
          >
            Supported Live Segments
          </motion.div>
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#7CFC00]/30 bg-[#7CFC00]/15 px-5 py-3 text-xs font-black tracking-wider text-white md:text-sm transition-all hover:border-[#7CFC00]/50 hover:bg-[#7CFC00]/25 active:scale-95"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
