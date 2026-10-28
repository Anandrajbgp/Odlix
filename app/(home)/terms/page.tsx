"use client";

import { FileText, Scale, ShieldCheck, Ban, Handshake, Mail, Phone, Landmark, Gavel, UserCheck, Clock3 } from "lucide-react";

export default function EcosystemTermsPage() {
  return (
    <div className="min-h-screen bg-[#001f3f] py-24 text-white">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="rounded-[2rem] border border-white/10 bg-white/5 p-8 backdrop-blur-xl md:p-12">
          <header className="mb-10">
            <div className="mb-5 flex items-center gap-3">
              <div className="rounded-2xl bg-blue-500/20 p-3 text-blue-300">
                <FileText className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl">Terms & Conditions</h1>
            </div>
            <p className="text-sm text-white/70 md:text-base">
              Effective Date: 18 August 2026 | Version: ODLIX-TOS-1.1. These Terms govern your use of Odlix services,
              web properties, applications, and connected platform modules.
            </p>
          </header>

          <div className="space-y-8 text-sm leading-relaxed text-white/80 md:text-base">
            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Handshake className="h-5 w-5 text-magenta-400" /> Acceptance of Terms
              </h2>
              <p>
                By creating an account, browsing our properties, or purchasing a service, you acknowledge that
                you have read, understood, and accepted these Terms and our Privacy Policy.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <UserCheck className="h-5 w-5 text-magenta-400" /> Eligibility, Minors & Account Duties
              </h2>
              <ul className="space-y-2">
                <li>• You must provide accurate registration information and keep it current.</li>
                <li>• Users under legal majority age must use services under parent/guardian supervision as per law.</li>
                <li>• You are responsible for protecting credentials and all activity under your account.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <ShieldCheck className="h-5 w-5 text-magenta-400" /> Use of Services
              </h2>
              <p>
                Odlix grants a limited, non-transferable, revocable right to use services in compliance with
                applicable law. Platform-specific conditions may apply for certain modules.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Ban className="h-5 w-5 text-magenta-400" /> Prohibited Conduct
              </h2>
              <ul className="space-y-2">
                <li>• Unauthorized access, scraping, reverse engineering, or disruption of service infrastructure.</li>
                <li>• Misrepresentation, fraud, abuse of payment systems, or unlawful activities.</li>
                <li>• Uploading malicious, unlawful, or third-party rights-infringing content.</li>
              </ul>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-white">Payments, Cancellations & Refunds</h2>
              <p>
                Paid services may follow milestones or subscription cycles. Refund windows, cancellation terms,
                and delivery obligations are governed by applicable service/order documents.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-white">Intellectual Property</h2>
              <p>
                Trademarks, platform assets, and proprietary systems remain property of Odlix or its licensors
                unless explicitly transferred through a written agreement.
              </p>
            </section>

            <section>
              <h2 className="mb-2 text-xl font-bold text-white">Disclaimer & Limitation of Liability</h2>
              <p>
                Services are provided on an "as available" basis. To the maximum extent permitted by law,
                Odlix is not liable for indirect, incidental, special, or consequential damages.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Landmark className="h-5 w-5 text-magenta-400" /> Governing Law & Jurisdiction
              </h2>
              <p>
                These Terms are governed by the laws of India. Subject to mandatory legal requirements,
                courts with competent jurisdiction in Tamil Nadu, India shall have exclusive jurisdiction.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Gavel className="h-5 w-5 text-magenta-400" /> Dispute Resolution
              </h2>
              <p>
                Parties will attempt amicable resolution first. If unresolved, disputes may be escalated to
                mediation/arbitration and then competent courts, as applicable under law.
              </p>
            </section>

            <section>
              <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
                <Clock3 className="h-5 w-5 text-magenta-400" /> Revisions to Terms
              </h2>
              <p>
                We may revise these Terms for legal, operational, or security reasons. Material changes are
                posted with updated effective date and version.
              </p>
            </section>

            <section className="rounded-2xl bg-magenta-500 p-6 text-white">
              <h2 className="mb-3 text-xl font-black">Support, Legal & Grievance Contact</h2>
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
