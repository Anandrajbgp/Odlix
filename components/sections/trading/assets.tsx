"use client";

import { motion } from "framer-motion";

const assets = [
  "INDIAN INDEX FUTURES",
  "INDIAN INDEX OPTIONS",
  "STOCK OPTIONS",
  "STOCK FUTURES",
  "CRYPTO FUTURES",
  "FOREX FUTURES",
];

export function AssetShowcase() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0505] py-20">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#10b981]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#3b82f6]/15 blur-3xl" />
      <div className="container relative z-10 mx-auto overflow-hidden px-4">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 text-center text-xs font-black uppercase tracking-[0.24em] text-white/55"
        >
          Supported Live Segments
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {assets.map((a) => (
            <span
              key={a}
              className="rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-xs font-black tracking-wider text-white/90 md:text-sm"
            >
              {a}
            </span>
          ))}
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 md:grid-cols-3">
          {[
            "Step 1: Add funds from ₹100",
            "Step 2: Pick your segment",
            "Step 3: Place your first order",
          ].map((step) => (
            <div
              key={step}
              className="rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3 text-center text-xs font-black uppercase tracking-[0.14em] text-white/80"
            >
              {step}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
