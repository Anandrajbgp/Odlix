"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { Mail, KeyRound, ArrowRight, ShieldCheck, RefreshCw } from "lucide-react";

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
        body: JSON.stringify({ email }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Failed to send OTP");
        return;
      }

      setSuccessMsg("Secure login OTP sent to your email successfully!");
      setStep("otp");
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Network error");
    }
  }

  async function handleVerifyOtp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    try {
      const res = await fetch("/api/auth/otp/verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, token: otp }),
      });
      const data = await res.json();

      setLoading(false);
      if (!res.ok) {
        setError(data.message || "Invalid OTP");
        return;
      }

      localStorage.setItem("odlix_user", JSON.stringify(data.user));
      const targetUrl = data.user?.role === "ADMIN" ? "/admin/dashboard" : callbackUrl;
      router.push(targetUrl);
      router.refresh();
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  }

  return (
    <div className="w-full max-w-md rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 sm:p-12 shadow-2xl backdrop-blur-2xl relative z-10">
      <div className="flex items-center gap-4 mb-8">
        <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
          <ShieldCheck className="h-7 w-7" />
        </div>
        <div>
          <div className="inline-flex items-center gap-1.5 text-[10px] font-black uppercase tracking-[0.25em] text-cyan-400 mb-1">
            Secure Portal
          </div>
          <h1 className="text-2xl sm:text-3xl font-black tracking-tight text-white">
            {step === "email" ? "Sign In" : "Enter OTP Code"}
          </h1>
        </div>
      </div>
      <p className="text-sm text-slate-400 leading-relaxed mb-8">
        {step === "email"
          ? "Enter your registered email address to receive your secure login OTP."
          : `We have sent a 6-digit code to ${email}.`}
      </p>

      {step === "email" ? (
        <form onSubmit={handleSendOtp} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Email Address</label>
            <div className="relative mt-2">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                id="email"
                type="email"
                autoComplete="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-4 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400 font-medium">
              {error}
            </div>
          ) : null}

          {successMsg ? (
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-4 text-sm text-cyan-300 font-medium">
              {successMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Sending OTP..."
            ) : (
              <>
                Send Login OTP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="space-y-6">
          <div>
            <label htmlFor="otp" className="block text-xs font-bold uppercase tracking-widest text-slate-300">6-Digit Login OTP</label>
            <div className="relative mt-2">
              <KeyRound className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                id="otp"
                type="text"
                maxLength={6}
                required
                placeholder="123456"
                value={otp}
                onChange={(event) => setOtp(event.target.value)}
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-4 pl-12 text-xl font-mono tracking-[0.3em] text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-400 font-medium">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Verifying..."
            ) : (
              <>
                Verify & Sign In <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>

          <button
            type="button"
            onClick={() => setStep("email")}
            className="flex w-full items-center justify-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-400 hover:text-cyan-400 transition"
          >
            <RefreshCw className="h-3.5 w-3.5" /> Use different email / Resend OTP
          </button>
        </form>
      )}

      <div className="mt-8 text-center border-t border-cyan-500/10 pt-6">
        <p className="text-sm text-slate-400">
          New to Odlix?{" "}
          <Link href="/signup" className="font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
            Create an account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white flex items-center justify-center px-4 py-20 selection:bg-cyan-400 selection:text-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <Suspense fallback={<div className="text-sm text-cyan-400 animate-pulse">Loading sign in...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
