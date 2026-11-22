import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, ShoppingBag, Sparkles } from "lucide-react";

export default function MartPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#EFF6FF]/50 border border-[#2563EB]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2563EB]/30 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Odlix Mart Marketplace Governance</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] shadow-md shrink-0">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Odlix Mart — <span className="text-[#2563EB]">Privacy Policy</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-MART-PRIV-2.5. This privacy policy governs digital marketplace transactions, secure payment gateway integrations, and order fulfillment.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <span>1. Comprehensive Data Categories Collected</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              We collect order identifiers, encrypted payment gateway references, billing addresses, and digital download audit logs to ensure secure e-commerce fulfillment and shipping accuracy.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <span>2. Lawful Processing Purposes & Obligations</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Data is used for order fulfillment, digital invoice generation, anti-fraud verification, logistics coordination, and customer dispute resolution.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <span>3. Information Security & Payment PCI-DSS Standards</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Financial transactions are processed via PCI-DSS compliant payment gateways. Odlix Mart does not store raw credit card credentials or sensitive payment tokens.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Clock3 className="h-5 w-5" />
              </div>
              <span>4. Retention & Commercial Audit Logs</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Transaction records are retained in compliance with commercial tax and auditing legislation for mandated statutory durations.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#2563EB]/30 bg-gradient-to-br from-[#EFF6FF] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">Mart Privacy & Order Support Desk</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For order privacy, billing verification, or account data queries:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#2563EB]/30 text-[#2563EB] shadow-sm hover:bg-[#EFF6FF] transition-all">
                <Mail className="h-4 w-4" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#2563EB]" />
                <span>+91 7372891228</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
