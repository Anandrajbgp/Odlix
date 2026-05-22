"use client"

import { Search, Download, Star, Share2 } from "lucide-react"

const utilities = [
  { name: "FocusFlow Productivity", cat: "Business & Timing", rating: "4.9", size: "PWA Native" },
  { name: "PixelCraft Asset Studio", cat: "Design & Vectors", rating: "4.8", size: "Cloud App" },
  { name: "LedgerLink Finance Grid", cat: "Personal Wealth", rating: "4.7", size: "Unified Tool" },
  { name: "ScriptVibe Automation Engine", cat: "Marketing & Hooks", rating: "4.9", size: "Developer Bundle" }
]

export default function AppsLandingPage() {
  return (
    <div className="space-y-16">
      {/* Search Header Module */}
      <div className="text-center max-w-2xl mx-auto space-y-6">
        <h1 className="text-4xl md:text-5xl font-black text-white">
          Curated Software Node. <br />
          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">Zero Installations.</span>
        </h1>
        <p className="text-sm text-purple-300/60">
          Instantly launch productivity extensions, design modules, and financial trackers right inside your primary cloud infrastructure.
        </p>

        {/* Global Store Search Engine bar */}
        <div className="relative max-w-lg mx-auto">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-purple-400" />
          <input 
            type="text" 
            placeholder="Search across cross-platform micro tools, bundles, or widgets..." 
            className="w-full bg-purple-950/30 border border-purple-900/60 px-12 py-3.5 rounded-2xl text-sm text-white placeholder-purple-400/40 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500"
          />
        </div>
      </div>

      {/* Catalog Grid */}
      <div className="space-y-6">
        <h3 className="text-lg font-bold text-white tracking-wide">Trending Core System Apps</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {utilities.map((app) => (
            <div key={app.name} className="border border-purple-950 bg-purple-950/20 p-5 rounded-2xl flex flex-col justify-between hover:border-purple-800/60 transition-all group">
              <div>
                <div className="flex justify-between items-center text-[10px] font-bold text-purple-400 uppercase tracking-widest">
                  <span>{app.cat}</span>
                  <span className="bg-purple-950 px-2 py-0.5 rounded border border-purple-900">{app.size}</span>
                </div>
                <h4 className="text-base font-bold text-white mt-3 group-hover:text-purple-300 transition-colors">{app.name}</h4>
                <div className="flex items-center gap-1 text-amber-400 text-xs mt-1.5">
                  <Star className="h-3.5 w-3.5 fill-current" />
                  <span className="font-bold text-slate-200">{app.rating}</span>
                  <span className="text-purple-400/40">(Verified Asset)</span>
                </div>
              </div>

              <button className="w-full mt-6 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white text-xs font-bold transition-all flex items-center justify-center gap-1.5">
                <Download className="h-3.5 w-3.5" /> Initialize Application
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}