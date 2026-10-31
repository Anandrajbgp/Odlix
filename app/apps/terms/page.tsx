import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, Smartphone } from "lucide-react";

export default function AppsTermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                <Smartphone className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Apps — Software Terms of Service</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-APPS-TOS-2.0. Terms governing software installation, licensing, updates, and user conduct across all Odlix mobile and desktop applications.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Scale className="h-6 w-6 text-blue-500" /> 1. Software License & Updates
              </h2>
              <p>
                Odlix grants a revocable, non-exclusive, non-transferable license to download and execute official Odlix apps on compatible personal devices. Apps may automatically download and apply security patches and feature updates.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Ban className="h-6 w-6 text-blue-500" /> 2. Prohibited Reverse Engineering & Abuse
              </h2>
              <p>
                Users agree not to decompile, reverse engineer, extract source code, bypass security controls, or inject malicious payloads into any Odlix application or API endpoint.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Landmark className="h-6 w-6 text-blue-500" /> 3. Governing Law & Jurisdiction
              </h2>
              <p>
                Governed by the laws of India. Legal disputes are subject to the exclusive jurisdiction of courts in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-blue-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Apps Legal & Compliance Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-400" /> +91 7372891228</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
