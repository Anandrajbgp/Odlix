"use client";

import { Truck, CreditCard, ShieldCheck, RotateCcw, HeadphonesIcon, Sparkles } from "lucide-react";

const features = [
  { title: "Fast Delivery", desc: "Same-day/next-day shipping in major cities.", icon: <Truck className="h-5 w-5 text-[#2563EB]" /> },
  { title: "Secure Payments", desc: "UPI, cards, netbanking, wallet checkout.", icon: <CreditCard className="h-5 w-5 text-[#2563EB]" /> },
  { title: "Trusted Quality", desc: "Verified products from curated sellers.", icon: <ShieldCheck className="h-5 w-5 text-[#2563EB]" /> },
  { title: "Easy Returns", desc: "Simple return & replacement workflow.", icon: <RotateCcw className="h-5 w-5 text-[#2563EB]" /> },
  { title: "24/7 Support", desc: "Customer care for order and payment help.", icon: <HeadphonesIcon className="h-5 w-5 text-[#2563EB]" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#EFF6FF] px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#2563EB] border border-[#2563EB]/30 shadow-sm mb-3">
            <Sparkles className="h-4 w-4 text-[#2563EB]" />
            Why Choose Odlix Mart
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            The Ultimate <span className="text-[#2563EB]">Shopping Experience</span>
          </h2>
          <p className="text-[#475569] text-sm md:text-base font-semibold mt-3">
            Unmatched reliability, lightning-fast delivery, and verified product quality.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-center shadow-sm hover:border-[#2563EB]/50 transition-all hover:bg-white">
              <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#2563EB]/30 bg-[#EFF6FF] shadow-sm">
                {f.icon}
              </div>
              <h4 className="mb-2 text-sm font-bold uppercase tracking-wider text-[#0F172A]">{f.title}</h4>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
