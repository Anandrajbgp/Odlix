"use client";

import { Download, ShieldCheck, Layers, Code2, HeadphonesIcon, Sparkles } from "lucide-react";

const features = [
  { title: "Fast Downloads", desc: "High-speed app downloads with resume support.", icon: <Download className="h-5 w-5" /> },
  { title: "Secure & Verified", desc: "All apps scanned and verified for malware.", icon: <ShieldCheck className="h-5 w-5" /> },
  { title: "Auto Updates", desc: "Get notified when new versions of your apps are available.", icon: <Layers className="h-5 w-5" /> },
  { title: "Developer Tools", desc: "SDKs, APIs, and documentation for app creators.", icon: <Code2 className="h-5 w-5" /> },
  { title: "24/7 Support", desc: "Customer care for app issues and payments.", icon: <HeadphonesIcon className="h-5 w-5" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden border-y border-border bg-transparent py-16 md:py-24 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#ef4444]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#f87171]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[var(--platform-accent)]/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-[var(--platform-accent)] border border-[var(--platform-accent)]/40 backdrop-blur-md mb-3">
            <Sparkles className="h-4 w-4 text-[var(--platform-accent)]" />
            Why Choose Odlix App Store
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white">
            The Ultimate <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--platform-primary)] to-[var(--platform-accent)]">App Experience</span>
          </h2>
          <p className="text-foreground/60 text-sm md:text-base font-semibold mt-3">
            Discover, download, and manage your favorite apps all in one clean marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-border bg-transparent p-6 text-center shadow-xl transition-all hover:bg-white/10 hover:border-[var(--platform-accent)]">
              <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-white/10 text-[var(--platform-accent)] shadow-md">
                {f.icon}
              </div>
              <h4 className="mb-2 text-sm font-black uppercase tracking-[0.16em] text-white">{f.title}</h4>
              <p className="text-xs font-semibold text-foreground/50 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}