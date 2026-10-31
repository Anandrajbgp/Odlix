import { Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, GraduationCap } from "lucide-react";

export default function ElearningPrivacyPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 rounded-[2.2rem] shadow-xl">
          <header className="mb-12 border-b border-slate-800 pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-500/20 p-3 text-indigo-300">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix eLearning — Student & Partner Privacy Policy</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-semibold mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-EDU-PRIV-2.5. This enterprise-grade policy governs data collection for HD video courses, QR-verified certificates, and the multi-tier partner earning ecosystem.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Eye className="h-6 w-6 text-indigo-300" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>We systematically collect student registration credentials, course progress metrics, quiz completions, assignment submissions, verified certificate records, and partner commission dashboard logs.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Database className="h-6 w-6 text-indigo-300" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Data is processed to issue QR-verified digital certificates, maintain verifiable learning records, calculate weekly partner commission payouts, and prevent unauthorized video piracy.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <UserCheck className="h-6 w-6 text-indigo-300" /> 3. Processing Basis & Consent
              </h2>
              <p>Processing is governed by student enrollment agreement, partner participation consent, and statutory educational record-keeping obligations.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Lock className="h-6 w-6 text-indigo-300" /> 4. Information Security & Encryption
              </h2>
              <p>All video streams and student records are protected via tokenized URLs, encrypted databases, and robust DRM-adjacent transport security measures.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Globe className="h-6 w-6 text-indigo-300" /> 5. Sub-Processors & Infrastructure
              </h2>
              <p>Course content and CDN delivery utilize enterprise-grade global cloud infrastructure adhering to strict ISO security standards.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Clock3 className="h-6 w-6 text-indigo-300" /> 6. Retention & Certificate Archives
              </h2>
              <p>Certificate verification databases are retained indefinitely for credential validation authenticity. Student account data can be scrubbed upon formal request.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <ScrollText className="h-6 w-6 text-indigo-300" /> 7. User Data Rights
              </h2>
              <p>Learners retain full rights to access progress transcripts, export completion certificates, and manage notification preferences.</p>
            </section>

            <section className="rounded-3xl bg-slate-900/40 backdrop-blur-md p-8 text-white border border-slate-700/60 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">eLearning Privacy & Payout Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-indigo-300" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-indigo-300" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-indigo-200 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
