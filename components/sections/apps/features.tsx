"use client";

import { Download, ShieldCheck, Layers, Code2, HeadphonesIcon, Sparkles } from "lucide-react";

const features = [
  { title: "Fast Downloads", desc: "High-speed app downloads with resume support.", icon: <Download className="h-5 w-5 text-[#F97316]" /> },
  { title: "Secure & Verified", desc: "All apps scanned and verified for malware.", icon: <ShieldCheck className="h-5 w-5 text-[#F97316]" /> },
  { title: "Auto Updates", desc: "Get notified when new app versions are ready.", icon: <Layers className="h-5 w-5 text-[#F97316]" /> },
  { title: "Developer Tools", desc: "SDKs, APIs, and docs for app creators.", icon: <Code2 className="h-5 w-5 text-[#F97316]" /> },
  { title: "24/7 Support", desc: "Customer care for app issues and downloads.", icon: <HeadphonesIcon className="h-5 w-5 text-[#F97316]" /> },
];

export function Features() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#FFF7ED] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#F97316] border border-[#F97316]/30 shadow-sm mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#F97316]" />
            Why Choose Odlix App Store
          </div>
          <h2 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A]">
            The Ultimate <span className="text-[#F97316]">App Experience</span>
          </h2>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold mt-1">
            Discover, download, and manage your favorite apps in one clean marketplace.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-5">
          {features.map((f) => (
            <div key={f.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 text-center shadow-sm hover:border-[#F97316]/50 hover:bg-white transition-all">
              <div className="mx-auto mb-3 flex h-11 w-11 items-center justify-center rounded-2xl border border-[#F97316]/30 bg-[#FFF7ED] shadow-sm">
                {f.icon}
              </div>
              <h4 className="mb-1.5 text-xs font-bold uppercase tracking-wider text-[#0F172A]">{f.title}</h4>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
