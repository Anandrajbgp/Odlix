"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, KeyRound, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2, X } from "lucide-react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = useMemo(() => searchParams.get("callbackUrl") ?? "/elearning/dashboard", [searchParams]);

  const [email, setEmail] = useState("");
  const [otp, setOtp] = useState("");
  const [step, setStep] = useState<"email" | "otp">("email");
  const [error, setError] = useState<string | null>(null);
  const [successMsg, setSuccessMsg] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleSendOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setSuccessMsg(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, isLogin: true }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Failed to send OTP");
        return;
      }

      setSuccessMsg("6-digit verification code sent to your email!");
      setStep("otp");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  }

  async function verifyOtpCode(tokenToVerify: string) {
    if (tokenToVerify.length !== 6) return;
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: tokenToVerify, isLogin: true }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Invalid OTP code");
        return;
      }

      if (!data.user) {
        setError("User record missing");
        return;
      }

      localStorage.setItem("odlix_user", JSON.stringify(data.user));
      setSuccessMsg("🎉 Login Successful! Redirecting...");

      const targetUrl = data.user?.role === "ADMIN" ? "/admin/dashboard" : callbackUrl;
      setTimeout(() => {
        router.push(targetUrl);
        router.refresh();
      }, 1000);
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  }

  return (
    <div className="w-full max-w-md rounded-[2.5rem] border border-slate-700/80 bg-slate-900/95 p-8 sm:p-10 shadow-2xl backdrop-blur-2xl relative z-10 mx-4 text-white">
      {/* Close button */}
      <Link href="/" className="absolute top-6 right-6 p-2 rounded-full bg-white/5 hover:bg-white/15 text-slate-400 hover:text-white transition">
        <X className="h-4 w-4" />
      </Link>

      <div className="flex flex-col items-center text-center mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white/10 border border-white/15 text-cyan-400 shadow-inner mb-4">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <h1 className="text-2xl font-black tracking-tight text-white mb-2">Sign in with email</h1>
        <p className="text-xs text-slate-400 max-w-xs leading-relaxed">
          Access your Odlix digital ecosystem securely with instant OTP verification.
        </p>
      </div>

      <form onSubmit={step === "email" ? handleSendOtp : (e) => { e.preventDefault(); verifyOtpCode(otp); }} className="space-y-4">
        <div>
          <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1.5">Email address</label>
          <div className="relative">
            <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
            <input
              type="email"
              required
              disabled={step === "otp"}
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-2xl border border-slate-700 bg-slate-950/80 px-4 py-3.5 pl-11 text-xs text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20 disabled:opacity-60"
            />
          </div>
        </div>

        {step === "otp" && (
          <div>
            <div className="flex justify-between items-center mb-1.5">
              <label className="block text-[10px] font-bold uppercase tracking-widest text-slate-400">Enter 6-Digit OTP (Replacing password)</label>
              <button type="button" onClick={() => setStep("email")} className="text-[10px] font-bold text-cyan-400 hover:underline">Change email</button>
            </div>
            <div className="relative">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                type="text"
                maxLength={6}
                required
                autoFocus
                placeholder="123456"
                value={otp}
                onChange={(e) => {
                  const val = e.target.value.replace(/\D/g, "").slice(0, 6);
                  setOtp(val);
                  if (val.length === 6) verifyOtpCode(val);
                }}
                className="w-full rounded-2xl border border-cyan-500/40 bg-slate-950/90 px-4 py-3.5 pl-11 text-base font-mono tracking-[0.3em] text-cyan-300 placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>
        )}

        {error ? (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400 font-medium">
            {error}
          </div>
        ) : null}

        {successMsg ? (
          <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-300 font-medium flex items-center gap-2">
            <CheckCircle2 className="h-4 w-4 shrink-0" /> {successMsg}
          </div>
        ) : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-2xl bg-gradient-to-r from-slate-100 to-slate-200 text-slate-950 py-4 text-xs font-black uppercase tracking-widest shadow-lg transition hover:opacity-90 disabled:opacity-50 mt-2"
        >
          {loading ? "Processing..." : step === "email" ? "Send Email / OTP" : "Verify & Sign In"}
        </button>
      </form>

      <div className="mt-6 text-center border-t border-slate-800 pt-6">
        <p className="text-xs text-slate-400">
          New to Odlix?{" "}
          <Link href="/signup" className="font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#030712] text-white flex items-center justify-center px-4 py-12 selection:bg-cyan-400 selection:text-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <Suspense fallback={<div className="text-xs text-cyan-400 animate-pulse">Loading sign in...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
