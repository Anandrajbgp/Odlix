import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, GraduationCap, ShieldCheck, FileCheck, CheckCircle2, Sparkles } from "lucide-react";

export default function ElearningPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Hero Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#EEF2FF] via-white to-[#EEF2FF]/50 border border-[#6366F1]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#6366F1]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6366F1]/30 text-[#6366F1] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
              <span>Odlix eLearning Governance & Privacy</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] shadow-md shrink-0">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Student & Partner <span className="text-[#6366F1]">Privacy Policy</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-EDU-PRIV-2.5. This policy governs data collection for HD video courses, QR-verified certificates, and the multi-tier partner earning ecosystem.
            </p>
          </div>
        </header>

        {/* Styled Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Eye className="h-5 w-5" />
              </div>
              <span>1. Comprehensive Data Categories Collected</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed mb-4">
              To deliver personalized learning, track course completions, and enable partner payouts, Odlix eLearning processes student registration details, course progress telemetry, quiz performance, certificate records, and partner commission logs.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">Student Profile</span>
                <p className="text-xs font-semibold text-[#475569]">Name, email, phone number, state, district, and credentials.</p>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">LMS Telemetry</span>
                <p className="text-xs font-semibold text-[#475569]">Video duration, quiz attempts, assignments, and milestones.</p>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-3.5">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">Partner Wallet</span>
                <p className="text-xs font-semibold text-[#475569]">Payout requests, direct/tier-2 commission logs, and verification.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Database className="h-5 w-5" />
              </div>
              <span>2. Lawful Processing Purposes & Obligations</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Data is processed to issue cryptographic QR-verified digital certificates, maintain verifiable learning transcripts, calculate weekly Saturday partner payouts, and enforce anti-piracy DRM protections.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <UserCheck className="h-5 w-5" />
              </div>
              <span>3. Processing Basis & Consent</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Processing is governed by student enrollment agreements, partner participation terms, and statutory educational record-keeping requirements under applicable law.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Lock className="h-5 w-5" />
              </div>
              <span>4. Security Controls & Anti-Piracy DRM</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              We apply multi-layered security including encrypted transport (TLS 1.3), role-based LMS access, encrypted database storage, and DRM session watermarking to safeguard course video streams against unauthorized distribution.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Globe className="h-5 w-5" />
              </div>
              <span>5. Data Sharing & Third-Party Processors</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              We do not sell student or partner personal data. Limited operational data is shared with secure cloud infrastructure providers, payment gateways, and SMS/email communication gateways under strict confidentiality agreements.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Clock3 className="h-5 w-5" />
              </div>
              <span>6. Data Retention & Certificate Archiving</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Student course completion records and issued certificate verification hashes are permanently archived so employers and institutions can authenticate credentials via QR code at any time.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <ScrollText className="h-5 w-5" />
              </div>
              <span>7. Student Rights & Account Choices</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Students and partners may request profile updates, access their payout logs, download completion transcripts, or request account data deletion subject to legal retention obligations.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#6366F1]/30 bg-gradient-to-br from-[#EEF2FF] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">eLearning Privacy & Grievance Contact</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For privacy requests, certificate verification queries, or account security issues:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#6366F1]/30 text-[#6366F1] shadow-sm hover:bg-[#EEF2FF] transition-all">
                <Mail className="h-4 w-4" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#6366F1]" />
                <span>+91 7372891228</span>
              </a>
            </div>
            <p className="text-xs uppercase tracking-[0.14em] text-[#6366F1] font-bold mt-4">Response Window: 24–48 Working Hours</p>
          </section>
        </div>
      </div>
    </div>
  );
}
