import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, ShoppingBag } from "lucide-react";

export default function MartPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 rounded-[2.2rem] shadow-xl">
          <header className="mb-12 border-b border-slate-800 pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500/20 p-3 text-orange-400">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix Mart — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-semibold mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-MART-PRIV-2.5. This enterprise privacy policy governs digital marketplace transactions, secure payment gateway integrations, and instant license generation.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Eye className="h-6 w-6 text-orange-400" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>We collect order identifiers, encrypted payment gateway references, billing addresses, and digital download audit logs to ensure secure e-commerce fulfillment.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Database className="h-6 w-6 text-orange-400" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Data is used for order fulfillment, digital invoice generation, anti-fraud verification, and customer dispute resolution.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <UserCheck className="h-6 w-6 text-orange-400" /> 3. Processing Basis & Consent
              </h2>
              <p>Processing is governed by contract fulfillment during purchase and statutory financial record-keeping laws.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Lock className="h-6 w-6 text-orange-400" /> 4. Information Security & PCI-DSS Compliance
              </h2>
              <p>Financial transactions are processed via PCI-DSS compliant payment gateways. Odlix does not store raw credit card credentials.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Globe className="h-6 w-6 text-orange-400" /> 5. Sub-Processors & Payment Gateways
              </h2>
              <p>We partner with certified payment processors and cloud storage providers adhering to highest security standards.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Clock3 className="h-6 w-6 text-orange-400" /> 6. Retention & Audit Logs
              </h2>
              <p>Transaction records are retained in compliance with commercial tax and auditing legislation for the mandated statutory duration.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <ScrollText className="h-6 w-6 text-orange-400" /> 7. User Data Rights
              </h2>
              <p>Customers retain rights to access purchase receipts, download digital licenses, and request invoice corrections via support.</p>
            </section>

            <section className="rounded-3xl bg-slate-900/40 backdrop-blur-md p-8 text-white border border-slate-700/60 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Mart Support & Privacy Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-orange-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-orange-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-orange-300 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
