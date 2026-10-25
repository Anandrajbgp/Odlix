"use client";

import { BrainCircuit, CheckCircle2, Sparkles, Clock3, BarChart3, BookOpenCheck, Trophy, ShieldCheck } from "lucide-react";

const points = [
  "Accuracy heatmap by subject and question type.",
  "Attempt behavior analysis: speed vs precision.",
  "Daily revision list auto-generated from wrong answers.",
  "Predicted rank range based on recent mock trends.",
];

const highlights = [
  { title: "Real Exam Timer", desc: "Strict timer, section flow, and negative marking exactly like actual exams.", icon: <Clock3 className="h-5 w-5" />, color: "#0ea5e9" },
  { title: "All India Rank", desc: "Instant percentile, rank movement, and peer comparison after submit.", icon: <BarChart3 className="h-5 w-5" />, color: "#0d9488" },
  { title: "AI Weak-Area Map", desc: "Detect weak topics and get a daily correction plan with priority tags.", icon: <BrainCircuit className="h-5 w-5" />, color: "#10b981" },
  { title: "Topic-wise Practice", desc: "Chapter and concept tests for revision before full-length mocks.", icon: <BookOpenCheck className="h-5 w-5" />, color: "#f59e0b" },
  { title: "Previous Year Feel", desc: "Paper style, question language, and attempt flow mirror real attempts.", icon: <Trophy className="h-5 w-5" />, color: "#f59e0b" },
  { title: "Trusted Solutions", desc: "Detailed explanations with shortcuts and alternate solving methods.", icon: <ShieldCheck className="h-5 w-5" />, color: "#ffffff" },
];

export function AiGuidance() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-12 md:py-14 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]">
              <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
              AI Mentor Engine
            </span>
            <h2 className="mt-4 text-3xl font-black leading-tight tracking-tight md:text-5xl">
              Smart Analysis, Faster Selection
            </h2>
            <p className="mt-4 max-w-3xl text-sm font-medium leading-relaxed text-white/75 md:text-base">
              Every test attempt is converted into an actionable improvement plan so you can prioritize the right topics and improve your final score.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 text-sm font-semibold text-white/85">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#10b981]" />
                  {point}
                </li>
              ))}
            </ul>
          </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
          {highlights.map((item) => (
            <div key={item.title} className="rounded-xl border border-white/10 bg-white/5 p-4">
              <div className="mb-2 inline-flex rounded-lg border px-3 py-2" style={{ color: item.color, borderColor: `${item.color}66`, backgroundColor: `${item.color}14` }}>
                {item.icon}
              </div>
              <h4 className="mb-1 text-base font-black tracking-tight text-white">{item.title}</h4>
              <p className="text-sm font-medium text-white/65">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
