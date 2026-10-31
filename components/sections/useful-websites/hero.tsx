"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Globe, Search, Monitor, Smartphone, Link as LinkIcon } from "lucide-react";

const featuredSites = [
  {
    name: "GitHub",
    category: "Development",
    rating: 4.9,
    desc: "Code hosting and collaboration platform for developers.",
    icon: <LinkIcon className="text-[#a855f7]" />,
  },
  {
    name: "Canva",
    category: "Design",
    rating: 4.8,
    desc: "Easy graphic design tool for social media and branding.",
    icon: <Monitor className="text-[#84cc16]" />,
  },
  {
    name: "Notion",
    category: "Productivity",
    rating: 4.7,
    desc: "All-in-one workspace for notes, tasks, and wikis.",
    icon: <Smartphone className="text-[#eab308]" />,
  },
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border bg-transparent pb-16 pt-20">
      <div className="container relative z-10 mx-auto px-4">
        <div className="mx-auto max-w-6xl space-y-8 rounded-[2.5rem] border border-border bg-transparent p-6 shadow-2xl md:p-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-black leading-[0.9] tracking-tighter text-foreground md:text-6xl"
          >
            Useful <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#a855f7] to-[#eab308]">Websites</span>
          </motion.h1>
          <p className="mb-8 max-w-2xl text-base font-medium leading-relaxed text-foreground/70 md:text-lg">
            Handpicked websites for productivity, learning, design, and daily tools — all in one clean directory.
          </p>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="mx-auto flex max-w-3xl items-center rounded-2xl border border-border bg-transparent p-2 shadow-xl lg:mx-0"
          >
            <div className="flex flex-1 items-center px-4">
              <Search className="mr-3 h-5 w-5 opacity-40" />
              <input
                type="text"
                placeholder="Search websites, tools, resources..."
                className="w-full bg-transparent py-3 text-sm font-bold tracking-tight text-foreground focus:outline-none md:text-base"
              />
            </div>
            <button className="rounded-xl bg-[#a855f7] px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-slate-950 transition-all hover:opacity-90 active:scale-95">
              Explore
            </button>
          </motion.div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredSites.map((site) => (
              <Link
                key={site.name}
                href="#"
                className="group relative block p-8 rounded-[2.5rem] border border-border bg-transparent hover:bg-white/5 transition-all hover:-translate-y-2"
              >
                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-2xl shadow-xl group-hover:scale-110 transition-all bg-white/10 text-[#a855f7]">
                  {site.icon}
                </div>
                <h3 className="text-xl font-black mb-2 tracking-tight">{site.name}</h3>
                <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#a855f7]/60 mb-4">{site.category}</div>
                <p className="text-sm font-medium opacity-70 leading-relaxed">{site.desc}</p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs font-black uppercase tracking-widest opacity-40">Visit Site</span>
                  <div className="text-[#a855f7] font-black">{site.rating}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

