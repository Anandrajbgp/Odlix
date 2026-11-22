import { Scale, Mail, Phone, Landmark, Briefcase, Sparkles, FileText } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Clean Header without banner box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-[#0F172A]">
              <FileText className="h-7 w-7 text-[#D97706]" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-5xl">Odlix Agency — Master Terms of Service</h1>
          </div>
          <p className="text-sm text-[#475569] md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-TOS-2.0. These Master Terms govern all software engineering, digital product creation, consulting, and technological partnership engagements undertaken by Odlix Agency.
          </p>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#18181B]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706] shrink-0">
                <Scale className="h-5 w-5" />
              </div>
              <span>1. Scope of Engagement & Deliverables</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Every project executed by Odlix Agency operates under a defined Statement of Work (SoW), project proposal, or approved technical specification. Any changes or additional features requested post-signoff will be handled via formal Change Request Orders (CRO) impacting timeline and budget.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#18181B]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-slate-100 flex items-center justify-center text-[#D97706] shrink-0">
                <Landmark className="h-5 w-5" />
              </div>
              <span>2. Governing Law & Jurisdiction</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-xl font-black">Agency Client Legal Desk</h2>
            <p className="text-[#475569] mb-4 text-sm font-semibold">For client contracts, milestone signoffs, or legal proposals:</p>
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
