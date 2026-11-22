"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Rocket, Users, Globe, BadgeCheck } from "lucide-react";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

const principles = [
  {
    title: "Trust by Design",
    description:
      "We build every experience around reliability, transparent policies, and predictable product behavior across all Odlix services.",
    icon: ShieldCheck,
  },
  {
    title: "One Identity, Digital Ecosystem",
    description:
      "Your Odlix account unlocks a connected ecosystem spanning learning, services, tests, trading workflows, applications, and commerce.",
    icon: Globe,
  },
  {
    title: "Execution with Accountability",
    description:
      "We track quality through measurable benchmarks, documented operations, and responsive support for every customer touchpoint.",
    icon: BadgeCheck,
  },
];

export default function EcosystemAboutPage() {
  return (
    <div className="bg-transparent min-h-screen pt-32 pb-24 text-slate-900 relative">
      <BackgroundBubbles />
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        {/* Clean Header without gradient box */}
        <header className="mb-16 text-left">
          <span className="text-blue-600 font-extrabold tracking-wide text-sm sm:text-base mb-3 block uppercase">
            About Odlix Ecosystem
          </span>
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05] text-slate-900"
          >
            Building a Dependable Digital Ecosystem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-3xl text-sm sm:text-base md:text-xl font-semibold text-slate-600 leading-relaxed"
          >
            Odlix was built to reduce fragmentation in digital life. Instead of juggling disconnected products,
            users and businesses operate through one secure identity, one support channel, and one quality
            standard across all platforms.
          </motion.p>
        </header>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <Target className="mb-4 h-8 w-8 text-blue-600" />
            <h2 className="mb-3 text-2xl font-black text-slate-900">Our Vision</h2>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base font-semibold">
              To be recognized as a globally trusted ecosystem where users can learn, build, trade, and grow
              without compromising security, clarity, or service quality.
            </p>
          </div>
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <Rocket className="mb-4 h-8 w-8 text-blue-600" />
            <h2 className="mb-3 text-2xl font-black text-slate-900">Our Mission</h2>
            <p className="text-sm leading-relaxed text-slate-700 md:text-base font-semibold">
              To deliver enterprise-level digital experiences through practical products, transparent operations,
              and fast support, while keeping the platform simple enough for everyday users.
            </p>
          </div>
        </section>

        <section className="mb-16 bg-transparent p-2 md:p-4">
          <h2 className="mb-8 text-2xl font-black text-slate-900 md:text-3xl">What Makes Odlix Trustworthy</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <Icon className="mb-3 h-6 w-6 text-blue-600" />
                <h3 className="mb-2 text-lg font-bold text-slate-900">{title}</h3>
                <p className="text-sm leading-relaxed text-slate-700 font-semibold">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 bg-transparent p-2 md:p-4">
          <h2 className="mb-4 text-2xl font-black text-slate-900 md:text-3xl">Operational Commitments</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-slate-700 md:text-base font-semibold">
            <li>• We publish clear terms, privacy practices, and service boundaries for every user-facing area.</li>
            <li>• We review platform behavior continuously to improve reliability and user safety.</li>
            <li>• We maintain direct support escalation channels for account, policy, and security concerns.</li>
            <li>• We prioritize accessibility and performance so services remain usable across devices and networks.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <h2 className="mb-3 flex items-center gap-2 text-2xl font-black text-slate-900 md:text-3xl">
            <Users className="h-6 w-6 text-blue-600" /> Contact & Support
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-slate-700 md:text-base font-semibold">
            For platform-related queries, legal clarifications, or policy concerns, contact the Odlix support team.
          </p>
          <div className="space-y-1 text-sm font-bold text-blue-700 md:text-base">
            <p>Email: team.odlix@gmail.com</p>
            <p>Phone / WhatsApp: +91 7372891228</p>
          </div>
        </section>
      </div>
    </div>
  );
}
