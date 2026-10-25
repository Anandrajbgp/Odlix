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
    <section id="services" className="relative overflow-hidden py-12 md:py-14 border-b border-border">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#fbbf24]/12 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="flex flex-col gap-2 md:flex-row md:items-end md:justify-between">
          <div>
            <h2 className="text-2xl font-black tracking-tight text-foreground md:text-4xl">Our Core Services</h2>
            <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
              Designed for businesses that want premium execution and measurable growth.
            </p>
          </div>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {agencyServices.map((service) => {
            const Icon = icons[service.slug as keyof typeof icons];
            return (
              <Link
                key={service.slug}
                href={`/agency/services/${service.slug}`}
                className="group rounded-xl border border-border bg-card p-5 transition-all hover:border-[var(--platform-accent)]/50 hover:shadow-sm"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="rounded-lg bg-[var(--platform-accent)]/10 p-2 text-[var(--platform-accent)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <ArrowRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-[var(--platform-accent)]" />
                </div>
                <h3 className="mt-4 text-lg font-black tracking-tight text-foreground">{service.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{service.summary}</p>
                <span className="mt-4 inline-flex text-[11px] font-black uppercase tracking-[0.16em] text-[var(--platform-accent)]">
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
