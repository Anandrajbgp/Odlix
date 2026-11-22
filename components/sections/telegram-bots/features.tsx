"use client";

import { Zap, Shield, Users, Clock, Sparkles, Smartphone } from "lucide-react";

const features = [
  { title: "One-Click Add", desc: "Add any Telegram bot to your groups with a single click.", icon: <Zap className="h-5 w-5 text-[#0088CC]" /> },
  { title: "Secure Bots", desc: "All bots are verified and scanned for security before listing.", icon: <Shield className="h-5 w-5 text-[#0088CC]" /> },
  { title: "Group Support", desc: "Bots work perfectly in groups, channels, and private chats.", icon: <Users className="h-5 w-5 text-[#0088CC]" /> },
  { title: "24/7 Uptime", desc: "Hosted bots run round the clock with reliable availability.", icon: <Clock className="h-5 w-5 text-[#0088CC]" /> },
  { title: "Mobile Ready", desc: "Use Telegram bots seamlessly on mobile and desktop apps.", icon: <Smartphone className="h-5 w-5 text-[#0088CC]" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#E0F2FE] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0088CC] border border-[#0088CC]/30 shadow-sm mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#0088CC]" />
            Why Choose Odlix Telegram Bots
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            The Ultimate <span className="text-[#0088CC]">Bot Directory</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Automation bots for trading, alerts, and productivity on Telegram — add them to your groups and channels.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-center shadow-sm hover:border-[#0088CC]/50 hover:bg-white transition-all">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#0088CC]/30 bg-[#E0F2FE] shadow-sm">
                {f.icon}
              </div>
              <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">{f.title}</h4>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
