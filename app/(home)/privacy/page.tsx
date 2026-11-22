"use client";

import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3 } from "lucide-react";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function EcosystemPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24 text-slate-900 relative">
      <BackgroundBubbles />
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Clean Header without gradient box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-slate-900">
              <ShieldCheck className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl text-slate-900">Privacy Policy</h1>
          </div>
          <p className="text-sm text-slate-600 md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-PRIV-1.1. This policy explains what data we collect,
            why we process it, and how we protect user information.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-800 md:text-base font-medium">
          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Eye className="h-5 w-5 text-blue-600" /> Information We Collect
            </h2>
            <p className="text-slate-700">
              We may collect identity and contact data, account metadata, service usage logs, transaction records,
              support communications, and technical diagnostics necessary for secure service delivery.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Database className="h-5 w-5 text-blue-600" /> Purpose of Processing
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Account authentication, platform operations, and feature delivery.</li>
              <li>• Customer support, legal response workflows, and security monitoring.</li>
              <li>• Fraud prevention, abuse detection, and operational diagnostics.</li>
              <li>• Service improvement using aggregated or de-identified analytics.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <UserCheck className="h-5 w-5 text-blue-600" /> Lawful Bases & User Choice
            </h2>
            <p className="text-slate-700">
              Processing is performed under lawful grounds including consent, contract performance,
              legitimate interest, and legal obligation depending on the service context.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Lock className="h-5 w-5 text-blue-600" /> Security Controls
            </h2>
            <p className="text-slate-700">
              Odlix applies layered controls including encrypted transport where applicable, role-based access,
              process hardening, and periodic review. No system is absolutely risk-free, but safeguards are
              continuously improved.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Globe className="h-5 w-5 text-blue-600" /> Data Sharing & Processors
            </h2>
            <p className="text-slate-700">
              We do not sell personal data. We may share limited data with trusted processors for hosting,
              communication, analytics, payments, and compliance under contractual protections.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Clock3 className="h-5 w-5 text-blue-600" /> Retention & Deletion
            </h2>
            <p className="text-slate-700">
              Data is retained only as long as necessary for service continuity, legal compliance, and audit.
              After retention expiry, data is deleted or anonymized where feasible.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <ScrollText className="h-5 w-5 text-blue-600" /> Your Rights
            </h2>
            <p className="text-slate-700">
              Subject to applicable law, users may request access, correction, deletion, portability, or
              objection/restriction of personal data processing.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Cookies & Similar Technologies</h2>
            <p className="text-slate-700">
              Cookies are used for session reliability, security, and performance insights. Browser settings
              may control some non-essential tracking mechanisms.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-900">
            <h2 className="mb-3 text-xl font-black">Privacy, DPO & Grievance Contact</h2>
            <div className="space-y-2 text-sm font-semibold md:text-base text-slate-800">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" /> +91 7372891228</p>
              <p className="text-xs uppercase tracking-[0.12em] opacity-80 font-bold text-slate-600">Initial response target: 24-48 working hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
