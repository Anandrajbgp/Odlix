import { Scale, Mail, Phone, Landmark, Smartphone, Sparkles, Ban } from "lucide-react";

export default function AppsTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative flex flex-col">
      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex-1">
        {/* Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#FFF7ED] via-white to-[#FFF7ED]/50 border border-[#F97316]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#F97316]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#F97316]/30 text-[#F97316] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#F97316]" />
              <span>Odlix Software Licensing Terms</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#F97316]/30 flex items-center justify-center text-[#F97316] shadow-md shrink-0">
                <Smartphone className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Odlix Apps — <span className="text-[#F97316]">Software Terms</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-APPS-TOS-2.0. Terms governing software installation, licensing, updates, and user conduct across all Odlix mobile applications.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#F97316]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316] shrink-0">
                <Scale className="h-5 w-5" />
              </div>
              <span>1. Software License & Auto-Updates</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Odlix grants a revocable, non-exclusive, non-transferable license to download and execute official Odlix apps on compatible personal devices. Apps may automatically download security patches and performance updates.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#F97316]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316] shrink-0">
                <Ban className="h-5 w-5" />
              </div>
              <span>2. Reverse Engineering Prohibition</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Users agree not to decompile, reverse engineer, extract source code, bypass security controls, or inject malicious payloads into any Odlix application or API endpoint.
            </p>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#F97316]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-[#F97316] shrink-0">
                <Landmark className="h-5 w-5" />
              </div>
              <span>3. Governing Law & Jurisdiction</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Governed by the laws of India. Legal disputes are subject to the exclusive jurisdiction of courts in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#F97316]/30 bg-gradient-to-br from-[#FFF7ED] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">Apps Legal & Developer Desk</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For app licenses, developer submissions, or legal queries:</p>
            <div className="flex flex-wrap items-center gap-4 text-sm font-extrabold text-[#0F172A]">
              <a href="mailto:team.odlix@gmail.com" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-[#F97316]/30 text-[#F97316] shadow-sm hover:bg-[#FFF7ED] transition-all">
                <Mail className="h-4 w-4" />
                <span>team.odlix@gmail.com</span>
              </a>
              <a href="tel:+917372891228" className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-[#0F172A] shadow-sm hover:bg-slate-50 transition-all">
                <Phone className="h-4 w-4 text-[#F97316]" />
                <span>+91 7372891228</span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
