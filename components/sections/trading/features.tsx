"use client";

import { motion } from "framer-motion";
import {
  LayoutDashboard,
  CandlestickChart,
  ShieldCheck,
  Cpu,
  Landmark,
  BadgeIndianRupee,
} from "lucide-react";

const features = [
  {
    title: "Indian F&O Engine",
    desc: "Trade index futures & options and stock options with exchange-style contract depth and expiry visibility.",
    icon: <Landmark className="text-[#7CFC00]" />,
  },
  {
    title: "Crypto & Forex Futures",
    desc: "Access crypto perpetual/futures and forex futures from the same execution panel with unified margin monitoring.",
    icon: <CandlestickChart className="text-[#7CFC00]" />,
  },
  {
    title: "Fast, Reliable Execution",
    desc: "Place orders quickly with real-time updates and clear order statuses from submit to fill.",
    icon: <Cpu className="text-[#7CFC00]" />,
  },
  {
    title: "Risk & Compliance Guardrails",
    desc: "Pre-trade checks, margin sufficiency alerts, and position-level controls to reduce accidental over-exposure.",
    icon: <ShieldCheck className="text-[#7CFC00]" />,
  },
  {
    title: "Beginner-Friendly Trade Console",
    desc: "One clear dashboard for watchlists, positions, option chains, and profit/loss tracking.",
    icon: <LayoutDashboard className="text-[#7CFC00]" />,
  },
  {
    title: "Flat ₹5 Per Buy/Sell",
    desc: "Transparent brokerage: ₹5 on every buy side and ₹5 on every sell side, with no hidden confusion.",
    icon: <BadgeIndianRupee className="text-white" />,
  },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-background py-32">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-24 text-center">
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-foreground md:text-[5rem]">
            Broker-Grade <br /> <span className="text-[#7CFC00]">Infrastructure.</span>
          </h2>
          <p className="mx-auto max-w-3xl text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Designed to look and operate like a real execution platform, not a learning simulator.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group rounded-[3rem] border border-border bg-card p-10 shadow-2xl transition-all hover:border-[#7CFC00]/50 hover:bg-[#7CFC00]/10 active:scale-95"
            >
              <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl border border-[#7CFC00]/25 bg-[#7CFC00]/5 transition-transform group-hover:scale-110">
                {f.icon}
              </div>
              <h3 className="mb-4 text-2xl font-black tracking-tight text-foreground">{f.title}</h3>
              <p className="text-sm font-medium leading-relaxed text-muted-foreground transition-colors group-hover:text-slate-600">{f.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

