"use client";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function Contact() {
  return (
    <section className="py-24 px-4 bg-[#010204] relative">
      {/* Decorative Blur */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-yellow-500/5 blur-[120px] rounded-full" />
      
      <div className="max-w-2xl mx-auto p-1 md:p-1 rounded-[3rem] bg-gradient-to-b from-white/10 to-transparent">
        <div className="p-8 md:p-12 rounded-[2.8rem] bg-[#050505] border border-white/5 text-center">
          
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Let’s Deploy.</h2>
            <p className="text-neutral-500 mb-10 text-sm">Send your requirements. Our architects will respond within 24 hours.</p>
          </motion.div>

          <form className="flex flex-col gap-4 text-left" onSubmit={(e) => e.preventDefault()}>
            <div className="group">
              <label className="text-[10px] font-bold text-neutral-600 uppercase ml-4 mb-1 block tracking-widest">// Full Name</label>
              <input 
                className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white outline-none focus:border-yellow-500 transition-all focus:bg-white/[0.04]" 
                placeholder="John Doe" 
              />
            </div>
            
            <div className="group">
              <label className="text-[10px] font-bold text-neutral-600 uppercase ml-4 mb-1 block tracking-widest">// Project Requirements</label>
              <textarea 
                className="w-full p-4 rounded-2xl bg-white/[0.02] border border-white/10 text-white h-32 outline-none focus:border-yellow-500 transition-all focus:bg-white/[0.04] resize-none" 
                placeholder="Tell us about your mission..." 
              />
            </div>

            <button className="group relative mt-4 py-4 bg-yellow-400 text-black font-black rounded-2xl flex items-center justify-center gap-2 hover:bg-yellow-300 transition-all overflow-hidden">
              <span className="relative z-10">Submit Blueprint</span>
              <Send className="w-4 h-4 relative z-10 group-hover:translate-x-1 transition-transform" />
              <div className="absolute inset-0 bg-yellow-300 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </button>
          </form>
          
        </div>
      </div>
    </section>
  );
}