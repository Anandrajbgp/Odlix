"use client"

import { BarChart3, Shield, CandlestickChart, HelpCircle } from "lucide-react"

const assets = [
  { type: "Equity Stocks", desc: "Trade top tier blue chip listings with 1-click execution matrices.", delay: "0.1" },
  { type: "Options & Futures", desc: "Advanced high leverage multi-strike hedging terminals built for accuracy.", delay: "0.2" },
  { type: "Mutual Funds & ETFs", desc: "Automated wealth generation grids mapping direct SIP indices smoothly.", delay: "0.3" },
  { type: "Commodities & Crypto", desc: "24/7 liquid exposure options addressing global bullion scales safely.", delay: "0.4" }
]

export default function TradingLandingPage() {
  return (
    <div className="space-y-20">
      {/* Terminal Hero Banner */}
      <div className="rounded-3xl border border-rose-950 bg-gradient-to-br from-[#2a0808] to-[#0d0202] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <span className="text-xs font-bold bg-rose-500/10 border border-rose-500/20 text-rose-400 px-3 py-1 rounded-full uppercase tracking-widest">
            🛡️ Institutional Grade Security (2FA)
          </span>
          <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight leading-none">
            Multi-Asset Terminal. <br />
            <span className="text-rose-500">Zero Friction.</span>
          </h1>
          <p className="text-rose-300/70 text-sm leading-relaxed">
            Consolidate your technical portfolios across equities, options, and digital assets using one unified ledger clearing window.
          </p>
          <div className="flex gap-4">
            <button className="px-6 py-3 rounded-xl font-bold text-sm bg-rose-600 hover:bg-rose-500 text-white shadow-xl shadow-rose-950/50 transition-all">
              Initialize Paper Trading
            </button>
            <button className="px-6 py-3 rounded-xl font-bold text-sm border border-rose-900 text-rose-300 hover:bg-rose-950/30 transition-all">
              View Analytics Terminal
            </button>
          </div>
        </div>

        {/* Mock Live Charts Window */}
        <div className="border border-rose-900/60 bg-black/40 p-6 rounded-2xl font-mono text-xs text-rose-400 space-y-4 shadow-2xl">
          <div className="flex justify-between items-center border-b border-rose-950 pb-3">
            <span className="text-white font-bold flex items-center gap-1.5"><CandlestickChart className="h-4 w-4 text-rose-500" /> TECHNICAL INDICATORS GRID</span>
            <span className="text-[10px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded border border-emerald-500/20">LIVE RADAR</span>
          </div>
          <div className="space-y-2">
            <div className="flex justify-between"><span>EMA (20, 50, 200)</span><span className="text-emerald-400">BULLISH CROSSOVER</span></div>
            <div className="flex justify-between"><span>RSI (14 Overbought Guard)</span><span className="text-amber-400">62.45 - NEUTRAL</span></div>
            <div className="flex justify-between"><span>MACD Signal Divergence</span><span className="text-emerald-400">ACCELERATING CONVERGE</span></div>
            <div className="flex justify-between"><span>Fibonacci Retracement Baseline</span><span className="text-slate-400">SUPPORT HOLD AT 0.618</span></div>
          </div>
        </div>
      </div>

      {/* Asset Mapping Matrix */}
      <div className="space-y-8">
        <h3 className="text-2xl font-bold text-white text-center">Unified Asset Classes Available</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {assets.map((asset) => (
            <div key={asset.type} className="border border-rose-950/60 bg-[#160505]/40 p-6 rounded-2xl hover:border-rose-700/40 transition-all">
              <div className="h-2 w-2 rounded-full bg-rose-500 mb-4" />
              <h4 className="font-bold text-white text-base">{asset.type}</h4>
              <p className="text-xs text-rose-300/60 mt-2 leading-relaxed">{asset.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}