"use client";

import { motion } from "framer-motion";
import { Target, Rocket, ShieldCheck, CheckCircle2, Users, Mail, Phone, Briefcase } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="bg-slate-950 text-white min-h-screen pt-28 md:pt-36 pb-20">
      <section className="py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-amber-500/15 border border-amber-500/30 text-amber-400 text-sm font-black uppercase mb-6"
          >
            <Briefcase className="w-4 h-4" />
            <span>About Odlix Agency</span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl font-black tracking-tight md:text-5xl text-white"
          >
            Odlix Agency: Built for Long-Term Trust
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-4 max-w-3xl text-base leading-relaxed text-slate-300 md:text-lg font-medium"
          >
            Odlix Agency helps organizations transform ideas into dependable digital products. We combine strategy, design, engineering, and lifecycle support with clear accountability at every stage.
          </motion.p>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4 grid grid-cols-1 gap-8 md:grid-cols-2">
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <Target className="mb-3 h-8 w-8 text-amber-400" />
            <h2 className="text-2xl font-black text-white">Our Vision</h2>
            <p className="mt-3 text-slate-300 font-medium leading-relaxed">To be a trusted digital execution partner for growing teams that need quality without complexity.</p>
          </div>
          <div className="rounded-3xl border border-white/10 bg-slate-900 p-8 shadow-2xl">
            <Rocket className="mb-3 h-8 w-8 text-amber-400" />
            <h2 className="text-2xl font-black text-white">Our Mission</h2>
            <p className="mt-3 text-slate-300 font-medium leading-relaxed">To deliver outcome-focused digital services through structured processes, transparent communication, and reliable post-delivery support.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <h2 className="text-2xl font-black md:text-3xl text-white mb-8">How We Work</h2>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              { title: "Discovery", desc: "Business goals, requirements, constraints, and risk mapping." },
              { title: "Build", desc: "Design, implementation, QA, and release planning with milestone reviews." },
              { title: "Scale", desc: "Optimization, maintenance, monitoring, and ongoing growth support." },
            ].map((step) => (
              <div key={step.title} className="rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-xl">
                <CheckCircle2 className="mb-3 h-6 w-6 text-amber-400" />
                <h3 className="font-black text-lg text-white">{step.title}</h3>
                <p className="mt-2 text-sm text-slate-300 font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-white/10 py-12 md:py-16">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="rounded-3xl bg-slate-900/90 p-8 text-white border border-amber-500/30 shadow-2xl">
            <h2 className="text-2xl font-black md:text-3xl mb-3">Agency Support &amp; Enquiries</h2>
            <p className="text-slate-300 text-sm font-medium mb-6">For project discussions, delivery clarifications, policy requests, and legal questions:</p>
            <div className="space-y-3 text-sm font-bold md:text-base">
              <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-400" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-400" /> +91 7372891228</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
