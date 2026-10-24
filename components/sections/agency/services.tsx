"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Code2, Megaphone, Palette, Smartphone, Video } from "lucide-react";

const services = [
  {
    title: "Website Development",
    sub: "Fast, premium websites that convert visitors into clients.",
    details: [
      "Modern design with clear brand positioning",
      "Mobile-first pages with high loading speed",
      "Landing pages built for leads and sales",
    ],
    icon: Code2,
  },
  {
    title: "App Development",
    sub: "Smooth apps your users enjoy and trust every day.",
    details: [
      "Clean UX for Android and iOS users",
      "Scalable backend-ready architecture",
      "Reliable release flow with performance focus",
    ],
    icon: Smartphone,
  },
  {
    title: "Video Production",
    sub: "High-impact videos that make your brand look powerful.",
    details: [
      "Reels and ad creatives with strong hooks",
      "Brand storytelling with clear message",
      "Editing style tuned for retention and response",
    ],
    icon: Video,
  },
  {
    title: "Graphic Design",
    sub: "Visual identity that makes your business look elite.",
    details: [
      "Social creatives that boost engagement",
      "Brand kits for consistent look and feel",
      "Sales assets that build trust quickly",
    ],
    icon: Palette,
  },
  {
    title: "Digital Marketing",
    sub: "Growth campaigns focused on leads, sales, and ROI.",
    details: [
      "Performance ad strategy and execution",
      "Conversion tracking and funnel optimization",
      "Weekly reporting with actionable insights",
    ],
    icon: Megaphone,
  },
];

export function Services() {
  return (
    <section id="services" className="border-b border-border bg-muted/20 py-16 md:py-20">
      <div className="container mx-auto px-4">
        <div className="mx-auto mb-10 max-w-4xl text-center md:mb-12">
          <h2 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">
            Our Core Services
          </h2>
          <p className="mx-auto mt-3 max-w-3xl text-sm font-semibold leading-relaxed text-muted-foreground md:text-base">
            We help you build a premium digital presence, attract better customers, and grow faster with execution that actually delivers results.
          </p>
        </div>

        <div className="mx-auto max-w-6xl">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.08, duration: 0.45, ease: "easeOut" }}
                className="group border-t border-border py-6 first:border-t-0 md:py-7"
              >
                <div className="grid grid-cols-1 gap-5 md:grid-cols-[220px_1fr_auto] md:items-start md:gap-6">
                  <div className="inline-flex w-fit items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)]">
                    <Icon className="h-4 w-4" />
                    Service {index + 1}
                  </div>

                  <div>
                    <h3 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">
                      {service.title}
                    </h3>
                    <p className="mt-2 text-sm font-semibold text-muted-foreground md:text-base">
                      {service.sub}
                    </p>

                    <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
                      {service.details.map((point) => (
                        <li key={point} className="text-sm font-medium text-foreground/85">
                          • {point}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="md:pt-1">
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--platform-accent)]/10 px-3 py-1.5 text-[11px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)] transition-colors group-hover:bg-[var(--platform-accent)] group-hover:text-white">
                      High Impact
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
