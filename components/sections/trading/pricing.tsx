"use client";

import { CheckCircle2 } from "lucide-react";

export function Pricing() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-background py-32 text-foreground">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 text-center">
        <h2 className="mb-8 text-4xl font-black uppercase leading-none tracking-tighter md:text-[5rem]">
          Flat Brokerage <br /> <span className="text-[#7CFC00]">₹5 Per Side.</span>
        </h2>
        <p className="mx-auto mb-20 max-w-3xl text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
          One simple model across supported segments: Indian F&O, stock options, crypto futures, forex futures.
        </p>

        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 md:grid-cols-2">
          <div className="flex flex-col rounded-[3rem] border border-border bg-card p-10 text-left">
            <h3 className="mb-4 text-4xl font-black tracking-tighter">Account Opening</h3>
            <p className="mb-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">No joining fee</p>
            <div className="mb-10 text-6xl font-black tracking-tighter">
              ₹0 <span className="ml-1 text-sm font-black uppercase tracking-widest text-muted-foreground">lifetime</span>
            </div>
            <ul className="mb-12 flex-1 space-y-5 text-sm font-semibold text-muted-foreground">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>KYC onboarding and activation flow</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>Unified margin and segment dashboard</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>Live execution interface with order statuses</span>
              </li>
            </ul>
            <button className="w-full rounded-2xl border border-[#7CFC00]/40 bg-[#7CFC00]/10 px-4 py-3 text-xs font-black uppercase tracking-[0.24em] transition-all hover:bg-[#7CFC00]/20 active:scale-95">
              Open Trading Account
            </button>
          </div>

          <div className="relative z-10 flex scale-[1.02] flex-col rounded-[3rem] border-2 border-[#7CFC00] bg-gradient-to-br from-[#7CFC00]/15 via-white to-[#f0fdf4] p-10 text-left shadow-2xl">
            <div className="absolute right-8 top-0 -translate-y-1/2 rounded-full bg-[#7CFC00] px-6 py-2 text-[10px] font-black uppercase tracking-[0.26em] text-white shadow-xl">
              Most Important
            </div>
            <h3 className="mb-4 text-4xl font-black tracking-tighter">Brokerage Rule</h3>
            <p className="mb-8 text-[11px] font-bold uppercase tracking-widest text-muted-foreground">Clear and fixed</p>
            <div className="mb-10 text-5xl font-black tracking-tighter">
              ₹5 <span className="ml-1 text-sm font-black uppercase tracking-widest text-muted-foreground">buy side</span>
            </div>
            <div className="mb-10 text-5xl font-black tracking-tighter">
              ₹5 <span className="ml-1 text-sm font-black uppercase tracking-widest text-muted-foreground">sell side</span>
            </div>
            <ul className="mb-12 flex-1 space-y-5 text-sm font-semibold text-muted-foreground">
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>Applied on each executed order side</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>Visible in order preview before confirmation</span>
              </li>
              <li className="flex items-center space-x-3">
                <CheckCircle2 className="h-5 w-5 text-[#7CFC00]" />
                <span>Consistent communication across platform screens</span>
              </li>
            </ul>
            <button className="w-full rounded-2xl bg-[#7CFC00] py-5 text-xs font-black uppercase tracking-[0.24em] shadow-xl shadow-[#7CFC00]/30 transition-all hover:bg-[#5cfc26] active:scale-95">
              Start With ₹5 Pricing
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

