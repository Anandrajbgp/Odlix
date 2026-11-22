"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Crown, IndianRupee } from "lucide-react";

const nodes = [
  {
    key: "learn",
    title: "Learn",
    subtitle: "Build Core Skills",
    icon: BrainCircuit,
    position: "left-1/2 top-8 -translate-x-1/2",
    delay: 0,
  },
  {
    key: "earn",
    title: "Earn",
    subtitle: "Monetize Smartly",
    icon: IndianRupee,
    position: "left-6 bottom-12 md:left-20 md:bottom-16",
    delay: 0.12,
  },
  {
    key: "conquer",
    title: "Conquer",
    subtitle: "Scale With Confidence",
    icon: Crown,
    position: "right-6 bottom-12 md:right-20 md:bottom-16",
    delay: 0.24,
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-black tracking-tight md:text-5xl text-[#0F172A]">
            Learn. Earn. <span className="text-[#6366F1]">Conquer.</span>
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold text-[#475569] md:text-base">
            One clean roadmap from skill-building to income to long-term growth.
          </p>
        </div>

        <div className="relative mx-auto h-[23rem] w-full max-w-5xl rounded-[1.75rem] border border-[#E2E8F0] bg-[#F8FAFC] p-5 md:h-[26rem] md:p-8 shadow-sm">
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-hidden="true"
          >
            <motion.path
              d="M50,16 C42,28 34,40 24,56"
              fill="none"
              stroke="rgba(99,102,241,0.4)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: true, amount: 0.4 }}
            />
            <motion.path
              d="M50,16 C58,28 66,40 76,56"
              fill="none"
              stroke="rgba(99,102,241,0.4)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.08 }}
              viewport={{ once: true, amount: 0.4 }}
            />
            <motion.path
              d="M24,56 C38,70 62,70 76,56"
              fill="none"
              stroke="rgba(99,102,241,0.25)"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              transition={{ duration: 0.9, ease: "easeOut", delay: 0.16 }}
              viewport={{ once: true, amount: 0.4 }}
            />
          </svg>

          {nodes.map((node) => {
            const Icon = node.icon;

            return (
              <motion.div
                key={node.key}
                className={`absolute ${node.position}`}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: node.delay, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.4 }}
              >
                <div className="min-w-[10.75rem] rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 text-center shadow-sm">
                  <div className="mx-auto mb-2 flex h-9 w-9 items-center justify-center rounded-lg bg-[#EEF2FF] text-[#6366F1]">
                    <Icon className="h-4.5 w-4.5" />
                  </div>
                  <div className="text-lg font-black tracking-tight text-[#0F172A]">{node.title}</div>
                  <div className="mt-1 text-[10px] font-bold uppercase tracking-[0.18em] text-[#475569]">
                    {node.subtitle}
                  </div>
                </div>
              </motion.div>
            );
          })}

          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2"
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.4 }}
          >
            <div className="rounded-xl border border-[#6366F1]/30 bg-[#EEF2FF] px-4 py-2.5 text-center shadow-sm">
              <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6366F1]">
                Odlix Growth Loop
              </div>
              <div className="mt-1 text-xs font-bold text-[#0F172A]">Learn → Earn → Conquer</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
