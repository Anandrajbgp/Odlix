"use client";

import { ArrowRight } from "lucide-react";

export function Journey() {
  return (
    <section className="relative overflow-hidden py-20 md:py-24 bg-slate-950 border-b border-white/10 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
         <div className="text-center mb-12 md:mb-14 text-white">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Student <span className="text-indigo-400">Journey.</span></h2>
            <p className="text-slate-300 text-sm md:text-base font-semibold mt-3">Path to financial independence</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 text-white">
            {[
              { step: "01", title: "Join & Enroll", desc: "Choose Beginner, Pro or Expert package to unlock HD modules." },
              { step: "02", title: "Skill Acquisition", desc: "Master concepts via AI roadmaps and interactive lesson quizzes." },
              { step: "03", title: "Scale & Earn", desc: "Leverage earning toolkits and the multi-tier partner income system." },
              { step: "04", title: "Certify & Life", desc: "Get QR-verified and unlock the exclusive Life Mastery track." },
            ].map((s, i) => (
              <div key={i} className="relative group rounded-2xl p-6 md:p-7 bg-slate-900/80 border border-white/10 hover:border-indigo-500/50 transition-all shadow-xl">
                 <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/15 text-indigo-400 text-xs font-black tracking-wide">{s.step}</div>
                 <h4 className="text-xl font-black mb-3 mt-4 tracking-tight text-white">{s.title}</h4>
                 <p className="text-slate-300 leading-relaxed font-medium text-sm">{s.desc}</p>
                 <div className="mt-5 flex items-center text-indigo-400 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer">
                    View Step Detail <ArrowRight className="w-4 h-4 ml-1" />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
