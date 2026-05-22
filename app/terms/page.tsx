"use client"

import { FileText, Calendar } from "lucide-react"
import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#020205] text-slate-100 min-h-screen pt-32 pb-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          
          {/* Header Metadata */}
          <div className="border-b border-white/10 pb-6 space-y-2">
            <div className="flex items-center gap-1.5 text-xs text-purple-400 font-mono font-bold uppercase tracking-wider">
              <FileText className="h-4 w-4" /> Legal Framework Documentation
            </div>
            <h1 className="text-3xl font-black text-white tracking-tight">Terms of Service</h1>
            <div className="flex items-center gap-1 text-[11px] text-slate-500 font-mono">
              <Calendar className="h-3.5 w-3.5" /> Last Revised Node: May 2026
            </div>
          </div>

          {/* Legal Clauses Blocks */}
          <div className="space-y-8 text-xs md:text-sm text-slate-300 leading-relaxed font-normal">
            
            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">1. Core Node Agreement</h3>
              <p>By creating an account, accessing any endpoint inside the Odlix ecosystem (including but not limited to Learn Hub, Digital Agency, Exam Test, Broker Trade, App Store, and Odlix Mart), you consent to be legally governed by these core system term frameworks.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">2. Multi-Level Affiliate Yield Regulations</h3>
              <p>Affiliate commission pipelines (including standard tier splits scaling up to 58%) are routed instantly based on system algorithmic checks. Odlix reserves the right to freeze balance nodes if malicious account looping, tracking manipulation, or spam vectors are identified within any referral node loop.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">3. Trading Terminal Execution Risk Disclaimers</h3>
              <p>The Broker Trade sandbox terminal hosts multi-asset high-frequency insights and chart patterns. Trading involves substantial leverage operational hazards. All computational outputs are informational; users assume full ledger liability for asset settlement outcomes executed via their private account authentication signatures.</p>
            </div>

            <div className="space-y-2">
              <h3 className="text-base font-bold text-white">4. Fair Use & App Ecosystem Traversal</h3>
              <p>Users must not launch injection scripts, payload loops, or automated bots against any Odlix App Store utilities or micro infrastructure. Violation triggers immediate hardware node revocation and forfeiture of all accumulated rewards wallet units.</p>
            </div>

            <div className="p-4 bg-slate-950 rounded-xl border border-white/5 text-[11px] text-slate-400 font-mono">
              * NOTICE: Continuing system interactions implies continuous automatic authentication compliance with updated routing policy adjustments.
            </div>

          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}