"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Calendar,
  MapPin,
  BookOpen,
  ShieldCheck,
  ChevronRight,
  ArrowRight,
  GraduationCap,
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const EXAMS = [
  {
    id: "1",
    category: "UPSC",
    title: "Civil Services (IAS/IPS/IFS)",
    body: "Union Public Service Commission",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Pre: Jun 2025",
  },
  {
    id: "2",
    category: "UPSC",
    title: "Combined Defence Services (CDS)",
    body: "UPSC • Defence",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Nov 2025",
  },
  {
    id: "3",
    category: "SSC",
    title: "Combined Graduate Level (CGL)",
    body: "Staff Selection Commission",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Aug 2025",
  },
  {
    id: "4",
    category: "SSC",
    title: "Combined Higher Secondary (CHSL)",
    body: "Staff Selection Commission",
    eligibility: "12th Pass",
    apply: "Apply Now",
    date: "Oct 2025",
  },
  {
    id: "5",
    category: "Banking",
    title: "IBPS PO / Clerk",
    body: "Institute of Banking Personnel",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Sep 2025",
  },
  {
    id: "6",
    category: "Banking",
    title: "SBI PO / Clerk",
    body: "State Bank of India",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Jul 2025",
  },
  {
    id: "7",
    category: "Railway",
    title: "RRB NTPC / Group D",
    body: "Railway Recruitment Board",
    eligibility: "10th / 12th / Grad",
    apply: "Apply Now",
    date: "Dec 2025",
  },
  {
    id: "8",
    category: "Railway",
    title: "RRB JE / SSE",
    body: "Junior Engineer / SSE",
    eligibility: "Diploma / Engg",
    apply: "Apply Now",
    date: "Jan 2026",
  },
  {
    id: "9",
    category: "Teaching",
    title: "CTET / State TET",
    body: "Central / State Teacher Eligibility",
    eligibility: "Graduation + B.Ed",
    apply: "Apply Now",
    date: "Feb 2026",
  },
  {
    id: "10",
    category: "Teaching",
    title: "KVS / NVS Teacher",
    body: "Kendriya / Navodaya Vidyalaya",
    eligibility: "Graduation + B.Ed",
    apply: "Apply Now",
    date: "Mar 2026",
  },
  {
    id: "11",
    category: "Defence",
    title: "NDA / NA",
    body: "National Defence Academy",
    eligibility: "12th Pass",
    apply: "Apply Now",
    date: "Apr 2025",
  },
  {
    id: "12",
    category: "Defence",
    title: "AFCAT / CDSE",
    body: "Indian Air Force / UPSC",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Jun 2025",
  },
  {
    id: "13",
    category: "State PSC",
    title: "State PCS Prelims",
    body: "State Public Service Commission",
    eligibility: "Graduation",
    apply: "Apply Now",
    date: "Varies",
  },
  {
    id: "14",
    category: "State PSC",
    title: "State Police / Constable",
    body: "State Police Recruitment Board",
    eligibility: "10th / 12th",
    apply: "Apply Now",
    date: "Varies",
  },
];

const CATEGORIES = [
  { key: "All", label: "All Exams", icon: GraduationCap },
  { key: "UPSC", label: "UPSC", icon: ShieldCheck },
  { key: "SSC", label: "SSC", icon: BookOpen },
  { key: "Banking", label: "Banking", icon: MapPin },
  { key: "Railway", label: "Railway", icon: Calendar },
  { key: "Teaching", label: "Teaching", icon: BookOpen },
  { key: "Defence", label: "Defence", icon: ShieldCheck },
  { key: "State PSC", label: "State PSC", icon: MapPin },
];

export default function ExploreExams() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filtered = EXAMS.filter((e) => {
    const matchSearch =
      e.title.toLowerCase().includes(search.toLowerCase()) ||
      e.body.toLowerCase().includes(search.toLowerCase());
    const matchCat = category === "All" || e.category === category;
    return matchSearch && matchCat;
  });

  const byCategory: Record<string, typeof EXAMS> = {};
  EXAMS.forEach((e) => {
    if (!byCategory[e.category]) byCategory[e.category] = [];
    byCategory[e.category].push(e);
  });

  return (
    <div className="min-h-screen bg-slate-950 text-white pt-36 md:pt-44 pb-20">
      {/* Sticky Header */}
      <div className="border-b border-white/10 bg-slate-950/90 backdrop-blur sticky top-28 md:top-32 z-20 shadow-xl">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <Link href="/competition" className="flex items-center gap-2 font-black text-2xl tracking-tighter text-white">
              <GraduationCap className="h-7 w-7 text-[#0ea5e9]" />
              <span>Exam Explorer</span>
            </Link>
            <div className="ml-auto flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search exams..."
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-white/10 bg-slate-900 text-sm font-bold text-white focus:outline-none focus:ring-2 focus:ring-[#0ea5e9]/50 transition-all placeholder:text-slate-500"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-10">
        {/* Category Pills */}
        <div className="flex items-center gap-3 mb-10 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={cn(
                "shrink-0 flex items-center gap-2 px-5 py-3 rounded-xl border text-sm font-bold transition-all whitespace-nowrap",
                category === c.key
                  ? "bg-[#0ea5e9] border-[#0ea5e9] text-slate-950 shadow-lg shadow-[#0ea5e9]/25 font-black"
                  : "bg-slate-900 border-white/10 text-slate-300 hover:bg-slate-800 hover:text-white"
              )}
            >
              <c.icon className="h-4 w-4" />
              {c.label}
            </button>
          ))}
        </div>

        {/* Exams Sections */}
        <div className="space-y-16">
          {CATEGORIES.filter((c) => c.key !== "All").map((cat) => {
            const exams = byCategory[cat.key]?.filter((e) => filtered.includes(e)) || [];
            if (exams.length === 0 && category !== "All") return null;
            if (category !== "All" && category !== cat.key) return null;
            return (
              <section key={cat.key} className="relative pt-6 first:pt-0">
                <h2 className="mb-6 text-3xl font-black tracking-tight uppercase text-white flex items-center gap-3">
                  <span className="h-3 w-3 rounded-full bg-[#0ea5e9]"></span>
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="group relative block rounded-[2rem] border border-white/10 bg-slate-900 p-6 transition-all hover:border-[#0ea5e9]/60 hover:shadow-2xl hover:shadow-[#0ea5e9]/10 hover:-translate-y-1.5"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-5 w-5 text-[#0ea5e9]" />
                      </div>

                      <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-slate-800 px-3 py-1 text-[10px] font-black uppercase tracking-widest text-slate-300">
                        <BookOpen className="h-3 w-3 text-[#0ea5e9]" />
                        {exam.body}
                      </div>

                      <h3 className="text-xl font-black mb-3 tracking-tight text-white group-hover:text-[#0ea5e9] transition-colors">
                        {exam.title}
                      </h3>

                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                          <MapPin className="h-4 w-4 text-[#0ea5e9]" />
                          <span>{exam.eligibility}</span>
                        </div>
                        <div className="flex items-center gap-3 text-sm font-bold text-slate-300">
                          <Calendar className="h-4 w-4 text-[#0ea5e9]" />
                          <span>{exam.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          href="/competition/mock-tests"
                          className="px-6 py-3 rounded-xl bg-[#0ea5e9] text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-sky-400 transition-all shadow-lg shadow-[#0ea5e9]/20 active:scale-95"
                        >
                          {exam.apply}
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {category === "All" && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-20 text-center rounded-3xl border border-white/10 bg-slate-900">
              <div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center mb-6">
                <Search className="h-8 w-8 text-slate-400" />
              </div>
              <h2 className="text-2xl font-black mb-2 text-white">No exams found</h2>
              <p className="text-slate-400 max-w-xs text-sm">Try adjusting your search or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
