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
    <section id="plans" className="relative overflow-hidden bg-muted/20 py-12 md:py-14">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Plans for Every Aspirant</h2>
          <p className="mt-3 text-sm font-medium text-foreground/60">Choose based on your preparation stage and target exam timeline.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                plan.highlight
                  ? "relative rounded-2xl border-2 border-[#0ea5e9] bg-card p-6 shadow-xl"
                  : "rounded-2xl border border-border bg-card p-6 shadow-sm"
              }
            >
              <div className={plan.highlight ? "mb-4 inline-block rounded-full bg-[#0ea5e9] px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-white" : "mb-4 inline-block rounded-full border border-border bg-background px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-foreground/60"}>
                {plan.badge}
              </div>

              <h3 className="text-2xl font-black tracking-tight text-foreground">{plan.title}</h3>
              <div className="mt-3 mb-5">
                <span className="text-4xl font-black tracking-tight text-foreground">{plan.price}</span>
                <span className="ml-2 text-xs font-black uppercase tracking-[0.14em] text-foreground/45">/ {plan.period}</span>
              </div>

              <ul className="space-y-2">
                {plan.points.map((point) => (
                  <li key={point} className="flex items-start gap-2 text-sm font-semibold text-foreground/75">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#10b981]" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <button
                title="Payment integration required"
                className={plan.highlight ? "mt-6 w-full rounded-xl bg-zinc-950 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#0ea5e9] dark:bg-white dark:text-zinc-950" : "mt-6 w-full rounded-xl border border-border bg-background px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/75 transition-all hover:bg-muted"}
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
