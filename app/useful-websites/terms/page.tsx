import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, Compass } from "lucide-react";

export default function UsefulWebsitesTermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-teal-500/10 p-3 text-teal-500">
                <Compass className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Useful Websites — Terms of Service</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-WEB-TOS-2.0. Terms governing curated web tool directories and external link disclaimers.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Scale className="h-6 w-6 text-teal-500" /> 1. External Links & Third-Party Disclaimer
              </h2>
              <p>
                Odlix curates lists of helpful web resources and tools. We do not endorse or assume liability for the privacy practices, uptime, security, or content of third-party external websites linked in our directories.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Landmark className="h-6 w-6 text-teal-500" /> 2. Governing Law & Jurisdiction
              </h2>
              <p>
                Governed by the laws of India, with exclusive jurisdiction in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-teal-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Useful Websites Legal Desk</h2>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-teal-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-teal-400" /> +91 7372891228</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
