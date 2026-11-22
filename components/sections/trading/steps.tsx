"use client";

import { motion } from "framer-motion";

export function Steps() {
  const steps = [
    { num: "01", title: "Add funds", desc: "Start trading from ₹100" },
    { num: "02", title: "Pick segment", desc: "Choose F&O, stocks, crypto & forex" },
    { num: "03", title: "Place order", desc: "Execute your first trade" },
  ];

  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-xs font-black uppercase tracking-[0.24em] text-[#10B981]"
          >
            How It Works
          </motion.div>
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            {steps.map((step) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: steps.indexOf(step) * 0.1 }}
                className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 text-center transition-all hover:bg-white hover:border-[#10B981]/40 shadow-sm"
              >
                <div className="mx-auto mb-6 h-12 w-12 rounded-full border border-[#10B981]/30 bg-[#ECFDF5] flex items-center justify-center text-[#10B981] font-black text-xl tracking-tighter shadow-sm">
                  {step.num}
                </div>
                <h3 className="mb-2 text-xl font-black tracking-tight text-[#0F172A]">{step.title}</h3>
                <p className="text-sm font-semibold text-[#475569]">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
