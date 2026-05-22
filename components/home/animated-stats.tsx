"use client"

import { useEffect, useState, useRef } from "react"
import { motion, useInView, useMotionValue, useSpring } from "framer-motion"

const stats = [
  { value: 480, label: "Active Nodes Controlled", prefix: "", suffix: "+" },
  { value: 32, label: "Global Projects Deployed", prefix: "", suffix: "+" },
  { value: 99.9, label: "Uptime Performance SLA", prefix: "", suffix: "%" },
  { value: 85, label: "Total Payouts Settled", prefix: "$", suffix: "K+" }
]

function Counter({ value, prefix = "", suffix = "", isDecimal = false }: { value: number; prefix?: string; suffix?: string; isDecimal?: boolean }) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: false, amount: 0.3 }) 
  
  const motionValue = useMotionValue(0)
  const springValue = useSpring(motionValue, {
    stiffness: 45,
    damping: 18,
    restDelta: 0.01
  })

  const [displayValue, setDisplayValue] = useState(prefix + "0" + suffix)

  useEffect(() => {
    if (isInView) {
      motionValue.set(value)
    } else {
      motionValue.set(0)
    }
  }, [isInView, value, motionValue])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (isDecimal) {
        setDisplayValue(`${prefix}${latest.toFixed(1)}${suffix}`)
      } else {
        setDisplayValue(`${prefix}${Math.floor(latest).toLocaleString()}${suffix}`)
      }
    })
  }, [springValue, prefix, suffix, isDecimal])

  return <span ref={ref}>{displayValue}</span>
}

export function AnimatedStats() {
  return (
    <section className="w-full bg-[#030308] px-4 sm:px-6 lg:px-8 m-0 py-2 relative z-20">
      <div 
        className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 rounded-2xl relative overflow-hidden"
        style={{
          background: "rgba(255, 255, 255, 0.01)",
          border: "1px solid rgba(255, 255, 255, 0.03)",
          backdropFilter: "blur(24px)",
          boxShadow: "inset 0 1px 0 0 rgba(255, 255, 255, 0.03)"
        }}
      >
        
        {/* Dynamic Vector Ambient Backlight */}
        <div 
          className="absolute inset-0 pointer-events-none opacity-60" 
          style={{
            background: "radial-gradient(circle 400px at 50% 50%, rgba(99,102,241,0.03) 0%, transparent 100%), radial-gradient(circle 300px at 80% 20%, rgba(6,182,212,0.02) 0%, transparent 100%)"
          }}
        />

        {stats.map((stat, i) => (
          <div 
            key={stat.label} 
            className="flex flex-col justify-center items-center relative z-10 py-8 px-4 group transition-all duration-500"
            style={{
              // Creating seamless corporate borders between grid blocks
              borderRight: i !== 3 ? "1px solid rgba(255,255,255,0.02)" : "none",
              borderBottom: "1px solid rgba(255,255,255,0.02)"
            }}
          >
            {/* Soft inner card hover radial glow */}
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" 
              style={{
                background: "radial-gradient(circle 120px at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 100%)"
              }}
            />

            {/* Glowing active indicator line over the block */}
            <div 
              className="absolute top-0 left-4 right-4 h-[1px] opacity-0 group-hover:opacity-100 transition-all duration-500 scale-x-75 group-hover:scale-x-100"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)"
              }}
            />

            <h3 
              className="text-3xl sm:text-4xl font-black tracking-tight font-mono mb-2 transition-all duration-300"
              style={{
                background: "linear-gradient(180deg, #ffffff 30%, rgba(255,255,255,0.65) 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              <Counter 
                value={stat.value} 
                prefix={stat.prefix} 
                suffix={stat.suffix} 
                isDecimal={stat.value % 1 !== 0} 
              />
            </h3>
            
            <p 
              className="text-[9px] sm:text-[10px] font-bold uppercase tracking-[0.2em] leading-snug max-w-[160px] text-center transition-colors duration-300"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              <span className="group-hover:text-white/50 transition-colors duration-300">
                {stat.label}
              </span>
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}