import { Scale, Mail, Phone, Landmark, Award, Sparkles } from "lucide-react";

export default function CompetitionTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#F0FDFA] via-white to-[#F0FDFA]/50 border border-[#0D9488]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#0D9488]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#0D9488]/30 text-[#0D9488] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#0D9488]" />
              <span>Odlix Test Fair Play Rules</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#0D9488]/30 flex items-center justify-center text-[#0D9488] shadow-md shrink-0">
                <Award className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Fair Play & <span className="text-[#0D9488]">Exam Terms</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-COMP-TOS-2.0. Terms governing mock test integrity, leaderboard rankings, and competitive coaching modules.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#0D9488]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                <Scale className="h-5 w-5" />
              </div>
              <span>1. Academic Integrity & Proctoring</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Users agree to maintain absolute academic integrity during mock exams. Unfair means, automated scraping of test items, proxy test attempts, or leaderboard manipulation will result in immediate permanent account suspension.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#0D9488]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#F0FDFA] flex items-center justify-center text-[#0D9488] shrink-0">
                <Landmark className="h-5 w-5" />
              </div>
              <span>2. Governing Law & Jurisdiction</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#0D9488]/30 bg-gradient-to-br from-[#F0FDFA] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">Competition Legal Desk</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For compliance inquiries or test verification:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#0D9488]/30 text-[#0D9488] shadow-sm hover:bg-[#F0FDFA] transition-all">
                <Mail className="h-4 w-4" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#0D9488]" />
                <span>+91 7372891228</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
