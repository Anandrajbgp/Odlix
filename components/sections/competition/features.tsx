"use client";

import { useEffect, useMemo, useState } from "react";
import { Search } from "lucide-react";

type TestLibraryItem = {
  exam: string;
  questions: string;
  time: string;
  level: string;
};

const testLibrary: TestLibraryItem[] = [
  { exam: "SSC CGL Tier-I", questions: "100 Q", time: "60 min", level: "Latest Pattern" },
  { exam: "SBI PO Prelims", questions: "100 Q", time: "60 min", level: "High Difficulty" },
  { exam: "RRB NTPC CBT", questions: "120 Q", time: "90 min", level: "Exam Standard" },
  { exam: "UPSC CSAT", questions: "80 Q", time: "120 min", level: "Concept Focused" },
];

export function Features() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const searchParams = new URLSearchParams(window.location.search);
    const initialQuery = searchParams.get("query");
    if (initialQuery !== null) {
      setQuery(initialQuery);
    }
  }, []);

  const filteredTests = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();
    if (normalizedQuery.length === 0) {
      return testLibrary;
    }

    return testLibrary.filter((test) => {
      const combined = `${test.exam} ${test.level}`.toLowerCase();
      return combined.includes(normalizedQuery);
    });
  }, [query]);

  return (
    <section id="test-library" className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="text-[#0D9488] font-extrabold tracking-wide text-xs uppercase mb-1 block">
              Curated Practice Sets
            </span>
            <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Mock Test Library</h2>
            <p className="text-xs sm:text-sm font-semibold text-[#475569] mt-1">Attempt full tests, sectional tests, and previous-year style papers in one place.</p>
          </div>
          <a href="#plans" className="btn-pill-secondary hover:bg-slate-200 text-xs font-bold uppercase tracking-wider self-start md:self-auto">
            View All Exams
          </a>
        </div>

        <div className="mb-6 flex items-center rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-3.5 shadow-sm">
          <Search className="ml-2 mr-3 h-4 w-4 text-[#0D9488]" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter tests by exam name or pattern..."
            className="w-full bg-transparent py-1 text-sm font-semibold text-[#0F172A] focus:outline-none placeholder:text-[#475569]"
          />
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredTests.map((test) => (
            <div key={test.exam} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm transition-all hover:border-[#0D9488]/50 hover:bg-white">
              <div className="mb-1 text-[11px] font-extrabold uppercase tracking-wider text-[#0D9488]">{test.level}</div>
              <h3 className="mb-3 text-xl font-bold tracking-tight text-[#0F172A]">{test.exam}</h3>
              <div className="flex flex-wrap items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#475569]">
                <span className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 shadow-sm">{test.questions}</span>
                <span className="rounded-full border border-[#E2E8F0] bg-white px-3 py-1 shadow-sm">{test.time}</span>
              </div>
              <button
                type="button"
                className="mt-4 btn-pill-primary bg-[#0D9488] hover:bg-[#0F766E] text-white shadow-sm active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 ? (
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] px-6 py-6 text-sm font-semibold text-[#475569] text-center">
            No test matched this filter. Try another keyword like SSC, SBI, UPSC, or Railway.
          </div>
        ) : null}
      </div>
    </section>
  );
}
