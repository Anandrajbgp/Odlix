"use client"

import Link from "next/link"
import { Sparkles } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full bg-[#030308] text-slate-400 m-0 py-16 relative z-20 overflow-hidden">
      
      {/* Upper Architectural Thin Border Divider */}
      <div 
        className="absolute top-0 left-0 right-0 h-px pointer-events-none"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.04) 50%, transparent 100%)"
        }}
      />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 grid grid-cols-1 md:grid-cols-2 gap-12 relative z-10">
        
        {/* Brand Meta Column */}
        <div className="space-y-4">
          <Link href="/" className="group inline-flex items-center gap-2.5">
            <span
              className="relative font-black tracking-[0.18em] text-lg text-white"
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                letterSpacing: "0.2em",
              }}
            >
              ODLIX
            </span>
            <Sparkles className="h-3.5 w-3.5 text-violet-400 opacity-40 group-hover:opacity-100 transition-opacity duration-300" />
          </Link>
          <p 
            className="text-xs sm:text-sm font-light leading-relaxed max-w-sm"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            The ultimate world-class digital ecosystem. Access specialized multi-vertical systems and cloud utilities under one authenticated master node loop.
          </p>
        </div>

        {/* Legal Links Column - Aligned beautifully to the right on desktop */}
        <div className="md:justify-self-end min-w-[160px]">
          <h4 className="text-white font-bold mb-4 text-[10px] tracking-[0.2em] uppercase font-mono opacity-80">
            Legal & Trust
          </h4>
          <ul className="space-y-3 text-xs">
            <li>
              <Link href="/privacy" className="hover:text-violet-300 transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}>
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link href="/terms" className="hover:text-violet-300 transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}>
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-violet-300 transition-colors duration-200" style={{ color: "rgba(255,255,255,0.45)" }}>
                About Us
              </Link>
            </li>
          </ul>
        </div>

      </div>

      {/* Bottom Identity Matrix Panel */}
      <div 
        className="max-w-7xl mx-auto px-6 sm:px-8 mt-12 pt-8 border-t flex flex-col sm:flex-row justify-between items-center gap-6 text-[11px] relative z-10"
        style={{ borderColor: "rgba(255,255,255,0.03)" }}
      >
        <p style={{ color: "rgba(255,255,255,0.25)" }}>
          © {new Date().getFullYear()} Odlix Ecosystem Global Inc. All rights reserved.
        </p>
        
        {/* Social Triggers: Insta, FB, YouTube */}
        <div className="flex space-x-6 items-center">
          
          {/* Instagram SVG */}
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300" style={{ color: "rgba(255,255,255,0.25)" }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'} aria-label="Instagram">
            <svg className="h-4 w-4 fill-none stroke-current stroke-2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>

          {/* Facebook SVG */}
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300" style={{ color: "rgba(255,255,255,0.25)" }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'} aria-label="Facebook">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c4.56-.93 8-4.96 8-9.8z"/>
            </svg>
          </a>

          {/* YouTube SVG */}
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="transition-colors duration-300" style={{ color: "rgba(255,255,255,0.25)" }} onMouseEnter={(e) => e.currentTarget.style.color = '#fff'} onMouseLeave={(e) => e.currentTarget.style.color = 'rgba(255,255,255,0.25)'} aria-label="YouTube">
            <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>

        </div>
      </div>
    </footer>
  )
}