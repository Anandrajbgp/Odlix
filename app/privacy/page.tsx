"use client"

import { Shield, Clock } from "lucide-react"
import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#020205] text-slate-100 min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Privacy Metadata */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-cyan-400 font-mono font-bold uppercase tracking-wider">
              <Shield className="h-4 w-4" /> Secure Data Traversal Ledger
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Privacy Policy</h1>
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <Clock className="h-3.5 w-3.5" /> Operational Encrypted Status: Active (May 2026)
            </div>
          </div>

          {/* Content Flow */}
          <div className="space-y-8 text-xs md:text-sm text-slate-300 leading-relaxed">
            
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">1. Information Nodes Gathered</h3>
              <p>We process basic node telemetry parameters: master access emails, secure encrypted password hash formats, hardware configurations mapped to secure store apps, and unified reward system balances across active sub-platforms.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">2. Cryptographic Data Utilization</h3>
              <p>Collected user logs are used strictly to maintain secure cross-routing parameters between your wallet balances, track multi-level affiliate pipelines correctly across the platform matrices, and execute seamless mock diagnostic score records on Exam Test engines.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">3. Third Party Gateway Processing</h3>
              <p>Odlix routes transaction arrays securely through verified payment tunnels (e.g., Cashfree protocols). No unencrypted credit card strings, banking data, or high-risk ledger items are retained or cached on our core platform edge data matrices.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">4. Data Erasure & Rights Protocols</h3>
              <p>Users maintain full operational mastery over their digital node prints. You can trigger a comprehensive account termination loop through your secure user panel at any time, which permanently purges your records from active ledger caching directories within 48 systemic hours.</p>
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}