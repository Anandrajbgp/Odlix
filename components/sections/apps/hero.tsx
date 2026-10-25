"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Smartphone, Monitor, Globe, Apple } from "lucide-react";

export function Hero() {
  const downloadApps = [
    {
      label: "Windows",
      icon: <Monitor className="h-5 w-5" />,
      href: "#windows-download",
      tone: "border-[#2563eb]/35 bg-[#2563eb]/10 text-[#2563eb] hover:bg-[#2563eb]/20",
    },
    {
      label: "iOS",
      icon: <Apple className="h-5 w-5" />,
      href: "#ios-download",
      tone: "border-[#60a5fa]/35 bg-[#60a5fa]/10 text-[#60a5fa] hover:bg-[#60a5fa]/20",
    },
    {
      label: "Android",
      icon: <Smartphone className="h-5 w-5" />,
      href: "#android-download",
      tone: "border-[#10b981]/35 bg-[#10b981]/10 text-[#10b981] hover:bg-[#10b981]/20",
    },
  ];

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-16 pt-20">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,var(--platform-primary),transparent_60%)] opacity-15 dark:opacity-35" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[2.5rem] border border-border bg-card/80 p-6 shadow-2xl md:p-8">
          <div className="flex flex-wrap items-center justify-center gap-3 lg:justify-start">
            <Link
              href="#useful-websites"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-xl border border-[#2563eb]/40 bg-gradient-to-r from-[#2563eb]/20 via-[#60a5fa]/15 to-[#60a5fa]/20 px-5 py-3 text-[10px] font-black uppercase tracking-[0.18em] text-white shadow-[0_0_30px_rgba(255,20,147,0.35)] transition-all hover:scale-[1.02] active:scale-95"
            >
              <span className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(255,255,255,0.2),transparent_55%)] opacity-70" />
              <Globe className="relative h-4 w-4 text-[#2563eb]" />
              <span className="relative">Useful Websites</span>
            </Link>
          </div>

          <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-[1.3fr_1fr]">
            <div className="text-center lg:text-left">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 text-4xl font-black leading-[0.9] tracking-tighter text-foreground md:text-6xl"
              >
                Odlix <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--platform-primary)] to-[var(--platform-accent)]">App Store</span>
              </motion.h1>
              <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-foreground/70 md:text-lg">
                Play Store style discovery for business tools, learning apps, trading utilities, and creator software — all in one clean marketplace.
              </p>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="mx-auto flex max-w-3xl items-center rounded-2xl border border-border bg-background p-2 shadow-xl lg:mx-0"
              >
                <div className="flex flex-1 items-center px-4">
                  <Search className="mr-3 h-5 w-5 opacity-40" />
                  <input
                    type="text"
                    placeholder="Search apps, tools, resources..."
                    className="w-full bg-transparent py-3 text-sm font-bold tracking-tight text-foreground focus:outline-none md:text-base"
                  />
                </div>
                <button className="rounded-xl bg-[var(--platform-primary)] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:opacity-90 active:scale-95">
                  Discover
                </button>
              </motion.div>

              <div className="mt-6 space-y-3">
                <div className="text-[10px] font-black uppercase tracking-[0.2em] text-foreground/45">Download Apps</div>
                <div className="flex flex-wrap justify-center gap-3 lg:justify-start">
                  {downloadApps.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`inline-flex items-center gap-2 rounded-xl border px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] transition-all active:scale-95 ${item.tone}`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-border bg-background p-5 shadow-inner">
              <div className="mb-4 text-[10px] font-black uppercase tracking-[0.2em] text-foreground/40">Top Download This Week</div>
              <div className="space-y-3">
                {[
                  { name: "Odlix Trader", meta: "Finance • 4.9 ★" },
                  { name: "Odlix Learn", meta: "Education • 4.8 ★" },
                  { name: "Odlix Creator", meta: "Business • 4.7 ★" },
                ].map((app) => (
                  <div key={app.name} className="flex items-center justify-between rounded-2xl border border-border bg-card px-4 py-3">
                    <div>
                      <div className="text-sm font-black tracking-tight text-foreground">{app.name}</div>
                      <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/45">{app.meta}</div>
                    </div>
                    <button className="rounded-lg border border-[var(--platform-accent)]/35 bg-[var(--platform-accent)]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)] transition-all hover:bg-[var(--platform-accent)]/20 active:scale-95">
                      Install
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
