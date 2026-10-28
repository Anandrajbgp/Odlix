"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter, Clock, Users, Ticket, Play, ChevronRight, Type, GraduationCap, ShieldAlert } from "lucide-react";
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
  Easy: "bg-[#10b981]/10 text-[#10b981] border-[#10b981]/20",
  Medium: "bg-[#f59e0b]/10 text-[#f59e0b] border-[#f59e0b]/20",
  Hard: "bg-[#ef4444]/10 text-[#ef4444] border-[#ef4444]/20",
};

const DIFFICULTY_DOT: Record<string, string> = {
  Easy: "bg-[#10b981]",
  Medium: "bg-[#f59e0b]",
  Hard: "bg-[#ef4444]",
};export default function MockTestsLibrary() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [difficulty, setDifficulty] = useState("All");

  const categories = ["All", "SSC", "Banking", "UPSC", "Railway", "Teaching", "Defence", "State PSC"];
  const difficulties = ["All", "Easy", "Medium", "Hard"];

  const filtered = TESTS.filter((t) => {
    const matchesSearch = t.title.toLowerCase().includes(search.toLowerCase()) || t.category.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = category === "All" || t.category === category;
    const matchesDifficulty = difficulty === "All" || t.difficulty === difficulty;
    return matchesSearch && matchesCategory && matchesDifficulty;
  });

  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-background/80 backdrop-blur sticky top-0 z-20">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link href="/competition" className="flex items-center gap-2 font-black text-2xl tracking-tighter">
              <GraduationCap className="h-7 w-7 text-[#0ea5e9]" />
              <span>Mock Hub</span>
            </Link>
            <div className="ml-auto flex items-center gap-3">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search mock tests..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-border bg-card text-sm font-bold focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
              <button className="px-4 py-3 rounded-xl border border-border bg-card hover:bg-muted transition-all font-bold text-sm">
                Filter <Filter className="ml-2 w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col lg:flex-row lg:items-start gap-8">
          <aside className="lg:w-72 flex-shrink-0 space-y-6">
            <div className="space-y-4">
              <p className="font-black text-xs uppercase tracking-widest text-muted-foreground">Category</p>
              <div className="space-y-2">
                {categories.map((c) => (
                  <button key={c} onClick={() => setCategory(c)} className={cn("w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all", category === c ? "bg-[#0ea5e9]/10 border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm" : "bg-card border-border text-foreground/70 hover:bg-muted hover:text-foreground")}>
                    <span>{c}</span>
                    {category === c && <ChevronRight className="w-3.5 h-3.5" />}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <p className="font-black text-xs uppercase tracking-widest text-muted-foreground">Difficulty</p>
              <div className="space-y-2">
                {difficulties.map((d) => (
                  <button key={d} onClick={() => setDifficulty(d)} className={cn("w-full flex items-center justify-between px-4 py-3 rounded-xl border text-sm font-bold transition-all", difficulty === d ? "bg-[#0ea5e9]/10 border-[#0ea5e9]/30 text-[#0ea5e9] shadow-sm" : "bg-card border-border text-foreground/70 hover:bg-muted hover:text-foreground")}>
                    <span>{d}</span>
                    <span className={`h-2 w-2 rounded-full ${DIFFICULTY_DOT[d] || "bg-muted"}`} />
                  </button>
                ))}
              </div>
            </div>
            <div className="p-4 rounded-2xl border border-border bg-card">
              <p className="font-black text-xs uppercase tracking-widest text-muted-foreground mb-3">Stats</p>
              <div className="space-y-3">
                <div className="flex justify-between text-sm"><span className="text-foreground/60 font-bold">Total Tests</span><span className="text-[#0ea5e9] font-black">{TESTS.length}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/60 font-bold">Free Tests</span><span className="text-[#10b981] font-black">{TESTS.filter((t) => t.price === "Free").length}</span></div>
                <div className="flex justify-between text-sm"><span className="text-foreground/60 font-bold">A/B Test Variants</span><span className="text-[#f59e0b] font-black">{TESTS.filter((t) => t.badge === "A/B Test").length}</span></div>
              </div>
            </div>
          </aside>

          <main className="flex-1">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h1 className="text-4xl font-black mb-1 tracking-tight">Mock Test Library</h1>
                <p className="text-foreground/60 font-medium">{filtered.length} test{filtered.length !== 1 ? "s" : ""} available</p>
              </div>
              <Link href="#" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-[#0ea5e9] text-slate-950 font-black text-xs uppercase tracking-widest shadow-xl shadow-[#0ea5e9]/25 hover:scale-[1.02] active:scale-[0.98] transition-all"><Play className="w-4 h-4" /> Start Practice</Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((test) => (
                <motion.div key={test.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="group relative overflow-hidden rounded-[2.5rem] border border-border bg-card p-6 transition-all hover:border-[#0ea5e9]/50 hover:shadow-xl hover:-translate-y-2">
                  <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity"><ShieldAlert className="h-5 w-5 text-[#f59e0b]" /></div>

                  <div className="mb-4 flex flex-wrap items-center gap-2">
                    <span className={`inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest ${DIFFICULTY_COLORS[test.difficulty]}`}>
                      <span className={`h-2 w-2 rounded-full ${DIFFICULTY_DOT[test.difficulty]}`} />
                      {test.difficulty}
                    </span>
                    {test.badge && (
                      <span className="inline-flex items-center gap-1 rounded-full border border-[#f59e0b]/30 bg-[#f59e0b]/10 px-2.5 py-0.5 text-[9px] font-black uppercase tracking-widest text-[#f59e0b]">{test.badge}</span>
                    )}
                  </div>

                  <h3 className="text-xl font-black mb-3 tracking-tight group-hover:text-[#0ea5e9] transition-colors">{test.title}</h3>

                  <div className="space-y-3 mb-6">
                    <div className="flex items-center gap-3 text-sm font-bold text-foreground/70"><Clock className="h-4 w-4 text-[#0ea5e9]" /><span>{test.duration}</span><span className="w-px h-3 bg-border"></span><Users className="h-4 w-4 text-[#0ea5e9]" /><span>{test.questions} Questions</span></div>
                    <div className="flex items-center gap-3 text-sm font-bold text-foreground/70"><Ticket className="h-4 w-4 text-[#0ea5e9]" /><span className={test.price === "Free" ? "text-[#10b981]" : "text-foreground"}>{test.price}</span><span className="w-px h-3 bg-border"></span><Type className="h-4 w-4 text-[#0ea5e9]" /><span>{test.type}</span></div>
                  </div>

                  <Link href={`/competition/mock-tests/${test.id}`} className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#0ea5e9]/5 border border-[#0ea5e9]/10 text-[#0ea5e9] font-black text-xs uppercase tracking-widest hover:bg-[#0ea5e9] hover:text-slate-950 transition-all active:scale-95">Start Test <ChevronRight className="w-4 h-4" /></Link>
                </motion.div>
              ))}
            </div>

            {filtered.length === 0 && (
              <div className="flex flex-col items-center justify-center py-20 text-center">
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mb-6"><Search className="h-8 w-8 text-muted-foreground" /></div>
                <h2 className="text-2xl font-black mb-2">No tests found</h2>
                <p className="text-foreground/50 max-w-xs">Try adjusting your search or filters.</p>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
