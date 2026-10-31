"use client";

import { motion } from "framer-motion";
import { ShieldCheck, CreditCard, Headphones, CheckCircle2, Lock } from "lucide-react";

const badges = [
  {
    title: "256-Bit SSL Data Security",
    desc: "Bank-grade end-to-end encryption safeguarding your profile credentials and activity logs.",
    icon: Lock,
    color: "text-cyan-300",
  },
  {
    title: "Instant UPI & Cashfree Checkout",
    desc: "PCI-DSS compliant payment processing with instant digital invoices and 0% hidden fees.",
    icon: CreditCard,
    color: "text-amber-300",
  },
  {
    title: "24/7 Dedicated Grievance SLA",
    desc: "Round-the-clock support response team for immediate resolution across all 8 platforms.",
    icon: Headphones,
    color: "text-emerald-300",
  },
  {
    title: "100% Verified Quality Standards",
    desc: "Thoroughly audited courses, vetted freelancers, and authentic merchandise vendors.",
    icon: CheckCircle2,
    color: "text-indigo-300",
  },
];

export function TrustBadges() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-transparent text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-900/15 backdrop-blur-xl p-8 sm:p-12 md:p-16 border border-slate-700/60 shadow-xl">
          <div className="absolute top-0 right-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[100px] pointer-events-none" />
          <div className="absolute bottom-0 left-0 h-80 w-80 rounded-full bg-indigo-500/10 blur-[100px] pointer-events-none" />

          <div className="text-center mb-12 relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-3">
              <ShieldCheck className="h-4 w-4 text-cyan-300" />
              Enterprise Assurance
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-white">
              Built on Uncompromised <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">
                Security & Trust
              </span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {badges.map((badge, idx) => {
              const Icon = badge.icon;
              return (
                <motion.div
                  key={badge.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-slate-900/25 backdrop-blur-md border border-slate-700/60 hover:border-cyan-400 hover:bg-slate-900/40 transition-all shadow-lg"
                >
                  <div className="h-12 w-12 rounded-xl bg-slate-900/50 backdrop-blur-md border border-slate-700/60 flex items-center justify-center mb-4 shadow-md">
                    <Icon className={`h-6 w-6 ${badge.color}`} />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2 leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-slate-200 font-semibold text-xs md:text-sm leading-relaxed">
                    {badge.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
