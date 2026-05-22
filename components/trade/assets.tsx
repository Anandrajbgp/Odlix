"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const instruments = [
  { ticker: "NIFTY 50", value: "24,342.10", delta: "+1.24%", up: true },
  { ticker: "RELIANCE", value: "2,460.50", delta: "-0.45%", up: false },
  { ticker: "ODLIX ALPHA INDEX", value: "1,104.90", delta: "+4.82%", up: true },
  { ticker: "CRUDE OIL", value: "6,412.00", delta: "+0.12%", up: true },
];

export default function TradeAssets() {
  return (
    <section className="py-16 bg-stone-950 border-b border-stone-900 text-white px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {instruments.map((inst, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-5 rounded-xl bg-gradient-to-b from-stone-900 to-black border border-stone-900 hover:border-red-900/60 transition"
            >
              <span className="text-xs font-bold text-stone-500 block uppercase tracking-wider">{inst.ticker}</span>
              <div className="flex items-baseline justify-between mt-3 gap-2">
                <span className="text-lg font-black tracking-tight">{inst.value}</span>
                <span className={`text-xs font-mono font-bold flex items-center gap-0.5 ${inst.up ? "text-emerald-400" : "text-rose-500"}`}>
                  {inst.up ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />} {inst.delta}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}