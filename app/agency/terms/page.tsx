import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, Briefcase, CheckCircle2 } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-border bg-card p-8 md:p-14 rounded-[2.5rem] shadow-2xl">
          <header className="mb-12 border-b border-border pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-amber-500/10 p-3 text-amber-500">
                <FileText className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Odlix Agency — Master Terms of Service</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-TOS-2.0. These Master Terms govern all software engineering, digital product creation, consulting, and technological partnership engagements undertaken by Odlix Agency.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-muted-foreground md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Scale className="h-6 w-6 text-amber-500" /> 1. Scope of Engagement & Deliverables
              </h2>
              <p>
                Every project executed by Odlix Agency operates under a defined Statement of Work (SoW), project proposal, or approved technical specification. Any changes, scope creep, or additional features requested post-signoff will be handled via formal Change Request Orders (CRO) impacting timeline and budget.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <UserCheck className="h-6 w-6 text-amber-500" /> 2. Client Commitments & Dependencies
              </h2>
              <ul className="space-y-2">
                <li>• Timely provision of brand assets, API documentation, server credentials, and decision-making feedback.</li>
                <li>• Verification that all supplied content and trademarks do not infringe upon third-party intellectual property rights.</li>
                <li>• Prompt milestone sign-offs within agreed review windows (default: 3 business days).</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Landmark className="h-6 w-6 text-amber-500" /> 3. Commercial Terms, Invoicing & Milestones
              </h2>
              <p>
                Billing adheres to milestone-based or retainer structures specified in the SoW. Invoices are payable within 7 calendar days of issuance unless otherwise agreed. Failure to settle milestone invoices may result in suspension of staging servers and development velocity until dues are cleared.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <ShieldCheck className="h-6 w-6 text-amber-500" /> 4. Intellectual Property Rights & Licensing
              </h2>
              <p>
                Upon final, cleared payment of all project fees, Odlix Agency assigns full ownership of custom-developed source code and proprietary deliverables to the client. Odlix retains ownership of pre-existing reusable internal frameworks, utility libraries, and development accelerators licensed non-exclusively to the client for project operation.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Ban className="h-6 w-6 text-amber-500" /> 5. Warranties & Limitation of Liability
              </h2>
              <p>
                Odlix Agency delivers software with professional craftsmanship and industry-standard QA testing. We provide a 30-day post-launch warranty for bug remediation of delivered code. Total aggregate liability for any claim under an agency agreement shall not exceed the total fees paid by the client for the specific milestone in dispute.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-foreground">
                <Gavel className="h-6 w-6 text-amber-500" /> 6. Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by and construed in accordance with the laws of India. Any legal dispute or arbitration arising herefrom shall be subject to the exclusive jurisdiction of the courts located in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900 p-8 text-white border border-amber-500/20 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">Agency Commercial & Legal Desk</h2>
              <p className="text-slate-300 mb-6 text-sm">For contract inquiries, procurement, or legal notices:</p>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-amber-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-amber-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-amber-300 font-black mt-4">Office Hours: Mon–Fri, 9:00 AM – 6:00 PM IST</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
