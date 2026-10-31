"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Send, Search, Smartphone, Shield, Zap } from "lucide-react";

const featuredBots = [
  {
    name: "TradeAlert Pro",
    category: "Trading",
    rating: 4.9,
    desc: "Real-time trading signals and market alerts.",
    icon: <Zap className="text-[#f0abfc]" />,
  },
  {
    name: "TaskMaster",
    category: "Productivity",
    rating: 4.8,
    desc: "Task automation and reminder bot for teams.",
    icon: <Smartphone className="text-[#d946ef]" />,
  },
  {
    name: "Security Guard",
    category: "Security",
    rating: 4.7,
    desc: "Group moderation and anti-spam protection bot.",
    icon: <Shield className="text-[#d946ef]" />,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent pb-16 pt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[2.5rem] border border-border bg-transparent p-6 shadow-2xl md:p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-black leading-[0.9] tracking-tighter text-foreground md:text-6xl"
          >
            Telegram <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f0abfc]">Bots</span>
          </motion.h1>
          <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-foreground/70 md:text-lg">
            Automation bots for trading, alerts, and productivity on Telegram — add them to your groups and channels.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex max-w-3xl items-center rounded-2xl border border-border bg-transparent p-2 shadow-xl lg:mx-0"
          >
            <div className="flex flex-1 items-center px-4">
              <Search className="mr-3 h-5 w-5 opacity-40" />
              <input
                type="text"
                placeholder="Search bots, commands, channels..."
                className="w-full bg-transparent py-3 text-sm font-bold tracking-tight text-foreground focus:outline-none md:text-base"
              />
            </div>
            <button className="rounded-xl bg-[#d946ef] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:opacity-90 active:scale-95">
              Add Bot
            </button>
          </motion.div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredBots.map((bot) => (
              <Link
                key={bot.name}
                href="#"
                className="group relative block p-8 rounded-[2.5rem] border border-border bg-transparent hover:bg-white/5 transition-all hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-xl group-hover:scale-110 transition-all bg-white/10 text-[#d946ef]">
                  {bot.icon}
                </div>
                <h3 className="text-xl font-black mb-2 tracking-tight">{bot.name}</h3>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#d946ef]/60 mb-4">{bot.category}</div>
                <p className="text-sm font-medium opacity-70 leading-relaxed">{bot.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest opacity-40">Add to Telegram</span>
                  <div className="text-[#d946ef] font-black">{bot.rating}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

