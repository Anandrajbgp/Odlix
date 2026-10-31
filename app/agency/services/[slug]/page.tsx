import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { serviceBySlug } from "@/lib/agency-services";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) return { title: "Service Not Found | Odlix Agency" };
  return {
    title: `${service.title} | Odlix Agency`,
    description: service.summary,
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const service = serviceBySlug(slug);
  if (!service) notFound();

  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 md:pt-36 pb-20">
      <section className="relative overflow-hidden border-b border-white/10 py-12 md:py-16">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/15 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-amber-400">
            Agency Service
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl text-white">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-base font-medium text-slate-300 md:text-lg">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-slate-950 transition-transform hover:scale-[1.02] active:scale-95 shadow-xl shadow-amber-500/20"
            >
              Start Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/agency#services"
              className="rounded-xl border border-white/20 bg-slate-900 px-7 py-3.5 text-sm font-black uppercase tracking-wide text-white transition-all hover:bg-slate-800"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-14 md:py-16">
        <div className="container relative z-10 mx-auto max-w-5xl px-4 grid grid-cols-1 gap-8 md:grid-cols-3">
          <article className="md:col-span-2 rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <h2 className="text-2xl font-black tracking-tight text-white mb-4">What You Get</h2>
            <ul className="space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm font-semibold text-slate-300">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <h2 className="mt-10 text-2xl font-black tracking-tight text-white mb-4">Delivery Process</h2>
            <ol className="space-y-3 text-sm font-semibold text-slate-300">
              {service.process.map((step, index) => (
                <li key={step} className="flex items-start gap-2">
                  <span className="text-amber-400 font-bold">{index + 1}.</span> {step}
                </li>
              ))}
            </ol>
          </article>

          <aside className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <h3 className="text-xl font-black tracking-tight text-white mb-4">Deliverables</h3>
            <ul className="space-y-3 text-sm font-semibold text-slate-300">
              {service.deliverables.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <span className="text-amber-400">•</span> {item}
                </li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
