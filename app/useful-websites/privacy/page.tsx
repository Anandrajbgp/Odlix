import { ShieldCheck, Lock, Eye, Database, Globe, Mail, Phone, ScrollText, UserCheck, Clock3, Compass } from "lucide-react";

export default function UsefulWebsitesPrivacyPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-teal-500/10 p-3 text-teal-500">
                <Compass className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Useful Websites — Enterprise Privacy Policy</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-WEB-PRIV-2.5. Privacy policy governing tool directory usage, saved bookmarks, and session telemetry.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Eye className="h-6 w-6 text-teal-500" /> 1. Comprehensive Data Categories Collected
              </h2>
              <p>We collect tool usage statistics, saved resource bookmarks, user preferences, and session logs to personalize and improve the curated web tool directory.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Database className="h-6 w-6 text-teal-500" /> 2. Lawful Processing Purposes & Obligations
              </h2>
              <p>Data is processed to personalize resource recommendations, maintain directory security, and improve tool responsiveness.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <UserCheck className="h-6 w-6 text-teal-500" /> 3. Processing Basis & Consent
              </h2>
              <p>Processing is governed by user preference selection and legitimate interest in providing efficient web directory services.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Lock className="h-6 w-6 text-teal-500" /> 4. Information Security & Storage
              </h2>
              <p>All saved bookmarks and preference records are encrypted at rest and protected against unauthorized access.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Globe className="h-6 w-6 text-teal-500" /> 5. Sub-Processors & Infrastructure
              </h2>
              <p>Directory data is hosted on high-availability enterprise cloud infrastructure with robust redundancy.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Clock3 className="h-6 w-6 text-teal-500" /> 6. Retention & Clearing
              </h2>
              <p>Bookmarks and local preferences persist until cleared by the user or upon account closure.</p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <ScrollText className="h-6 w-6 text-teal-500" /> 7. User Data Rights
              </h2>
              <p>Users retain full rights to export bookmarks, modify saved preferences, or clear stored local directory telemetry.</p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-teal-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Useful Websites Support Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-teal-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-teal-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-teal-300 font-black mt-4">Response SLA: Within 24 business hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
