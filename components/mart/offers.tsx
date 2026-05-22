"use client";

import { motion } from "framer-motion";
import { Percent, Wallet2, Gift } from "lucide-react";

export default function MartOffers() {
  return (
    <section className="py-16 bg-black px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Module 1: Festival Bonus Card */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-r from-red-950/60 to-neutral-950 border border-red-900/40 relative overflow-hidden group"
        >
          <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 text-red-500 pointer-events-none group-hover:scale-110 transition duration-500">
            <Gift className="w-48 h-48" />
          </div>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-red-500/20 text-red-400 rounded-md border border-red-500/30 inline-block mb-4">
            Ecosystem Flash Wave
          </span>
          <h3 className="text-2xl font-extrabold text-white">Active Festival Multipliers</h3>
          <p className="text-xs text-neutral-400 max-w-sm mt-2 leading-relaxed">
            Apply automated checkout codes linked to active community programs to claim up to 15% cashback processing.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-amber-400 cursor-pointer">
            Reveal Code Layer <Percent className="w-4 h-4" />
          </div>
        </motion.div>

        {/* Module 2: Wallet Integration Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="p-8 rounded-2xl bg-gradient-to-r from-neutral-950 to-amber-950/40 border border-amber-900/30 relative overflow-hidden group"
        >
          <div className="absolute top-1/2 right-4 -translate-y-1/2 opacity-5 text-amber-500 pointer-events-none group-hover:scale-110 transition duration-500">
            <Wallet2 className="w-48 h-48" />
          </div>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase bg-amber-500/20 text-amber-300 rounded-md border border-amber-500/30 inline-block mb-4">
            Oblivent Ledger Sync
          </span>
          <h3 className="text-2xl font-extrabold text-white">Consolidated Wallet Settle</h3>
          <p className="text-xs text-neutral-400 max-w-sm mt-2 leading-relaxed">
            Utilize credit tokens directly generated from your affiliate distributions inside the academy network to complete product orders instantly.
          </p>
          <div className="mt-6 flex items-center gap-2 text-sm font-bold text-white/80 cursor-pointer">
            Query Available Ledger <Wallet2 className="w-4 h-4 text-amber-500" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}