"use client";

import { motion } from "framer-motion";
import { Target, Rocket, Users, Mail, Phone, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-transparent text-[#0F172A] min-h-screen pt-28 md:pt-36 pb-20">
      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-[#FEF3C7] border border-[#D97706]/30 text-[#D97706] text-xs font-extrabold uppercase tracking-wide mb-4 shadow-sm"
          >
            <Briefcase className="w-4 h-4 text-[#D97706]" />
            <span>About Odlix Agency</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-extrabold tracking-tight md:text-5xl text-[#0F172A]"
          >
            Odlix Agency: Built for Long-Term Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-3 max-w-3xl text-base leading-relaxed text-[#475569] md:text-lg font-medium"
          >
            Odlix Agency helps organizations transform ideas into dependable digital products. We combine strategy, design, engineering, and lifecycle support with clear accountability at every stage.
          </motion.p>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 shadow-sm">
            <Target className="mb-3 h-8 w-8 text-[#D97706]" />
            <h2 className="text-2xl font-black text-[#0F172A]">Our Vision</h2>
            <p className="mt-2 text-[#475569] font-semibold leading-relaxed text-sm md:text-base">To be a trusted digital execution partner for growing teams that need quality without complexity.</p>
          </div>
          <div className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-8 shadow-sm">
            <Rocket className="mb-3 h-8 w-8 text-[#D97706]" />
            <h2 className="text-2xl font-black text-[#0F172A]">Our Mission</h2>
            <p className="mt-2 text-[#475569] font-semibold leading-relaxed text-sm md:text-base">To deliver outcome-focused digital services through structured processes, transparent communication, and reliable post-delivery support.</p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-extrabold md:text-3xl text-[#0F172A] mb-6">How We Work</h2>
          <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
            {[
              { title: "Discovery", desc: "Business goals, requirements, constraints, and risk mapping." },
              { title: "Build", desc: "Design, implementation, QA, and release planning with milestone reviews." },
              { title: "Scale", desc: "Optimization, maintenance, monitoring, and ongoing growth support." },
            ].map((step) => (
              <div key={step.title} className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 shadow-sm">
                <h3 className="text-lg font-extrabold text-[#0F172A] mb-2">{step.title}</h3>
                <p className="text-xs font-semibold text-[#475569] leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
