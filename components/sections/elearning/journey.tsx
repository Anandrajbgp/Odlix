"use client";

import { ArrowRight } from "lucide-react";

export function Journey() {
  return (
    <section className="py-20 md:py-24 bg-background border-b border-border">
      <div className="container mx-auto px-4">
         <div className="text-center mb-12 md:mb-14 text-foreground">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">Student <span className="text-cyan-600">Journey.</span></h2>
            <p className="text-muted-foreground text-sm md:text-base font-semibold mt-3">Path to financial independence</p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8 text-foreground">
            {[
              { step: "01", title: "Join & Enroll", desc: "Choose Beginner, Pro or Expert package to unlock HD modules." },
              { step: "02", title: "Skill Acquisition", desc: "Master concepts via AI roadmaps and interactive lesson quizzes." },
              { step: "03", title: "Scale & Earn", desc: "Leverage earning toolkits and the multi-tier affiliate system." },
              { step: "04", title: "Certify & Life", desc: "Get QR-verified and unlock the exclusive Life Mastery track." },
            ].map((s, i) => (
              <div key={i} className="relative group rounded-2xl p-5 md:p-6 bg-gradient-to-b from-transparent to-muted/45 hover:to-cyan-500/5 transition-colors">
                 <div className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-cyan-500/25 bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 text-xs font-black tracking-wide">{s.step}</div>
                 <h4 className="text-xl font-black mb-3 mt-4 tracking-tight">{s.title}</h4>
                 <p className="text-muted-foreground leading-relaxed font-medium text-sm">{s.desc}</p>
                 <div className="mt-5 flex items-center text-cyan-600 font-black text-[10px] uppercase tracking-widest group-hover:translate-x-1 transition-transform cursor-pointer">
                    View Step Detail <ArrowRight className="w-4 h-4 ml-1" />
                 </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
