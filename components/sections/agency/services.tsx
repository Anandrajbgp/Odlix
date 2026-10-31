"use client";

import Link from "next/link";
import { ArrowRight, Code2, Megaphone, Palette, Smartphone, Video } from "lucide-react";
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
    <section id="services" className="relative overflow-hidden py-16 md:py-20 bg-slate-950 text-white border-b border-white/10">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/20 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/20 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between mb-10">
          <div>
            <h2 className="text-3xl font-black tracking-tight text-white md:text-5xl">Our Core Services</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-slate-300 md:text-base">
              Designed for businesses that want premium execution and measurable growth.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {agencyServices.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons];
            return (
              <Link
                key={service.slug}
                href={`/agency/services/${service.slug}`}
                className="group rounded-3xl border border-white/10 bg-slate-900 p-6 md:p-8 transition-all hover:border-amber-500/60 hover:shadow-2xl hover:shadow-amber-500/10 hover:-translate-y-1.5"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-2xl bg-amber-500/15 p-3 text-amber-400 border border-amber-500/30">
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowRight className="h-5 w-5 text-slate-400 transition-transform group-hover:translate-x-1 group-hover:text-amber-400" />
                </div>
                <h3 className="mt-5 text-xl font-black tracking-tight text-white">{service.title}</h3>
                <p className="mt-2 text-sm text-slate-300 font-medium leading-relaxed">{service.summary}</p>
                <span className="mt-5 inline-flex text-xs font-black uppercase tracking-[0.16em] text-amber-400">
                  View Details
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
