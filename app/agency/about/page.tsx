"use client";

import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck, CheckCircle2, Users, Mail, Phone } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-background text-foreground">
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight md:text-5xl"
          >
            Odlix Agency: Built for Long-Term Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Odlix Agency helps organizations transform ideas into dependable digital products. We combine strategy, design, engineering, and lifecycle support with clear accountability at every stage.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Target className="mb-2 h-6 w-6 text-[var(--platform-accent)]" />
            <h2 className="text-xl font-black">Our Vision</h2>
            <p className="mt-2 text-muted-foreground">To be a trusted digital execution partner for growing teams that need quality without complexity.</p>
          </div>
          <div>
            <Rocket className="mb-2 h-6 w-6 text-[var(--platform-accent)]" />
            <h2 className="text-xl font-black">Our Mission</h2>
            <p className="mt-2 text-muted-foreground">To deliver outcome-focused digital services through structured processes, transparent communication, and reliable post-delivery support.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-black md:text-2xl">How We Work</h2>
          <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Discovery", desc: "Business goals, requirements, constraints, and risk mapping." },
              { title: "Build", desc: "Design, implementation, QA, and release planning with milestone reviews." },
              { title: "Scale", desc: "Optimization, maintenance, monitoring, and ongoing growth support." },
            ].map((step) => (
              <div key={step.title}>
                <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="font-bold">{step.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border py-10 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-xl font-black md:text-2xl">Agency Support</h2>
          <p className="mt-2 text-muted-foreground">For project discussions, delivery clarifications, policy requests, and legal questions:</p>
          <div className="mt-4 space-y-1 text-sm font-semibold md:text-base">
            <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
            <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
          </div>
        </div>
      </section>
    </div>
  );
}
