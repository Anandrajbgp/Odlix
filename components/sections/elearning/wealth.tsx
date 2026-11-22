"use client";

import { TrendingUp, Gift, Plane } from "lucide-react";

export function Wealth() {
  return (
    <>
      <section className="py-16 md:py-20 bg-transparent text-[#0F172A] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div>
              <h2 className="text-4xl md:text-6xl font-black mb-6 leading-[0.9] tracking-tighter text-[#0F172A]">
                Skill & Income <br /> <span className="text-[#6366F1] italic">Wealth.</span>
              </h2>
              <p className="text-[#475569] text-lg md:text-xl mb-8 max-w-lg leading-relaxed font-semibold">
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
                    className="flex items-center justify-between p-5 md:p-6 rounded-[1.75rem] bg-[#F8FAFC] border border-[#E2E8F0] group hover:border-[#6366F1]/50 transition-all cursor-default shadow-sm"
                  >
                    <div>
                      <span className="text-xl md:text-2xl font-black tracking-tight text-[#0F172A]">{p.name} Package</span>
                      <p className="text-[10px] font-black text-[#475569] uppercase tracking-widest mt-1 italic">
                        Income Dashboard Enabled
                      </p>
                    </div>
                    <div className="text-right">
                      <div className="text-[#6366F1] font-black text-xl md:text-2xl tracking-tighter">Direct {p.direct}</div>
                      <div className="text-[#475569] text-[10px] font-black uppercase tracking-[0.2em] mt-1">Tier 2: {p.level2}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-transparent text-[#0F172A] relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10 md:mb-12">
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-3 uppercase text-[#0F172A]">
              Rewards & <span className="text-[#6366F1]">Weekly Payouts.</span>
            </h2>
            <p className="text-[#475569] text-base md:text-lg font-semibold max-w-2xl mx-auto">
              Consistent rewards, timely payouts, and recognition for active learners.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { title: "Weekly Payouts", desc: "Every Saturday, min ₹200.", icon: <TrendingUp className="h-6 w-6 text-[#6366F1]" /> },
              { title: "Festival Bonuses", desc: "Special seasonal cash perks.", icon: <Gift className="h-6 w-6 text-[#6366F1]" /> },
              { title: "Domestic Trips", desc: "Fully paid biannual summits.", icon: <Plane className="h-6 w-6 text-[#6366F1]" /> },
              { title: "Global Board", desc: "Achiever recognition stats.", icon: <span className="text-xl">⭐</span> },
            ].map((benefit, i) => (
              <div
                key={i}
                className="p-6 md:p-7 rounded-[2rem] bg-[#F8FAFC] border border-[#E2E8F0] text-center group hover:border-[#6366F1]/50 transition-all shadow-sm"
              >
                <div className="text-[#6366F1] mb-5 flex justify-center scale-110 group-hover:scale-125 transition-transform">
                  {benefit.icon}
                </div>
                <h4 className="text-lg font-black mb-2 tracking-tight text-[#0F172A]">{benefit.title}</h4>
                <p className="text-[#475569] text-xs font-semibold leading-relaxed">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
