"use client";

import { Wallet, CheckCircle2, ChevronRight, ShieldCheck } from "lucide-react";

export function WalletIntegration() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-transparent to-[#10b981]/10 py-32">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#10b981]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#3b82f6]/15 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="relative overflow-hidden rounded-[4rem] border border-white/10 bg-zinc-950 p-12 shadow-2xl md:p-20">
          <div className="pointer-events-none absolute bottom-0 right-0 h-full w-full bg-[radial-gradient(circle_at_100%_100%,rgba(255,95,31,0.15),transparent_60%)]" />
          <div className="relative z-10 grid grid-cols-1 items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-8 text-4xl font-black leading-none tracking-tighter text-white md:text-7xl">
                Capital <br /> <span className="text-[#10b981]">Security.</span>
              </h2>
              <p className="mb-10 max-w-lg text-lg font-medium leading-tight text-white/70 md:text-xl">
                Start with as low as ₹100, fund your account securely, and track capital and withdrawals from one clear
                ledger.
              </p>
              <ul className="mb-10 space-y-4">
                {[
                  "Start trading with ₹100 minimum capital",
                  "Real-time margin and collateral snapshot",
                  "Order-wise brokerage clarity: ₹5 buy / ₹5 sell",
                  "Two-factor authentication for critical actions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center space-x-3 text-xs font-black uppercase tracking-widest text-white/70"
                  >
                    <CheckCircle2 className="h-5 w-5 text-[#10b981]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="group flex items-center space-x-2 text-sm font-black uppercase tracking-widest text-[#3b82f6] transition-colors hover:text-[#7ff9ff]">
                <span>Explore Capital Console</span>
                <ChevronRight className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>

            <div className="group flex aspect-[1.45/1] items-center justify-center rounded-[3rem] border border-white/10 bg-white/[0.03] p-12 shadow-inner">
              <div className="flex flex-col items-center gap-5">
                <Wallet className="h-24 w-24 text-[#10b981]/70 transition-all duration-700 group-hover:scale-110" />
                <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] text-white/80">
                  <ShieldCheck className="h-4 w-4 text-[#10b981]" />
                  Protected Transaction Layer
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
