"use client";

import { Star, Briefcase } from "lucide-react";

const stories = [
  {
    name: "Aman Sharma",
    role: "Data Analyst, TCS",
    quote: "Mock tests and AI analysis helped me crack the exam and land a great job. The platform is practical and easy to follow.",
  },
  {
    name: "Neha Verma",
    role: "Probationary Officer, SBI",
    quote: "The test series felt like the real exam. It boosted my confidence and helped me get selected.",
  },
  {
    name: "Rohit Singh",
    role: "Junior Engineer, Indian Railways",
    quote: "Clear explanations and rank tracking kept me focused. I would recommend this platform to every aspirant.",
  },
];

export function SuccessStories() {
  return (
    <section className="bg-background py-12 md:py-14">
      <div className="container mx-auto px-4">
        <div className="mb-8">
          <h2 className="text-2xl font-black tracking-tight text-foreground md:text-4xl">Placed Candidates</h2>
          <p className="mt-2 text-sm font-medium text-foreground/60">
            Real reviews from aspirants who secured jobs using this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-xl border border-border bg-card p-5">
              <div className="mb-3 flex items-center gap-1 text-[#FFD54A]">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium leading-relaxed text-foreground/75">“{story.quote}”</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-black text-foreground">
                <Briefcase className="h-4 w-4 text-[var(--platform-primary)]" />
                {story.name}
              </div>
              <p className="mt-1 text-xs text-foreground/50">{story.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
