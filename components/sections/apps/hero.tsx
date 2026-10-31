"use client";

import Link from "next/link";
import { Search, Star, LayoutGrid, Gamepad2, TrendingUp } from "lucide-react";

const appStoreCategories = [
  { id: "popular", label: "Popular", icon: <Star className="w-6 h-6" /> },
  { id: "apps", label: "Apps", icon: <LayoutGrid className="w-6 h-6" /> },
  { id: "game", label: "Game", icon: <Gamepad2 className="w-6 h-6" /> },
  { id: "top", label: "Top", icon: <TrendingUp className="w-6 h-6" /> },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent pb-16 pt-20">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_50%_0%,var(--platform-primary),transparent_60%)] opacity-20 dark:opacity-40" />
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-transparent p-4 lg:grid-cols-[1fr_auto] lg:items-center shadow-2xl">
          <div className="flex items-center rounded-xl border border-border px-4 py-3">
            <Search className="ml-2 mr-3 h-5 w-5 opacity-50" />
            <input type="text" placeholder="Search apps, tools, resources..." className="w-full bg-transparent py-2 text-sm font-bold tracking-tight text-foreground placeholder-foreground/50 focus:outline-none md:text-base" />
          </div>
          <button type="button" className="rounded-xl bg-[var(--platform-primary)] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:opacity-90 active:scale-95">Search</button>
          <div className="overflow-x-auto scrollbar-none rounded-2xl border border-border bg-transparent p-3 shadow-xl">
            <div className="flex items-center justify-between min-w-[700px] gap-2">
              {appStoreCategories.map((cat) => (
                <Link key={cat.id} href="#top-apps" className="flex flex-col items-center justify-center p-3 rounded-2xl hover:bg-white/10 transition-all group flex-1 border border-transparent group-hover:border-[var(--platform-accent)]/50">
                  <span className="text-2xl mb-1 group-hover:scale-125 transition-transform text-[var(--platform-accent)]">{cat.icon}</span>
                  <span className="text-xs font-black text-foreground group-hover:text-[var(--platform-accent)] whitespace-nowrap">{cat.label}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}