"use client";

import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, Smartphone, Video, CheckCircle2 } from "lucide-react";
import { agencyServices } from "@/lib/agency-services";

const icons = {
  "website-development": Code2,
  "app-development": Smartphone,
  "video-production": Video,
  "graphic-design": Palette,
  "digital-marketing": Megaphone,
} as const;

export function Services() {
  return (
    <section id="services" className="relative overflow-hidden bg-transparent py-10 md:py-16 text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <span className="text-[#D97706] font-extrabold tracking-wide text-xs uppercase mb-1 block">
              Enterprise Product Engineering
            </span>
            <h2 className="text-3xl font-extrabold tracking-tight text-[#0F172A] md:text-5xl">Our Core Services</h2>
            <p className="mt-2 max-w-2xl text-xs sm:text-sm font-semibold leading-relaxed text-[#475569]">
              Designed for companies that want high-performance execution, custom code architecture, and measurable ROI.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {agencyServices.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons] || Code2;
            return (
              <Link
                key={service.slug}
                href={`/agency/services/${service.slug}`}
                className="group rounded-3xl border border-[#E2E8F0] bg-white p-6 md:p-8 transition-all hover:border-[#D97706]/60 shadow-sm hover:shadow-lg flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-5">
                    <div className="rounded-2xl bg-[#FEF3C7] p-3.5 text-[#D97706] border border-[#D97706]/30 group-hover:scale-110 transition-transform">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="w-8 h-8 rounded-full bg-[#F8FAFC] flex items-center justify-center text-[#475569] group-hover:bg-[#18181B] group-hover:text-white transition-colors">
                      <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight text-[#0F172A] mb-2 group-hover:text-[#D97706] transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#475569] leading-relaxed mb-5">
                    {service.summary}
                  </p>

                  <div className="space-y-2 mb-6">
                    {service.deliverables.slice(0, 3).map((item) => (
                      <div key={item} className="flex items-center gap-2 text-xs font-bold text-[#0F172A]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#D97706] shrink-0" />
                        <span className="truncate">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E8F0] flex items-center justify-between">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-[#D97706]">
                    Explore Service Details
                  </span>
                  <span className="text-xs font-bold text-[#475569]">
                    {service.deliverables.length} Deliverables
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
