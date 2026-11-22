import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, ShieldCheck, Sparkles } from "lucide-react";

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Clean Header without banner box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-[#0F172A]">
              <ShieldCheck className="h-7 w-7 text-[#D97706]" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-5xl">Odlix Agency — Privacy Policy</h1>
          </div>
          <p className="text-sm text-[#475569] md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-PRIV-2.0. This enterprise policy outlines how Odlix Agency safeguards client intellectual property, technical telemetry, and stakeholder data during software engineering engagements.
          </p>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#18181B]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706] shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <span>1. Comprehensive Data Categories Collected</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              To deliver bespoke software engineering, UI/UX architecture, cloud infrastructure, and digital acceleration services, Odlix Agency systematically collects stakeholder identity details, repository code access, financial billing metadata, and staging telemetry.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#18181B]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706] shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <span>2. Lawful Processing Purposes & Obligations</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Data is strictly processed to execute custom software statements of work, maintain staging server pipelines, issue commercial invoices, and verify project milestone deliveries.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#18181B]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706] shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <span>3. IP Protection & Confidentiality NDA</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              All proprietary source code, credentials, and business logic remain 100% confidential under strict non-disclosure agreements (NDAs) and role-based access control repositories.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-xl font-black">Agency Client Privacy & Legal Desk</h2>
            <p className="text-[#475569] mb-4 text-sm font-semibold">For client NDA verifications, IP governance, or project data requests:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Mail className="h-4 w-4 text-[#D97706]" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#E2E8F0] text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#D97706]" />
                <span>+91 7372891228</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
