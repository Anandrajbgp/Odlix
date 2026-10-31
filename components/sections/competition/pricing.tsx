"use client";

import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    title: "Free",
    price: "₹0",
    period: "lifetime",
    badge: "Start Free",
    highlight: false,
    points: ["5 Full Mock Tests", "Daily Quiz", "Basic Rank & Accuracy Report", "Limited Topic Practice"],
    button: "Start Free",
  },
  {
    title: "Premium",
    price: "₹299",
    period: "month",
    badge: "Most Popular",
    highlight: true,
    points: ["Unlimited Full & Sectional Mocks", "All India Rank + Percentile", "AI Weakness & Revision Plan", "Detailed Explanations + Solutions"],
    button: "Upgrade to Premium",
  },
];

export function Pricing() {
  return (
    <section id="plans" className="relative overflow-hidden bg-transparent py-16 md:py-20 text-white border-b border-slate-700/60">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Plans for Every Aspirant</h2>
          <p className="mt-3 text-sm font-semibold text-slate-200">Choose based on your preparation stage and target exam timeline.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                plan.highlight
                  ? "relative rounded-[2.2rem] border-2 border-sky-400 bg-slate-900/30 backdrop-blur-xl p-8 shadow-2xl scale-[1.02]"
                  : "rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 shadow-xl"
              }
            >
              <div className={plan.highlight ? "mb-4 inline-block rounded-full bg-gradient-to-r from-sky-400 to-cyan-400 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-950" : "mb-4 inline-block rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-slate-300"}>
                {plan.badge}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-white">{plan.title}</h3>
              <div className="mt-3 mb-6">
                <span className="text-4xl font-black tracking-tight text-white">{plan.price}</span>
                <span className="ml-2 text-xs font-black uppercase tracking-[0.14em] text-slate-300">/ {plan.period}</span>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2.5 text-sm font-semibold text-slate-200">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-emerald-400 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                title="Payment integration required"
                className={plan.highlight ? "w-full rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition-all hover:scale-105 shadow-lg shadow-sky-500/25 active:scale-95" : "w-full rounded-xl border border-slate-700 bg-slate-900/60 px-5 py-3.5 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-slate-900 active:scale-95"}
              >
                {plan.button}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
