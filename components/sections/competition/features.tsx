"use client";

import { useEffect, useMemo, useState } from "react";
import { Clock3, BarChart3, BrainCircuit, BookOpenCheck, Trophy, ShieldCheck, Search } from "lucide-react";

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

const highlights = [
  {
    title: "Real Exam Timer",
    desc: "Strict timer, section flow, and negative marking exactly like actual exams.",
    icon: <Clock3 className="h-5 w-5" />,
    color: "#FF1493",
  },
  {
    title: "All India Rank",
    desc: "Instant percentile, rank movement, and peer comparison after submit.",
    icon: <BarChart3 className="h-5 w-5" />,
    color: "#00F5FF",
  },
  {
    title: "AI Weak-Area Map",
    desc: "Detect weak topics and get a daily correction plan with priority tags.",
    icon: <BrainCircuit className="h-5 w-5" />,
    color: "#32FF00",
  },
  {
    title: "Topic-wise Practice",
    desc: "Chapter and concept tests for revision before full-length mocks.",
    icon: <BookOpenCheck className="h-5 w-5" />,
    color: "#DFFF00",
  },
  {
    title: "Previous Year Feel",
    desc: "Paper style, question language, and attempt flow mirror real attempts.",
    icon: <Trophy className="h-5 w-5" />,
    color: "#FF5F1F",
  },
  {
    title: "Trusted Solutions",
    desc: "Detailed explanations with shortcuts and alternate solving methods.",
    icon: <ShieldCheck className="h-5 w-5" />,
    color: "#FFFFFF",
  },
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
    <section id="test-library" className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Mock Test Library</h2>
            <p className="mt-2 text-sm font-medium text-foreground/60">Attempt full tests, sectional tests, and previous-year style papers in one place.</p>
          </div>
          <a href="#plans" className="rounded-xl border border-border px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/70 transition-all hover:bg-muted">
            View All Exams
          </a>
        </div>

        <div className="mb-6 flex items-center rounded-xl border border-border bg-card p-2">
          <Search className="ml-2 mr-3 h-4 w-4 text-foreground/35" />
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Filter tests by exam name or pattern"
            className="w-full bg-transparent py-2 text-sm font-semibold text-foreground focus:outline-none"
          />
        </div>

        <div className="mb-12 grid grid-cols-1 gap-4 md:grid-cols-2">
          {filteredTests.map((test) => (
            <div key={test.exam} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:shadow-md">
              <div className="mb-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#FF1493]">{test.level}</div>
              <h3 className="mb-4 text-xl font-black tracking-tight text-foreground">{test.exam}</h3>
              <div className="flex flex-wrap items-center gap-2 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/55">
                <span className="rounded-full border border-border bg-background px-3 py-1">{test.questions}</span>
                <span className="rounded-full border border-border bg-background px-3 py-1">{test.time}</span>
              </div>
              <button
                title="Test engine route required"
                className="mt-4 rounded-lg bg-zinc-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#FF1493] dark:bg-white dark:text-zinc-950"
              >
                Start Test
              </button>
            </div>
          ))}
        </div>

        {filteredTests.length === 0 ? (
          <div className="mb-10 rounded-xl border border-border bg-card px-4 py-5 text-sm font-semibold text-foreground/65">
            No test matched this filter. Try another keyword like SSC, SBI, UPSC, or Railway.
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-2xl border border-border bg-card p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-3 inline-flex rounded-lg border px-3 py-2" style={{ color: item.color, borderColor: `${item.color}66`, backgroundColor: `${item.color}14` }}>
                {item.icon}
              </div>
              <h4 className="mb-2 text-base font-black tracking-tight text-foreground">{item.title}</h4>
              <p className="text-sm font-medium text-foreground/60">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
