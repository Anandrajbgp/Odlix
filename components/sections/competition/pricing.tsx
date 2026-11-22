"use client";

import { CheckCircle2 } from "lucide-react";

const plans = [
  {
    title: "Free Plan",
    price: "₹0",
    period: "lifetime",
    badge: "Start Free",
    highlight: false,
    points: ["5 Full Mock Tests", "Daily Quiz", "Basic Rank & Accuracy Report", "Limited Topic Practice"],
    button: "Start Free",
  },
  {
    title: "Premium Pass",
    price: "₹299",
    period: "month",
    badge: "Most Popular",
    highlight: true,
    points: ["Unlimited Full & Sectional Mocks", "All India Rank + Percentile", "AI Weakness & Revision Plan", "Detailed Explanations + Solutions"],
    button: "Upgrade to Premium Pass",
  },
];

export function Pricing() {
  return (
    <section id="plans" className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <span className="text-[#0D9488] font-extrabold tracking-wide text-xs uppercase mb-1 block">
            Flexible Aspirant Passes
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Plans for Every Aspirant</h2>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-[#475569]">Choose based on your preparation stage and target exam timeline.</p>
        </div>

        <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-2">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className={
                plan.highlight
                  ? "relative rounded-3xl border-2 border-[#0D9488] bg-[#F0FDFA]/80 p-6 md:p-8 shadow-md"
                  : "rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 shadow-sm"
              }
            >
              <div
                className={
                  plan.highlight
                    ? "mb-3 inline-block rounded-full px-3 py-1 text-[11px] font-bold uppercase tracking-wider"
                    : "mb-3 inline-block rounded-full border border-[#E2E8F0] bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#475569]"
                }
                style={plan.highlight ? { backgroundColor: "#0D9488", color: "#FFFFFF" } : {}}
              >
                {plan.badge}
              </div>

              <h3 className="text-xl font-bold text-[#0F172A] mb-1">{plan.title}</h3>
              <div className="mb-4">
                <span className="text-3xl font-extrabold text-[#0F172A]">{plan.price}</span>
                <span className="text-xs font-semibold text-[#475569] ml-1.5">/ {plan.period}</span>
              </div>

              <ul className="space-y-2.5 mb-6">
                {plan.points.map((pt) => (
                  <li key={pt} className="flex items-center gap-2 text-xs md:text-sm font-semibold text-[#0F172A]">
                    <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              <button
                type="button"
                className="w-full py-3.5 px-6 rounded-full font-bold text-xs uppercase tracking-wider shadow-md active:scale-95 transition-all cursor-pointer"
                style={
                  plan.highlight
                    ? { backgroundColor: "#0D9488", color: "#FFFFFF" }
                    : { backgroundColor: "#F1F5F9", border: "1px solid #CBD5E1", color: "#0F172A" }
                }
              >
                <span style={{ color: plan.highlight ? "#FFFFFF" : "#0F172A" }}>{plan.button}</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
