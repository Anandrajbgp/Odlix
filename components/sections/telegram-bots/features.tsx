"use client";

import { Zap, Shield, Users, Clock, Sparkles, Smartphone } from "lucide-react";

const features = [
  { title: "One-Click Add", desc: "Add any Telegram bot to your groups with a single click.", icon: <Zap className="h-5 w-5" /> },
  { title: "Secure Bots", desc: "All bots are verified and scanned for security before listing.", icon: <Shield className="h-5 w-5" /> },
  { title: "Group Support", desc: "Bots work perfectly in groups, channels, and private chats.", icon: <Users className="h-5 w-5" /> },
  { title: "24/7 Uptime", desc: "Hosted bots run round the clock with reliable availability.", icon: <Clock className="h-5 w-5" /> },
  { title: "Mobile Ready", desc: "Use Telegram bots seamlessly on mobile and desktop apps.", icon: <Smartphone className="h-5 w-5" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-transparent py-16 md:py-24 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#d946ef]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#f0abfc]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#f0abfc]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[#f0abfc] border border-[#f0abfc]/40 backdrop-blur-md mb-3">
            <Sparkles className="h-4 w-4 text-[#f0abfc]" />
            Why Choose Odlix Telegram Bots
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#d946ef] to-[#f0abfc]">Bot Directory</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Automation bots for trading, alerts, and productivity on Telegram — add them to your groups and channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-transparent p-6 text-center shadow-xl transition-all hover:bg-white/10 hover:border-[#d946ef]/50">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/10 text-[#d946ef] shadow-md">
                {f.icon}
              </div>
              <h4 className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-white">{f.title}</h4>
              <p className="text-xs font-semibold text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
