import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, Smartphone } from "lucide-react";

export default function AppsPrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/10 p-3 text-blue-500">
                <Smartphone className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Apps — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-APPS-PRIV-2.5. This enterprise-grade policy details telemetry, authentication tokens, device permissions, and data protection standards across all Odlix mobile applications and desktop software.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Eye className="h-6 w-6 text-blue-500" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>To deliver seamless cross-platform application experiences, Odlix Apps systematically collects and processes the following telemetry and user data:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong className="text-foreground">Authentication & Profile Data:</strong> Encrypted OAuth tokens, user handles, avatar metadata, and secure credentials.</li>
                <li><strong className="text-foreground">Device & Telemetry Metadata:</strong> OS version, app build version, hardware identifiers, push notification tokens, and anonymous crash telemetry.</li>
                <li><strong className="text-foreground">App Usage & Feature Logs:</strong> Interaction frequency, feature activation metrics, and session duration to optimize UI responsiveness.</li>
                <li><strong className="text-foreground">Local Storage & Cache:</strong> Encrypted local SQLite caches for offline mode and preference persistence.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-blue-500" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Collected telemetry is strictly processed for authorized software performance and security objectives:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Maintaining cross-platform synchronization and user session integrity.</li>
                <li>Instantly diagnosing runtime exceptions and patching crash vectors.</li>
                <li>Pushing timely transactional alerts and security advisories.</li>
                <li>Complying with app store guidelines and legal reporting mandates.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <UserCheck className="h-6 w-6 text-blue-500" /> 3. Processing Basis & User Consent
              </h2>
              <p>Data processing is governed by user consent during app installation, contract necessity for account maintenance, and legitimate interest in software stability and security.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Lock className="h-6 w-6 text-blue-500" /> 4. Information Security & Encryption
              </h2>
              <p>All app data in transit is secured via TLS 1.3 encryption, and sensitive tokens at rest are stored within device secure keychains (Keychain/EncryptedSharedPreferences).</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-blue-500" /> 5. Sub-Processors & Cloud Infrastructure
              </h2>
              <p>We partner with vetted cloud providers (Firebase, Sentry, AWS) adhering to strict security compliance frameworks to host app infrastructure.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Clock3 className="h-6 w-6 text-blue-500" /> 6. Retention & Account Deletion
              </h2>
              <p>Users can request complete account and telemetry deletion directly within app settings or via our support desk. Purging is completed within 14 business days.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <ScrollText className="h-6 w-6 text-blue-500" /> 7. User Data Rights
              </h2>
              <p>Users retain full rights to access, rectify, or export their profile data and revoke optional device permissions at any time through their operating system settings.</p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-blue-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Apps Security & Support Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-blue-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-blue-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-blue-300 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
