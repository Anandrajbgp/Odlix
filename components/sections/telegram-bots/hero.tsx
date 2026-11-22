"use client";

import Link from "next/link";
import { Send, Search, Smartphone, Shield, Zap, Sparkles } from "lucide-react";

const featuredBots = [
  {
    name: "TradeAlert Pro",
    category: "Trading",
    rating: 4.9,
    desc: "Real-time trading signals and market alerts.",
    icon: <Zap className="text-[#0088CC] h-5 w-5" />,
  },
  {
    name: "TaskMaster",
    category: "Productivity",
    rating: 4.8,
    desc: "Task automation and reminder bot for teams.",
    icon: <Smartphone className="text-[#0088CC] h-5 w-5" />,
  },
  {
    name: "Security Guard",
    category: "Security",
    rating: 4.7,
    desc: "Group moderation and anti-spam protection bot.",
    icon: <Shield className="text-[#0088CC] h-5 w-5" />,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-8 md:pt-32 md:pb-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E0F2FE] border border-[#0088CC]/30 text-[#0088CC] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0088CC]" />
            <span>Automated Telegram Bot Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Telegram <span className="text-[#0088CC]">Bots</span>
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-xl mx-auto">
            Automation bots for trading, alerts, and productivity on Telegram — add them to your groups and channels.
          </p>
        </div>

        {/* Search Bar */}
        <div className="mb-8 flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-sm max-w-3xl mx-auto">
          <Search className="ml-2 mr-3 h-4 w-4 text-[#0088CC]" />
          <input
            type="text"
            placeholder="Search bots, commands, channels..."
            className="w-full bg-transparent py-1.5 text-sm font-semibold text-[#0F172A] placeholder-[#475569] focus:outline-none"
          />
          <button
            type="button"
            className="rounded-xl bg-[#0088CC] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#006699] shadow-sm cursor-pointer shrink-0 ml-2"
          >
            Add Bot
          </button>
        </div>

        {/* Featured Bot Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {featuredBots.map((bot) => (
            <Link
              key={bot.name}
              href="#"
              className="group relative block p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#0088CC]/50 transition-all shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#E0F2FE] border border-[#0088CC]/30 shadow-sm group-hover:scale-110 transition-transform">
                {bot.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A] mb-1">{bot.name}</h3>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#0088CC] mb-3">{bot.category}</div>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed mb-4">{bot.desc}</p>
              <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-3">
                <span className="text-xs font-bold text-[#0088CC]">Add to Telegram →</span>
                <span className="text-xs font-extrabold text-[#0F172A]">★ {bot.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
