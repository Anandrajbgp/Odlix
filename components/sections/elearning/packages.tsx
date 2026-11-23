"use client";

import { CheckCircle2, Star, GraduationCap, Briefcase, Crown, Sparkles, ArrowRight } from "lucide-react";
import Link from "next/link";
import { elearningPackages } from "@/lib/elearning-packages";

export function Packages() {
  const packageIconByKey = {
    beginner: GraduationCap,
    pro: Briefcase,
    expert: Crown,
    "life-mastery": Star,
  } as const;

  return (
    <section id="packages" className="relative overflow-hidden py-12 md:py-16 bg-transparent text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        <div className="text-center mb-10 md:mb-14 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#EEF2FF] border border-[#6366F1]/30 text-[#6366F1] text-xs font-extrabold uppercase tracking-wide mb-3 shadow-sm">
            <Sparkles className="w-4 h-4 text-[#6366F1]" />
            <span>Interactive Skill Packages</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight uppercase text-[#0F172A] mb-3">
            Start <span className="text-[#6366F1]">Your Journey.</span>
          </h2>
          <p className="text-[#475569] text-sm sm:text-base font-semibold leading-relaxed">
            Choose your learning tier. Master high-income skills, earn commissions, and scale your personal brand.
          </p>
        </div>

        {/* 4-Column Grid: No Scroll, All Skills Visible */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {elearningPackages.map((pkg) => {
            const PackageIcon = packageIconByKey[pkg.slug];
            const isPro = pkg.name === "Pro";
            const isLifeMastery = pkg.slug === "life-mastery";

            return (
              <div
                key={pkg.slug}
                className={`rounded-3xl border p-6 md:p-7 flex flex-col justify-between transition-all duration-300 relative shadow-sm ${
                  isPro
                    ? "border-[#6366F1] bg-white ring-2 ring-[#6366F1]/30 shadow-md scale-[1.02]"
                    : "border-[#E2E8F0] bg-white hover:border-[#6366F1]/40"
                }`}
              >
                {isPro && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#6366F1] text-white text-[10px] font-black uppercase tracking-wider shadow-sm">
                    Most Popular
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#EEF2FF] border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] shadow-sm">
                      <PackageIcon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-bold text-[#6366F1] bg-[#EEF2FF] px-3 py-1 rounded-full border border-[#6366F1]/20">
                      {pkg.earning}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#0F172A] tracking-tight mb-1">{pkg.name}</h3>
                  <p className="text-xs font-semibold text-[#475569] mb-4">{pkg.tagline}</p>

                  {/* Price */}
                  <div className="mb-6 border-b border-[#E2E8F0] pb-5">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl sm:text-4xl font-black text-[#0F172A]">
                        {pkg.price === 0 ? "Free" : `₹${pkg.price.toLocaleString("en-IN")}`}
                      </span>
                      {pkg.price > 0 && <span className="text-xs font-bold text-[#475569]">/ one-time</span>}
                    </div>
                    <p className="text-[11px] font-bold text-[#6366F1] mt-1">{pkg.commission}</p>
                  </div>

                  {/* All Skills List - Completely Visible */}
                  <div className="mb-8">
                    <h4 className="text-xs font-black uppercase tracking-wider text-[#0F172A] mb-3">
                      Skills Included ({pkg.skills.length})
                    </h4>
                    <ul className="space-y-2.5">
                      {pkg.skills.map((skill) => (
                        <li key={skill} className="flex items-start gap-2.5 text-xs font-bold text-[#0F172A]">
                          <CheckCircle2 className="w-4 h-4 text-[#6366F1] shrink-0 mt-0.5" />
                          <span>{skill}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer Action */}
                <div>
                  {isLifeMastery ? (
                    <div className="p-3.5 rounded-2xl bg-[#EEF2FF] text-[#6366F1] text-xs font-bold text-center border border-[#6366F1]/20">
                      {pkg.accessRule || "Unlocked after core package"}
                    </div>
                  ) : (
                    <Link
                      href={`/elearning/packages/${pkg.slug}`}
                      className={`w-full py-3.5 rounded-full font-extrabold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer shadow-sm ${
                        isPro
                          ? "bg-[#6366F1] text-white hover:bg-[#4F46E5] shadow-md"
                          : "bg-slate-100 text-[#0F172A] hover:bg-[#6366F1] hover:text-white"
                      }`}
                    >
                      <span>Explore Package</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
