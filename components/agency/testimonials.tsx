"use client";
import { motion } from "framer-motion";
import { Quote } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-24 px-6 bg-[#010204]">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4 block">// Social Proof</span>
          <h2 className="text-4xl md:text-5xl font-black text-white">Ecosystem Feedback</h2>
        </div>

        {/* Testimonial Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative p-1 rounded-[2.5rem] bg-gradient-to-br from-white/10 to-transparent"
        >
          <div className="p-12 md:p-20 rounded-[2.4rem] bg-[#050505] border border-white/5 text-center relative overflow-hidden">
            {/* Animated Quote Icon */}
            <Quote className="w-12 h-12 text-yellow-500/20 mx-auto mb-8" />
            
            <motion.blockquote 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-2xl md:text-4xl font-medium text-neutral-200 italic leading-snug mb-10"
            >
              "The engineering precision at Odlix is unmatched. They don't just build software; they build competitive advantages."
            </motion.blockquote>

            <div className="flex flex-col items-center">
              <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-yellow-400 to-yellow-600 mb-4" />
              <h4 className="text-white font-bold text-lg">Mark Z.</h4>
              <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-widest">Venture Capitalist</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}