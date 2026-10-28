"use client";

import { motion } from "framer-motion";

export function Steps() {
  const steps = [
    { num: "01", title: "Add funds", desc: "Start trading from ₹100" },
    { num: "02", title: "Pick segment", desc: "Choose F&O, stocks, crypto & forex" },
    { num: "03", title: "Place order", desc: "Execute your first trade" },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background py-20">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12 text-xs font-black uppercase tracking-[0.24em] text-[#7CFC00]"
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
                className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 text-center transition-all hover:bg-white/[0.05] hover:border-[#7CFC00]/40"
              >
                <div className="mx-auto mb-6 h-12 w-12 rounded-full border border-[#7CFC00]/30 bg-[#7CFC00]/20 flex items-center justify-center text-[#7CFC00] font-black text-xl tracking-tighter">
                  {step.num}
                </div>
                <h3 className="mb-2 text-xl font-black tracking-tight text-foreground">{step.title}</h3>
                <p className="text-sm font-medium text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
