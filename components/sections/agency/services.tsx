"use client";

import { Code2, Megaphone, Palette, Smartphone, Video } from "lucide-react";

const services = [
  { title: "Website Development", desc: "Fast, premium websites that convert visitors into clients.", icon: Code2 },
  { title: "App Development", desc: "Smooth apps your users enjoy and trust every day.", icon: Smartphone },
  { title: "Video Production", desc: "High-impact videos that make your brand look powerful.", icon: Video },
  { title: "Graphic Design", desc: "Visual identity that makes your business look elite.", icon: Palette },
  { title: "Digital Marketing", desc: "Growth campaigns focused on leads, sales, and ROI.", icon: Megaphone },
];

export function Services() {
  return (
    <section id="services" className="py-12 md:py-14 border-b border-border">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black tracking-tight text-foreground md:text-4xl">Our Core Services</h2>
        <p className="mt-2 max-w-2xl text-sm font-medium leading-relaxed text-muted-foreground md:text-base">
          We help you build a premium digital presence and grow faster with execution that delivers results.
        </p>

        <div className="mt-8 divide-y divide-border">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div key={service.title} className="flex items-start gap-4 py-5">
                <Icon className="mt-1 h-5 w-5 shrink-0 text-[var(--platform-accent)]" />
                <div>
                  <h3 className="text-lg font-black tracking-tight text-foreground">{service.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{service.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
