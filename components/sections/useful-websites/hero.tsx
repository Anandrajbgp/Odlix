"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Search, Monitor, Smartphone, Link as LinkIcon, Sparkles } from "lucide-react";

const featuredSites = [
  {
    name: "GitHub",
    category: "Development",
    rating: 4.9,
    desc: "Code hosting and collaboration platform for developers.",
    icon: <LinkIcon className="text-[#0284C7] h-5 w-5" />,
  },
  {
    name: "Canva",
    category: "Design",
    rating: 4.8,
    desc: "Easy graphic design tool for social media and branding.",
    icon: <Monitor className="text-[#0284C7] h-5 w-5" />,
  },
  {
    name: "Notion",
    category: "Productivity",
    rating: 4.7,
    desc: "All-in-one workspace for notes, tasks, and wikis.",
    icon: <Smartphone className="text-[#0284C7] h-5 w-5" />,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-transparent pt-28 pb-8 md:pt-32 md:pb-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#F0F9FF] border border-[#0284C7]/30 text-[#0284C7] text-xs sm:text-sm font-extrabold uppercase tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#0284C7]" />
            <span>Curated Digital Tools Directory</span>
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-[#0F172A] mb-3">
            Useful <span className="text-[#0284C7]">Websites</span>
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-xl mx-auto">
            Handpicked websites for productivity, learning, design, and daily tools — all in one clean directory.
          </p>
        </div>

        {/* Clean Search Input */}
        <div className="mb-8 flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3 shadow-sm max-w-3xl mx-auto">
          <Search className="ml-2 mr-3 h-4 w-4 text-[#0284C7]" />
          <input
            type="text"
            placeholder="Search websites, tools, resources..."
            className="w-full bg-transparent py-1.5 text-sm font-semibold text-[#0F172A] placeholder-[#475569] focus:outline-none"
          />
          <button
            type="button"
            className="rounded-xl bg-[#0284C7] px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all hover:bg-[#0369A1] shadow-sm cursor-pointer shrink-0 ml-2"
          >
            Explore
          </button>
        </div>

        {/* Featured Sites Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-left">
          {featuredSites.map((site) => (
            <Link
              key={site.name}
              href="#"
              className="group relative block p-6 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] hover:bg-white hover:border-[#0284C7]/50 transition-all shadow-sm"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#F0F9FF] border border-[#0284C7]/30 shadow-sm group-hover:scale-110 transition-transform">
                {site.icon}
              </div>
              <h3 className="text-lg font-extrabold text-[#0F172A] mb-1">{site.name}</h3>
              <div className="text-[10px] font-bold uppercase tracking-wider text-[#0284C7] mb-3">{site.category}</div>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed mb-4">{site.desc}</p>
              <div className="flex items-center justify-between border-t border-[#E2E8F0] pt-3">
                <span className="text-xs font-bold text-[#0284C7]">Visit Site →</span>
                <span className="text-xs font-extrabold text-[#0F172A]">★ {site.rating}</span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
