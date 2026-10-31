import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, TrendingUp } from "lucide-react";

export default function TradingPrivacyPage() {
  return (
    <div
      className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative flex flex-col"
      style={{
        // @ts-expect-error
        "--platform-primary": "#7CFC00",
        "--platform-secondary": "#10b981",
        "--platform-accent": "#7CFC00",
        "--platform-gradient": "linear-gradient(135deg, #7CFC00 0%, #10b981 55%, #7CFC00 100%)",
      }}
    >
      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex-1">
        <div
          className="relative overflow-hidden rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <header className="mb-12 border-b border-slate-800 pb-8 relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-400">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix Trading — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-semibold mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-TRADE-PRIV-2.5. Privacy policy detailing data protection for financial mentorship, market analysis tools, and account security.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold relative z-10">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Eye className="h-6 w-6 text-emerald-400" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>We collect subscription records, mentorship session attendance, secure KYC verification metadata, and session telemetry for trading education modules.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Database className="h-6 w-6 text-emerald-400" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Subscriber telemetry is processed under strict confidentiality to maintain session integrity, risk management, and compliance with financial educational standards.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <UserCheck className="h-6 w-6 text-emerald-400" /> 3. Processing Basis & Consent
              </h2>
              <p>Processing is governed by subscriber agreement and regulatory compliance obligations for educational services.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Lock className="h-6 w-6 text-emerald-400" /> 4. Information Security & Access Governance
              </h2>
              <p>Strict role-based access controls and encrypted databases protect member credentials and mentorship records against unauthorized access.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Globe className="h-6 w-6 text-emerald-400" /> 5. Sub-Processors & Infrastructure
              </h2>
              <p>We utilize enterprise secure cloud providers complying with stringent security and privacy frameworks.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Clock3 className="h-6 w-6 text-emerald-400" /> 6. Retention & Record Keeping
              </h2>
              <p>Membership and compliance records are retained for statutory periods before secure purging or anonymization.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <ScrollText className="h-6 w-6 text-emerald-400" /> 7. User Data Rights
              </h2>
              <p>Members retain rights to access account history, request data updates, or close subscriptions in accordance with service terms.</p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10 backdrop-blur-md p-8 text-white border border-emerald-500/30 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Trading Support & Compliance Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-emerald-300 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
