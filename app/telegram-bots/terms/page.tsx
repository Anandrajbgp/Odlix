import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, Bot } from "lucide-react";

export default function TelegramBotsTermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                <Bot className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Telegram Bots — Terms of Service</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-BOTS-TOS-2.0. Terms governing bot usage quotas, automated messaging, and API rate-limiting.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Scale className="h-6 w-6 text-cyan-500" /> 1. Usage Quotas & Anti-Spam
              </h2>
              <p>
                Users must not flood bots with automated flood attacks, execute unauthorized scraping, or use bots for illegal distribution. Violation leads to immediate IP/ID blacklisting.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Landmark className="h-6 w-6 text-cyan-500" /> 2. Governing Law & Jurisdiction
              </h2>
              <p>
                Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-cyan-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Telegram Bots Legal Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-400" /> +91 7372891228</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
