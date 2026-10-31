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
    <section id="test-library" className="relative overflow-hidden bg-transparent py-20 md:py-24 text-white border-b border-slate-700/60">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl mb-3">Mock Test Library</h2>
            <p className="text-sm font-semibold text-slate-200 md:text-base">Attempt full tests, sectional tests, and previous-year style papers in one place.</p>
          </div>
          <a href="#plans" className="rounded-xl border border-slate-700 bg-slate-900/60 backdrop-blur-md px-5 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-200 transition-all hover:bg-slate-900">
            View All Exams
          </a>
        </div>

        <div className="mb-10 flex items-center rounded-2xl border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-4 shadow-xl">
          <Search className="ml-2 mr-3 h-5 w-5 text-cyan-300" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter tests by exam name or pattern"
            className="w-full bg-transparent py-2 text-sm font-bold text-white focus:outline-none placeholder:text-slate-400"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredTests.map((test) => (
            <div key={test.exam} className="rounded-3xl border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-7 shadow-xl transition-all hover:border-cyan-400">
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">{test.level}</div>
              <h3 className="mb-4 text-2xl font-black tracking-tight text-white">{test.exam}</h3>
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-black uppercase tracking-[0.16em] text-slate-300">
                <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5">{test.questions}</span>
                <span className="rounded-full border border-slate-700 bg-slate-900/60 px-3.5 py-1.5">{test.time}</span>
              </div>
              <button
                title="Test engine route required"
                className="mt-6 rounded-xl bg-gradient-to-r from-sky-400 to-cyan-400 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-sky-500/25"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 ? (
          <div className="mb-10 rounded-2xl border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl px-6 py-6 text-sm font-semibold text-slate-300 text-center">
            No test matched this filter. Try another keyword like SSC, SBI, UPSC, or Railway.
          </div>
        ) : null}
      </div>
    </section>
  );
}
