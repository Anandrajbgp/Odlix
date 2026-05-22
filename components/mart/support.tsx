"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Truck, RotateCcw, Headphones } from "lucide-react";

const metrics = [
  { title: "Verified Products Only", desc: "Every inventory tier undergoes manual cryptographic authenticity sorting.", icon: ShieldCheck },
  { title: "Secure Cashfree Checkout", desc: "Integrated multi-method tokens ensuring direct transactional encryption safety layers.", icon: Truck },
  { title: "Escrow Refund Window", desc: "Transparent cancellation paths mapped directly inside student or standard profiles.", icon: RotateCcw },
  { title: "24/7 Node Assistance", desc: "Direct ticket channels handling delivery tracking state variations instantly.", icon: Headphones },
];

export default function MartSupport() {
  return (
    <section className="py-20 bg-neutral-950 border-t border-neutral-900 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="flex gap-4 items-start"
            >
              <div className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-amber-500 shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-neutral-200">{item.title}</h4>
                <p className="text-xs text-neutral-500 mt-1.5 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}