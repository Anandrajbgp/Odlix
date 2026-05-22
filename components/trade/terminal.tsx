"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Zap, LineChart } from "lucide-react";

export default function TradeTerminal() {
  return (
    <section className="py-24 bg-black text-white px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-red-500 font-mono">High-Frequency Core</span>
          <h2 className="text-3xl md:text-5xl font-black mt-2 tracking-tight">Multi-Asset Pro Liquidity Terminal</h2>
          <p className="text-sm text-stone-400 mt-4 leading-relaxed">
            Consolidate your capital routes. Execute positions across Equities, Derivatives, Mutual Funds, and Crypto indices utilizing one structural account identity.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 text-xs font-mono text-stone-400">
            <span className="flex items-center gap-1.5"><Zap className="w-4 h-4 text-red-500" /> Sub-ms Processing</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="w-4 h-4 text-red-500" /> Biometric 2FA Protocol</span>
          </div>
        </div>

        <div className="p-6 rounded-2xl bg-stone-900/30 border border-stone-900 backdrop-blur-md">
          <div className="flex items-center justify-between border-b border-stone-900 pb-4 mb-6">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
              <h4 className="text-xs font-bold uppercase tracking-wider text-stone-300">Live Engine Stream</h4>
            </div>
            <div className="flex gap-1">
              {["EMA", "RSI", "MACD"].map((ind) => (
                <span key={ind} className="px-2 py-0.5 text-[10px] font-mono bg-stone-900 border border-stone-800 rounded text-stone-500">{ind}</span>
              ))}
            </div>
          </div>
          <div className="h-44 flex items-center justify-center border border-dashed border-stone-800 rounded-xl text-stone-600 text-xs font-mono">
            [ Interactive Chart Layer Render Node ]
          </div>
          <div className="grid grid-cols-2 gap-3 mt-4">
            <button className="w-full py-3 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm transition">Quick Buy</button>
            <button className="w-full py-3 rounded-xl bg-rose-600 hover:bg-rose-500 text-white font-bold text-sm transition">Quick Sell</button>
          </div>
        </div>
      </div>
    </section>
  );
}