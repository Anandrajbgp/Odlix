"use client";

import Link from "next/link";
import { Search, Star, LayoutGrid, Gamepad2, TrendingUp, Sparkles } from "lucide-react";

const appStoreCategories = [
  { id: "popular", label: "Popular", icon: <Star className="w-4 h-4 text-[#F97316]" /> },
  { id: "apps", label: "Apps", icon: <LayoutGrid className="w-4 h-4 text-[#F97316]" /> },
  { id: "game", label: "Games", icon: <Gamepad2 className="w-4 h-4 text-[#F97316]" /> },
  { id: "top", label: "Top Trending", icon: <TrendingUp className="w-4 h-4 text-[#F97316]" /> },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-6 md:pt-32 md:pb-8 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FFF7ED] border border-[#F97316]/30 text-[#F97316] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#F97316]" />
            <span>Curated Software & App Ecosystem</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Odlix <span className="text-[#F97316]">App Store</span>
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-xl mx-auto">
            Discover, download, and manage enterprise apps, creator tools, and productivity utilities.
          </p>
        </div>

        {/* Clean Search Input */}
        <div className="mb-6 flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-sm max-w-3xl mx-auto">
          <Search className="ml-2 mr-3 h-4 w-4 text-[#F97316]" />
          <input
            type="text"
            placeholder="Search apps, tools, developer kits..."
            className="w-full bg-transparent py-1.5 text-sm font-semibold text-[#0F172A] placeholder-[#475569] focus:outline-none"
          />
          <button
            type="button"
            className="rounded-xl bg-[#F97316] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#EA580C] shadow-sm cursor-pointer shrink-0 ml-2"
          >
            Search
          </button>
        </div>

        {/* Top Category Horizontal Pills */}
        <div className="flex flex-wrap items-center justify-center gap-3">
          {appStoreCategories.map((cat) => (
            <Link
              key={cat.id}
              href="#top-apps"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-[#FFF7ED] hover:border-[#F97316]/40 transition-all shadow-sm"
            >
              <span>{cat.icon}</span>
              <span className="text-xs font-bold text-[#0F172A] whitespace-nowrap">{cat.label}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
