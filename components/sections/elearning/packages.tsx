"use client";

import { CheckCircle2, Star, ChevronLeft, ChevronRight, CircleDollarSign, GraduationCap, Briefcase, Crown } from "lucide-react";
import Link from "next/link";
import { TouchEvent, useMemo, useRef, useState } from "react";
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
  const touchStartXRef = useRef<number | null>(null);
  const touchDeltaXRef = useRef(0);

  const maxIndex = slides.length - 1;

  const goPrev = () => setActiveIndex((prev) => (prev > 0 ? prev - 1 : prev));
  const goNext = () => setActiveIndex((prev) => (prev < maxIndex ? prev + 1 : prev));

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    touchStartXRef.current = event.changedTouches[0]?.clientX ?? null;
    touchDeltaXRef.current = 0;
  };

  const handleTouchMove = (event: TouchEvent<HTMLDivElement>) => {
    const startX = touchStartXRef.current;
    if (startX === null) {
      return;
    }

    const currentX = event.changedTouches[0]?.clientX;
    if (currentX === undefined) {
      return;
    }

    touchDeltaXRef.current = currentX - startX;
  };

  const handleTouchEnd = () => {
    const minSwipeDistancePx = 40;
    const deltaX = touchDeltaXRef.current;

    if (deltaX <= -minSwipeDistancePx) {
      goNext();
    } else if (deltaX >= minSwipeDistancePx) {
      goPrev();
    }

    touchStartXRef.current = null;
    touchDeltaXRef.current = 0;
  };

  return (
    <section id="packages" className="py-14 md:py-16 bg-background border-b border-border overflow-hidden">
      <div className="container mx-auto px-4 text-foreground">
        <div className="text-center mb-8 md:mb-9">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 uppercase">
            Start <span className="text-cyan-600">Your Journey.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg font-medium">
            Slide through Beginner, Pro, Expert and Life Mastery.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          <div
            className="relative h-[32rem] md:h-[34rem] touch-pan-y"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onTouchCancel={handleTouchEnd}
          >
            <div
              className="flex h-full items-stretch gap-4 transition-transform duration-500 ease-out"
              style={{ transform: `translateX(calc(50% - ${(activeIndex + 0.5) * 72}% - ${activeIndex * 1}rem))` }}
            >
              {slides.map((slide, index) => {
                const isActive = index === activeIndex;

                return (
                  <article
                    key={`${slide.slug}-${slide.name}`}
                    className={`w-[72%] md:w-[58%] shrink-0 rounded-[1.75rem] border p-5 md:p-6 transition-all duration-300 h-full flex flex-col overflow-hidden ${
                      isActive
                        ? "border-cyan-500/70 bg-gradient-to-b from-card via-card to-cyan-500/5 shadow-[0_24px_80px_-30px_rgba(8,145,178,0.55)]"
                        : "border-border/70 bg-card/70 opacity-65"
                    }`}
                  >
                    <div className="flex items-center justify-between mb-5">
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${slide.color} flex items-center justify-center text-white`}>
                        {(() => {
                          const PackageIcon = packageIconByKey[slide.iconKey];
                          return <PackageIcon className="w-6 h-6" />;
                        })()}
                      </div>
                      {isActive && slide.name === "Pro" && (
                        <span className="text-[10px] px-3 py-1 rounded-full bg-cyan-600 text-white font-black uppercase tracking-[0.2em]">
                          Recommended
                        </span>
                      )}
                    </div>

                    <h3 className="text-2xl md:text-3xl font-black tracking-tight">{slide.name}</h3>
                    <p className="mt-1 text-xs md:text-sm font-bold text-cyan-600 dark:text-cyan-400 uppercase tracking-[0.16em]">
                      {slide.tagline}
                    </p>

                    <div className="mt-5 mb-5">
                      <div className="text-3xl md:text-4xl font-black">{slide.price === 0 ? "Included" : `₹${slide.price}`}</div>
                      <div className="text-[10px] uppercase tracking-[0.2em] opacity-50 mt-1">{slide.price === 0 ? "Post-completion access" : "One-time access"}</div>
                    </div>

                    <div className="mb-5 rounded-xl border border-yellow-500/35 bg-gradient-to-r from-yellow-500/20 via-amber-500/15 to-yellow-400/20 px-3 py-2 text-xs font-black uppercase tracking-[0.16em] text-yellow-700 dark:text-yellow-300">
                      <div className="flex items-center justify-center gap-2">
                        <CircleDollarSign className="h-4 w-4" />
                        <span>{slide.price === 0 ? `Access Rule: ${slide.accessRule ?? "Included with core package"}` : `Earning Potential: ${slide.earning}`}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-6 flex-1 min-h-0 overflow-y-auto pr-1">
                      {slide.skills.map((skill) => (
                        <div key={skill} className="flex items-start gap-2 text-xs md:text-sm font-bold">
                          <CheckCircle2 className="w-3.5 h-3.5 mt-0.5 text-cyan-500 shrink-0" />
                          <span className="opacity-85">{skill}</span>
                        </div>
                      ))}
                    </div>

                    <Link
                      href={`/elearning/packages/${slide.slug}`}
                      className="mt-auto block w-full rounded-xl bg-foreground text-background text-center py-3 font-black text-sm md:text-base"
                    >
                      View Details
                    </Link>
                  </article>
                );
              })}
            </div>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={goPrev}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-400/30 via-amber-400/20 to-yellow-500/30 text-yellow-700 shadow-[0_10px_30px_-12px_rgba(234,179,8,0.9)] backdrop-blur transition-all hover:scale-105 hover:border-yellow-400/70 hover:from-yellow-300/40 hover:to-yellow-500/40 disabled:cursor-not-allowed disabled:opacity-35 dark:text-yellow-200"
              disabled={activeIndex === 0}
              aria-label="Previous slide"
            >
              <ChevronLeft className="h-5 w-5 transition-transform group-hover:-translate-x-0.5" />
            </button>

            <div className="text-[10px] font-black uppercase tracking-[0.2em] text-muted-foreground">
              {activeIndex + 1} / {slides.length}
            </div>

            <button
              type="button"
              onClick={goNext}
              className="group flex h-11 w-11 items-center justify-center rounded-full border border-yellow-500/40 bg-gradient-to-br from-yellow-400/30 via-amber-400/20 to-yellow-500/30 text-yellow-700 shadow-[0_10px_30px_-12px_rgba(234,179,8,0.9)] backdrop-blur transition-all hover:scale-105 hover:border-yellow-400/70 hover:from-yellow-300/40 hover:to-yellow-500/40 disabled:cursor-not-allowed disabled:opacity-35 dark:text-yellow-200"
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
