"use client";

import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck, CheckCircle2, Users, Mail, Phone } from "lucide-react";

const values = [
  {
    title: "Transparent Delivery",
    description: "Clear scope, documented milestones, and timely communication from kickoff to launch.",
  },
  {
    title: "Quality Engineering",
    description: "Design and development standards focused on maintainability, performance, and reliability.",
  },
  {
    title: "Client Partnership",
    description: "We collaborate closely with stakeholders and align execution to measurable business outcomes.",
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col bg-slate-50 text-slate-900">
      <section className="py-24">
        <div className="container mx-auto max-w-6xl px-4 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 text-4xl font-black tracking-tight md:text-6xl"
          >
            Odlix Agency: Built for Long-Term Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg"
          >
            Odlix Agency helps organizations transform ideas into dependable digital products. We combine
            strategy, design, engineering, and lifecycle support with clear accountability at every stage.
          </motion.p>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <Target className="mb-3 h-7 w-7 text-[var(--platform-accent)]" />
              <h2 className="mb-2 text-2xl font-black">Our Vision</h2>
              <p className="text-slate-600">
                To be a trusted digital execution partner for growing teams that need quality without
                complexity.
              </p>
            </div>
            <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
              <Rocket className="mb-3 h-7 w-7 text-[var(--platform-accent)]" />
              <h2 className="mb-2 text-2xl font-black">Our Mission</h2>
              <p className="text-slate-600">
                To deliver outcome-focused digital services through structured processes, transparent communication,
                and reliable post-delivery support.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm md:p-10">
            <h2 className="mb-6 text-2xl font-black md:text-3xl">How We Work</h2>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
              <article className="rounded-2xl border border-slate-200 p-5">
                <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="mb-1 font-bold">Discovery</h3>
                <p className="text-sm text-slate-600">Business goals, requirements, constraints, and risk mapping.</p>
              </article>
              <article className="rounded-2xl border border-slate-200 p-5">
                <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="mb-1 font-bold">Build</h3>
                <p className="text-sm text-slate-600">Design, implementation, QA, and release planning with milestone reviews.</p>
              </article>
              <article className="rounded-2xl border border-slate-200 p-5">
                <CheckCircle2 className="mb-2 h-5 w-5 text-emerald-600" />
                <h3 className="mb-1 font-bold">Scale</h3>
                <p className="text-sm text-slate-600">Optimization, maintenance, monitoring, and ongoing growth support.</p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {values.map((value) => (
              <article key={value.title} className="rounded-3xl border border-slate-200 bg-white p-7 shadow-sm">
                <ShieldCheck className="mb-3 h-6 w-6 text-[var(--platform-accent)]" />
                <h3 className="mb-2 text-lg font-black">{value.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{value.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 md:p-10">
            <h2 className="mb-3 flex items-center gap-2 text-2xl font-black">
              <Users className="h-6 w-6" /> Agency Support
            </h2>
            <p className="mb-3 text-slate-700">
              For project discussions, delivery clarifications, policy requests, and legal questions:
            </p>
            <div className="space-y-1 text-sm font-semibold md:text-base">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
