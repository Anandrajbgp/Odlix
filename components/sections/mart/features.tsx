"use client";

import { Truck, CreditCard, ShieldCheck, RotateCcw, HeadphonesIcon } from "lucide-react";

const features = [
  { title: "Fast Delivery", desc: "Same-day/next-day shipping in major cities.", icon: <Truck className="h-5 w-5" /> },
  { title: "Secure Payments", desc: "UPI, cards, netbanking, wallet checkout.", icon: <CreditCard className="h-5 w-5" /> },
  { title: "Trusted Quality", desc: "Verified products from curated sellers.", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Easy Returns", desc: "Simple return & replacement workflow.", icon: <RotateCcw className="h-5 w-5" /> },
  { title: "24/7 Support", desc: "Customer care for order and payment help.", icon: <HeadphonesIcon className="h-5 w-5" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-card py-16 text-foreground">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ea580c]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fb923c]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-background p-5 text-center shadow-sm transition-all hover:shadow-md">
              <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-card text-[var(--platform-accent)]">
                {f.icon}
              </div>
              <h4 className="mb-1 text-xs font-black uppercase tracking-[0.16em]">{f.title}</h4>
              <p className="text-xs font-medium text-foreground/55">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
