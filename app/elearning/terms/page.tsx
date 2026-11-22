import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, GraduationCap, Award, DollarSign, Sparkles } from "lucide-react";

export default function ElearningTermsPage() {
  return (
    <div className="min-h-screen bg-transparent text-[#0F172A] pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        {/* Hero Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#EEF2FF] via-white to-[#EEF2FF]/50 border border-[#6366F1]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#6366F1]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#6366F1]/30 text-[#6366F1] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#6366F1]" />
              <span>Odlix eLearning Enrollment & Partner Agreement</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#6366F1]/30 flex items-center justify-center text-[#6366F1] shadow-md shrink-0">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Master Enrollment & <span className="text-[#6366F1]">Partner Terms</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-EDU-TOS-2.0. These Master Terms govern all course enrollments, HD digital learning package access, QR-verified certification, the Life Mastery leadership track, and the multi-tier partner earning ecosystem.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Scale className="h-5 w-5" />
              </div>
              <span>1. Course Package Licensing & Anti-Piracy Covenants</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed mb-4">
              Enrollment in Beginner, Pro, or Expert packages grants a single-user, non-exclusive, non-transferable license to stream HD video modules and access downloadable resources. Video lectures and study guides are protected by digital rights management.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <strong className="text-[#0F172A] block text-xs font-extrabold uppercase mb-1">Account Sharing Prohibition</strong>
                <p className="text-xs font-semibold text-[#475569]">Credentials may not be shared, sold, or pooled among multiple individuals.</p>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <strong className="text-[#6366F1] block text-xs font-extrabold uppercase mb-1">Anti-Piracy Enforcement</strong>
                <p className="text-xs font-semibold text-[#475569]">Recording, scraping, or redistributing course modules will result in an instant ban.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <DollarSign className="h-5 w-5" />
              </div>
              <span>2. Multi-Tier Partner Earning & Weekly Payout Rules</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed mb-4">
              Enrolled students are eligible to participate in the Odlix Skill-Sharing Income Ecosystem under strict compliance standards:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              <div className="bg-[#EEF2FF] border border-[#6366F1]/30 rounded-xl p-4">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">Up to 58% Direct</span>
                <p className="text-xs font-semibold text-[#0F172A]">Direct sales yield multi-tier referral commissions based on active package tier.</p>
              </div>
              <div className="bg-[#EEF2FF] border border-[#6366F1]/30 rounded-xl p-4">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">Saturday Payouts</span>
                <p className="text-xs font-semibold text-[#0F172A]">Payouts are processed every Saturday with a minimum threshold of ₹200.</p>
              </div>
              <div className="bg-[#EEF2FF] border border-[#6366F1]/30 rounded-xl p-4">
                <span className="text-xs font-extrabold text-[#6366F1] uppercase block mb-1">Taxation & Reporting</span>
                <p className="text-xs font-semibold text-[#0F172A]">Partners are independently responsible for applicable tax filings.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Award className="h-5 w-5" />
              </div>
              <span>3. QR-Verified Certification & Life Mastery Track</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed mb-3">
              Digital certificates are issued upon 100% course completion and passing required quizzes. Certificates feature cryptographic QR codes for instant employer verification.
            </p>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Completion of any core package unlocks access to the exclusive <strong className="text-[#0F172A]">Life Mastery Track</strong> (Tax Planning, Mindfulness, Leadership, and Emotional Intelligence).
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Ban className="h-5 w-5" />
              </div>
              <span>4. Refund & Cancellation Policy</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Due to immediate digital grant of downloadable resources and instant LMS unlock upon payment, fees are non-refundable except in cases of verified technical billing errors submitted within 24 hours of purchase.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#6366F1] hover:shadow-md transition-all">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EEF2FF] flex items-center justify-center text-[#6366F1] shrink-0">
                <Landmark className="h-5 w-5" />
              </div>
              <span>5. Governing Law & Dispute Resolution</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              These terms are governed by the laws of India. Any legal disputes or arbitrations fall under the exclusive jurisdiction of competent courts in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#6366F1]/30 bg-gradient-to-br from-[#EEF2FF] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">eLearning Legal & Partner Desk</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For compliance inquiries, payout verifications, or certificate authentication:</p>
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
            <p className="text-xs uppercase tracking-[0.14em] text-[#6366F1] font-bold mt-4">Support Hours: Mon–Sat, 10:00 AM – 7:00 PM IST</p>
          </section>
        </div>
      </div>
    </div>
  );
}
