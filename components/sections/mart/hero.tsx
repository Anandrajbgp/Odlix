"use client";

import Link from "next/link";
import { Search, SlidersHorizontal } from "lucide-react";

const flipkartCategories = [
  { name: "Mobiles & Tech", icon: "📱" },
  { name: "Fashion", icon: "👕" },
  { name: "Electronics", icon: "💻" },
  { name: "Home & Kitchen", icon: "🏡" },
  { name: "Appliances", icon: "🧊" },
  { name: "Beauty & Grooming", icon: "✨" },
  { name: "Grocery & Mart", icon: "🛒" },
  { name: "Creator Studio", icon: "⚡" },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/10 bg-transparent pb-12 pt-28 md:pt-36">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(40,116,240,0.15),transparent_55%)]" />
      <div className="absolute -right-24 top-10 h-72 w-72 rounded-full bg-[#2874f0]/25 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-72 w-72 rounded-full bg-[#ff9f00]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Search & Filter Bar placed right above the Mobiles & Tech category bar */}
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-slate-700/60 bg-slate-950/85 backdrop-blur-2xl p-4 lg:grid-cols-[1fr_auto] lg:items-center shadow-xl">
          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 p-2">
            <Search className="ml-2 mr-3 h-4 w-4 text-cyan-300" />
            <input
              type="text"
              placeholder="Search products, categories, brands..."
              className="w-full bg-transparent py-2 text-sm font-bold text-white placeholder-slate-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-200 transition-all hover:bg-slate-900"
            >
              <SlidersHorizontal className="h-4 w-4 text-cyan-300" />
              Filters
            </button>
            <button
              type="button"
              className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-slate-700"
            >
              Search
            </button>
          </div>
        </div>

        {/* Flipkart style Top Category Horizontal Bar */}
        <div className="overflow-x-auto scrollbar-none rounded-2xl border border-slate-700/60 bg-slate-900/40 backdrop-blur-xl p-3 shadow-xl">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {flipkartCategories.map((cat) => (
              <Link
                key={cat.name}
                href="#top-deals"
                className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-white/10 transition-all group flex-1"
              >
                <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">{cat.icon}</span>
                <span className="text-xs font-black text-slate-200 group-hover:text-cyan-300 whitespace-nowrap">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
