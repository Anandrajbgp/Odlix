"use client";

import { TrendingUp, Gift, Plane, Users } from "lucide-react";

export function Wealth() {
  return (
    <>
      <section className="py-14 md:py-16 bg-slate-950 text-white relative overflow-hidden border-b border-white/10">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/30 blur-3xl" />
<div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/25 blur-3xl" />
<div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_100%_100%,rgba(79,70,229,0.05),transparent_50%)]" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tighter">
                Skill & Income <br /> <span className="text-indigo-500 italic">Wealth.</span>
              </h2>
              <p className="text-slate-300 text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-medium">
                Our multi-tier skill-sharing income structure allows you to build a scalable digital income while you learn.
              </p>
              <div className="space-y-5">
                {[
                  { name: "Beginner", direct: "54%", level2: "12%" },
                  { name: "Pro", direct: "56%", level2: "14%" },
                  { name: "Expert", direct: "58%", level2: "17%" },
                ].map((p) => (
                  <div
                    key={p.name}
                    className="flex items-center justify-between p-5 md:p-6 rounded-[1.75rem] bg-white/5 border border-white/10 group hover:border-indigo-500/50 transition-all cursor-default"
                  >
                    <div>
                      <span className="text-xl md:text-2xl font-black tracking-tight">{p.name} Package</span>
                      <p className="text-[10px] font-black text-slate-500 uppercase tracking-widest mt-1 italic">
                        Income Dashboard Enabled
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-indigo-400 font-black text-xl md:text-2xl tracking-tighter">Direct {p.direct}</div>
                      <div className="text-white/30 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Tier 2: {p.level2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-14 md:py-16 bg-background text-foreground relative overflow-hidden border-b border-border">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/12 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/10 blur-3xl" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-8 md:mb-10">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3 uppercase">
              Rewards & <span className="text-indigo-600">Weekly Payouts.</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg font-medium max-w-2xl mx-auto">
              Consistent rewards, timely payouts, and recognition for active learners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { title: "Weekly Payouts", desc: "Every Saturday, min ₹200.", icon: <TrendingUp /> },
              { title: "Festival Bonuses", desc: "Special seasonal cash perks.", icon: <Gift /> },
              { title: "Domestic Trips", desc: "Fully paid biannual summits.", icon: <Plane /> },
              { title: "Global Board", desc: "Achiever recognition stats.", icon: <Users /> },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-6 md:p-7 rounded-[2rem] bg-card border border-border text-center group hover:border-indigo-500/40 transition-all shadow-sm"
              >
                <div className="text-indigo-500 mb-5 flex justify-center scale-110 group-hover:scale-125 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-black mb-2 tracking-tight">{benefit.title}</h4>
                <p className="text-muted-foreground text-xs font-semibold leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
