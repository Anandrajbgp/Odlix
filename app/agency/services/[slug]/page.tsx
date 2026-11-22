import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
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
    <div className="bg-transparent text-[#0F172A] min-h-screen pt-28 md:pt-36 pb-20">
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 md:p-12 shadow-sm">
            <p className="inline-flex items-center gap-2 rounded-full border border-[#D97706]/30 bg-[#FEF3C7] px-4 py-1.5 text-xs font-extrabold uppercase tracking-wider text-[#D97706]">
              <Sparkles className="h-4 w-4" />
              Agency Service
            </p>
            <h1 className="mt-4 text-3xl font-extrabold tracking-tight md:text-5xl text-[#0F172A]">{service.title}</h1>
            <p className="mt-4 max-w-3xl text-base font-semibold text-[#475569] md:text-lg leading-relaxed">
              {service.description}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                href="/signup"
                className="btn-pill-primary text-white shadow-md active:scale-95 transition-all text-xs font-extrabold uppercase tracking-wider"
                style={{ backgroundColor: "#18181B", color: "#FFFFFF" }}
              >
                <span>Start Project</span>
                <ArrowRight className="h-4 w-4 text-[#D97706]" />
              </Link>
              <Link
                href="/agency#services"
                className="btn-pill-secondary hover:bg-slate-200 active:scale-95 transition-all text-xs font-bold uppercase tracking-wider"
              >
                All Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 gap-6 md:grid-cols-3">
          <article className="md:col-span-2 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-black tracking-tight text-[#0F172A]">Deliverables & Features</h2>
            <p className="mt-2 text-xs font-semibold text-[#475569]">
              Enterprise-grade execution tailored to your business roadmap.
            </p>
            <div className="mt-6 space-y-3">
              {service.deliverables.map((item) => (
                <div key={item} className="flex items-start gap-3 rounded-xl border border-[#E2E8F0] bg-white p-3.5 shadow-sm">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-[#D97706] shrink-0" />
                  <span className="text-xs font-bold text-[#0F172A]">{item}</span>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 md:p-8 shadow-sm">
            <h3 className="text-xl font-black tracking-tight text-[#0F172A]">Project Workflow</h3>
            <p className="mt-3 text-xs font-semibold leading-relaxed text-[#475569]">
              Transparent milestones, weekly sprint reviews, and dedicated project manager support.
            </p>
            <div className="mt-6 rounded-xl border border-[#D97706]/30 bg-[#FEF3C7] p-4">
              <p className="text-[10px] font-black uppercase tracking-wider text-[#D97706]">
                Guaranteed SLA
              </p>
              <p className="mt-1 text-xs font-bold text-[#0F172A]">
                On-time delivery with post-launch technical support.
              </p>
            </div>
          </article>
        </div>
      </section>
    </div>
  );
}
