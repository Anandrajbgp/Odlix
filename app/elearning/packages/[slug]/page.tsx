import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BadgeCheck, Flame, TrendingUp } from "lucide-react";
import { packageBySlug, type PackageSlug } from "@/lib/elearning-packages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const packageDetail = packageBySlug[resolvedParams.slug as PackageSlug];

  if (!packageDetail) {
    return {
      title: "Package Not Found | Odlix E-Learning",
    };
  }

  return {
    title: `${packageDetail.name} ${packageDetail.slug === "life-mastery" ? "Track" : "Package"} | Odlix E-Learning`,
    description: packageDetail.intro,
  };
}

export default async function PackageDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const packageDetail = packageBySlug[resolvedParams.slug as PackageSlug];

  if (!packageDetail) {
    notFound();
  }

  const isLifeMastery = packageDetail.slug === "life-mastery";

  return (
    <div className="bg-transparent text-[#0F172A] min-h-screen pt-28 md:pt-36 pb-20">
      <section className="bg-transparent text-[#0F172A]">
        <div className="container mx-auto px-4 py-8 md:py-12">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 md:p-12 shadow-sm">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#6366F1]/30 bg-[#EEF2FF] px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-[#6366F1]">
              <Flame className="h-4 w-4" />
              {packageDetail.tagline}
            </p>

            <h1 className="mt-4 text-3xl font-black tracking-tight md:text-5xl text-[#0F172A]">
              {packageDetail.name} <span className="text-[#6366F1]">{isLifeMastery ? "Track" : "Package"}</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base font-semibold text-[#0F172A] md:text-lg">
              {packageDetail.headline}
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-[#475569] md:text-base font-medium">
              {packageDetail.intro}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569]">{isLifeMastery ? "Track Access" : "One Time Price"}</p>
                <p className="mt-2 text-3xl font-black tracking-tight text-[#0F172A]">{isLifeMastery ? "Included" : `₹${packageDetail.price}`}</p>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569]">{isLifeMastery ? "Life Impact" : "Potential Momentum"}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-[#6366F1]">{packageDetail.earning}</p>
              </div>
              <div className="rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#475569]">{isLifeMastery ? "Eligibility" : "Income Edge"}</p>
                <p className="mt-2 text-sm font-black tracking-wide text-[#6366F1]">{isLifeMastery ? packageDetail.accessRule : packageDetail.commission}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="btn-pill-primary bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-md active:scale-95 transition-all text-sm font-bold"
              >
                {isLifeMastery ? "Unlock Life Mastery" : `Enroll in ${packageDetail.name}`}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/elearning"
                className="btn-pill-secondary hover:bg-slate-200 active:scale-95 transition-all text-sm font-bold"
              >
                Back to Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 lg:col-span-2 shadow-sm">
              <h2 className="text-2xl font-black tracking-tight md:text-3xl text-[#0F172A]">What You Will Master</h2>
              <p className="mt-2 text-sm font-medium text-[#475569]">
                High-impact topics designed for execution, not just theory.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {packageDetail.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-2.5 rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-[#6366F1] shrink-0" />
                    <span className="text-sm font-semibold leading-snug text-[#0F172A]">{skill}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 shadow-sm">
              <h3 className="text-xl font-black tracking-tight text-[#0F172A]">Mindset Boost</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-[#475569]">
                {packageDetail.motivation}
              </p>
              <div className="mt-6 rounded-2xl border border-[#6366F1]/30 bg-[#EEF2FF] p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[#6366F1]">
                  Execution Rule
                </p>
                <p className="mt-1 text-xs font-semibold text-[#0F172A]">
                  {isLifeMastery ? "Reflect daily. Act ethically. Lead consistently." : "Learn daily. Ship weekly. Earn consistently."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="pb-16 md:pb-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-7 md:p-10 shadow-sm">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <article>
                <h3 className="inline-flex items-center gap-2 text-xl font-black tracking-tight text-[#0F172A]">
                  <TrendingUp className="h-5 w-5 text-[#6366F1]" />
                  Expected Outcomes
                </h3>
                <ul className="mt-5 space-y-3">
                  {packageDetail.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm font-semibold text-[#475569] flex items-start gap-2">
                      <span className="text-[#6366F1]">•</span> {outcome}
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h3 className="text-xl font-black tracking-tight text-[#0F172A]">Bonus Power-Ups</h3>
                <ul className="mt-5 space-y-3">
                  {packageDetail.bonuses.map((bonus) => (
                    <li key={bonus} className="text-sm font-semibold text-[#475569] flex items-start gap-2">
                      <span className="text-[#6366F1]">•</span> {bonus}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-[#E2E8F0] pt-8">
              <Link
                href="/signup"
                className="btn-pill-primary bg-[#6366F1] hover:bg-[#4F46E5] text-white shadow-md active:scale-95 transition-all text-sm font-bold"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#475569]">
                {isLifeMastery ? "Complete core package. Build values. Lead with clarity." : "Start today. Execute hard. Level up fast."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
