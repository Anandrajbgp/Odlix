"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, Users, Ticket, Play, ChevronRight, GraduationCap } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const TESTS = [
  { id: "1", title: "SSC CGL Tier-I Full Mock", category: "SSC", questions: 100, duration: "60 min", difficulty: "Medium", price: "Free", type: "Full Syllabus", badge: "Popular" },
  { id: "2", title: "Banking PO Quantitative Aptitude", category: "Banking", questions: 50, duration: "35 min", difficulty: "Hard", price: "₹49", type: "Sectional", badge: "A/B Test" },
  { id: "3", title: "UPSC Prelims GS Paper-I", category: "UPSC", questions: 100, duration: "120 min", difficulty: "Hard", price: "Free", type: "Full Syllabus", badge: "New" },
  { id: "4", title: "Railway NTPC Reasoning", category: "Railway", questions: 30, duration: "25 min", difficulty: "Easy", price: "₹29", type: "Sectional", badge: "A/B Test" },
  { id: "5", title: "Teaching CTET Paper-I", category: "Teaching", questions: 150, duration: "150 min", difficulty: "Medium", price: "Free", type: "Full Syllabus", badge: "Verified" },
  { id: "6", title: "Defence CDS General Knowledge", category: "Defence", questions: 120, duration: "90 min", difficulty: "Medium", price: "₹79", type: "Sectional", badge: "A/B Test" },
  { id: "7", title: "State PSC Prelims Mock", category: "State PSC", questions: 100, duration: "120 min", difficulty: "Hard", price: "Free", type: "Full Syllabus", badge: "New" },
  { id: "8", title: "Banking Clerk English", category: "Banking", questions: 40, duration: "30 min", difficulty: "Easy", price: "₹39", type: "Sectional", badge: "A/B Test" },
];

const DIFFICULTY_COLORS: Record<string, string> = {
  Easy: "bg-emerald-500/20 text-emerald-300 border-emerald-500/40",
  Medium: "bg-amber-500/20 text-amber-300 border-amber-500/40",
  Hard: "bg-rose-500/20 text-rose-300 border-rose-500/40",
};

const DIFFICULTY_DOT: Record<string, string> = {
  Easy: "bg-emerald-400",
  Medium: "bg-amber-400",
  Hard: "bg-rose-400",
};

export default function MockTestsLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", "SSC", "Banking", "UPSC", "Railway", "Teaching", "Defence", "State PSC"];

  const filtered = TESTS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || t.category === category;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-transparent text-white pt-32 pb-24 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/15 px-4 py-1.5 text-xs font-black uppercase tracking-widest text-cyan-300 border border-cyan-500/40 backdrop-blur-md mb-3">
            <GraduationCap className="h-4 w-4 text-cyan-300" />
            Mock Test Library
          </div>
          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white mb-4">
            Practice & <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-emerald-300">Conquer Exams</span>
          </h1>
          <p className="text-slate-200 text-sm md:text-base font-semibold max-w-xl mx-auto">
            Choose from hundreds of simulated tests with detailed rank analytics and instant score reports.
          </p>
        </div>

        {/* Clean Search & Category Filter Bar */}
        <div className="mb-10 space-y-4 rounded-[2rem] border border-slate-700/60 bg-slate-950/85 backdrop-blur-2xl p-6 shadow-xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-cyan-300" />
            <input
              type="text"
              placeholder="Search mock tests by exam title or category..."
              className="w-full pl-12 pr-4 py-3.5 rounded-2xl border border-slate-700 bg-slate-900 text-sm font-bold text-white placeholder-slate-400 focus:outline-none focus:border-cyan-400 transition-all shadow-inner"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={cn(
                  "px-5 py-2.5 rounded-xl border text-xs font-black uppercase tracking-wider transition-all",
                  category === c
                    ? "bg-gradient-to-r from-cyan-500 to-teal-400 border-cyan-400 text-slate-950 shadow-md"
                    : "border-slate-700 bg-slate-900 text-slate-300 hover:bg-slate-800 hover:text-white"
                )}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-6 transition-all hover:border-cyan-400 hover:bg-slate-900/35 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="mb-4 flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-3 py-0.5 text-[10px] font-black uppercase tracking-widest ${DIFFICULTY_COLORS[test.difficulty]}`}>
                    <span className={`h-2 w-2 rounded-full ${DIFFICULTY_DOT[test.difficulty]}`} />
                    {test.difficulty}
                  </span>
                  {test.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-500/40 bg-amber-500/20 px-3 py-0.5 text-[10px] font-black uppercase tracking-widest text-amber-300">
                      {test.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-black mb-3 tracking-tight text-white group-hover:text-cyan-300 transition-colors">{test.title}</h3>

                <div className="space-y-2.5 mb-6 text-sm font-semibold text-slate-200">
                  <div className="flex items-center gap-3">
                    <Clock className="h-4 w-4 text-cyan-300 shrink-0" />
                    <span>{test.duration}</span>
                    <span className="w-px h-3 bg-slate-700"></span>
                    <Users className="h-4 w-4 text-cyan-300 shrink-0" />
                    <span>{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Ticket className="h-4 w-4 text-cyan-300 shrink-0" />
                    <span className={test.price === "Free" ? "text-emerald-400 font-black" : "text-white font-black"}>{test.price}</span>
                    <span className="w-px h-3 bg-slate-700"></span>
                    <span className="text-slate-300">{test.type}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/competition/mock-tests/${test.id}`}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 text-slate-950 font-black text-xs uppercase tracking-widest transition-all hover:scale-105 shadow-md active:scale-95"
              >
                Start Test <ChevronRight className="w-4 h-4" />
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-20 text-center rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl">
            <div className="w-16 h-16 rounded-full bg-slate-800/80 flex items-center justify-center mb-4 border border-slate-700">
              <Search className="h-8 w-8 text-slate-400" />
            </div>
            <h3 className="text-2xl font-black mb-2 text-white">No tests found</h3>
            <p className="text-slate-300 text-sm font-semibold">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
