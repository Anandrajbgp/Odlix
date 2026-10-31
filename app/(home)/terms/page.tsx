"use client";

import { FileText, ShieldCheck, Ban, Handshake, Mail, Phone, Landmark, Gavel, UserCheck, Clock3 } from "lucide-react";
import { BackgroundBubbles } from "@/components/layout/background-bubbles";

export default function EcosystemTermsPage() {
  return (
    <div className="min-h-screen bg-transparent pt-32 pb-24 text-white relative">
      <BackgroundBubbles />
      <div className="container mx-auto max-w-5xl px-4 relative z-10">
        {/* Banner Card matching exact design and fonts from reference image */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-8 md:p-12 text-[#0f1d26] shadow-[0_25px_60px_rgba(0,212,202,0.25)] border border-white/30 mb-10">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.35)_0%,rgba(255,255,255,0.12)_40%,transparent_65%)] pointer-events-none" />

          <header className="relative z-10">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-[#0f1d26]/10 p-3 text-[#0f1d26]">
                <FileText className="h-7 w-7" />
              </div>
              <h1 className="text-3xl font-black tracking-tight md:text-5xl text-[#0f1d26]">Terms & Conditions</h1>
            </div>
            <p className="text-sm text-[#0f1d26]/85 md:text-base font-semibold">
              Effective Date: 18 August 2026 | Version: ODLIX-TOS-1.1. These Terms govern your use of Odlix services,
              web properties, applications, and connected platform modules.
            </p>
          </header>
        </div>

        <div className="rounded-[2.2rem] border border-slate-700/60 bg-slate-900/15 backdrop-blur-xl p-8 shadow-xl md:p-12 space-y-8 text-sm leading-relaxed text-slate-200 md:text-base font-semibold">
          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Handshake className="h-5 w-5 text-cyan-300" /> Acceptance of Terms
            </h2>
            <p>
              By creating an account, browsing our properties, or purchasing a service, you acknowledge that
              you have read, understood, and accepted these Terms and our Privacy Policy.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <UserCheck className="h-5 w-5 text-cyan-300" /> Eligibility, Minors & Account Duties
            </h2>
            <ul className="space-y-2">
              <li>• You must provide accurate registration information and keep it current.</li>
              <li>• Users under legal majority age must use services under parent/guardian supervision as per law.</li>
              <li>• You are responsible for protecting credentials and all activity under your account.</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <ShieldCheck className="h-5 w-5 text-cyan-300" /> Use of Services
            </h2>
            <p>
              Odlix grants a limited, non-transferable, revocable right to use services in compliance with
              applicable law. Platform-specific conditions may apply for certain modules.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Ban className="h-5 w-5 text-cyan-300" /> Prohibited Conduct
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
              Services are provided on an &quot;as available&quot; basis. To the maximum extent permitted by law,
              Odlix is not liable for indirect, incidental, special, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Landmark className="h-5 w-5 text-cyan-300" /> Governing Law & Jurisdiction
            </h2>
            <p>
              These Terms are governed by the laws of India. Subject to mandatory legal requirements,
              courts with competent jurisdiction in Bhagalpur, Bihar, India shall have exclusive jurisdiction.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Gavel className="h-5 w-5 text-cyan-300" /> Dispute Resolution
            </h2>
            <p>
              Parties will attempt amicable resolution first. If unresolved, disputes may be escalated to
              mediation/arbitration and then competent courts, as applicable under law.
            </p>
          </section>

          <section>
            <h2 className="mb-2 flex items-center gap-2 text-xl font-bold text-white">
              <Clock3 className="h-5 w-5 text-cyan-300" /> Revisions to Terms
            </h2>
            <p>
              We may revise these Terms for legal, operational, or security reasons. Material changes are
              posted with updated effective date and version.
            </p>
          </section>

          <section className="rounded-2xl bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-6 text-[#0f1d26]">
            <h2 className="mb-3 text-xl font-black">Support, Legal & Grievance Contact</h2>
            <div className="space-y-2 text-sm font-bold md:text-base">
              <p className="flex items-center gap-2"><Mail className="h-4 w-4" /> team.odlix@gmail.com</p>
              <p className="flex items-center gap-2"><Phone className="h-4 w-4" /> +91 7372891228</p>
              <p className="text-xs uppercase tracking-[0.12em] opacity-90 font-extrabold">Initial response target: 24-48 working hours</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
