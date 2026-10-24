"use client";

import { TrendingUp, Gift, Plane, Download, Users } from "lucide-react";

export function Affiliate() {
  return (
    <section className="py-14 md:py-16 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(0,255,255,0.05),transparent_50%)]" />
       <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 items-center">
             <div>
                <h2 className="text-4xl md:text-[6rem] font-black mb-8 leading-[0.85] tracking-tighter">Affiliate <br /> <span className="text-cyan-500 italic">Wealth.</span></h2>
                <p className="text-slate-300 text-lg md:text-xl mb-8 md:mb-10 max-w-lg leading-relaxed font-medium">
                   Our multi-tier high-impact commission structure allows you to build a scalable digital income while you learn.
                </p>
                <div className="space-y-6">
                   {[
                     { name: "Beginner", direct: "54%", level2: "12%" },
                     { name: "Pro", direct: "56%", level2: "14%" },
                     { name: "Expert", direct: "58%", level2: "17%" }
                   ].map(p => (
                     <div key={p.name} className="flex items-center justify-between p-6 md:p-7 rounded-[2rem] bg-white/5 border border-white/10 group hover:border-cyan-500/50 transition-all cursor-default">
                        <div>
                           <span className="text-2xl font-black tracking-tight">{p.name} Package</span>
                           <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">Earning Dashboard Enabled</p>
                        </div>
                        <div className="text-right">
                           <div className="text-cyan-400 font-black text-2xl tracking-tighter">Direct {p.direct}</div>
                           <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Tier 2: {p.level2}</div>
                        </div>
                     </div>
                   ))}
                </div>
             </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">

                {[
                  { title: "Weekly Payouts", desc: "Every Saturday, min ₹200.", icon: <TrendingUp /> },
                  { title: "Festival Bonuses", desc: "Special seasonal cash perks.", icon: <Gift /> },
                  { title: "Domestic Trips", desc: "Fully paid biannual summits.", icon: <Plane /> },
                  { title: "Global Board", desc: "Achiever recognition stats.", icon: <Users /> },
                ].map((benefit, i) => (
                   <div key={i} className="p-7 md:p-8 rounded-[2rem] bg-gradient-to-br from-slate-900 to-black border border-white/10 text-center group hover:border-cyan-500/30 transition-all shadow-xl">

                     <div className="text-cyan-500 mb-6 flex justify-center scale-110 group-hover:scale-125 transition-transform">{benefit.icon}</div>
                     <h4 className="text-lg font-black mb-3 tracking-tight">{benefit.title}</h4>
                     <p className="text-white/60 text-xs font-semibold leading-relaxed">{benefit.desc}</p>
                  </div>
                ))}
             </div>
          </div>
       </div>
    </section>
  );
}
