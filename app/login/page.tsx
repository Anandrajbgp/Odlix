"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, KeyRound, ArrowRight, ShieldCheck, RefreshCw, CheckCircle2 } from "lucide-react";

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

      setSuccessMsg("Secure 6-digit OTP code sent successfully!");
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
        setError("Authentication successful, but user record was missing.");
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

  async function handleVerifyOtpSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    await verifyOtpCode(otp);
  }

  return (
    <div className="w-full max-w-sm rounded-[2rem] border border-cyan-500/30 bg-slate-900/95 p-6 sm:p-8 shadow-2xl backdrop-blur-2xl relative z-10">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-cyan-400">Secure Portal</span>
          <h1 className="text-xl sm:text-2xl font-black tracking-tight text-white">
            {step === "email" ? "Sign In" : "Enter OTP"}
          </h1>
        </div>
      </div>
      <p className="text-xs text-slate-400 leading-relaxed mb-6">
        {step === "email"
          ? "Enter your email address to receive your secure 6-digit login OTP code."
          : `Enter the 6-digit code sent to ${email}.`}
      </p>

      {step === "email" ? (
        <form onSubmit={handleSendOtp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-[10px] font-bold uppercase tracking-widest text-slate-300">Email Address</label>
            <div className="relative mt-1.5">
              <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 px-3.5 py-3 pl-11 text-xs text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

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
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Sending OTP..."
            ) : (
              <>
                Send Login OTP <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtpSubmit} className="space-y-4">
          {successMsg ? (
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-xs text-cyan-300 font-medium flex items-center gap-2">
              <CheckCircle2 className="h-4 w-4 shrink-0" /> {successMsg}
            </div>
          ) : null}

          <div>
            <label htmlFor="otp" className="block text-[10px] font-bold uppercase tracking-widest text-slate-300">6-Digit OTP Code (Auto-Verifies)</label>
            <div className="relative mt-1.5">
              <KeyRound className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-500" />
              <input
                id="otp"
                type="text"
                maxLength={6}
                required
                autoFocus
                placeholder="123456"
                value={otp}
                onChange={(event) => {
                  const val = event.target.value.replace(/\D/g, "").slice(0, 6);
                  setOtp(val);
                  if (val.length === 6) {
                    verifyOtpCode(val);
                  }
                }}
                className="w-full rounded-xl border border-cyan-500/20 bg-slate-950/80 px-3.5 py-3.5 pl-11 text-lg font-mono tracking-[0.25em] text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-xs text-red-400 font-medium">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-teal-400 px-5 py-3 text-xs font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Verifying Code..."
            ) : (
              <>
                Verify & Sign In <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep("email")}
            className="flex w-full items-center justify-center gap-1.5 text-[11px] font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition pt-1"
          >
            <RefreshCw className="h-3 w-3" /> Change email / Resend OTP
          </button>
        </form>
      )}

      <div className="mt-6 text-center border-t border-cyan-500/10 pt-4">
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
    <main className="min-h-screen bg-[#050b14] text-white flex items-center justify-center px-4 py-20 selection:bg-cyan-400 selection:text-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none" />
      <Suspense fallback={<div className="text-xs text-cyan-400 animate-pulse">Loading sign in...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
