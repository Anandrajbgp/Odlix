import { Scale, Mail, Phone, Landmark, ShoppingBag } from "lucide-react";

export default function MartTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative">
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        <div className="border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 rounded-[2.2rem] shadow-xl">
          <header className="mb-12 border-b border-slate-800 pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-orange-500/20 p-3 text-orange-400">
                <ShoppingBag className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix Mart — Marketplace Terms of Service</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-semibold mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-MART-TOS-2.0. Terms governing digital product purchases, licensing rights, refunds, and vendor compliance.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Scale className="h-6 w-6 text-orange-400" /> 1. Digital Licensing & Refund Policies
              </h2>
              <p>
                Digital products and source code purchases on Odlix Mart are governed by instant-delivery licensing terms. Due to the digital nature of assets, refunds are evaluated on a case-by-case basis within 48 hours of purchase if defective.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Landmark className="h-6 w-6 text-orange-400" /> 2. Governing Law & Jurisdiction
              </h2>
              <p>
                Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900/40 backdrop-blur-md p-8 text-white border border-slate-700/60 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Mart Legal Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-orange-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-orange-400" /> +91 7372891228</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
