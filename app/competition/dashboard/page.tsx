"use client";

import { motion } from "framer-motion";
import { User, Wallet, GraduationCap, TrendingUp, Trophy, Users, Award, LogOut, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Profile", icon: <User />, id: "profile" },
  { name: "Earning", icon: <TrendingUp />, id: "earning" },
  { name: "Mock Tests", icon: <GraduationCap />, id: "mock-tests" },
  { name: "Payout", icon: <Wallet />, id: "payout" },
  { name: "Leaderboard", icon: <Trophy />, id: "leaderboard" },
  { name: "Tools", id: "tools" },
  { name: "Certificates", icon: <Award />, id: "certificates" },
];

export default function CompetitionDashboard() {
  const [tab, setTab] = useState("mock-tests");
  const cur = links.find(l => l.id === tab);

  return (
    <div className="flex min-h-screen bg-slate-950 text-white transition-colors duration-300">
      <aside className="w-80 bg-slate-950 text-white flex flex-col sticky top-0 h-screen shrink-0 border-r border-white/10">
        <div className="p-8 border-b border-white/10">
          <Link href="/competition" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#0ea5e9] flex items-center justify-center text-slate-950 shadow-lg group-hover:rotate-6 transition-transform">
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tighter leading-none text-white">MOCK HUB</div>
              <div className="text-[9px] font-bold text-[#0ea5e9] tracking-[0.2em] leading-none mt-1.5 uppercase">Dashboard by Odlix</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto scrollbar-none text-white">
          {links.map(l => (
            <button key={l.id} onClick={() => setTab(l.id)} className={cn("w-full flex items-center space-x-4 p-4 rounded-[1.2rem] font-bold text-sm transition-all relative group", tab === l.id ? "bg-[#0ea5e9] text-slate-950 shadow-xl font-black" : "text-slate-400 hover:text-white hover:bg-white/5")}>
              {l.icon && <span className="w-5 h-5">{l.icon}</span>}
              <span className="tracking-tight">{l.name}</span>
              {tab === l.id && <div className="absolute right-4"><ChevronRight className="w-4 h-4 text-slate-950" /></div>}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <button onClick={() => { void signOut({ callbackUrl: "/login" }); }} className="w-full flex items-center space-x-4 p-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-red-500/20">
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto bg-slate-950">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-2 tracking-tight text-white">Competition Dashboard</h1>
          <p className="text-slate-400 text-lg font-medium">Track your mock test performance and rankings.</p>
        </div>
        {tab === "mock-tests" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-slate-400 text-sm">Tests Completed</h3>
              <div className="text-5xl font-black text-[#0ea5e9] mb-10">18</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-slate-800/80 border border-white/10">
                <GraduationCap className="w-7 h-7 text-[#0ea5e9]" />
                <div><div className="font-black text-sm tracking-tight text-white">All India Rank</div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">#245 • Top 5%</div></div>
              </div>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-slate-400 text-sm">Current Earning</h3>
              <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Payout Saturday • min ₹200</p>
              <div className="text-5xl font-black text-[#0ea5e9] mb-10">₹15,600</div>
              <button className="w-full py-5 rounded-[1.5rem] bg-[#0ea5e9] text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl shadow-[#0ea5e9]/20 hover:bg-sky-400 active:scale-[0.98] transition-all">Payout Hub</button>
            </div>
            <div className="bg-slate-900 p-10 rounded-[3rem] border border-white/10 shadow-2xl">
              <h3 className="font-black mb-8 uppercase tracking-tighter text-slate-400 text-sm">Average Score</h3>
              <div className="text-5xl font-black text-amber-400 mb-10">82%</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-slate-800/80 border border-white/10">
                <Trophy className="w-7 h-7 text-amber-400" />
                <div><div className="font-black text-sm tracking-tight text-white">Best Percentile</div><div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">94th percentile</div></div>
              </div>
            </div>
          </div>
        )}
        {tab !== "mock-tests" && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-slate-400">
            <div className="w-24 h-24 bg-slate-900 border border-white/10 rounded-[2.5rem] flex items-center justify-center mb-8 shadow-2xl">
              <span className="text-[#0ea5e9] scale-150">{cur?.icon}</span>
            </div>
            <h2 className="text-3xl font-black text-white mb-4 tracking-tighter uppercase">{cur?.name}</h2>
            <p className="max-w-xs text-center font-medium italic text-slate-400">This module is being calibrated for your account.</p>
          </div>
        )}
      </main>
    </div>
  );
}
