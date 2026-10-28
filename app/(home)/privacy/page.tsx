"use client";

import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3 } from "lucide-react";

export default function EcosystemPrivacyPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] py-24 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <header className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-magenta-500/20 p-3 text-magenta-300">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">Privacy Policy</h1>
            </div>
            <p className="text-sm text-white/70 md:text-base">
              Effective Date: 18 August 2026 | Version: ODLIX-PRIV-1.1. This policy explains what data we collect,
              why we process it, and how we protect user information.
            </p>
          </header>

          <div className="space-y-8 text-sm leading-relaxed text-white/80 md:text-base">
            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Eye className="h-5 w-5 text-magenta-400" /> Information We Collect
              </h2>
              <p>
                We may collect identity and contact data, account metadata, service usage logs, transaction records,
                support communications, and technical diagnostics necessary for secure service delivery.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Database className="h-5 w-5 text-magenta-400" /> Purpose of Processing
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
                <UserCheck className="h-5 w-5 text-magenta-400" /> Lawful Bases & User Choice
              </h2>
              <p>
                Processing is performed under lawful grounds including consent, contract performance,
                legitimate interest, and legal obligation depending on the service context.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Lock className="h-5 w-5 text-magenta-400" /> Security Controls
              </h2>
              <p>
                Odlix applies layered controls including encrypted transport where applicable, role-based access,
                process hardening, and periodic review. No system is absolutely risk-free, but safeguards are
                continuously improved.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Globe className="h-5 w-5 text-magenta-400" /> Data Sharing & Processors
              </h2>
              <p>
                We do not sell personal data. We may share limited data with trusted processors for hosting,
                communication, analytics, payments, and compliance under contractual protections.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Clock3 className="h-5 w-5 text-magenta-400" /> Retention & Deletion
              </h2>
              <p>
                Data is retained only as long as necessary for service continuity, legal compliance, and audit.
                After retention expiry, data is deleted or anonymized where feasible.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <ScrollText className="h-5 w-5 text-magenta-400" /> Your Rights
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

            <section className="rounded-2xl bg-white p-6 text-[#001f3f]">
              <h2 className="mb-3 text-xl font-black">Privacy, DPO & Grievance Contact</h2>
              <div className="space-y-2 text-sm font-semibold md:text-base">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.12em]">Initial response target: 24-48 working hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
