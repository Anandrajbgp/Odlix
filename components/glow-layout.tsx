"use client"

import { useEffect, useState } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"

export function GlowLayout({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(true)

  // Mouse Trackers
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  // Super responsive springs (Stiffness badha di hai taaki lag na kare)
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.2 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.2 })

  useEffect(() => {
    setMounted(true)
    
    const mediaQuery = window.matchMedia("(pointer: coarse)")
    setIsMobile(mediaQuery.matches)

    if (mediaQuery.matches) return

    const handleMouseMove = (e: MouseEvent) => {
      // 100px offset taaki glow circle exact cursor ke center me rahe
      mouseX.set(e.clientX - 100)
      mouseY.set(e.clientY - 100)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [mouseX, mouseY])

  if (!mounted) return <div className="bg-[#030308] min-h-screen">{children}</div>

  return (
    <div className="relative min-h-screen w-full bg-[#030308]">
      
      {/* 1. BACKGROUND FLOATING GLOWS (Z-INDEX: 0) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
        <motion.div
          animate={{
            x: [0, 30, -30, 0],
            y: [0, -40, 40, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-10 left-10 w-[400px] h-[400px] rounded-full opacity-30 filter blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(139,92,246,0.4) 0%, transparent 70%)" }}
        />

        <motion.div
          animate={{
            x: [0, -40, 40, 0],
            y: [0, 30, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-20 right-10 w-[400px] h-[400px] rounded-full opacity-20 filter blur-[100px]"
          style={{ background: "radial-gradient(circle, rgba(6,182,212,0.3) 0%, transparent 70%)" }}
        />
      </div>

      {/* 2. INTERACTIVE CURSOR SHADOW SHINE (Z-INDEX: 50 - CONTENT KE UPAR SE GLOW KAREGA) */}
      {!isMobile && (
        <motion.div
          className="fixed pointer-events-none z-50 w-[200px] h-[200px] rounded-full mix-blend-screen filter blur-[50px] opacity-60"
          style={{
            x: springX,
            y: springY,
            background: "radial-gradient(circle, rgba(167,139,250,0.25) 0%, rgba(34,211,238,0.1) 60%, transparent 100%)",
          }}
        />
      )}

      {/* Main Content Area (Z-INDEX: 10) */}
      <div className="relative z-10 w-full min-h-screen">
        {children}
      </div>
    </div>
  )
}