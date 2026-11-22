"use client";

import { FileText, ShieldCheck, Ban, Handshake, Mail, Phone, Landmark, Gavel, UserCheck, Clock3 } from "lucide-react";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function EcosystemTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24 text-slate-900 relative">
      <BackgroundBubbles />
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Clean Header without gradient box */}
        <header className="mb-10">
          <div className="mb-4 flex items-center gap-3">
            <div className="rounded-2xl bg-slate-100 p-3 text-slate-900">
              <FileText className="h-7 w-7" />
            </div>
            <h1 className="text-3xl font-black tracking-tight md:text-5xl text-slate-900">Terms & Conditions</h1>
          </div>
          <p className="text-sm text-slate-600 md:text-base font-semibold">
            Effective Date: 18 August 2026 | Version: ODLIX-TOS-1.1. These Terms govern your use of Odlix services,
            web properties, applications, and connected platform modules.
          </p>
        </header>

        <div className="space-y-8 text-sm leading-relaxed text-slate-800 md:text-base font-medium">
          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Handshake className="h-5 w-5 text-blue-600" /> Acceptance of Terms
            </h2>
            <p className="text-slate-700">
              By creating an account, browsing our properties, or purchasing a service, you acknowledge that
              you have read, understood, and accepted these Terms and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <UserCheck className="h-5 w-5 text-blue-600" /> Eligibility, Minors & Account Duties
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• You must provide accurate registration information and keep it current.</li>
              <li>• Users under legal majority age must use services under parent/guardian supervision as per law.</li>
              <li>• You are responsible for protecting credentials and all activity under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <ShieldCheck className="h-5 w-5 text-blue-600" /> Use of Services
            </h2>
            <p className="text-slate-700">
              Odlix grants a limited, non-transferable, revocable right to use services in compliance with
              applicable law. Platform-specific conditions may apply for certain modules.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Ban className="h-5 w-5 text-blue-600" /> Prohibited Conduct
            </h2>
            <ul className="space-y-2 text-slate-700">
              <li>• Unauthorized access, scraping, reverse engineering, or disruption of service infrastructure.</li>
              <li>• Misrepresentation, fraud, abuse of payment systems, or unlawful activities.</li>
              <li>• Uploading malicious, unlawful, or third-party rights-infringing content.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Payments, Cancellations & Refunds</h2>
            <p className="text-slate-700">
              Paid services may follow milestones or subscription cycles. Refund windows, cancellation terms,
              and delivery obligations are governed by applicable service/order documents.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Intellectual Property</h2>
            <p className="text-slate-700">
              Trademarks, platform assets, and proprietary systems remain property of Odlix or its licensors
              unless explicitly transferred through a written agreement.
            </p>
          </section>

          <section>
            <h2 className="mb-2 text-xl font-bold text-slate-900">Disclaimer & Limitation of Liability</h2>
            <p className="text-slate-700">
              Services are provided on an &quot;as available&quot; basis. To the maximum extent permitted by law,
              Odlix is not liable for indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Landmark className="h-5 w-5 text-blue-600" /> Governing Law & Jurisdiction
            </h2>
            <p className="text-slate-700">
              These Terms are governed by the laws of India. Subject to mandatory legal requirements,
              courts with competent jurisdiction in Bhagalpur, Bihar, India shall have exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Gavel className="h-5 w-5 text-blue-600" /> Dispute Resolution
            </h2>
            <p className="text-slate-700">
              Parties will attempt amicable resolution first. If unresolved, disputes may be escalated to
              mediation/arbitration and then competent courts, as applicable under law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-slate-900">
              <Clock3 className="h-5 w-5 text-blue-600" /> Revisions to Terms
            </h2>
            <p className="text-slate-700">
              We may revise these Terms for legal, operational, or security reasons. Material changes are
              posted with updated effective date and version.
            </p>
          </section>

          <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6 text-slate-900">
            <h2 className="mb-3 text-xl font-black">Support, Legal & Grievance Contact</h2>
            <div className="space-y-2 text-sm font-semibold md:text-base text-slate-800">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4 text-blue-600" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4 text-blue-600" /> +91 7372891228</p>
              <p className="text-xs uppercase tracking-[0.12em] opacity-80 font-bold text-slate-600">Initial response target: 24-48 working hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
