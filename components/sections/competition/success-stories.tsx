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
    <section className="relative overflow-hidden bg-transparent py-16 md:py-20 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#0ea5e9]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#0d9488]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="mb-10 text-center">
          <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Placed Candidates</h2>
          <p className="mt-3 text-sm font-semibold text-slate-200">
            Real reviews from aspirants who secured jobs using this platform.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {stories.map((story) => (
            <article key={story.name} className="rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-6 md:p-8 shadow-xl">
              <div className="mb-4 flex items-center gap-1 text-amber-400">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-semibold leading-relaxed text-slate-200">“{story.quote}”</p>
              <div className="mt-6 flex items-center gap-2.5 text-base font-black text-white">
                <Briefcase className="h-4 w-4 text-cyan-300" />
                {story.name}
              </div>
              <p className="mt-1 text-xs text-slate-300 font-semibold">{story.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
