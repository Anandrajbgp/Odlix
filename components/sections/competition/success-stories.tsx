"use client";

import { Star, TrendingUp, Medal } from "lucide-react";

const stories = [
  {
    name: "Aman Sharma",
    exam: "SSC CGL 2026",
    result: "AIR 42",
    quote: "Daily full-length mocks and rank analysis helped me improve speed without losing accuracy.",
  },
  {
    name: "Neha Verma",
    exam: "SBI PO 2026",
    result: "Final Selection",
    quote: "The AI weak-topic planner removed confusion. I revised only what mattered and cleared confidently.",
  },
  {
    name: "Rohit Singh",
    exam: "RRB NTPC 2026",
    result: "Top 0.8%",
    quote: "The test UI felt exactly like the actual exam, so I had zero panic on final day.",
  },
];

export function SuccessStories() {
  return (
    <section className="bg-background py-16">
      <div className="container mx-auto px-4">
        <div className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Topper Results</h2>
            <p className="mt-2 text-sm font-medium text-foreground/60">Real outcomes from learners using mocks + analytics + AI workflow.</p>
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-[#32FF00]/35 bg-[#32FF00]/10 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-[#32FF00]">
            <TrendingUp className="h-3.5 w-3.5" />
            Consistent Rank Growth
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-lg">
              <div className="mb-4 flex items-center gap-1 text-[#FFD54A]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>

              <p className="mb-6 text-sm font-semibold leading-relaxed text-foreground/75">&ldquo;{story.quote}&rdquo;</p>

              <div className="rounded-xl border border-border bg-background p-4">
                <h4 className="text-lg font-black tracking-tight text-foreground">{story.name}</h4>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/45">{story.exam}</p>
                <div className="mt-3 inline-flex items-center gap-2 rounded-full border border-[#DFFF00]/35 bg-[#DFFF00]/15 px-3 py-1 text-[10px] font-black uppercase tracking-[0.14em] text-foreground">
                  <Medal className="h-3.5 w-3.5 text-[#DFFF00]" />
                  {story.result}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
