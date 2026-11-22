"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Clock, Users, Ticket, ChevronRight, GraduationCap } from "lucide-react";
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
  Easy: "bg-emerald-100 text-emerald-800 border-emerald-300",
  Medium: "bg-amber-100 text-amber-800 border-amber-300",
  Hard: "bg-rose-100 text-rose-800 border-rose-300",
};

const DIFFICULTY_DOT: Record<string, string> = {
  Easy: "bg-emerald-600",
  Medium: "bg-amber-600",
  Hard: "bg-rose-600",
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
    <div className="min-h-screen bg-transparent text-[#0F172A] pt-28 pb-16 relative">
      <div className="container mx-auto px-4 max-w-6xl relative z-10">

        {/* Header Section */}
        <div className="text-center mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F0FDFA] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider text-[#0D9488] border border-[#0D9488]/30 shadow-sm mb-2">
            <GraduationCap className="h-4 w-4 text-[#0D9488]" />
            Mock Test Library
          </div>
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-[#0F172A] mb-2">
            Practice & <span className="text-[#0D9488]">Conquer Exams</span>
          </h1>
          <p className="text-[#475569] text-xs sm:text-sm font-semibold max-w-xl mx-auto">
            Choose from hundreds of simulated tests with detailed rank analytics and instant score reports.
          </p>
        </div>

        {/* Clean Search & Category Filter Bar */}
        <div className="mb-6 space-y-3 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-4 shadow-sm">
          <div className="relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0D9488]" />
            <input
              type="text"
              placeholder="Search mock tests by exam title or category..."
              className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-[#E2E8F0] bg-white text-sm font-semibold text-[#0F172A] placeholder-[#475569] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/30 transition-all shadow-sm"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2 pt-1">
            {categories.map((c) => {
              const isSelected = category === c;
              return (
                <button
                  key={c}
                  onClick={() => setCategory(c)}
                  className={cn(
                    "px-4 py-1.5 rounded-full border text-xs font-extrabold uppercase tracking-wider transition-all cursor-pointer",
                    isSelected
                      ? "shadow-sm"
                      : "border-[#E2E8F0] bg-white text-[#0F172A] hover:bg-[#F0FDFA]"
                  )}
                  style={isSelected ? { backgroundColor: "#0D9488", borderColor: "#0D9488", color: "#FFFFFF" } : {}}
                >
                  <span style={{ color: isSelected ? "#FFFFFF" : "#0F172A" }}>{c}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Tests Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {filtered.map((test) => (
            <motion.div
              key={test.id}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all hover:border-[#0D9488]/60 hover:bg-white shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="mb-2.5 flex flex-wrap items-center gap-2">
                  <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider ${DIFFICULTY_COLORS[test.difficulty]}`}>
                    <span className={`h-2 w-2 rounded-full ${DIFFICULTY_DOT[test.difficulty]}`} />
                    {test.difficulty}
                  </span>
                  {test.badge && (
                    <span className="inline-flex items-center gap-1 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wider text-amber-800">
                      {test.badge}
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-extrabold mb-2.5 tracking-tight text-[#0F172A] group-hover:text-[#0D9488] transition-colors">{test.title}</h3>

                <div className="space-y-1.5 mb-5 text-xs font-semibold text-[#475569]">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span>{test.duration}</span>
                    <span className="w-px h-3 bg-[#E2E8F0]"></span>
                    <Users className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span>{test.questions} Questions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Ticket className="h-4 w-4 text-[#0D9488] shrink-0" />
                    <span className={test.price === "Free" ? "text-emerald-600 font-bold" : "text-[#0F172A] font-bold"}>{test.price}</span>
                    <span className="w-px h-3 bg-[#E2E8F0]"></span>
                    <span className="text-[#475569]">{test.type}</span>
                  </div>
                </div>
              </div>

              <Link
                href={`/competition/mock-tests/${test.id}`}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-full font-bold text-xs uppercase tracking-wider transition-all hover:bg-[#0F766E] shadow-sm active:scale-95"
                style={{ backgroundColor: "#0D9488", color: "#FFFFFF" }}
              >
                <span style={{ color: "#FFFFFF" }}>Start Test</span>
                <ChevronRight className="w-4 h-4 text-white" />
              </Link>
            </motion.div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
            <div className="w-12 h-12 rounded-full bg-[#F0FDFA] flex items-center justify-center mb-2">
              <Search className="h-6 w-6 text-[#0D9488]" />
            </div>
            <h3 className="text-lg font-bold mb-1 text-[#0F172A]">No tests found</h3>
            <p className="text-[#475569] text-xs font-semibold">Try adjusting your search query or category filter.</p>
          </div>
        )}
      </div>
    </div>
  );
}
