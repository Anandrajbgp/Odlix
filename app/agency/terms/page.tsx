import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3 } from "lucide-react";

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background py-14 md:py-16">
      <div className="container mx-auto max-w-4xl px-4">
        <div className="rounded-[2rem] border border-border bg-card p-8 shadow-sm md:p-12">
          <header className="mb-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-slate-900 p-3 text-white">
                <FileText className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-foreground md:text-5xl">Agency Terms & Conditions</h1>
            </div>
            <p className="text-sm text-muted-foreground md:text-base">
              Effective Date: 18 August 2026 | Version: ODLIX-AGENCY-TOS-1.1. These terms govern all Odlix Agency service engagements.
            </p>
          </header>

          <div className="space-y-8 text-sm leading-relaxed text-muted-foreground md:text-base">
            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <Scale className="h-5 w-5 text-muted-foreground" /> Engagement Scope
              </h2>
              <p>
                Scope, timelines, and deliverables are defined in proposals, statements of work, and approved change requests.
                Scope modifications may impact cost and delivery schedules.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <UserCheck className="h-5 w-5 text-muted-foreground" /> Client Responsibilities
              </h2>
              <ul className="space-y-2">
                <li>• Provide timely approvals, assets, and required operational inputs.</li>
                <li>• Ensure submitted materials do not violate third-party rights.</li>
                <li>• Provide/maintain access credentials needed for implementation and deployment.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-foreground">Commercial Terms</h2>
              <p>
                Billing follows milestone or subscription structure defined in writing. Delayed payments may
                pause ongoing work until dues are cleared.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <ShieldCheck className="h-5 w-5 text-muted-foreground" /> Intellectual Property & Licenses
              </h2>
              <p>
                Ownership transfer, licensing, and usage rights are governed by project-specific agreements.
                Reusable internal frameworks and tools remain property of Odlix unless explicitly assigned.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <Ban className="h-5 w-5 text-muted-foreground" /> Warranty & Liability Limits
              </h2>
              <p>
                Services are delivered using commercially reasonable professional standards. Liability is limited
                to the extent permitted by law and applicable signed agreements.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-foreground">Termination & Suspension</h2>
              <p>
                Either party may terminate as per agreement clauses. Charges for completed work, committed resources,
                and non-cancellable third-party costs remain payable.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <Landmark className="h-5 w-5 text-muted-foreground" /> Governing Law & Jurisdiction
              </h2>
              <p>
                These terms are governed by Indian law. Subject to legal requirements, disputes fall under competent
                courts in Tamil Nadu, India.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <Gavel className="h-5 w-5 text-muted-foreground" /> Dispute Resolution
              </h2>
              <p>
                Parties should first attempt amicable settlement. If unresolved, matters may proceed to mediation/arbitration
                and legal remedy in competent courts as applicable.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-foreground">
                <Clock3 className="h-5 w-5 text-muted-foreground" /> Policy Updates
              </h2>
              <p>
                Odlix may update these terms for operational, legal, or security reasons. Updated versions include a new
                effective date and version identifier.
              </p>
            </section>

            <section className="rounded-2xl bg-slate-600 p-6 text-white">
              <h2 className="mb-3 text-xl font-black">Agency Legal & Support Contact</h2>
              <div className="space-y-2 text-sm font-semibold md:text-base">
                <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.12em] opacity-90">Initial response target: 24-48 working hours</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
