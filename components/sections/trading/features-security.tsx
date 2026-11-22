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
    icon: <Landmark className="text-[#10B981]" />,
    title: "Indian F&O Engine",
    desc: "Trade index futures & options and stock options with exchange-style contract depth.",
    badge: "F&O Ready",
    accent: true,
  },
  {
    icon: <CandlestickChart className="text-[#10B981]" />,
    title: "Crypto & Forex Futures",
    desc: "Access crypto perpetuals and forex futures from one execution panel.",
    badge: "24/7 Markets",
  },
  {
    icon: <Cpu className="text-[#10B981]" />,
    title: "Fast, Reliable Execution",
    desc: "Place orders quickly with real-time updates from submit to fill.",
    badge: "Low Latency",
  },
  {
    icon: <ShieldCheck className="text-[#10B981]" />,
    title: "Risk & Compliance Guardrails",
    desc: "Pre-trade checks, margin sufficiency alerts, and position-level controls.",
    badge: "SEBI Aligned",
    accent: true,
  },
  {
    icon: <Wallet className="text-[#10B981]" />,
    title: "Capital Security",
    desc: "Start from ₹100, fund securely, and track capital & withdrawals from one ledger.",
    badge: "₹100 Min",
    accent: true,
  },
  {
    icon: <Users className="text-[#10B981]" />,
    title: "Trust Signals",
    desc: "Understand risk before every order and know your exact brokerage upfront.",
    badge: "Transparent",
  },
  {
    icon: <LayoutDashboard className="text-[#10B981]" />,
    title: "Beginner-Friendly Console",
    desc: "One clear dashboard for watchlists, positions, option chains, and P&L tracking.",
    badge: "Easy UI",
  },
  {
    icon: <BadgeIndianRupee className="text-[#10B981]" />,
    title: "Flat ₹5 Per Side",
    desc: "Transparent brokerage: ₹5 buy + ₹5 sell per order, no hidden fees.",
    badge: "₹5 Flat",
    accent: true,
  },
];

export function FeaturesSecurity() {
  return (
    <section className="relative overflow-hidden bg-transparent py-24 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full border border-[#10B981]/30 bg-[#ECFDF5] px-3.5 py-1.5 text-[10px] font-black uppercase tracking-wider text-[#10B981] shadow-sm mb-4"
          >
            <CheckCircle2 className="h-3.5 w-3.5 text-[#10B981]" />
            Why Traders Choose Odlix
          </motion.div>
          <h2 className="mb-6 text-4xl font-black uppercase leading-none tracking-tighter text-[#0F172A] md:text-6xl">
            Built for Real Markets
          </h2>
          <p className="mx-auto max-w-3xl text-xs sm:text-sm font-black uppercase tracking-[0.2em] text-[#475569]">
            Broker-grade execution, capital security, and trust signals in one clean platform.
          </p>
        </div>

        <div className="space-y-4">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.04 }}
              className="group relative flex items-center gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 md:p-6 transition-all hover:bg-white hover:border-[#10B981]/50 shadow-sm"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#10B981]/30 bg-[#ECFDF5] text-[#10B981] transition-transform group-hover:scale-110 shrink-0">
                {feature.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-black tracking-tight text-[#0F172A]">
                    {feature.title}
                  </h3>
                  {feature.badge && (
                    <span className="px-2.5 py-0.5 rounded-full border border-[#10B981]/30 bg-[#ECFDF5] text-[10px] font-bold uppercase tracking-wider text-[#10B981]">
                      {feature.badge}
                    </span>
                  )}
                </div>
                <p className="text-xs font-semibold leading-relaxed text-[#475569]">
                  {feature.desc}
                </p>
              </div>
              <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowRight className="h-4 w-4 text-[#10B981]" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 relative overflow-hidden rounded-3xl border border-[#10B981]/30 bg-white p-8 md:p-12 shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="max-w-2xl relative z-10 text-center md:text-left">
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#ECFDF5] border border-[#10B981]/30 text-[#10B981] text-[10px] font-black uppercase tracking-[0.2em] mb-3 shadow-sm">
              Zero Joining Fee • Instant Onboarding
            </span>
            <h3 className="mb-2 text-2xl md:text-4xl font-black uppercase tracking-tight text-[#0F172A]">
              Ready to Start Trading?
            </h3>
            <p className="text-xs sm:text-sm font-semibold text-[#475569] leading-relaxed">
              Open your account in minutes and start trading from ₹100 with flat ₹5 per side brokerage.
            </p>
          </div>
          <div className="relative z-10 shrink-0">
            <button
              type="button"
              className="btn-pill-primary bg-[#10B981] hover:bg-[#059669] text-white shadow-md active:scale-95 transition-all text-xs font-bold uppercase tracking-wider cursor-pointer"
              style={{ backgroundColor: "#10B981", color: "#FFFFFF" }}
            >
              Open Trading Account
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
