import { Scale, Mail, Phone, Landmark, TrendingUp, FileText } from "lucide-react";

export default function TradingTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative flex flex-col">
      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex-1">
        {/* Clean Header without box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-[#0F172A]">
              <FileText className="h-7 w-7 text-[#10B981]" />
            </div>
            <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-5xl">Odlix Trading — Risk Disclosure & Terms</h1>
          </div>
          <p className="text-sm text-[#475569] md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-TRADE-TOS-2.0. Mandatory risk disclosure and terms governing trading execution panels, F&O modules, and analysis tools.
          </p>
        </header>

        {/* Clean Sections without boxes */}
        <div className="space-y-8 text-sm leading-relaxed text-[#0F172A] md:text-base font-medium">
          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <Scale className="h-5 w-5 text-[#10B981]" /> 1. Mandatory Risk Disclosure
            </h2>
            <p className="text-[#475569]">
              Odlix Trading provides execution technology and market analysis tools. We are not registered financial advisors or discretionary investment managers. Financial trading involves substantial risk of loss and is not suitable for every investor. Past performance does not guarantee future results.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="flex items-center gap-2 text-xl font-bold text-[#0F172A]">
              <Landmark className="h-5 w-5 text-[#10B981]" /> 2. Governing Law & Jurisdiction
            </h2>
            <p className="text-[#475569]">
              Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Clean Contact Box */}
          <section className="rounded-2xl border border-[#E2E8F0] bg-[#F8FAFC] p-6 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-xl font-black">Trading Desk & Legal Support</h2>
            <p className="text-[#475569] mb-4 text-sm font-semibold">For compliance inquiries, risk disclosures, or account verification:</p>
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
