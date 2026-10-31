"use client";

import { CheckCircle2, Star, ChevronLeft, ChevronRight, CircleDollarSign, GraduationCap, Briefcase, Crown } from "lucide-react";
import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { elearningPackages } from "@/lib/elearning-packages";

type Slide = {
  slug: string;
  name: string;
  tagline: string;
  price: number;
  earning: string;
  color: string;
  skills: string[];
  iconKey: "beginner" | "pro" | "expert" | "life-mastery";
  accessRule?: string;
};

export function Packages() {
  const slides = useMemo<Slide[]>(
    () =>
      elearningPackages.map((pkg) => ({
        name: pkg.name,
        slug: pkg.slug,
        tagline: pkg.tagline,
        price: pkg.price,
        earning: pkg.earning,
        color: pkg.color,
        skills: pkg.skills,
        iconKey: pkg.slug,
        accessRule: pkg.accessRule,
      })),
    []
  );

  const packageIconByKey = {
    beginner: GraduationCap,
    pro: Briefcase,
    expert: Crown,
    "life-mastery": Star,
  } as const;

  const proIndex = slides.findIndex((slide) => slide.name === "Pro");
  const [activeIndex, setActiveIndex] = useState(proIndex >= 0 ? proIndex : 0);

  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
  const slideRefs = useRef<(HTMLElement | null)[]>([]);

  const maxIndex = slides.length - 1;

  const scrollToSlide = (index: number) => {
    setActiveIndex(index);
    const slideEl = slideRefs.current[index];
    if (slideEl && scrollContainerRef.current) {
      slideEl.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  };

  const goPrev = () => {
    if (activeIndex > 0) {
      scrollToSlide(activeIndex - 1);
    }
  };

  const goNext = () => {
    if (activeIndex < maxIndex) {
      scrollToSlide(activeIndex + 1);
    }
  };

  return (
    <section id="packages" className="relative overflow-hidden py-16 md:py-20 bg-transparent border-b border-white/10 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#1e3a8a]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#312e81]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase text-white">
            Start <span className="text-indigo-300">Your Journey.</span>
          </h2>
          <p className="text-slate-200 text-base md:text-lg font-semibold">
            Slide through Beginner, Pro, Expert and Life Mastery.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="relative h-[34rem] md:h-[36rem] overflow-hidden">
            <div
              ref={scrollContainerRef}
              className="flex h-full items-stretch gap-6 overflow-x-auto snap-x snap-mandatory px-4 py-2 scrollbar-none"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <article
                    key={`${slide.slug}-${slide.name}`}
                    ref={(el) => {
                      slideRefs.current[index] = el;
                    }}
                    onClick={() => scrollToSlide(index)}
                    className={`w-[85vw] sm:w-[450px] md:w-[440px] lg:w-[420px] shrink-0 grow-0 snap-center rounded-[2rem] border p-6 md:p-8 transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer backdrop-blur-xl ${
                      isActive
                        ? "border-indigo-400/80 bg-slate-900/80 shadow-[0_24px_80px_-30px_rgba(99,102,241,0.55)] scale-[1.02]"
                        : "border-slate-700/60 bg-slate-900/30 opacity-70 hover:opacity-90"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slide.color} flex items-center justify-center text-white shadow-lg`}>
                        {(() => {
                          const PackageIcon = packageIconByKey[slide.iconKey];
                          return <PackageIcon className="w-6 h-6" />;
                        })()}
                      </div>
                      {slide.name === "Pro" && (
                        <span className="text-[10px] px-3 py-1 rounded-full bg-indigo-500 text-white font-black uppercase tracking-[0.2em]">
                          Recommended
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-white">{slide.name}</h3>
                    <p className="mt-1 text-xs md:text-sm font-bold text-indigo-300 uppercase tracking-[0.16em]">
                      {slide.tagline}
                    </p>

                    <div className="mt-5 mb-5">
                      <div className="text-3xl md:text-4xl font-black text-white">{slide.price === 0 ? "Included" : `₹${slide.price}`}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-300 mt-1">{slide.price === 0 ? "Post-completion access" : "One-time access"}</div>
                    </div>

                    <div className="mb-5 rounded-xl border border-yellow-500/35 bg-gradient-to-r from-yellow-500/20 via-amber-500/15 to-yellow-400/20 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-300 backdrop-blur-md">
                      <div className="flex items-center gap-2 min-w-0">
                        <CircleDollarSign className="h-4 w-4 shrink-0" />
                        <span className="truncate overflow-hidden">
                          {slide.price === 0 ? `Access: ${slide.accessRule ?? "Included"}` : `Earning Potential: ${slide.earning}`}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 flex-1 min-h-0 overflow-y-auto pr-1">
                      {slide.skills.map((skill) => (
                        <div key={skill} className="flex items-start gap-2 text-xs md:text-sm font-bold text-slate-200">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-indigo-300 shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/elearning/packages/${slide.slug}`}
                      className="mt-auto block w-full rounded-xl bg-white text-slate-950 text-center py-3.5 font-black text-sm md:text-base hover:bg-indigo-50 transition-colors shadow-lg"
                      onClick={(e) => e.stopPropagation()}
                    >
                      View Details
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-400/30 via-amber-400/20 to-yellow-500/30 text-yellow-200 shadow-[0_10px_30px_-12px_rgba(234,179,8,0.9)] backdrop-blur transition-all hover:scale-105 hover:border-yellow-400/70 disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-200">
              {activeIndex + 1} / {slides.length}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-400/30 via-amber-400/20 to-yellow-500/30 text-yellow-200 shadow-[0_10px_30px_-12px_rgba(234,179,8,0.9)] backdrop-blur transition-all hover:scale-105 hover:border-yellow-400/70 disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === maxIndex}
              aria-label="Next slide"
            >
              <ChevronRight className="h-5 w-5 transition-transform group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
