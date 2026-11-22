import { Lock, Eye, Database, Mail, Phone, UserCheck, Clock3, TrendingUp, ShieldCheck } from "lucide-react";

export default function TradingPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative flex flex-col">
      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex-1">
        {/* Clean Header without box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-[#0F172A]">
              <TrendingUp className="h-7 w-7 text-[#10B981]" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-5xl">Odlix Trading — Privacy Policy</h1>
          </div>
          <p className="text-sm text-[#475569] md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-TRADE-PRIV-2.5. Privacy policy detailing data protection for financial execution panels, market analysis tools, and account security.
          </p>
        </header>

        {/* Clean Sections without boxes */}
        <div className="space-y-8 text-sm leading-relaxed text-[#0F172A] md:text-base font-medium">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <Eye className="h-5 w-5 text-[#10B981]" /> 1. Comprehensive Data Categories Collected
            </h2>
            <p className="text-[#475569]">
              We collect account verification metadata, encrypted payment gateway logs, order placement timestamps, margin sufficiency records, and execution telemetry for trading console modules.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <Database className="h-5 w-5 text-[#10B981]" /> 2. Lawful Processing Purposes & Obligations
            </h2>
            <p className="text-[#475569]">
              Subscriber telemetry is processed under strict confidentiality to maintain session integrity, pre-trade risk management, capital ledger reconciliation, and compliance with financial safety standards.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <Lock className="h-5 w-5 text-[#10B981]" /> 3. Encryption & Ledger Security
            </h2>
            <p className="text-[#475569]">
              Account balances, position records, and order histories are protected with AES-256 encryption at rest and TLS 1.3 transport security.
            </p>
          </section>

          {/* Clean Contact Box */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-xl font-black">Trading Desk & Privacy Contact</h2>
            <p className="text-[#475569] mb-4 text-sm font-semibold">For account privacy, capital ledger queries, or technical assistance:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Mail className="h-4 w-4 text-[#10B981]" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#10B981]" />
                <span>+91 7372891228</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
