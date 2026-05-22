"use client"

import { Cpu, Zap, ShieldCheck, WifiOff, RefreshCw } from "lucide-react"

const categories = [
  { name: "Banking & Insurance", total: "140+ Mock Papers", code: "SBI, IBPS PO, RBI Grade B" },
  { name: "SSC & Central Admin", total: "220+ Chapter Tests", code: "CGL, CHSL, MTS Tier 1 & 2" },
  { name: "UPSC & State PSC", total: "95+ Premium Modules", code: "Civil Services Prelims, CSAT" },
  { name: "Railway Exams", total: "110+ Speed Drills", code: "RRB NTPC, Group D, ALP" },
  { name: "Campus Placements", total: "85+ Coding Grids", code: "TCS Ninja, Infosys, Wipro Profiles" }
]

export default function TestingLandingPage() {
  return (
    <div className="space-y-16">
      {/* Title */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 dark:bg-blue-950 text-blue-700 dark:text-blue-300">
          🎯 Real-time Adaptive Testing Engine
        </span>
        <h1 className="text-4xl font-black tracking-tight sm:text-5xl">
          Realistic Exam Simulation. <span className="text-blue-600 dark:text-blue-400">Smart Analytics.</span>
        </h1>
        <p className="text-slate-500 dark:text-slate-400">
          Prepare for apex government & corporate recruitments via AI-backed granular weakness mappings.
        </p>
      </div>

      {/* Grid Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((cat) => (
          <div key={cat.name} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 p-6 rounded-2xl shadow-sm hover:shadow-md transition-all group">
            <span className="text-xs font-bold text-slate-400 uppercase tracking-wider block">{cat.total}</span>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
              {cat.name}
            </h3>
            <p className="text-xs text-slate-500 mt-2 bg-slate-50 dark:bg-slate-950 p-2.5 rounded-lg border border-slate-100 dark:border-slate-800">
              Includes: {cat.code}
            </p>
          </div>
        ))}
      </div>

      {/* Feature Matrix */}
      <div className="bg-blue-600 text-white rounded-3xl p-8 lg:p-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div className="space-y-2">
          <Cpu className="h-6 w-6 text-blue-200" />
          <h4 className="font-bold text-lg">Adaptive Questions</h4>
          <p className="text-xs text-blue-100">Difficulty levels scale automatically based on response velocity metrics.</p>
        </div>
        <div className="space-y-2">
          <ShieldCheck className="h-6 w-6 text-blue-200" />
          <h4 className="font-bold text-lg">Negative Mark Engine</h4>
          <p className="text-xs text-blue-100">Simulates real deduction loops matching formal UPSC/SSC algorithms.</p>
        </div>
        <div className="space-y-2">
          <WifiOff className="h-6 w-6 text-blue-200" />
          <h4 className="font-bold text-lg">Offline Testing</h4>
          <p className="text-xs text-blue-100">Download bundles through PWA mode and attempt matches without the internet.</p>
        </div>
        <div className="space-y-2">
          <RefreshCw className="h-6 w-6 text-blue-200" />
          <h4 className="font-bold text-lg">Freemium Tier Model</h4>
          <p className="text-xs text-blue-100">Access standard diagnostic baseline exams at absolute zero-cost overheads.</p>
        </div>
      </div>
    </div>
  )
}