import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, Bot } from "lucide-react";

export default function TelegramBotsPrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-cyan-500/10 p-3 text-cyan-500">
                <Bot className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Telegram Bots — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-BOTS-PRIV-2.5. Privacy policy governing Telegram API integration, bot command telemetry, webhook payloads, and automated messaging logs.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Eye className="h-6 w-6 text-cyan-500" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>We process Telegram user IDs, chat metadata, command execution logs, and automated responses required for reliable bot uptime and instant webhook delivery.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-cyan-500" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Command logs are processed strictly to maintain uptime, troubleshoot automation errors, and prevent malicious spamming or API abuse.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <UserCheck className="h-6 w-6 text-cyan-500" /> 3. Processing Basis & Consent
              </h2>
              <p>Processing is governed by user interaction with bot commands and legitimate interest in bot security and performance.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Lock className="h-6 w-6 text-cyan-500" /> 4. Information Security & Webhook Encryption
              </h2>
              <p>All webhook endpoints use HTTPS/TLS 1.3 encryption and verify Telegram bot tokens securely against unauthorized relay attacks.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-cyan-500" /> 5. Sub-Processors & Infrastructure
              </h2>
              <p>Bot infrastructure is hosted on secure enterprise cloud servers with isolated container environments.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Clock3 className="h-6 w-6 text-cyan-500" /> 6. Retention & Data Minimization
              </h2>
              <p>Command execution logs are automatically purged after 30 days in strict accordance with data minimization policies.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <ScrollText className="h-6 w-6 text-cyan-500" /> 7. User Data Rights
              </h2>
              <p>Users can block bots or clear chat history at any time within Telegram client interfaces to terminate bot data association.</p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-cyan-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Telegram Bots Support Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-cyan-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-cyan-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-cyan-300 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
