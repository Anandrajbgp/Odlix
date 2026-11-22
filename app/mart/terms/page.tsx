import { Scale, Mail, Phone, Landmark, ShoppingBag, Sparkles } from "lucide-react";

export default function MartTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-[#0F172A] relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Header Banner */}
        <header className="mb-10 rounded-3xl bg-gradient-to-br from-[#EFF6FF] via-white to-[#EFF6FF]/50 border border-[#2563EB]/20 p-8 md:p-12 shadow-sm relative overflow-hidden">
          <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-[#2563EB]/10 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-[#2563EB]/30 text-[#2563EB] text-xs font-extrabold uppercase tracking-wider mb-5 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-[#2563EB]" />
              <span>Odlix Mart Commerce Terms</span>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-4">
              <div className="w-14 h-14 rounded-2xl bg-white border border-[#2563EB]/30 flex items-center justify-center text-[#2563EB] shadow-md shrink-0">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-[#0F172A] md:text-4xl lg:text-5xl">
                Marketplace <span className="text-[#2563EB]">Terms of Service</span>
              </h1>
            </div>

            <p className="text-sm text-[#475569] md:text-base font-semibold max-w-3xl leading-relaxed">
              Effective Date: 18 August 2026 | Version: ODLIX-MART-TOS-2.0. Terms governing product purchases, shipping, licensing rights, easy returns, and vendor compliance.
            </p>
          </div>
        </header>

        {/* Section Cards */}
        <div className="space-y-6">
          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Scale className="h-5 w-5" />
              </div>
              <span>1. Product Purchases, Delivery & Return Policies</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed mb-4">
              Odlix Mart offers genuine gadgets, electronics, apparel, and digital creator kits. Physical goods feature tracked delivery and easy 7-day return/replacement policies for eligible items.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <strong className="text-[#0F172A] block text-xs font-extrabold uppercase mb-1">Tracked Delivery</strong>
                <p className="text-xs font-semibold text-[#475569]">Real-time tracking links provided for all physical dispatches.</p>
              </div>
              <div className="bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl p-4">
                <strong className="text-[#2563EB] block text-xs font-extrabold uppercase mb-1">7-Day Easy Returns</strong>
                <p className="text-xs font-semibold text-[#475569]">Hassle-free return and replacement for eligible physical items.</p>
              </div>
            </div>
          </section>

          <section className="rounded-2xl border border-[#E2E8F0] bg-white p-6 md:p-8 shadow-sm border-l-4 border-l-[#2563EB]">
            <h2 className="flex items-center gap-3 text-xl font-extrabold text-[#0F172A] mb-3">
              <div className="w-9 h-9 rounded-xl bg-[#EFF6FF] flex items-center justify-center text-[#2563EB] shrink-0">
                <Landmark className="h-5 w-5" />
              </div>
              <span>2. Governing Law & Dispute Resolution</span>
            </h2>
            <p className="text-[#475569] text-sm md:text-base font-medium leading-relaxed">
              Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
            </p>
          </section>

          {/* Contact Support Box */}
          <section className="rounded-3xl border border-[#2563EB]/30 bg-gradient-to-br from-[#EFF6FF] to-white p-8 text-[#0F172A] shadow-sm">
            <h2 className="mb-2 text-2xl font-black">Mart Legal & Orders Desk</h2>
            <p className="text-[#475569] mb-5 text-sm font-semibold">For order support, vendor inquiries, or compliance desk:</p>
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
