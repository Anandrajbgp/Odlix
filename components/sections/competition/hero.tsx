"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useMemo, useState } from "react";
import { Search, Trophy, Clock3, Target, ShieldCheck } from "lucide-react";

const exams = ["SSC", "Banking", "Railway", "UPSC", "State PSC", "Teaching", "Defence"];

export function Hero() {
  const [searchQuery, setSearchQuery] = useState("");
  const testLibraryHref = useMemo(() => {
    const trimmedQuery = searchQuery.trim();
    if (trimmedQuery.length === 0) {
      return "#test-library";
    }

    return `#test-library?query=${encodeURIComponent(trimmedQuery)}`;
  }, [searchQuery]);

  return (
    <section className="relative overflow-hidden border-b border-border bg-background pb-12 pt-8 md:pb-14 md:pt-12">
      <div className="absolute left-0 top-0 h-full w-full bg-[radial-gradient(circle_at_20%_0%,rgba(255,20,147,0.18),transparent_55%)]" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-[#0ea5e9]/35 bg-[#0ea5e9]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.18em] text-[#0ea5e9]">
          India&apos;s Competitive Mock Test Hub
        </div>

        <div className="grid grid-cols-1 gap-6 rounded-[2rem] border border-border bg-card p-6 shadow-xl lg:grid-cols-[1.35fr_1fr] lg:p-8">
          <div>
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-4 text-4xl font-black leading-[0.92] tracking-tight text-foreground md:text-6xl"
            >
              Mock Tests, Rank Analysis, and AI Guidance in <span className="text-[#0ea5e9]">One Page</span>
            </motion.h1>
            <p className="mb-6 max-w-2xl text-sm font-medium leading-relaxed text-foreground/70 md:text-base">
              Full-length exam simulations, section-wise practice, real-time rank predictor, and weak-topic diagnostics for all major competitive exams.
            </p>

            <div className="mb-5 flex items-center rounded-2xl border border-border bg-background p-2 shadow-sm">
              <div className="flex flex-1 items-center px-3">
                <Search className="mr-3 h-5 w-5 text-foreground/35" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(event) => setSearchQuery(event.target.value)}
                  placeholder="Search SSC CGL, SBI PO, UPSC Prelims, RRB NTPC..."
                  className="w-full bg-transparent py-3 text-sm font-bold tracking-tight text-foreground focus:outline-none"
                />
              </div>
              <a href={testLibraryHref} className="rounded-xl bg-zinc-950 px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#0ea5e9] active:scale-95 dark:bg-white dark:text-zinc-950">
                Find Test
              </a>
            </div>

            <div className="mb-6 flex flex-wrap gap-2">
              {exams.map((exam) => (
                <span
                  key={exam}
                  className="rounded-full border border-border bg-background px-3 py-1.5 text-[10px] font-black uppercase tracking-[0.14em] text-foreground/65"
                >
                  {exam}
                </span>
              ))}
            </div>

            <div className="flex flex-wrap gap-3">
              <Link href={testLibraryHref} className="rounded-xl bg-foreground px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-background transition-all hover:opacity-90 active:scale-95">
                Start Free Mock
              </Link>
              <Link href="#plans" className="rounded-xl border border-border px-5 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/80 transition-all hover:bg-muted active:scale-95">
                View Plans
              </Link>
            </div>
          </div>

          <div className="rounded-2xl border border-border bg-background p-5 shadow-inner">
            <h3 className="mb-4 text-xs font-black uppercase tracking-[0.2em] text-foreground/45">Today&apos;s Performance Snapshot</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Trophy className="mt-0.5 h-4 w-4 text-[#f59e0b]" />
                <span className="text-sm font-semibold text-foreground/80">3,42,891 students attempted tests today</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Clock3 className="mt-0.5 h-4 w-4 text-[#0d9488]" />
                <span className="text-sm font-semibold text-foreground/80">Live timers and exam-like interface enabled</span>
              </div>
              <div className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3">
                <Target className="mt-0.5 h-4 w-4 text-[#10b981]" />
                <span className="text-sm font-semibold text-foreground/80">AI detected your top 3 weak areas instantly</span>
              </div>
            </div>

            <div className="mt-5 rounded-xl border border-[#0ea5e9]/30 bg-[#0ea5e9]/10 px-4 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-[#0ea5e9]">
              <ShieldCheck className="mr-2 inline h-3.5 w-3.5" />
              Trusted by aspirants across 120+ exam categories
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
