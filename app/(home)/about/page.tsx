"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Target, Rocket, Users, Globe, BadgeCheck } from "lucide-react";

const principles = [
  {
    title: "Trust by Design",
    description:
      "We build every experience around reliability, transparent policies, and predictable product behavior across all Odlix services.",
    icon: ShieldCheck,
  },
  {
    title: "One Identity, Six Services",
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
    <div className="bg-background min-h-screen pt-32 pb-24 text-foreground transition-colors duration-300">
      <div className="container mx-auto max-w-6xl px-4">
        <section className="mb-20 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8 text-4xl font-black tracking-tight md:text-6xl"
          >
            Building a Dependable Digital Ecosystem
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg"
          >
            Odlix was built to reduce fragmentation in digital life. Instead of juggling disconnected products,
            users and businesses operate through one secure identity, one support channel, and one quality
            standard across all platforms.
          </motion.p>
        </section>

        <section className="mb-16 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <Target className="mb-4 h-8 w-8 text-magenta-500" />
            <h2 className="mb-3 text-2xl font-black">Our Vision</h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              To be recognized as a globally trusted ecosystem where users can learn, build, trade, and grow
              without compromising security, clarity, or service quality.
            </p>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <Rocket className="mb-4 h-8 w-8 text-blue-500" />
            <h2 className="mb-3 text-2xl font-black">Our Mission</h2>
            <p className="text-sm leading-relaxed text-muted-foreground md:text-base">
              To deliver enterprise-level digital experiences through practical products, transparent operations,
              and fast support, while keeping the platform simple enough for everyday users.
            </p>
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h2 className="mb-8 text-2xl font-black md:text-3xl">What Makes Odlix Trustworthy</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {principles.map(({ title, description, icon: Icon }) => (
              <article key={title} className="rounded-2xl border border-border/80 bg-background/40 p-6">
                <Icon className="mb-3 h-6 w-6 text-magenta-500" />
                <h3 className="mb-2 text-lg font-bold">{title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mb-16 rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <h2 className="mb-4 text-2xl font-black md:text-3xl">Operational Commitments</h2>
          <ul className="space-y-3 text-sm leading-relaxed text-muted-foreground md:text-base">
            <li>• We publish clear terms, privacy practices, and service boundaries for every user-facing area.</li>
            <li>• We review platform behavior continuously to improve reliability and user safety.</li>
            <li>• We maintain direct support escalation channels for account, policy, and security concerns.</li>
            <li>• We prioritize accessibility and performance so services remain usable across devices and networks.</li>
          </ul>
        </section>

        <section className="rounded-3xl border border-magenta-500/30 bg-magenta-500/10 p-8 shadow-sm md:p-10">
          <h2 className="mb-3 flex items-center gap-2 text-2xl font-black md:text-3xl">
            <Users className="h-6 w-6" /> Contact & Support
          </h2>
          <p className="mb-4 text-sm leading-relaxed text-muted-foreground md:text-base">
            For platform-related queries, legal clarifications, or policy concerns, contact the Odlix support team.
          </p>
          <div className="space-y-1 text-sm font-semibold md:text-base">
            <p>Email: team.odlix@gmail.com</p>
            <p>Phone / WhatsApp: +91 7372891228</p>
          </div>
        </section>
      </div>
    </div>
  );
}
