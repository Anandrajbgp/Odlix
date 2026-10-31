import { Scale, Mail, Phone, Landmark, TrendingUp } from "lucide-react";

export default function TradingTermsPage() {
  return (
    <div
      className="min-h-screen bg-transparent pt-32 pb-20 md:pt-36 md:pb-24 text-white relative flex flex-col"
      style={{
        // @ts-expect-error
        "--platform-primary": "#7CFC00",
        "--platform-secondary": "#10b981",
        "--platform-accent": "#7CFC00",
        "--platform-gradient": "linear-gradient(135deg, #7CFC00 0%, #10b981 55%, #7CFC00 100%)",
      }}
    >
      <div className="container mx-auto max-w-5xl px-4 relative z-10 flex-1">
        <div
          className="relative overflow-hidden rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 md:p-14 shadow-xl"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 via-transparent to-transparent pointer-events-none" />
          <header className="mb-12 border-b border-slate-800 pb-8 relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-emerald-500/20 p-3 text-emerald-400">
                <TrendingUp className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix Trading — Financial Disclaimer & Terms of Service</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-TRADE-TOS-2.0. Mandatory risk disclosure and terms governing trading mentorship and analysis tools.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-200 md:text-base font-semibold relative z-10">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Scale className="h-6 w-6 text-emerald-400" /> 1. Mandatory Risk Disclosure
              </h2>
              <p>
                Odlix Trading provides educational mentorship and market analysis tools. We are not registered financial advisors or investment brokerages. Financial trading involves substantial risk of loss and is not suitable for every investor. Past performance does not guarantee future results.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Landmark className="h-6 w-6 text-emerald-400" /> 2. Governing Law & Jurisdiction
              </h2>
              <p>
                Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-gradient-to-br from-emerald-500/20 via-transparent to-emerald-500/10 backdrop-blur-md p-8 text-white border border-emerald-500/30 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Trading Legal & Compliance Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-emerald-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-emerald-400" /> +91 7372891228</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
