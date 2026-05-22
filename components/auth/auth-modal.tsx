"use client"

import { useMemo, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, Mail, Lock, User, Eye, EyeOff, Layers } from "lucide-react"
import { createClient } from "@/utils/supabase/client" // 🌟 Supabase client import kiya

interface AuthModalProps {
  isOpen: boolean
  onClose: () => void
  initialView?: "login" | "signup"
}

export function AuthModal({ isOpen, onClose, initialView = "login" }: AuthModalProps) {
  const [view, setView] = useState<"login" | "signup">(initialView)
  const [showPassword, setShowPassword] = useState(false)

  const [fullName, setFullName] = useState("")
  const [identifier, setIdentifier] = useState("")
  const [password, setPassword] = useState("") // OTP flow me optional rahega

  // OTP step states
  const [otpStep, setOtpStep] = useState<"request" | "verify">("request")
  const [otp, setOtp] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  // 🌟 Initialize Supabase Browser Client
  const supabase = createClient()

  // Detect input type: Email hai ya Phone
  const isEmail = useMemo(() => {
    return identifier.includes("@")
  }, [identifier])

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError(null)

    const cleanIdentifier = identifier.trim()
    if (!cleanIdentifier) {
      setError("Email Node or Phone Node is required")
      return
    }

    try {
      setLoading(true)

      // ---------------------------------------------
      // STAGE 1: OTP REQUEST (Send OTP)
      // ---------------------------------------------
      if (otpStep === "request") {
        const options: any = isEmail
          ? { email: cleanIdentifier, options: { shouldCreateUser: true } }
          : { phone: cleanIdentifier.startsWith("+") ? cleanIdentifier : `+91${cleanIdentifier}` } // India code auto append logic

        // Direct Supabase engine call (No custom API needed!)
        const { error: supabaseError } = await supabase.auth.signInWithOtp(options)

        if (supabaseError) {
          setError(`OTP generation failed: ${supabaseError.message}`)
          return
        }

        setOtpStep("verify")
        return
      }

      // ---------------------------------------------
      // STAGE 2: OTP VERIFY (Validate Token)
      // ---------------------------------------------
      const cleanOtp = otp.trim()
      if (!cleanOtp) {
        setError("OTP Token required")
        return
      }

      const verifyOptions = {
        token: cleanOtp,
        type: isEmail ? ("email" as const) : ("sms" as const),
        ...(isEmail ? { email: cleanIdentifier } : { phone: cleanIdentifier.startsWith("+") ? cleanIdentifier : `+91${cleanIdentifier}` })
      }

      const { data, error: verifyError } = await supabase.auth.verifyOtp(verifyOptions)

      if (verifyError) {
        setError(`Cryptographic verification failed: ${verifyError.message}`)
        return
      }

      // 🌟 IF SIGNUP: Agar user naya hai aur apna naam set karna chahta hai
      if (view === "signup" && fullName.trim() && data.user) {
        await supabase.auth.updateUser({
          data: { full_name: fullName.trim() }
        })
      }

      // Successful Auth Handshake
      onClose()
      
      // Browser cookies up-to-date hone ke liye reload ya hard redirect best hai dashboard par
      window.location.href = "/dashboard"
      
    } catch (err: any) {
      setError("An unexpected network fault occurred.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", duration: 0.5 }}
            className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/10 bg-[#001233] p-8 text-white shadow-2xl shadow-purple-950/40"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute right-5 top-5 text-slate-400 hover:text-white transition-colors"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Logo Group */}
            <div className="flex flex-col items-center space-y-2 mb-6 text-center">
              <div className="p-3 bg-purple-600/10 border border-purple-500/20 rounded-2xl w-fit">
                <Layers className="h-6 w-6 text-purple-400 stroke-[2.5]" />
              </div>
              <h3 className="text-xl font-black tracking-tight">
                {view === "login" ? "Welcome Back Node" : "Initialize Master Account"}
              </h3>
              <p className="text-xs text-slate-400 max-w-[280px]">
                {view === "login" ? "Access your connected 6 universes instantly." : "Create a singular cryptographic identity loop."}
              </p>
            </div>

            <form onSubmit={onSubmit} className="space-y-4">
              {view === "signup" && otpStep === "request" && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Full Name</label>
                  <div className="relative">
                    <User className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      type="text"
                      placeholder="John Doe"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium transition-all"
                    />
                  </div>
                </div>
              )}

              {otpStep === "request" && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">
                    Email Node / Phone Node
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
                    <input
                      value={identifier}
                      onChange={(e) => setIdentifier(e.target.value)}
                      type="text"
                      placeholder="name@domain.com or 9876543210"
                      className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-3 text-sm text-white focus:outline-none focus:border-purple-500 font-medium transition-all"
                    />
                  </div>
                </div>
              )}

              {/* OTP Input Field */}
              {otpStep === "verify" && (
                <div className="space-y-1.5">
                  <label className="text-[11px] font-bold text-slate-400 uppercase tracking-wider pl-1">Enter 6-Digit OTP Token</label>
                  <input
                    inputMode="numeric"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value.replace(/\D/g, "").slice(0, 6))}
                    placeholder="X X X X X X"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-lg text-center tracking-[8px] text-white focus:outline-none focus:border-purple-500 font-bold transition-all"
                  />
                  <p className="text-[10px] text-slate-400 text-center mt-1">Sent securely to {identifier}</p>
                </div>
              )}

              {error && <div className="text-xs text-rose-400 font-semibold bg-rose-500/10 border border-rose-500/20 p-2.5 rounded-xl">{error}</div>}

              <button
                type="submit"
                disabled={loading}
                className="w-full mt-2 py-3 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-500 hover:to-pink-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-purple-900/20 disabled:opacity-60"
              >
                {loading
                  ? "Synchronizing Node..."
                  : otpStep === "request"
                    ? "Generate Secure OTP"
                    : view === "login"
                      ? "Verify & Open Dashboard"
                      : "Verify & Create Account"}
              </button>

              {otpStep === "verify" && (
                <button
                  type="button"
                  onClick={() => {
                    setOtpStep("request")
                    setOtp("")
                    setError(null)
                  }}
                  className="w-full text-[11px] text-slate-400 hover:text-white transition-colors pt-1"
                >
                  Resend OTP / Change Connection Node
                </button>
              )}
            </form>

            {otpStep === "request" && (
              <div className="mt-6 text-center text-xs text-slate-400">
                {view === "login" ? (
                  <p>
                    New to the network?{" "}
                    <button
                      onClick={() => {
                        setView("signup")
                        setOtpStep("request")
                        setOtp("")
                        setError(null)
                      }}
                      className="text-purple-400 font-bold hover:underline"
                    >
                      Initialize Setup
                    </button>
                  </p>
                ) : (
                  <p>
                    Already registered?{" "}
                    <button
                      onClick={() => {
                        setView("login")
                        setOtpStep("request")
                        setOtp("")
                        setError(null)
                      }}
                      className="text-purple-400 font-bold hover:underline"
                    >
                      Access Core Node
                    </button>
                  </p>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}