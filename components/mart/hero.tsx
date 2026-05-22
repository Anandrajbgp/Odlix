"use client";

import { motion } from "framer-motion";
import { ShoppingBag, ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

export default function MartHero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-rose-950/40 via-neutral-950 to-black pt-20 px-4">
      {/* Gold Light Flare Accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-amber-500/10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-bold border rounded-full border-amber-500/30 bg-amber-500/10 text-amber-400 mb-6 uppercase tracking-widest">
            <Sparkles className="w-3 h-3 text-amber-400" /> Premium Odlix Logistics Live
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl md:text-7xl font-black tracking-tight text-white mb-6"
        >
          Engineered Gear. <br />
          <span className="bg-gradient-to-r from-red-500 via-amber-500 to-yellow-400 bg-clip-text text-transparent">
            Digital & Physical Utilities.
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-sm md:text-lg text-neutral-400 max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Access verified hardware essentials, official system merchandise, 
          and exclusive digital production tools curated precisely for modern builders.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <Link href="#categories" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-red-600 to-amber-600 font-bold text-white hover:opacity-90 transition shadow-lg shadow-red-600/20 flex items-center justify-center gap-2">
            Browse Vault <ShoppingBag className="w-4 h-4" />
          </Link>
          <Link href="#trending" className="w-full sm:w-auto px-8 py-4 rounded-xl bg-white/5 border border-white/10 font-semibold text-white hover:bg-white/10 transition backdrop-blur-md flex items-center justify-center gap-2">
            View Dynamic Offers <ArrowRight className="w-4 h-4 text-amber-400" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}