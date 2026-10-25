"use client";

import { BrainCircuit, CheckCircle2, Sparkles } from "lucide-react";

const points = [
  "Accuracy heatmap by subject and question type.",
  "Attempt behavior analysis: speed vs precision.",
  "Daily revision list auto-generated from wrong answers.",
  "Predicted rank range based on recent mock trends.",
];

export function AiGuidance() {
  return (
    <section className="relative overflow-hidden border-y border-white/10 bg-slate-950 py-12 md:py-14 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/25 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4">
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.2fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]">
              <Sparkles className="h-3.5 w-3.5 text-[#f59e0b]" />
              AI Mentor Engine
            </span>
            <h2 className="mt-4 text-4xl font-black leading-[0.95] tracking-tight md:text-6xl">
              Smart Analysis,
              <br />
              Faster Selection
            </h2>
            <p className="mt-4 max-w-2xl text-sm font-medium leading-relaxed text-white/75 md:text-base">
              Every test attempt is converted into an actionable improvement plan so you can prioritize the right topics, cut silly mistakes, and improve your final score in fewer iterations.
            </p>

            <ul className="mt-6 space-y-3">
              {points.map((point) => (
                <li key={point} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#10b981]" />
                  <span className="text-sm font-semibold text-white/85">{point}</span>
                </li>
              ))}
            </ul>

            <button
              title="Backend AI report API required"
              className="mt-6 rounded-xl bg-white px-6 py-3 text-[10px] font-black uppercase tracking-[0.16em] text-zinc-950 transition-all hover:bg-[#f59e0b] active:scale-95"
            >
              Generate My AI Report
            </button>
          </div>

          <div className="rounded-2xl border border-white/15 bg-white/10 p-6">
            <div className="mb-4 inline-flex rounded-lg border border-[#0ea5e9]/40 bg-[#0ea5e9]/20 px-3 py-2 text-[#0ea5e9]">
              <BrainCircuit className="h-5 w-5" />
            </div>
            <h3 className="mb-3 text-2xl font-black tracking-tight">Today&apos;s AI Insight</h3>
            <p className="mb-5 text-sm font-medium text-white/75">Your Quant attempts are fast but 12% lower in accuracy under 25 minutes. Suggested action: 2 timed arithmetic sets + 1 accuracy drill.</p>
            <div className="space-y-2 text-xs font-black uppercase tracking-[0.14em] text-white/70">
              <div className="rounded-lg border border-white/15 bg-black/20 px-3 py-2">Predicted Rank Improvement: 18%</div>
              <div className="rounded-lg border border-white/15 bg-black/20 px-3 py-2">Weak Topic Priority: Number System</div>
              <div className="rounded-lg border border-white/15 bg-black/20 px-3 py-2">Recommended Daily Time: 95 min</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
