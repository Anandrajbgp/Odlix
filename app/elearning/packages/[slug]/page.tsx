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
    <div className="bg-slate-950 text-white min-h-screen pt-28 md:pt-36 pb-20">
      <section className="border-b border-white/10 bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-10 md:py-14">
          <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-white/15 bg-slate-900/90 p-8 md:p-12 shadow-2xl backdrop-blur">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/15 px-4 py-1.5 text-[11px] font-black uppercase tracking-[0.2em] text-indigo-300">
              <Flame className="h-4 w-4" />
              {packageDetail.tagline}
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl text-white">
              {packageDetail.name} <span className="text-indigo-400">{isLifeMastery ? "Track" : "Package"}</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base font-medium text-slate-300 md:text-lg">
              {packageDetail.headline}
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base font-medium">
              {packageDetail.intro}
            </p>

            <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{isLifeMastery ? "Track Access" : "One Time Price"}</p>
                <p className="mt-2 text-3xl font-black tracking-tight text-white">{isLifeMastery ? "Included" : `₹${packageDetail.price}`}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{isLifeMastery ? "Life Impact" : "Potential Momentum"}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-indigo-300">{packageDetail.earning}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-slate-800/80 p-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">{isLifeMastery ? "Eligibility" : "Income Edge"}</p>
                <p className="mt-2 text-sm font-black tracking-wide text-indigo-200">{isLifeMastery ? packageDetail.accessRule : packageDetail.commission}</p>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-black uppercase tracking-wide text-slate-950 transition-transform hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                {isLifeMastery ? "Unlock Life Mastery" : `Enroll in ${packageDetail.name}`}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/elearning"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.16em] text-white/90 transition-colors hover:bg-white/10"
              >
                Back to Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-white/10 py-16 md:py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-8 lg:col-span-2 shadow-xl">
              <h2 className="text-2xl font-black tracking-tight md:text-3xl text-white">What You Will Master</h2>
              <p className="mt-2 text-sm font-medium text-slate-400">
                High-impact topics designed for execution, not just theory.
              </p>
              <div className="mt-6 grid grid-cols-1 gap-3.5 sm:grid-cols-2">
                {packageDetail.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-2.5 rounded-2xl border border-white/10 bg-slate-800/80 px-4 py-3">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-indigo-400 shrink-0" />
                    <span className="text-sm font-semibold leading-snug text-slate-200">{skill}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-8 shadow-xl">
              <h3 className="text-xl font-black tracking-tight text-white">Mindset Boost</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-slate-300">
                {packageDetail.motivation}
              </p>
              <div className="mt-6 rounded-2xl border border-indigo-500/30 bg-indigo-500/10 p-4">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
                  Execution Rule
                </p>
                <p className="mt-1 text-xs font-semibold text-slate-300">
                  {isLifeMastery ? "Reflect daily. Act ethically. Lead consistently." : "Learn daily. Ship weekly. Earn consistently."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-slate-950">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-slate-900 p-7 md:p-10 shadow-xl">
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              <article>
                <h3 className="inline-flex items-center gap-2 text-xl font-black tracking-tight text-white">
                  <TrendingUp className="h-5 w-5 text-indigo-400" />
                  Expected Outcomes
                </h3>
                <ul className="mt-5 space-y-3">
                  {packageDetail.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm font-semibold text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-400">•</span> {outcome}
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h3 className="text-xl font-black tracking-tight text-white">Bonus Power-Ups</h3>
                <ul className="mt-5 space-y-3">
                  {packageDetail.bonuses.map((bonus) => (
                    <li key={bonus} className="text-sm font-semibold text-slate-300 flex items-start gap-2">
                      <span className="text-indigo-400">•</span> {bonus}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-8">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-95 shadow-xl"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-slate-400">
                {isLifeMastery ? "Complete core package. Build values. Lead with clarity." : "Start today. Execute hard. Level up fast."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
