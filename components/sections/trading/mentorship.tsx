"use client";

import { Users, ShieldCheck, BadgeCheck } from "lucide-react";

export function Mentorship() {
  return (
    <section className="bg-[#0a0505] py-32">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-20 max-w-4xl text-center text-white">
          <Users className="mx-auto mb-8 h-16 w-16 text-[#3b82f6]/70" />
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter md:text-[5rem]">
            Trust <br /> <span className="italic text-[#10b981]">Signals.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg font-medium text-white/65 md:text-xl">
            Built for clarity: start from ₹100, understand risk before every order, and always know your exact brokerage.
          </p>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 md:grid-cols-3">
          <div className="flex h-[330px] flex-col justify-between rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.05]">
            <div>
              <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">Execution Transparency</h3>
              <p className="text-sm font-medium text-white/65">
                Show order lifecycle clearly: submitted, accepted, partially filled, filled, cancelled.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#10b981]">
              <BadgeCheck className="h-4 w-4" />
              Real Status Tracking
            </div>
          </div>

          <div className="flex h-[330px] flex-col justify-between rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.05]">
            <div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">Risk First UX</h3>
                <p className="text-sm font-medium text-white/65">
                  Position size, margin impact, and max-loss visibility before every confirmation.
                </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#3b82f6]">
              <ShieldCheck className="h-4 w-4" />
              Guardrail Enabled
            </div>
          </div>

          <div className="flex h-[330px] flex-col justify-between rounded-[3rem] border border-white/10 bg-white/[0.03] p-8 transition-all hover:bg-white/[0.05]">
            <div>
                <h3 className="mb-4 text-2xl font-black uppercase tracking-tight text-white">Simple Brokerage</h3>
                <p className="text-sm font-medium text-white/65">
                  Clear pricing: ₹5 on buy side + ₹5 on sell side per executed order.
                </p>
            </div>
            <div className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.18em] text-[#10b981]">
              ₹5 / Side Flat
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
