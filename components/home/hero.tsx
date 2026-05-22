"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Terminal } from "lucide-react"

// ─── Particle system ────────────────────────────────────────────
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")!
    let raf: number

    const resize = () => {
      canvas.width = canvas.offsetWidth * devicePixelRatio
      canvas.height = canvas.offsetHeight * devicePixelRatio
      ctx.scale(devicePixelRatio, devicePixelRatio)
    }
    resize()
    window.addEventListener("resize", resize)

    const COLORS = ["#a78bfa", "#38bdf8", "#f472b6", "#34d399", "#fbbf24"]
    const particles = Array.from({ length: 60 }, () => ({
      x: Math.random() * canvas.offsetWidth,
      y: Math.random() * canvas.offsetHeight,
      r: Math.random() * 1.5 + 0.4,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
      alpha: Math.random() * 0.5 + 0.15,
    }))

    const draw = () => {
      const w = canvas.offsetWidth
      const h = canvas.offsetHeight
      ctx.clearRect(0, 0, w, h)

      // connection lines
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 90) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(167,139,250,${0.06 * (1 - dist / 90)})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      particles.forEach((p) => {
        p.x += p.vx
        p.y += p.vy
        if (p.x < 0) p.x = w
        if (p.x > w) p.x = 0
        if (p.y < 0) p.y = h
        if (p.y > h) p.y = 0

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = p.color + Math.round(p.alpha * 255).toString(16).padStart(2, "0")
        ctx.fill()
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ zIndex: 1 }}
    />
  )
}

// ─── Mouse parallax hook ─────────────────────────────────────────
function useParallax() {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 60, damping: 20 })
  const sy = useSpring(my, { stiffness: 60, damping: 20 })

  useEffect(() => {
    const move = (e: MouseEvent) => {
      const cx = window.innerWidth / 2
      const cy = window.innerHeight / 2
      mx.set((e.clientX - cx) / cx)
      my.set((e.clientY - cy) / cy)
    }
    window.addEventListener("mousemove", move)
    return () => window.removeEventListener("mousemove", move)
  }, [mx, my])

  return { sx, sy }
}

// ─── Main Hero ───────────────────────────────────────────────────
export function Hero() {
  const { sx, sy } = useParallax()

  const orb1x = useTransform(sx, [-1, 1], [-30, 30])
  const orb1y = useTransform(sy, [-1, 1], [-20, 20])
  const orb2x = useTransform(sx, [-1, 1], [20, -20])
  const orb2y = useTransform(sy, [-1, 1], [15, -15])
  const orb3x = useTransform(sx, [-1, 1], [-15, 15])
  const orb3y = useTransform(sy, [-1, 1], [-25, 25])

  return (
    /* min-h-[85vh] add kiya hai taaki spacing optimized rahe aur sections aapas me perfect tight baithein */
    <section className="relative w-full min-h-[85vh] bg-[#04040a] overflow-hidden flex flex-col items-center justify-center pt-24 pb-16 select-none m-0">

      {/* ── Canvas particle system ── */}
      <ParticleField />

      {/* ── Ambient orbs (mouse-parallax) ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 2 }}>
        
        {/* Violet crown — FIXED: `css` prop hata kar clean style use kiya hai taaki radial-glow visible ho */}
        <motion.div
          style={{ 
            x: orb1x, 
            y: orb1y,
            top: "-10%",
            left: "50%",
            marginLeft: "-260px",
            width: "520px",
            height: "420px"
          }}
          className="absolute"
        >
          <div
            style={{
              width: "100%", height: "100%",
              background: "radial-gradient(ellipse, rgba(120,60,220,0.32) 0%, transparent 68%)",
              filter: "blur(72px)",
            }}
          />
        </motion.div>

        {/* Cyan bottom-left */}
        <motion.div style={{ x: orb2x, y: orb2y }} className="absolute bottom-[-5%] left-[5%]">
          <div
            style={{
              width: 340, height: 280,
              background: "radial-gradient(ellipse, rgba(0,200,220,0.2) 0%, transparent 70%)",
              filter: "blur(60px)",
            }}
          />
        </motion.div>

        {/* Rose right */}
        <motion.div style={{ x: orb3x, y: orb3y }} className="absolute top-[35%] right-[6%]">
          <div
            style={{
              width: 260, height: 240,
              background: "radial-gradient(ellipse, rgba(220,60,130,0.18) 0%, transparent 70%)",
              filter: "blur(55px)",
            }}
          />
        </motion.div>
      </div>

      {/* ── Grid overlay ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 2,
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.022) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.022) 1px, transparent 1px)
          `,
          backgroundSize: "52px 52px",
          maskImage: "radial-gradient(ellipse 75% 65% at 50% 40%, black 20%, transparent 100%)",
        }}
      />

      {/* ── Noise texture ── */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          zIndex: 3,
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='1'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
        }}
      />

      {/* ── Content ── */}
      <div className="relative flex flex-col items-center text-center px-4 max-w-5xl mx-auto" style={{ zIndex: 10 }}>

        {/* Live badge */}
        <motion.div
          initial={{ opacity: 0, y: -16, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8 inline-flex items-center gap-2.5 px-4 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.04)",
            border: "0.5px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span className="relative flex h-2 w-2 flex-shrink-0">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
          </span>
          <Terminal className="h-3 w-3 text-cyan-400" />
          <span
            className="text-[11px] font-medium tracking-widest uppercase"
            style={{ color: "rgba(255,255,255,0.45)" }}
          >
            <span style={{ color: "rgba(255,255,255,0.8)" }}>V2.16 Live</span>
            &nbsp;·&nbsp;Unified Cloud Infrastructure
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6"
        >
          <h1
            className="font-black leading-[1.02] tracking-[-0.03em]"
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: "clamp(44px, 7.5vw, 84px)",
            }}
          >
            <span className="text-white">One Platform.</span>
            <br />
            <span
              style={{
                fontStyle: "italic",
                background: "linear-gradient(135deg, #c4b5fd 0%, #38bdf8 42%, #f9a8d4 80%, #fbbf24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Infinite
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #38bdf8 0%, #a78bfa 60%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Solutions.
            </span>
          </h1>
        </motion.div>

        {/* Ornamental divider */}
        <motion.div
          initial={{ opacity: 0, scaleX: 0 }}
          animate={{ opacity: 1, scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="mb-6 flex items-center gap-3"
        >
          <div style={{ width: 40, height: 0.5, background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.5))" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(167,139,250,0.6)" }} />
          <div style={{ width: 80, height: 0.5, background: "linear-gradient(90deg, rgba(167,139,250,0.5), rgba(56,189,248,0.5))" }} />
          <div style={{ width: 6, height: 6, borderRadius: "50%", background: "rgba(56,189,248,0.6)" }} />
          <div style={{ width: 40, height: 0.5, background: "linear-gradient(90deg, rgba(56,189,248,0.5), transparent)" }} />
        </motion.div>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
          className="mb-2 text-base leading-relaxed font-light max-w-[520px]"
          style={{ color: "rgba(255,255,255,0.38)", letterSpacing: "0.01em" }}
        >
          An interconnected technological ecosystem designed to streamline heavy data operations, 
          automated commerce, and high-performance digital architectures under a unified secure core.
        </motion.p>
      </div>

      {/* ── Vignette ── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          zIndex: 4,
          background: "radial-gradient(ellipse 100% 100% at 50% 50%, transparent 30%, rgba(4,4,10,0.6) 100%)",
        }}
      />

    </section>
  )
}