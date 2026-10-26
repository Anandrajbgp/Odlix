"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  Landmark,
  CandlestickChart,
  Cpu,
  ShieldCheck,
  LayoutDashboard,
  BadgeIndianRupee,
  Wallet,
  Users,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

type Feature = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  badge?: string;
  accent?: boolean;
};

const features: Feature[] = [
  {
    icon: <Landmark className="text-[#7CFC00]" />,
    title: "Indian F&O Engine",
    desc: "Trade index futures & options and stock options with exchange-style contract depth.",
    badge: "F&O Ready",
    accent: true,
  },
  {
    icon: <CandlestickChart className="text-[#7CFC00]" />,
    title: "Crypto & Forex Futures",
    desc: "Access crypto perpetuals and forex futures from one execution panel.",
    badge: "24/7 Markets",
  },
  {
    icon: <Cpu className="text-[#7CFC00]" />,
    title: "Fast, Reliable Execution",
    desc: "Place orders quickly with real-time updates from submit to fill.",
    badge: "Low Latency",
  },
  {
    icon: <ShieldCheck className="text-[#7CFC00]" />,
    title: "Risk & Compliance Guardrails",
    desc: "Pre-trade checks, margin sufficiency alerts, and position-level controls.",
    badge: "SEBI Aligned",
    accent: true,
  },
  {
    icon: <Wallet className="text-[#7CFC00]" />,
    title: "Capital Security",
    desc: "Start from ₹100, fund securely, and track capital & withdrawals from one ledger.",
    badge: "₹100 Min",
    accent: true,
  },
  {
    icon: <Users className="text-[#7CFC00]" />,
    title: "Trust Signals",
    desc: "Understand risk before every order and know your exact brokerage upfront.",
    badge: "Transparent",
  },
  {
    icon: <LayoutDashboard className="text-[#7CFC00]" />,
    title: "Beginner-Friendly Console",
    desc: "One clear dashboard for watchlists, positions, option chains, and P&L tracking.",
    badge: "Easy UI",
  },
  {
    icon: <BadgeIndianRupee className="text-white" />,
    title: "Flat ₹5 Per Side",
    desc: "Transparent brokerage: ₹5 buy + ₹5 sell per order, no hidden fees.",
    badge: "₹5 Flat",
    accent: true,
  },
];

export function FeaturesSecurity() {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#7CFC00]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#7CFC00]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#7CFC00]/30 bg-[#7CFC00]/10 px-3 py-1 text-[10px] font-black uppercase tracking-wider text-[#7CFC00]"
          >
            <CheckCircle2 className="h-3 w-3" />
            Why Traders Choose Odlix
          </motion.div>
          <h2 className="mt-8 mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-foreground md:text-[5rem]">
            Built for Real Markets
          </h2>
          <p className="mx-auto max-w-3xl text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Broker-grade execution, capital security, and trust signals in one clean platform.
          </p>
        </div>

        <div className="space-y-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className={cn(
                "group relative flex items-center gap-4 rounded-2xl border p-4 md:p-6 transition-all hover:shadow-lg",
                feature.accent
                  ? "border-[#7CFC00]/25 bg-[#7CFC00]/5 hover:border-[#7CFC00]/60 hover:bg-[#7CFC00]/10"
                  : "border-border hover:border-[#7CFC00]/30"
              )}
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border transition-transform group-hover:rotate-12">
                {feature.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <h3 className="text-lg font-black tracking-tight text-foreground">
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <span className="px-2 py-0.5 rounded border text-[10px] font-bold uppercase tracking-wider">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <p className="mt-1 text-sm font-medium leading-relaxed text-muted-foreground">
                  {feature.desc}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-4 w-4 text-[#7CFC00]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex items-center justify-between rounded-[3rem] border border-[#7CFC00]/25 bg-[#7CFC00]/5 p-8 md:p-12">
          <div className="max-w-2xl">
            <h3 className="mb-3 text-2xl font-black uppercase tracking-tight text-foreground">
              Ready to Start Trading?
            </h3>
            <p className="text-sm font-medium text-muted-foreground">
              Open your account in minutes and start trading from ₹100 with flat ₹5 per side brokerage.
            </p>
          </div>
          <button className="ml-4 md:ml-0 rounded-xl bg-[#7CFC00] px-6 py-3 text-xs font-black uppercase tracking-widest text-foreground shadow-xl shadow-[#7CFC00]/30 hover:bg-[#5cfc26] active:scale-95 transition-all">
            Open Trading Account
          </button>
        </div>
      </div>
    </section>
  );
}
