"use client";

import { CheckCircle2, Sparkles, Clock3, BarChart3, BookOpenCheck, Trophy, ShieldCheck } from "lucide-react";

const points = [
  "Accuracy heatmap by subject and question type.",
  "Attempt behavior analysis: speed vs precision.",
  "Daily revision list auto-generated from wrong answers.",
  "Predicted rank range based on recent mock trends.",
];

const highlights = [
  { title: "Real Exam Timer", desc: "Strict timer, section flow, and negative marking exactly like actual exams.", icon: <Clock3 className="h-5 w-5 text-[#0D9488]" /> },
  { title: "All India Rank", desc: "Instant percentile, rank movement, and peer comparison after submit.", icon: <BarChart3 className="h-5 w-5 text-[#0D9488]" /> },
  { title: "AI Weak-Area Map", desc: "Detect weak topics and get a daily correction plan with priority tags.", icon: <Sparkles className="h-5 w-5 text-[#0D9488]" /> },
  { title: "Topic-wise Practice", desc: "Chapter and concept tests for revision before full-length mocks.", icon: <BookOpenCheck className="h-5 w-5 text-[#0D9488]" /> },
  { title: "Previous Year Feel", desc: "Paper style, question language, and attempt flow mirror real attempts.", icon: <Trophy className="h-5 w-5 text-[#0D9488]" /> },
  { title: "Trusted Solutions", desc: "Detailed explanations with shortcuts and alternate solving methods.", icon: <ShieldCheck className="h-5 w-5 text-[#0D9488]" /> },
];

export function AiGuidance() {
  return (
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#0D9488]/30 bg-[#F0FDFA] px-3.5 py-1 text-xs font-extrabold uppercase tracking-wide text-[#0D9488] shadow-sm mb-2">
            <Sparkles className="h-3.5 w-3.5 text-[#0D9488]" />
            AI Mentor Engine
          </span>
          <h2 className="mt-1 text-2xl sm:text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">
            Smart Analysis, Faster Selection
          </h2>
          <p className="mt-2 max-w-3xl text-xs sm:text-sm font-semibold leading-relaxed text-[#475569]">
            Every test attempt is converted into an actionable improvement plan so you can prioritize the right topics and improve your final score.
          </p>

          <ul className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {points.map((point) => (
              <li key={point} className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#0F172A]">
                <CheckCircle2 className="h-4 w-4 text-[#0D9488] shrink-0" />
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((h) => (
            <div key={h.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm hover:border-[#0D9488]/50 transition-all hover:bg-white">
              <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] border border-[#0D9488]/30 flex items-center justify-center mb-3">
                {h.icon}
              </div>
              <h3 className="text-base font-bold text-[#0F172A] mb-1">{h.title}</h3>
              <p className="text-xs font-semibold text-[#475569] leading-relaxed">{h.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
