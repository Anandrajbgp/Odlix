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
    <section className="relative overflow-hidden bg-transparent py-6 md:py-8 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-4 text-xs font-extrabold uppercase tracking-wider text-[#10B981]"
          >
            Supported Live Segments
          </motion.div>
          <div className="flex flex-wrap justify-center gap-3">
            {segments.map((s) => (
              <span
                key={s}
                className="rounded-full border border-[#10B981]/30 bg-[#ECFDF5] px-5 py-2.5 text-xs font-extrabold tracking-wider text-[#0F172A] transition-all hover:bg-white shadow-sm"
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
