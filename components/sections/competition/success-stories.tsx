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
    <section className="relative overflow-hidden bg-transparent py-8 md:py-12 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-8 text-center">
          <span className="text-[#0D9488] font-extrabold tracking-wide text-xs uppercase mb-1 block">
            Aspirant Achievements
          </span>
          <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Placed Candidates</h2>
          <p className="mt-1 text-xs sm:text-sm font-semibold text-[#475569]">
            Real reviews from aspirants who secured jobs using Odlix Test.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-5 shadow-sm">
              <div className="mb-3 flex items-center gap-1 text-amber-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-xs sm:text-sm font-semibold leading-relaxed text-[#475569]">“{story.quote}”</p>
              <div className="mt-4 flex items-center gap-2 text-sm font-extrabold text-[#0F172A]">
                <Briefcase className="h-4 w-4 text-[#0D9488]" />
                {story.name}
              </div>
              <p className="mt-0.5 text-xs text-[#475569] font-bold">{story.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
