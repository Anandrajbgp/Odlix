import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, Award } from "lucide-react";

export default function CompetitionPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 rounded-[2.2rem] shadow-xl">
          <header className="mb-12 border-b border-slate-800 pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-sky-500/20 p-3 text-sky-300">
                <Award className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix Competition — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-semibold mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-COMP-PRIV-2.5. This enterprise-grade policy details data governance for mock tests, competitive exam simulators, rank analytics, and AI coaching telemetry.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Eye className="h-6 w-6 text-sky-300" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>To provide rigorous competitive exam simulations, Odlix Competition collects test attempt timestamps, question response accuracy, sectional timing, leaderboard pseudonymization handles, and AI diagnostic feedback.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Database className="h-6 w-6 text-sky-300" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Assessment telemetry is processed through proprietary analytics engines to calculate percentile rankings, identify knowledge gaps, and recommend personalized AI-driven study pathways.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <UserCheck className="h-6 w-6 text-sky-300" /> 3. Processing Basis & Consent
              </h2>
              <p>Data processing is governed by user registration consent and legitimate interest in academic evaluation and test performance improvement.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Lock className="h-6 w-6 text-sky-300" /> 4. Information Security & Encryption
              </h2>
              <p>All test submissions and score databases are encrypted at rest (AES-256) and transmitted via encrypted HTTPS channels with strict access controls.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Globe className="h-6 w-6 text-sky-300" /> 5. Sub-Processors & Infrastructure
              </h2>
              <p>Cloud infrastructure is hosted on enterprise-vetted secure servers complying with international data protection benchmarks.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Clock3 className="h-6 w-6 text-sky-300" /> 6. Retention & Deletion
              </h2>
              <p>Historical exam attempts are retained for performance tracking over time. Users may request account and score history deletion upon written support inquiry.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <ScrollText className="h-6 w-6 text-sky-300" /> 7. User Data Rights
              </h2>
              <p>Students retain full rights to export their analytical reports, request correction of exam profile metadata, or object to specific processing activities.</p>
            </section>

            <section className="rounded-3xl bg-slate-900/40 backdrop-blur-md p-8 text-white border border-slate-700/60 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Competition Privacy Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-sky-300" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-sky-300" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-sky-200 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
