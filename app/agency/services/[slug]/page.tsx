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
    <div className="bg-background text-foreground">
      <section className="relative overflow-hidden border-b border-border py-12 md:py-16">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/12 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4">
          <p className="text-[10px] font-black uppercase tracking-[0.2em] text-[var(--platform-accent)]">
            Agency Service
          </p>
          <h1 className="mt-3 text-3xl font-black tracking-tight md:text-5xl">{service.title}</h1>
          <p className="mt-4 max-w-3xl text-base font-medium text-muted-foreground md:text-lg">
            {service.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 rounded-lg bg-[var(--platform-accent)] px-6 py-3 text-sm font-black uppercase tracking-wide text-white transition-transform hover:scale-[1.02] active:scale-95"
            >
              Start Project
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/agency#services"
              className="rounded-lg border border-border px-6 py-3 text-sm font-black uppercase tracking-wide text-foreground transition-all hover:bg-muted"
            >
              All Services
            </Link>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden py-10 md:py-12">
        <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/12 blur-3xl" />
        <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/10 blur-3xl" />
        <div className="container relative z-10 mx-auto max-w-5xl px-4 grid grid-cols-1 gap-8 md:grid-cols-3">
          <article className="md:col-span-2">
            <h2 className="text-xl font-black md:text-2xl">What You Get</h2>
            <ul className="mt-4 space-y-3">
              {service.highlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[var(--platform-accent)]" />
                  {item}
                </li>
              ))}
            </ul>

            <h2 className="mt-8 text-xl font-black md:text-2xl">Delivery Process</h2>
            <ol className="mt-4 space-y-2 text-sm text-muted-foreground">
              {service.process.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
          </article>

          <aside className="rounded-xl border border-border bg-card p-5">
            <h3 className="text-lg font-black tracking-tight">Deliverables</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {service.deliverables.map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>
    </div>
  );
}
