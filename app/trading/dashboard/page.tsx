"use client";

import { motion } from "framer-motion";
import { User, Wallet, BarChart3, TrendingUp, Trophy, Users, Award, LogOut, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Profile", icon: <User />, id: "profile" },
  { name: "Earning", icon: <TrendingUp />, id: "earning" },
  { name: "Portfolio", icon: <BarChart3 />, id: "portfolio" },
  { name: "Payout", icon: <Wallet />, id: "payout" },
  { name: "Watchlist", icon: <Users />, id: "watchlist" },
  { name: "Leaderboard", icon: <Trophy />, id: "leaderboard" },
  { name: "Tools", id: "tools" },
];

export default function TradingDashboard() {
  const [tab, setTab] = useState("portfolio");
  const cur = links.find(l => l.id === tab);

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      <aside className="w-80 bg-white flex flex-col sticky top-0 h-screen shrink-0 border-r border-[#7CFC00]/30">
        <div className="p-8 border-b border-[#7CFC00]/30">
          <Link href="/trading" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#7CFC00] flex items-center justify-center text-white shadow-lg group-hover:rotate-6 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tighter leading-none">TRADE HUB</div>
              <div className="text-[9px] font-bold text-[#7CFC00] tracking-[0.2em] leading-none mt-1.5 uppercase">Dashboard by Odlix</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto scrollbar-hide text-slate-600">
          {links.map(l => (
            <button key={l.id} onClick={() => setTab(l.id)} className={cn("w-full flex items-center space-x-4 p-4 rounded-[1.2rem] font-bold text-sm transition-all relative group", tab === l.id ? "bg-[#7CFC00] text-foreground shadow-xl" : "text-slate-600 hover:text-[#7CFC00] hover:bg-[#7CFC00]/10")}>
              {l.icon && <span className="w-5 h-5">{l.icon}</span>}
              <span className="tracking-tight">{l.name}</span>
              {tab === l.id && <div className="absolute right-4"><ChevronRight className="w-4 h-4" /></div>}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-[#7CFC00]/30">
          <button onClick={() => { void signOut({ callbackUrl: "/login" }); }} className="w-full flex items-center space-x-4 p-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-[#7CFC00]/20">
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-2 tracking-tight text-foreground">Trading Dashboard</h1>
          <p className="text-lg text-muted-foreground">Manage your portfolio and track market movements.</p>
        </div>
        {tab === "portfolio" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-white p-10 rounded-[3rem] border border-[#7CFC00]/30 shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-muted-foreground">Portfolio Value</h3>
              <div className="text-5xl font-black text-[#7CFC00] mb-10">₹2,45,000</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-[#7CFC00]/10 border border-[#7CFC00]/25">
                <BarChart3 className="w-7 h-7 text-[#7CFC00]" />
                <div><div className="font-black text-sm tracking-tight">Today P&L</div><div className="text-[10px] font-bold text-[#7CFC00] tracking-widest">+₹4,250 (+1.8%)</div></div>
              </div>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-[#7CFC00]/30 shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-muted-foreground">Current Earning</h3>
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-8 text-slate-400">Payout Saturday • min ₹1000</p>
              <div className="text-5xl font-black text-[#7CFC00] mb-10">₹32,400</div>
              <button className="w-full py-5 rounded-[1.5rem] bg-[#7CFC00] text-foreground font-black text-xs uppercase tracking-widest shadow-xl shadow-[#7CFC00]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Payout Hub</button>
            </div>
            <div className="bg-white p-10 rounded-[3rem] border border-[#7CFC00]/30 shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-muted-foreground">Open Positions</h3>
              <div className="text-5xl font-black text-[#7CFC00] mb-10">7</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-[#7CFC00]/10 border border-[#7CFC00]/25">
                <Users className="w-7 h-7 text-[#7CFC00]" />
                <div><div className="font-black text-sm tracking-tight">Assets Tracked</div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Crypto • Stocks • Forex</div></div>
              </div>
            </div>
          </div>
        )}
        {tab !== "portfolio" && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
            <div className="w-24 h-24 bg-[#7CFC00]/10 border-[#7CFC00]/25 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
              <span className="text-foreground scale-150">{cur?.icon}</span>
            </div>
            <h2 className="text-3xl font-black text-foreground mb-4 tracking-tighter uppercase">{cur?.name}</h2>
            <p className="max-w-xs text-center font-medium italic text-slate-400">This module is being calibrated for your account.</p>
          </div>
        )}
      </main>
    </div>
  );
}


