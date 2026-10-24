"use client";

import { Fingerprint, ShieldCheck, BarChart3, Zap } from "lucide-react";

const features = [
  {
    title: "Single Login (SSO)",
    desc: "One secure account to access every Odlix service instantly.",
    icon: <Fingerprint />,
  },
  {
    title: "100% Verified Freelancers",
    desc: "Agency projects are handled by thoroughly verified professionals.",
    icon: <ShieldCheck />,
  },
  {
    title: "High-Converting Tracking",
    desc: "Affiliate tracking built for reliable attribution and better conversions.",
    icon: <BarChart3 />,
  },
  {
    title: "Super-Fast Utility Apps",
    desc: "Lightweight, performance-first apps that load fast and work smoothly.",
    icon: <Zap />,
  },
];

export function Features() {
  return (
    <section className="py-20 md:py-24 bg-muted/20 text-foreground">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-6xl font-black mb-24 leading-[0.9] tracking-tighter">
          Why <span className="text-magenta-500">Choose Us</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {features.map((f, i) => (
            <div key={i} className="space-y-6 group">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 mx-auto flex items-center justify-center text-magenta-500 group-hover:bg-magenta-500 group-hover:text-white transition-all shadow-xl active:scale-90">
                {f.icon}
              </div>
              <h4 className="text-xl font-black tracking-tight">{f.title}</h4>
              <p className="text-muted-foreground font-medium text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
