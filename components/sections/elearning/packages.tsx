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
    <section id="packages" className="relative overflow-hidden py-16 md:py-20 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-10 md:mb-12">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase text-[#0F172A]">
            Start <span className="text-[#6366F1]">Your Journey.</span>
          </h2>
          <p className="text-[#475569] text-base md:text-lg font-semibold">
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
                    className={`w-[85vw] sm:w-[450px] md:w-[440px] lg:w-[420px] shrink-0 grow-0 snap-center rounded-[2rem] border p-6 md:p-8 transition-all duration-300 h-full flex flex-col overflow-hidden cursor-pointer ${
                      isActive
                        ? "border-[#6366F1] bg-[#EEF2FF]/80 shadow-lg scale-[1.02]"
                        : "border-[#E2E8F0] bg-[#F8FAFC] hover:border-[#6366F1]/40"
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
                        <span className="text-[10px] px-3 py-1 rounded-full bg-[#6366F1] text-white font-black uppercase tracking-[0.2em]">
                          Recommended
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight text-[#0F172A]">{slide.name}</h3>
                    <p className="mt-1 text-xs md:text-sm font-bold text-[#6366F1] uppercase tracking-[0.16em]">
                      {slide.tagline}
                    </p>

                    <div className="mt-5 mb-5">
                      <div className="text-3xl md:text-4xl font-black text-[#0F172A]">{slide.price === 0 ? "Included" : `₹${slide.price}`}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] text-[#475569] font-bold mt-1">{slide.price === 0 ? "Post-completion access" : "One-time access"}</div>
                    </div>

                    <div className="mb-5 rounded-xl border border-[#6366F1]/30 bg-[#EEF2FF] px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-[#6366F1]">
                      <div className="flex items-center gap-2 min-w-0">
                        <CircleDollarSign className="h-4 w-4 shrink-0 text-[#6366F1]" />
                        <span className="truncate overflow-hidden text-[#0F172A]">
                          {slide.price === 0 ? `Access: ${slide.accessRule ?? "Included"}` : `Earning Potential: ${slide.earning}`}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 flex-1 min-h-0 overflow-y-auto pr-1">
                      {slide.skills.map((skill) => (
                        <div key={skill} className="flex items-start gap-2 text-xs md:text-sm font-bold text-[#0F172A]">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-[#6366F1] shrink-0" />
                          <span>{skill}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/elearning/packages/${slide.slug}`}
                      className="mt-auto block w-full rounded-xl bg-[#6366F1] text-white text-center py-3.5 font-black text-sm md:text-base hover:bg-[#4F46E5] transition-colors shadow-md"
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
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0F172A] shadow-sm transition-all hover:scale-105 hover:border-[#6366F1] disabled:cursor-not-allowed disabled:opacity-35"
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-[#0F172A]">
              {activeIndex + 1} / {slides.length}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-slate-300 bg-white text-[#0F172A] shadow-sm transition-all hover:scale-105 hover:border-[#6366F1] disabled:cursor-not-allowed disabled:opacity-35"
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
