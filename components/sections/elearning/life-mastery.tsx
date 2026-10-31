"use client";

import { Star } from "lucide-react";

export function LifeMastery() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-slate-950 border-b border-white/10 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="max-w-5xl mx-auto p-7 md:p-12 rounded-[2.2rem] bg-slate-900 border border-white/10 relative overflow-hidden text-white shadow-2xl backdrop-blur">
           <div className="absolute top-10 right-10 opacity-10 pointer-events-none rotate-12"><Star className="w-64 h-64 text-indigo-400" /></div>
           <div className="relative z-10">
              <span className="inline-block px-4 py-1 rounded-full bg-yellow-500/15 text-yellow-400 text-[10px] font-black uppercase mb-6 tracking-widest border border-yellow-500/30">Post-Completion Milestone</span>
              <h2 className="text-4xl md:text-7xl font-black mb-8 tracking-tighter leading-none">Life Mastery <br /> <span className="text-indigo-400 italic font-medium">Track.</span></h2>
              <p className="text-slate-300 text-lg md:text-xl mb-8 md:mb-10 max-w-2xl font-medium leading-relaxed">
                 Unlock holistic growth after completing your primary package. Focus on high-level success skills that define true leaders.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                 {[
                   "Tax Planning", "Emotional Intelligence", "Mindfulness",
                   "Relationship Skills", "Civic Awareness", "Ethical Decisions",
                   "Critical Thinking", "Environment"
                 ].map(s => (
                     <div key={s} className="p-4 md:p-5 rounded-2xl bg-slate-800/80 border border-white/10 text-center text-[10px] font-black uppercase tracking-widest hover:bg-indigo-500/20 hover:border-indigo-500/50 transition-all group cursor-default">
                       <span className="text-slate-300 group-hover:text-white transition-colors">{s}</span>
                    </div>
                 ))}
              </div>
           </div>
        </div>
      </div>
    </section>
  );
}
