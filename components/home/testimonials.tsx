"use client"

import { motion } from "framer-motion"

const testimonials = [
  { 
    name: "Aman Verma", 
    role: "Full-Stack Developer & Affiliate", 
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=256&q=80", // Premium Indian Tech Face Representation
    text: "Odlix completely shifted my workflow. I learned production architectures on the Academy and deployed client projects using Oblivent Agency frameworks!" 
  },
  { 
    name: "Riya Sharma", 
    role: "Prop Trader", 
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de215f?auto=format&fit=crop&w=256&q=80", // Premium Indian Corporate Female representation
    text: "The cross-ledger settlement on the Broker Pro terminal is exceptionally smooth. Trading equities and monitoring live data matrix happens seamlessly." 
  },
  { 
    name: "Devendra Kumar", 
    role: "SaaS Founder", 
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=256&q=80", // Modern Entrepreneur Look
    text: "Launching our micro utility tools directly inside the AppUniverse expanded our reach overnight without app store rejection delays." 
  }
]

export function Testimonials() {
  return (
    <section className="w-full bg-[#030308] px-4 sm:px-6 lg:px-8 m-0 py-20 relative z-20 overflow-hidden">
      
      {/* Absolute Cyber Matrix Background Mesh */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-screen"
        style={{
          backgroundImage: "radial-gradient(rgba(255,255,255,0.15) 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Cybernetic Linear Light Spline */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.08) 50%, transparent 100%)"
        }}
      />

      {/* Header Area */}
      <div className="max-w-7xl mx-auto text-center max-w-2xl mx-auto mb-16 relative z-10">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/[0.04] bg-white/[0.02] backdrop-blur-md mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
          <span className="text-[10px] font-bold font-mono tracking-[0.2em] text-violet-400 uppercase">Live Global Ledger</span>
        </div>
        <h2 
          className="text-3xl sm:text-4xl font-black tracking-tight font-mono mb-3"
          style={{
            background: "linear-gradient(180deg, #ffffff 20%, rgba(255,255,255,0.55) 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
        >
          Trusted Globally
        </h2>
        <p 
          className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.22em] max-w-xl mx-auto leading-relaxed"
          style={{ color: "rgba(255,255,255,0.3)" }}
        >
          See how active operators navigate across our integrated decentralized architectures.
        </p>
      </div>

      {/* Grid Network */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="group flex flex-col justify-between p-6 sm:p-8 rounded-2xl relative overflow-hidden transition-all duration-500 hover:-translate-y-1"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.015) 0%, rgba(255,255,255,0.002) 100%)",
              border: "1px solid rgba(255, 255, 255, 0.03)",
              backdropFilter: "blur(32px)",
              boxShadow: "inset 0 1px 1px 0 rgba(255, 255, 255, 0.03)"
            }}
          >
            {/* Ambient Radial Mesh Layer behind card */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
              style={{
                background: "radial-gradient(circle 220px at 50% 0%, rgba(139,92,246,0.03) 0%, transparent 100%)"
              }}
            />

            {/* Glowing Laser Top Accent */}
            <div 
              className="absolute top-0 left-8 right-8 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-50 group-hover:scale-x-100"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.25), transparent)"
              }}
            />

            {/* Quote Icon Vector Watermark */}
            <span className="absolute top-4 right-6 text-6xl font-serif text-white/[0.01] select-none pointer-events-none group-hover:text-white/[0.02] transition-colors duration-500">
              “
            </span>

            {/* Testimonial Core Text */}
            <p 
              className="text-xs sm:text-[13px] font-light leading-relaxed mb-8 relative z-10 transition-colors duration-300"
              style={{ 
                color: "rgba(255,255,255,0.45)",
                fontFamily: "var(--font-sans), sans-serif"
              }}
            >
              <span className="group-hover:text-white/85 transition-colors duration-300">
                "{t.text}"
              </span>
            </p>

            {/* Identity Profile Node Meta */}
            <div 
              className="flex items-center gap-4 pt-5 border-t relative z-10"
              style={{ borderColor: "rgba(255,255,255,0.03)" }}
            >
              {/* Premium Image Handler */}
              <div className="relative flex-shrink-0 group-hover:scale-105 transition-transform duration-500">
                <div 
                  className="absolute -inset-0.5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                  style={{
                    background: "linear-gradient(135deg, rgba(167,139,250,0.4), rgba(6,182,212,0.4))",
                    filter: "blur(4px)"
                  }}
                />
                <img 
                  src={t.image} 
                  alt={t.name}
                  className="h-11 w-11 rounded-xl object-cover relative z-10 grayscale-[30%] group-hover:grayscale-0 transition-all duration-500"
                  style={{
                    border: "1px solid rgba(255,255,255,0.08)",
                    background: "rgba(255,255,255,0.02)"
                  }}
                />
              </div>

              {/* Text Metadata */}
              <div className="min-w-0">
                <h5 className="text-xs font-black tracking-wide text-white truncate group-hover:text-violet-300 transition-colors duration-300">
                  {t.name}
                </h5>
                <p 
                  className="text-[9px] font-bold uppercase tracking-[0.12em] mt-0.5 truncate"
                  style={{ color: "rgba(255,255,255,0.25)" }}
                >
                  {t.role}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}