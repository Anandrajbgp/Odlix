"use client";

import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3 } from "lucide-react";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function EcosystemPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24 text-white relative">
      <BackgroundBubbles />
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Banner Card matching exact design and fonts from reference image */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-8 md:p-12 text-[#0f1d26] shadow-[0_25px_60px_rgba(0,212,202,0.25)] border border-white/30 mb-10">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.12)_40%,transparent_65%)] pointer-events-none" />

          <header className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-[#0f1d26]/10 p-3 text-[#0f1d26]">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl text-[#0f1d26]">Privacy Policy</h1>
            </div>
            <p className="text-sm text-[#0f1d26]/85 md:text-base font-semibold">
              Effective Date: 18 August 2026 | Version: ODLIX-PRIV-1.1. This policy explains what data we collect,
              why we process it, and how we protect user information.
            </p>
          </header>
        </div>

        <div className="rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 shadow-xl md:p-12 space-y-8 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Eye className="h-5 w-5 text-cyan-300" /> Information We Collect
            </h2>
            <p>
              We may collect identity and contact data, account metadata, service usage logs, transaction records,
              support communications, and technical diagnostics necessary for secure service delivery.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Database className="h-5 w-5 text-cyan-300" /> Purpose of Processing
            </h2>
            <ul className="space-y-2">
              <li>• Account authentication, platform operations, and feature delivery.</li>
              <li>• Customer support, legal response workflows, and security monitoring.</li>
              <li>• Fraud prevention, abuse detection, and operational diagnostics.</li>
              <li>• Service improvement using aggregated or de-identified analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <UserCheck className="h-5 w-5 text-cyan-300" /> Lawful Bases & User Choice
            </h2>
            <p>
              Processing is performed under lawful grounds including consent, contract performance,
              legitimate interest, and legal obligation depending on the service context.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Lock className="h-5 w-5 text-cyan-300" /> Security Controls
            </h2>
            <p>
              Odlix applies layered controls including encrypted transport where applicable, role-based access,
              process hardening, and periodic review. No system is absolutely risk-free, but safeguards are
              continuously improved.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Globe className="h-5 w-5 text-cyan-300" /> Data Sharing & Processors
            </h2>
            <p>
              We do not sell personal data. We may share limited data with trusted processors for hosting,
              communication, analytics, payments, and compliance under contractual protections.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Clock3 className="h-5 w-5 text-cyan-300" /> Retention & Deletion
            </h2>
            <p>
              Data is retained only as long as necessary for service continuity, legal compliance, and audit.
              After retention expiry, data is deleted or anonymized where feasible.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <ScrollText className="h-5 w-5 text-cyan-300" /> Your Rights
            </h2>
            <p>
              Subject to applicable law, users may request access, correction, deletion, portability, or
              objection/restriction of personal data processing.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-white">Cookies & Similar Technologies</h2>
            <p>
              Cookies are used for session reliability, security, and performance insights. Browser settings
              may control some non-essential tracking mechanisms.
            </p>
          </section>

          <section className="rounded-2xl bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-6 text-[#0f1d26]">
            <h2 className="mb-3 text-xl font-black">Privacy, DPO & Grievance Contact</h2>
            <div className="space-y-2 text-sm font-bold md:text-base">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
              <p className="text-xs uppercase tracking-[0.12em] opacity-90 font-extrabold">Initial response target: 24-48 working hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
