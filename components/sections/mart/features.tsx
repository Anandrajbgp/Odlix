"use client";

import { Truck, CreditCard, ShieldCheck, RotateCcw, HeadphonesIcon, Sparkles } from "lucide-react";

const features = [
  { title: "Fast Delivery", desc: "Same-day/next-day shipping in major cities.", icon: <Truck className="h-5 w-5" /> },
  { title: "Secure Payments", desc: "UPI, cards, netbanking, wallet checkout.", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Trusted Quality", desc: "Verified products from curated sellers.", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Easy Returns", desc: "Simple return & replacement workflow.", icon: <RotateCcw className="h-5 w-5" /> },
  { title: "24/7 Support", desc: "Customer care for order and payment help.", icon: <HeadphonesIcon className="h-5 w-5" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-slate-700/60 bg-transparent py-16 md:py-24 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ea580c]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fb923c]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-amber-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-amber-300 border border-amber-500/40 backdrop-blur-md mb-3">
            <Sparkles className="h-4 w-4 text-amber-300" />
            Why Choose Odlix Mart
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-300 to-yellow-300">Shopping Experience</span>
          </h2>
          <p className="text-slate-200 text-sm md:text-base font-semibold mt-3">
            Unmatched reliability, lightning-fast delivery, and verified product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-6 text-center shadow-xl transition-all hover:bg-slate-900/30 hover:border-amber-400">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-slate-700 bg-slate-900/50 text-amber-400 shadow-md">
                {f.icon}
              </div>
              <h4 className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-white">{f.title}</h4>
              <p className="text-xs font-semibold text-slate-300 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
