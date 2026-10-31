import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, FileCheck, Server } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-500">
                <ShieldCheck className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Agency — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-PRIV-2.0. This enterprise-grade policy outlines how Odlix Agency collects, processes, safeguards, and governs client intellectual property, technical telemetry, and stakeholder data during digital transformation and software engineering engagements.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Eye className="h-6 w-6 text-amber-500" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>
                To deliver bespoke software engineering, UI/UX architecture, cloud infrastructure, and digital acceleration services, Odlix Agency systematically collects and processes the following data categories:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li><strong className="text-foreground">Stakeholder Identity & Communication:</strong> Executive contact details, Slack/Teams handles, correspondence logs, meeting recordings, and project briefing notes.</li>
                <li><strong className="text-foreground">Proprietary & Operational Assets:</strong> Source code repositories, API keys, database schemas, brand guidelines, design systems, and business logic documentation.</li>
                <li><strong className="text-foreground">Financial & Billing Metadata:</strong> Corporate billing addresses, tax identification numbers, milestone sign-offs, wire transfer receipts, and escrow verifications.</li>
                <li><strong className="text-foreground">Technical & Diagnostic Telemetry:</strong> Staging server access logs, error stack traces, deployment pipeline metrics, and repository access audit trails.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-amber-500" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>
                All information gathered is strictly utilized for authorized business objectives under strict non-disclosure and professional engagement frameworks:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Executing Master Services Agreements (MSAs), Statements of Work (SoW), and milestone deliverables.</li>
                <li>Provision of continuous code reviews, DevOps maintenance, sprint planning, and architectural consultations.</li>
                <li>Ensuring absolute data segregation between client projects to prevent cross-contamination of proprietary algorithms.</li>
                <li>Complying with statutory tax reporting, auditing, and corporate governance mandates.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Lock className="h-6 w-6 text-amber-500" /> 3. Information Security, Encryption & Access Governance
              </h2>
              <p>
                Odlix Agency enforces defense-in-depth cybersecurity measures. All sensitive repositories, credentials, and client assets are encrypted using AES-256 at rest and TLS 1.3 in transit. Access is strictly governed via Role-Based Access Control (RBAC), multi-factor authentication (MFA), and zero-trust internal network policies. Personnel are bound by perpetual confidentiality covenants.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-amber-500" /> 4. Sub-Processors & Infrastructure Standards
              </h2>
              <p>
                We leverage enterprise cloud infrastructure providers (such as AWS, Google Cloud Platform, and Vercel) adhering to ISO 27001, SOC 2 Type II, and GDPR compliance standards. Third-party subprocessors are vetted for uncompromising data protection practices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Clock3 className="h-6 w-6 text-amber-500" /> 5. Data Retention & Secure Offboarding
              </h2>
              <p>
                Post-project completion or contract termination, staging environments, repository credentials, and temporary caches are securely purged within 30 business days. Statutory billing records and final source code handovers are securely archived in compliance with applicable commercial legislation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <ScrollText className="h-6 w-6 text-amber-500" /> 6. Client Audit & Data Rights
              </h2>
              <p>
                Enterprise clients retain absolute ownership of their intellectual property. Clients may request data export, credential revocation, security posture verification reports, or formal data purging certificates upon written notice.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-amber-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Agency DPO & Enterprise Legal Desk</h2>
              <p className="text-slate-300 mb-6 text-sm">For security questionnaires, compliance attestations, or custom DPA (Data Processing Agreement) executions:</p>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-amber-300 font-black mt-4">Response SLA: Within 12–24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
