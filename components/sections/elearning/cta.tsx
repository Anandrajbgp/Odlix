"use client";

import { motion } from "framer-motion";

export function CTA() {
  return (
    <section className="container mx-auto px-4 py-20 md:py-24">
       <div className="bg-cyan-600 rounded-[2.5rem] p-8 md:p-14 text-center relative overflow-hidden group shadow-[0_30px_70px_rgba(0,180,216,0.22)] border border-cyan-400/25">
          <div className="absolute inset-0 bg-slate-950 opacity-40 group-hover:opacity-60 transition-opacity" />
          <div className="relative z-10">
             <motion.h2
               whileInView={{ y: [20, 0], opacity: [0, 1] }}
               className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]"
             >
                START <br /> TODAY.
             </motion.h2>
              <p className="text-lg md:text-2xl text-white/90 font-bold mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">

                Join 25,000+ students already scaling their digital lives.
                Start for as low as ₹999.
             </p>
              <button className="px-12 md:px-16 py-5 md:py-6 rounded-full bg-white text-slate-950 font-black text-lg md:text-xl hover:scale-105 transition-transform shadow-2xl uppercase tracking-tight active:scale-95">
                 Choose Your Path
              </button>

          </div>
       </div>
    </section>
  );
}
