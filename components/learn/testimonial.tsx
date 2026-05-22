"use client";

import { motion } from "framer-motion";
import { Star, CheckCircle2, Quote } from "lucide-react";

const reviews = [
  {
    name: "Aman Verma",
    role: "Freelance Graphic Designer",
    text: "Odlix Learn completely shifted my trajectory. I mastered high-end design modules here, unlocked my real potential, and went from earning nothing to cracking ₹35k/month projects within weeks!",
    rating: 5,
    verified: true,
  },
  {
    name: "Riya Sharma",
    role: "Independent Options Trader",
    text: "The financial literacy and trading matrix inside the Pro Package is incredibly practical. I finally broke through my mental barriers and conquered the live markets with absolute confidence.",
    rating: 5,
    verified: true,
  },
  {
    name: "Aryan Kashyap",
    role: "Content Creator & Specialist",
    text: "Stop looking elsewhere. The advanced video engineering and personal branding frameworks taught here gave me the exact blueprints needed to build digital dominance from scratch.",
    rating: 5,
    verified: true,
  }
];

export default function Testimonial() {
  return (
    <section className="py-24 bg-[#010307] px-4 relative overflow-hidden font-sans">
      {/* Advanced Multi-Layered Background Auras */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-600/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-blue-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        
        {/* Header - Editorial Style */}
        <div className="mb-24 max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 mb-4"
          >
            <span className="w-8 h-[1px] bg-cyan-500"></span>
            <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-cyan-400 font-mono">
              Proof of Dominance
            </span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600 tracking-tight mb-6"
          >
            Real Stories. <br /> Absolute Mastery.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-md"
          >
            See how dedicated minds leveraged our elite skill loops to shatter limits and conquer their respective professional fields.
          </motion.p>
        </div>

        {/* Boxless, Open-Flow Row Layout */}
        <div className="space-y-16 md:space-y-24 group/list">
          {reviews.map((rev, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
              className="relative pl-8 md:pl-12 group grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-12 items-start transition-opacity duration-500 hover:!opacity-100 group-hover/list:opacity-40"
            >
              {/* Intelligent Left Accent Line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-gradient-to-b from-white/0 via-white/5 to-white/0 group-hover:from-cyan-500/0 group-hover:via-cyan-400 group-hover:to-cyan-500/0 shadow-[0_0_15px_rgba(34,211,238,0)] group-hover:shadow-[0_0_20px_rgba(34,211,238,0.5)] transition-all duration-500" />

              {/* Column 1: User Profile Details */}
              <div className="md:col-span-1 flex flex-row md:flex-col items-center md:items-start gap-4">
                <div className="relative">
                  <div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-white/[0.05] to-white/[0.01] border border-white/10 backdrop-blur-sm flex items-center justify-center font-black text-neutral-300 text-sm md:text-lg uppercase font-mono group-hover:border-cyan-400/50 group-hover:text-cyan-300 group-hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] transition-all duration-500 z-10 relative">
                    {rev.name[0]}
                  </div>
                  {/* Avatar Glow Behind */}
                  <div className="absolute inset-0 bg-cyan-400/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div>
                  <h4 className="text-sm md:text-base font-bold text-white/90 flex items-center gap-1.5 group-hover:text-white transition-colors">
                    {rev.name}
                    {rev.verified && <CheckCircle2 className="w-3.5 h-3.5 text-cyan-500 fill-cyan-500/20" />}
                  </h4>
                  <p className="text-[10px] md:text-xs font-mono text-neutral-500 tracking-wider uppercase mt-1 group-hover:text-cyan-400/70 transition-colors">
                    {rev.role}
                  </p>
                </div>
              </div>

              {/* Column 2: The Review Content */}
              <div className="md:col-span-3 relative">
                {/* Background Watermark Quote */}
                <Quote className="absolute -top-6 -left-6 md:-top-8 md:-left-8 w-16 h-16 md:w-24 md:h-24 text-white/[0.02] group-hover:text-cyan-500/[0.04] group-hover:scale-110 group-hover:-rotate-6 transition-all duration-700 pointer-events-none" />
                
                <div className="relative z-10">
                  {/* Clean Micro Rating */}
                  <div className="flex gap-1.5 mb-4 text-neutral-700 group-hover:text-cyan-400 transition-colors duration-500">
                    {[...Array(rev.rating)].map((_, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.2, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Star className="w-3.5 h-3.5 fill-current" />
                      </motion.div>
                    ))}
                  </div>
                  
                  {/* Big Bold Clean Quote Text */}
                  <p className="text-neutral-400 text-base md:text-xl lg:text-2xl leading-relaxed md:leading-snug font-medium transition-all group-hover:text-neutral-100 duration-500">
                    "{rev.text}"
                  </p>
                </div>
              </div>

            </motion.div>
          ))}
        </div>
        
      </div>
    </section>
  );
}