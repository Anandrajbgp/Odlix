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
    <section className="relative overflow-hidden bg-transparent pb-12 pt-28 md:pt-36 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="mb-6 grid grid-cols-1 gap-4 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 lg:grid-cols-[1fr_auto] lg:items-center shadow-sm">
          <div className="flex items-center rounded-xl border border-[#E2E8F0] bg-white p-2 shadow-sm">
            <Search className="ml-2 mr-3 h-4 w-4 text-[#2563EB]" />
            <input
              type="text"
              placeholder="Search products, categories, brands..."
              className="w-full bg-transparent py-2 text-sm font-semibold text-[#0F172A] placeholder-[#475569] focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-[#CBD5E1] bg-[#F1F5F9] px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#0F172A] transition-all hover:bg-slate-200"
            >
              <SlidersHorizontal className="h-4 w-4 text-[#2563EB]" />
              Filters
            </button>
            <button
              type="button"
              className="rounded-xl bg-[#2563EB] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#1D4ED8] shadow-sm"
            >
              Search
            </button>
          </div>
        </div>

        {/* Top Category Horizontal Bar */}
        <div className="overflow-x-auto scrollbar-none rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-sm">
          <div className="flex items-center justify-between min-w-[700px] gap-2">
            {flipkartCategories.map((cat) => (
              <Link
                key={cat.name}
                href="#top-deals"
                className="flex flex-col items-center justify-center p-3 rounded-xl hover:bg-[#EFF6FF] transition-all group flex-1"
              >
                <span className="text-2xl mb-1 group-hover:scale-125 transition-transform">{cat.icon}</span>
                <span className="text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB] whitespace-nowrap">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
