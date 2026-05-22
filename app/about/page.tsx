"use client"

import { Layers, Rocket, ShieldCheck, Cpu } from "lucide-react"
import { Navbar } from "@/components/home/navbar"
import { Footer } from "@/components/home/footer"

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <div className="bg-[#020205] text-slate-100 min-h-screen pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          {/* Header Block */}
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs font-semibold text-purple-400">
              <Layers className="h-3.5 w-3.5" /> The Odlix Core Manifest
            </div>
            <h1 className="text-4xl md:text-5xl font-black tracking-tight text-white">
              Architecting the Future of <br />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-transparent">
                Unified Digital Ecosystems
              </span>
            </h1>
            <p className="text-slate-400 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
              Odlix is not just a single product—it is a cross-functional digital infrastructure built to fluidly bridge the gaps between corporate software production, high-income skill development, capital execution systems, and digital global distribution.
            </p>
          </div>

          {/* Pillars Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            <div className="p-6 border border-white/5 bg-slate-950/30 rounded-2xl space-y-3">
              <div className="p-2.5 bg-purple-500/10 text-purple-400 rounded-xl w-fit">
                <Rocket className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Our Mission</h4>
              <p className="text-xs text-slate-400 leading-relaxed">To lower barrier-to-entry friction for modern micro-saas utilities, asset-clearance networks, and production upskilling loops under one secure endpoint dashboard.</p>
            </div>

            <div className="p-6 border border-white/5 bg-slate-950/30 rounded-2xl space-y-3">
              <div className="p-2.5 bg-pink-500/10 text-pink-400 rounded-xl w-fit">
                <Cpu className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Quantum Tech Stack</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Leveraging highly responsive edge architecture, zero-delay route management models, and institutional grade client ledgers for absolute security matrices.</p>
            </div>

            <div className="p-6 border border-white/5 bg-slate-950/30 rounded-2xl space-y-3">
              <div className="p-2.5 bg-amber-500/10 text-amber-400 rounded-xl w-fit">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-sm font-bold text-white">Verified Security</h4>
              <p className="text-xs text-slate-400 leading-relaxed">Backed by rigorous end-to-end sandbox parameters and 2FA authentication layer logic structures ensuring safe environment traversal protocols.</p>
            </div>
          </div>

          {/* Closing Narrative Statement */}
          <div className="p-8 border border-white/5 bg-white/[0.01] rounded-2xl text-center space-y-3">
            <h3 className="text-base font-bold text-white">Six Universes. Infinite Potential.</h3>
            <p className="text-xs text-slate-400 max-w-xl mx-auto leading-relaxed">Whether you are building with Digital Agency, studying dynamic stacks inside Learn Hub, scaling margins on Broker Trade, or sourcing assets through Mart—you run on the robust framework of the global Odlix engine network loop.</p>
          </div>

        </div>
      </div>
      <Footer />
    </>
  )
}