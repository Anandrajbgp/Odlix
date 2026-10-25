"use client";

import { motion } from "framer-motion";
import { User, Wallet, Globe, TrendingUp, Trophy, Users, Award, LogOut, ChevronRight } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Profile", icon: <User />, id: "profile" },
  { name: "Earning", icon: <TrendingUp />, id: "earning" },
  { name: "Bookmarks", icon: <Globe />, id: "bookmarks" },
  { name: "Payout", icon: <Wallet />, id: "payout" },
  { name: "Sites", icon: <Users />, id: "sites" },
  { name: "Leaderboard", icon: <Trophy />, id: "leaderboard" },
  { name: "Tools", id: "tools" },
];

export default function UsefulWebsitesDashboard() {
  const [tab, setTab] = useState("bookmarks");
  const cur = links.find(l => l.id === tab);

  return (
    <div className="flex min-h-screen bg-background text-foreground transition-colors duration-300">
      <aside className="w-80 bg-slate-950 text-white flex flex-col sticky top-0 h-screen shrink-0 border-r border-white/5">
        <div className="p-8 border-b border-white/10">
          <Link href="/useful-websites" className="flex items-center space-x-3 group">
            <div className="w-10 h-10 rounded-xl bg-[#14b8a6] flex items-center justify-center text-slate-950 shadow-lg group-hover:rotate-6 transition-transform">
              <Globe className="w-6 h-6" />
            </div>
            <div>
              <div className="text-lg font-black tracking-tighter leading-none">WEB HUB</div>
              <div className="text-[9px] font-bold text-[#14b8a6] tracking-[0.2em] leading-none mt-1.5 uppercase">Dashboard by Odlix</div>
            </div>
          </Link>
        </div>
        <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto scrollbar-hide text-white">
          {links.map(l => (
            <button key={l.id} onClick={() => setTab(l.id)} className={cn("w-full flex items-center space-x-4 p-4 rounded-[1.2rem] font-bold text-sm transition-all relative group", tab === l.id ? "bg-[#14b8a6] text-slate-950 shadow-xl" : "text-slate-500 hover:text-white hover:bg-white/5")}>
              {l.icon && <span className="w-5 h-5">{l.icon}</span>}
              <span className="tracking-tight">{l.name}</span>
              {tab === l.id && <div className="absolute right-4"><ChevronRight className="w-4 h-4" /></div>}
            </button>
          ))}
        </nav>
        <div className="p-6 border-t border-white/10">
          <button onClick={() => { void signOut({ callbackUrl: "/login" }); }} className="w-full flex items-center space-x-4 p-4 rounded-2xl font-black text-[10px] uppercase tracking-widest text-red-400 hover:bg-red-500/10 transition-all border border-red-500/10">
            <LogOut className="w-4 h-4" />
            <span>Log Out</span>
          </button>
        </div>
      </aside>
      <main className="flex-1 p-8 md:p-12 overflow-y-auto">
        <div className="mb-12">
          <h1 className="text-4xl font-black mb-2 tracking-tight">Useful Websites Dashboard</h1>
          <p className="opacity-50 text-lg">Manage your bookmarked sites and affiliate earnings.</p>
        </div>
        {tab === "bookmarks" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-card p-10 rounded-[3rem] border border-border shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter opacity-70">Bookmarked Sites</h3>
              <div className="text-5xl font-black text-[#14b8a6] mb-10">32</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-muted/40 border border-border">
                <Globe className="w-7 h-7 text-[#14b8a6]" />
                <div><div className="font-black text-sm tracking-tight">Categories</div><div className="text-[10px] opacity-40 font-bold uppercase tracking-widest">8 verified</div></div>
              </div>
            </div>
            <div className="bg-card p-10 rounded-[3rem] border border-border shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter opacity-70">Current Earning</h3>
              <p className="opacity-40 text-[10px] font-bold uppercase tracking-[0.2em] mb-8">Payout Saturday • min ₹500</p>
              <div className="text-5xl font-black text-[#14b8a6] mb-10">₹9,400</div>
              <button className="w-full py-5 rounded-[1.5rem] bg-[#14b8a6] text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl shadow-[#14b8a6]/20 hover:scale-[1.02] active:scale-[0.98] transition-all">Payout Hub</button>
            </div>
            <div className="bg-card p-10 rounded-[3rem] border border-border shadow-sm">
              <h3 className="font-black mb-8 uppercase tracking-tighter opacity-70">Daily Visits</h3>
              <div className="text-5xl font-black text-[#eab308] mb-10">1.2k</div>
              <div className="flex items-center space-x-3 p-6 rounded-[2rem] bg-muted/40 border border-border">
                <Users className="w-7 h-7 text-[#eab308]" />
                <div><div className="font-black text-sm tracking-tight">Unique Visitors</div><div className="text-[10px] opacity-40 font-bold uppercase tracking-widest">Monthly</div></div>
              </div>
            </div>
          </div>
        )}
        {tab !== "bookmarks" && (
          <div className="flex flex-col items-center justify-center h-[60vh] text-muted-foreground">
            <div className="w-24 h-24 bg-muted/50 border border-border rounded-[2.5rem] flex items-center justify-center mb-8 shadow-inner">
              <span className="text-foreground scale-150">{cur?.icon}</span>
            </div>
            <h2 className="text-3xl font-black text-foreground mb-4 tracking-tighter uppercase">{cur?.name}</h2>
            <p className="max-w-xs text-center font-medium italic opacity-60">This module is being calibrated for your account.</p>
          </div>
        )}
      </main>
    </div>
  );
}