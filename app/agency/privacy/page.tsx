import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3 } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-slate-50 py-24">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-sm md:p-12">
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-slate-50 p-3 text-slate-700">
                <ShieldCheck className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-slate-900 md:text-5xl">Agency Privacy Policy</h1>
            </div>
            <p className="text-sm text-slate-600 md:text-base">
              Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-PRIV-1.1. This policy explains how Odlix Agency handles
              personal and project information.
            </p>
          </header>

          <div className="space-y-8 text-sm leading-relaxed text-slate-700 md:text-base">
            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Eye className="h-5 w-5 text-slate-600" /> Data We Collect
              </h2>
              <p>
                We may collect contact data, project requirements, communication records, technical diagnostics,
                invoicing metadata, and operational details required for service delivery and support.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Database className="h-5 w-5 text-slate-600" /> Why We Process It
              </h2>
              <ul className="space-y-2">
                <li>• Proposal preparation, project planning, and contractual execution.</li>
                <li>• Delivery communication, status updates, approvals, and support workflows.</li>
                <li>• Platform security, fraud detection, and legal/compliance obligations.</li>
                <li>• Performance and quality improvements via controlled analytics.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <UserCheck className="h-5 w-5 text-slate-600" /> Processing Basis & Consent
              </h2>
              <p>
                Data is processed under contract necessity, legitimate interest, consent, or legal obligation
                depending on engagement type and jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Lock className="h-5 w-5 text-slate-600" /> Security & Access Controls
              </h2>
              <p>
                We implement role-based access, secure tooling, and operational controls to minimize risk of unauthorized
                disclosure. Access is restricted to personnel with defined business need.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Globe className="h-5 w-5 text-slate-600" /> Third-Party Processors
              </h2>
              <p>
                Odlix may use vetted infrastructure and software providers for hosting, communication, analytics,
                and support. These processors operate under contractual confidentiality and purpose limits.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <Clock3 className="h-5 w-5 text-slate-600" /> Retention & Deletion
              </h2>
              <p>
                Data is retained for project continuity, legal compliance, and auditability, then removed or anonymized
                as feasible after retention requirements are met.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
                <ScrollText className="h-5 w-5 text-slate-600" /> Your Rights
              </h2>
              <p>
                Subject to applicable law, you may request access, correction, deletion, portability,
                or objection to certain processing activities.
              </p>
            </section>

            <section className="rounded-2xl bg-slate-900 p-6 text-white">
              <h2 className="mb-3 text-xl font-black">Privacy, DPO & Grievance Contact</h2>
              <div className="space-y-2 text-sm font-semibold md:text-base">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.12em] opacity-90">Initial response target: 24-48 working hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
