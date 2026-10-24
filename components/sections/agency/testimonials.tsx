"use client";

import { CheckCircle2, Star } from "lucide-react";

const testimonials = [
  {
    quote:
      "Humare old website se leads almost nahi aa rahe the. Odlix ne complete redesign, landing pages aur CTA flow fix kiya. 45 din me lead quality clear improve hui aur sales team ko better enquiries milne lagi.",
    name: "Rohit Gupta",
    role: "Founder, Vedanta Interiors",
    proof: "B2B Lead Generation Website",
    result: "+212% Qualified Leads in 60 days",
    initials: "RG",
  },
  {
    quote:
      "Shopify store ka look weak tha aur ads ka conversion low tha. Odlix team ne product page structure, creatives aur ad funnel optimize kiya. Revenue stable grow hua aur ad spend ka output strong ho gaya.",
    name: "Niharika Jain",
    role: "Co-Founder, NexaKart Fashion",
    proof: "D2C Store Revamp + Ads",
    result: "2.9x ROAS with +176% revenue growth",
    initials: "NJ",
  },
  {
    quote:
      "Hume course launch ke liye full setup chahiye tha — payment, onboarding, WhatsApp flow, sab. Odlix ne execution fast aur clean diya. Team responsive thi aur post-launch support bhi strong tha.",
    name: "Aman Verma",
    role: "Director, Finpilot Academy",
    proof: "Course Platform + Automation",
    result: "₹14.6L launch cycle in first campaign",
    initials: "AV",
  },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden bg-slate-950 py-16 md:py-20 text-white">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_100%_100%,rgba(250,204,21,0.12),transparent_50%)]" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-10 text-center md:mb-12">
          <h2 className="text-3xl font-black uppercase leading-none tracking-tight md:text-5xl">
            Client <span className="text-[var(--platform-accent)] italic normal-case">Proof</span>
          </h2>
          <div className="mt-4 flex items-center justify-center gap-1 opacity-90">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star key={item} className="h-5 w-5 fill-current text-yellow-400" />
            ))}
          </div>
          <p className="mt-3 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">
            Real business outcomes. Real service delivery.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3 md:gap-6">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-xl"
            >
              <div>
                <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-emerald-400/25 bg-emerald-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-emerald-300">
                  <CheckCircle2 className="h-3.5 w-3.5" />
                  {item.proof}
                </div>

                <p className="text-sm font-medium leading-relaxed text-slate-200">“{item.quote}”</p>

                <div className="mt-5 rounded-xl border border-[var(--platform-accent)]/25 bg-[var(--platform-accent)]/10 px-3 py-2">
                  <p className="text-[10px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)]">Measured Result</p>
                  <p className="mt-1 text-sm font-black text-white">{item.result}</p>
                </div>
              </div>

              <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/15 bg-slate-800 text-sm font-black">
                  {item.initials}
                </div>
                <div>
                  <p className="text-base font-black tracking-tight">{item.name}</p>
                  <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-slate-400">{item.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
