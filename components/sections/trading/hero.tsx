"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BadgeCheck, ShieldCheck } from "lucide-react";

export function Hero() {
  const contracts = [
    { name: "NIFTY 50 CE", price: "₹242.50", change: "+2.4%", up: true },
    { name: "BANKNIFTY PE", price: "₹318.10", change: "+1.1%", up: true },
    { name: "BTCUSDT FUT", price: "$64,290.00", change: "-0.8%", up: false },
  ];

  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-[#0a0505] pb-24 pt-12 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,#451a1a,transparent_70%)] opacity-30" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col items-center justify-between gap-16 lg:flex-row">
          <div className="max-w-2xl text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="mb-6 inline-flex items-center space-x-2 rounded-full border border-[#10b981]/40 bg-[#10b981]/10 px-3 py-1 text-xs font-black uppercase tracking-widest text-[#FFD9C9]"
            >
              <div className="h-2 w-2 animate-pulse rounded-full bg-[#10b981]" />
              <span>Live Execution • Real Broker Experience</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-8 text-5xl font-black leading-[0.85] tracking-tighter md:text-[6.5rem]"
            >
              Trade Real Markets. <br />
              <span className="bg-gradient-to-r from-[#10b981] via-[#10b981] to-[#3b82f6] bg-clip-text text-transparent">
                No Paper Feel.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-8 max-w-xl text-xl font-medium leading-tight text-white/75 md:text-2xl"
            >
              Indian Futures & Options, Stock Options, Crypto Futures, and Forex Futures —
              one terminal, one risk panel, one clear charge.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-10 grid gap-3 text-left sm:grid-cols-2"
            >
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <BadgeCheck className="h-4 w-4 text-[#10b981]" />
                Start live trading from ₹100
              </div>
              <div className="flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-3 py-2 text-xs font-bold uppercase tracking-wider text-white/90">
                <ShieldCheck className="h-4 w-4 text-[#3b82f6]" />
                ₹5 per buy side + ₹5 per sell side
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="space-y-4"
            >
              <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
                <button className="rounded-2xl bg-[#10b981] px-10 py-5 text-xl font-black uppercase tracking-tight text-white shadow-2xl shadow-[#10b981]/30 transition-all hover:bg-[#ff6f36] active:scale-95">
                  Start Live Trading From ₹100
                </button>
              </div>

              <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                <button className="rounded-xl border border-[#10b981]/40 bg-[#10b981]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#10b981] transition-all hover:bg-[#10b981]/20 active:scale-95">
                  Download Android App
                </button>
                <button className="rounded-xl border border-[#3b82f6]/40 bg-[#3b82f6]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#3b82f6] transition-all hover:bg-[#3b82f6]/20 active:scale-95">
                  Download Windows App
                </button>
                <button className="rounded-xl border border-[#10b981]/40 bg-[#10b981]/10 px-5 py-3 text-xs font-black uppercase tracking-[0.15em] text-[#10b981] transition-all hover:bg-[#10b981]/20 active:scale-95">
                  Download iOS App
                </button>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-md rounded-[3.5rem] border border-white/10 bg-zinc-950/85 p-10 shadow-[0_40px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl"
          >
            <div className="mb-10 flex items-center justify-between">
              <span className="text-xs font-black uppercase tracking-widest text-white/40">Live Derivatives Desk</span>
              <span className="rounded-full border border-[#10b981]/30 bg-[#10b981]/10 px-2 py-1 text-[10px] font-black uppercase tracking-widest text-[#10b981]">
                Real-time
              </span>
            </div>
            <div className="mb-2 text-4xl font-black tracking-tighter">₹12,24,590.23</div>
            <div className="mb-12 flex items-center text-xs font-black uppercase tracking-widest text-[#10b981]">
              <ArrowUpRight className="mr-1 h-3 w-3" /> +₹24,140.12 (1.8%) Today
            </div>

            <div className="space-y-5">
              {contracts.map((s) => (
                <div
                  key={s.name}
                  className="group flex cursor-pointer items-center justify-between rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:border-[#10b981]/40"
                >
                  <div className="flex items-center space-x-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-[#10b981]/30 bg-[#10b981]/10 text-[10px] font-black text-[#10b981]">
                      {s.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-black tracking-tight">{s.name}</div>
                      <div className="mt-0.5 text-[10px] font-bold uppercase tracking-widest text-white/35">Execution charge ₹5 / side</div>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-black tracking-tight">{s.price}</div>
                    <div className={`text-[10px] font-black uppercase tracking-widest ${s.up ? "text-[#10b981]" : "text-[#ef4444]"}`}>
                      {s.change}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
