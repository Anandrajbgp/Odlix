"use client";

import Link from "next/link";
import {
  Search,
  Calendar,
  MapPin,
  BookOpen,
  ShieldCheck,
  ChevronRight,
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
    <div className="min-h-screen bg-transparent text-[#0F172A] pt-28 pb-16">
      {/* Sticky Header */}
      <div className="border-b border-[#E2E8F0] bg-white/90 backdrop-blur sticky top-20 z-20 shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-col md:flex-row md:items-center gap-3">
            <Link href="/competition" className="flex items-center gap-2 font-black text-xl tracking-tight text-[#0F172A]">
              <GraduationCap className="h-6 w-6 text-[#0D9488]" />
              <span>Exam Explorer</span>
            </Link>
            <div className="ml-auto flex items-center gap-3 w-full md:w-auto">
              <div className="relative flex-1 md:w-80">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#0D9488]" />
                <input
                  type="text"
                  placeholder="Search exams..."
                  className="w-full pl-10 pr-4 py-2 rounded-xl border border-[#E2E8F0] bg-[#F8FAFC] text-sm font-semibold text-[#0F172A] focus:outline-none focus:ring-2 focus:ring-[#0D9488]/40 transition-all placeholder:text-[#475569]"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {/* Category Pills */}
        <div className="flex items-center gap-2.5 mb-6 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((c) => {
            const isSelected = category === c.key;
            return (
              <button
                key={c.key}
                onClick={() => setCategory(c.key)}
                className={cn(
                  "shrink-0 flex items-center gap-2 px-4 py-2 rounded-full border text-xs font-extrabold transition-all whitespace-nowrap cursor-pointer",
                  isSelected
                    ? "shadow-sm"
                    : "bg-white border-[#E2E8F0] text-[#0F172A] hover:bg-[#F0FDFA]"
                )}
                style={isSelected ? { backgroundColor: "#0D9488", borderColor: "#0D9488", color: "#FFFFFF" } : {}}
              >
                <c.icon className="h-4 w-4" style={{ color: isSelected ? "#FFFFFF" : "#0D9488" }} />
                <span style={{ color: isSelected ? "#FFFFFF" : "#0F172A" }}>{c.label}</span>
              </button>
            );
          })}
        </div>

        {/* Exams Sections */}
        <div className="space-y-8">
          {CATEGORIES.filter((c) => c.key !== "All").map((cat) => {
            const exams = byCategory[cat.key]?.filter((e) => filtered.includes(e)) || [];
            if (exams.length === 0 && category !== "All") return null;
            if (category !== "All" && category !== cat.key) return null;
            return (
              <section key={cat.key} className="relative pt-2 first:pt-0">
                <h2 className="mb-3 text-xl font-extrabold tracking-tight uppercase text-[#0F172A] flex items-center gap-2.5">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#0D9488]"></span>
                  {cat.label}
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {exams.map((exam) => (
                    <div
                      key={exam.id}
                      className="group relative block rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 transition-all hover:border-[#0D9488]/60 hover:shadow-md hover:bg-white"
                    >
                      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="h-4 w-4 text-[#0D9488]" />
                      </div>

                      <div className="mb-3 inline-flex items-center gap-1.5 rounded-full border border-[#0D9488]/30 bg-[#F0FDFA] px-3 py-1 text-[10px] font-extrabold uppercase tracking-wider text-[#0D9488]">
                        <BookOpen className="h-3 w-3 text-[#0D9488]" />
                        {exam.body}
                      </div>

                      <h3 className="text-lg font-extrabold mb-2 tracking-tight text-[#0F172A] group-hover:text-[#0D9488] transition-colors">
                        {exam.title}
                      </h3>

                      <div className="space-y-1.5 mb-4">
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                          <MapPin className="h-3.5 w-3.5 text-[#0D9488]" />
                          <span>{exam.eligibility}</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-semibold text-[#475569]">
                          <Calendar className="h-3.5 w-3.5 text-[#0D9488]" />
                          <span>{exam.date}</span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between">
                        <Link
                          href="/competition/mock-tests"
                          className="inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full font-bold text-xs uppercase tracking-wider shadow-sm transition-all hover:bg-[#0F766E]"
                          style={{ backgroundColor: "#0D9488", color: "#FFFFFF" }}
                        >
                          <span style={{ color: "#FFFFFF" }}>{exam.apply}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            );
          })}

          {category === "All" && filtered.length === 0 && (
            <div className="flex flex-col items-center justify-center py-12 text-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC]">
              <div className="w-12 h-12 rounded-full bg-[#F0FDFA] flex items-center justify-center mb-3">
                <Search className="h-6 w-6 text-[#0D9488]" />
              </div>
              <h2 className="text-lg font-bold mb-1 text-[#0F172A]">No exams found</h2>
              <p className="text-[#475569] max-w-xs text-xs font-semibold">Try adjusting your search or category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
