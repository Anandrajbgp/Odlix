import { FileText, Scale, ShieldCheck, Ban, Mail, Phone, Landmark, Gavel, UserCheck, Clock3, GraduationCap, Award, DollarSign } from "lucide-react";

export default function ElearningTermsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-white pt-32 pb-20 md:pt-36 md:pb-24">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="border border-white/10 bg-slate-900 p-8 md:p-14 rounded-[2.5rem] shadow-2xl backdrop-blur">
          <header className="mb-12 border-b border-white/10 pb-8">
            <div className="mb-4 flex items-center gap-3">
              <div className="rounded-2xl bg-indigo-500/15 p-3 text-indigo-400">
                <GraduationCap className="h-8 w-8" />
              </div>
              <h1 className="text-3xl font-black tracking-tight text-white md:text-5xl">Odlix eLearning — Master Enrollment & Partner Terms</h1>
            </div>
            <p className="text-sm text-slate-300 md:text-base font-medium mt-3">
              Effective Date: 18 August 2026 | Version: ODLIX-EDU-TOS-2.0. These Master Terms govern all course enrollments, HD digital learning package access, QR-verified certification, the Life Mastery leadership track, and the multi-tier partner earning ecosystem.
            </p>
          </header>

          <div className="space-y-10 text-sm leading-relaxed text-slate-300 md:text-base font-medium">
            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Scale className="h-6 w-6 text-indigo-400" /> 1. Course Package Licensing & Anti-Piracy Covenants
              </h2>
              <p>
                Enrollment in Beginner, Pro, or Expert packages grants a single-user, non-exclusive, non-transferable license to stream HD video modules and access downloadable resources. Video lectures and study guides are protected by digital rights management.
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Account Sharing Prohibition:</strong> Account credentials may not be shared, sold, or pooled among multiple individuals.</li>
                <li><strong className="text-white">Anti-Piracy Enforcement:</strong> Recording, scraping, downloading, or redistributing course modules will result in instant account ban and legal action.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <DollarSign className="h-6 w-6 text-indigo-400" /> 2. Multi-Tier Partner Earning & Weekly Payout Rules
              </h2>
              <p>
                Enrolled students are eligible to participate in the Odlix Skill-Sharing Income Ecosystem under strict compliance standards:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-slate-300">
                <li><strong className="text-white">Commission Tiers:</strong> Direct sales yield up to 58% commission, with Tier-2 secondary referral bonuses up to 17% based on active package tier.</li>
                <li><strong className="text-white">Payout Schedule:</strong> Payouts are processed every Saturday with a minimum payout threshold of ₹200.</li>
                <li><strong className="text-white">Taxation & Reporting:</strong> Partners are independently responsible for applicable tax filings.</li>
              </ul>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Award className="h-6 w-6 text-indigo-400" /> 3. QR-Verified Certification & Life Mastery Track
              </h2>
              <p>
                Digital certificates are issued upon 100% course completion and passing required quizzes. Certificates feature cryptographic QR codes for instant employer verification.
              </p>
              <p>
                Completion of any core package unlocks access to the exclusive <strong className="text-white">Life Mastery Track</strong> (Tax Planning, Mindfulness, Leadership, and Emotional Intelligence).
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Ban className="h-6 w-6 text-indigo-400" /> 4. Refund & Cancellation Policy
              </h2>
              <p>
                Due to immediate digital grant of downloadable resources and instant LMS unlock upon payment, fees are non-refundable except in cases of verified technical billing errors submitted within 24 hours of purchase.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="flex items-center gap-2 text-2xl font-bold text-white">
                <Landmark className="h-6 w-6 text-indigo-400" /> 5. Governing Law & Dispute Resolution
              </h2>
              <p>
                These terms are governed by the laws of India. Any legal disputes or arbitrations fall under the exclusive jurisdiction of competent courts in Bhagalpur, Bihar, India.
              </p>
            </section>

            <section className="rounded-3xl bg-slate-900/90 p-8 text-white border border-indigo-500/30 shadow-xl">
              <h2 className="mb-3 text-2xl font-black">eLearning Legal & Partner Desk</h2>
              <p className="text-slate-300 mb-6 text-sm">For compliance inquiries, payout verifications, or certificate authentication:</p>
              <div className="space-y-3 text-sm font-bold md:text-base">
                <p className="flex items-center gap-3"><Mail className="h-5 w-5 text-indigo-400" /> team.odlix@gmail.com</p>
                <p className="flex items-center gap-3"><Phone className="h-5 w-5 text-indigo-400" /> +91 7372891228</p>
                <p className="text-xs uppercase tracking-[0.15em] text-indigo-300 font-black mt-4">Support Hours: Mon–Sat, 10:00 AM – 7:00 PM IST</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
