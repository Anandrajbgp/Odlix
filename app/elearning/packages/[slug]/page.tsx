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
    <div className="bg-background text-foreground">
      <section className="border-b border-border bg-slate-950 text-white">
        <div className="container mx-auto px-4 py-14 md:py-16">
          <div className="mx-auto max-w-5xl rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 md:p-8 backdrop-blur">
            <p className="inline-flex items-center gap-2 rounded-full border border-indigo-400/30 bg-indigo-500/10 px-3 py-1 text-[10px] font-black uppercase tracking-[0.2em] text-indigo-300">
              <Flame className="h-3.5 w-3.5" />
              {packageDetail.tagline}
            </p>

            <h1 className="mt-4 text-4xl font-black tracking-tight md:text-6xl">
              {packageDetail.name} <span className="text-indigo-400">{isLifeMastery ? "Track" : "Package"}</span>
            </h1>

            <p className="mt-4 max-w-3xl text-base font-medium text-slate-300 md:text-lg">
              {packageDetail.headline}
            </p>

            <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-400 md:text-base">
              {packageDetail.intro}
            </p>

            <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{isLifeMastery ? "Track Access" : "One Time Price"}</p>
                <p className="mt-2 text-3xl font-black tracking-tight">{isLifeMastery ? "Included" : `₹${packageDetail.price}`}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{isLifeMastery ? "Life Impact" : "Potential Momentum"}</p>
                <p className="mt-2 text-2xl font-black tracking-tight text-indigo-300">{packageDetail.earning}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/60">{isLifeMastery ? "Eligibility" : "Income Edge"}</p>
                <p className="mt-2 text-sm font-black tracking-wide text-indigo-200">{isLifeMastery ? packageDetail.accessRule : packageDetail.commission}</p>
              </div>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-500 px-6 py-3 text-sm font-black uppercase tracking-wide text-slate-950 transition-transform hover:scale-[1.02] active:scale-95"
              >
                {isLifeMastery ? "Unlock Life Mastery" : `Enroll in ${packageDetail.name}`}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/elearning"
                className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-xs font-bold uppercase tracking-[0.16em] text-white/80 transition-colors hover:bg-white/10"
              >
                Back to Packages
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 lg:grid-cols-3">
            <article className="rounded-2xl border border-border bg-card p-5 md:p-6 lg:col-span-2">
              <h2 className="text-2xl font-black tracking-tight md:text-3xl">What You Will Master</h2>
              <p className="mt-2 text-sm font-medium text-muted-foreground">
                High-impact topics designed for execution, not just theory.
              </p>
              <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {packageDetail.skills.map((skill) => (
                  <div key={skill} className="flex items-start gap-2 rounded-xl border border-border/80 bg-background/70 px-3 py-2.5">
                    <BadgeCheck className="mt-0.5 h-4 w-4 text-indigo-600 dark:text-indigo-400" />
                    <span className="text-sm font-semibold leading-snug">{skill}</span>
                  </div>
                ))}
              </div>
            </article>

            <article className="rounded-2xl border border-border bg-card p-5 md:p-6">
              <h3 className="text-lg font-black tracking-tight">Mindset Boost</h3>
              <p className="mt-3 text-sm font-semibold leading-relaxed text-muted-foreground">
                {packageDetail.motivation}
              </p>
              <div className="mt-5 rounded-xl border border-indigo-500/20 bg-indigo-500/5 p-3">
                <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-700 dark:text-indigo-300">
                  Execution Rule
                </p>
                <p className="mt-1 text-xs font-semibold text-muted-foreground">
                  {isLifeMastery ? "Reflect daily. Act ethically. Lead consistently." : "Learn daily. Ship weekly. Earn consistently."}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="py-12 md:py-14">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl rounded-2xl border border-border bg-card p-5 md:p-7">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <article>
                <h3 className="inline-flex items-center gap-2 text-xl font-black tracking-tight">
                  <TrendingUp className="h-5 w-5 text-indigo-600 dark:text-indigo-400" />
                  Expected Outcomes
                </h3>
                <ul className="mt-4 space-y-2.5">
                  {packageDetail.outcomes.map((outcome) => (
                    <li key={outcome} className="text-sm font-semibold text-muted-foreground">
                      • {outcome}
                    </li>
                  ))}
                </ul>
              </article>

              <article>
                <h3 className="text-xl font-black tracking-tight">Bonus Power-Ups</h3>
                <ul className="mt-4 space-y-2.5">
                  {packageDetail.bonuses.map((bonus) => (
                    <li key={bonus} className="text-sm font-semibold text-muted-foreground">
                      • {bonus}
                    </li>
                  ))}
                </ul>
              </article>
            </div>

            <div className="mt-7 flex flex-wrap items-center gap-3 border-t border-border pt-6">
              <Link
                href="/signup"
                className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-95"
              >
                Enroll Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <p className="text-xs font-bold uppercase tracking-[0.14em] text-muted-foreground">
                {isLifeMastery ? "Complete core package. Build values. Lead with clarity." : "Start today. Execute hard. Level up fast."}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
