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

      setSuccessMsg("OTP sent to your email! (If Supabase keys are not set, enter any 6-digit code like 123456)");
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
      router.push(callbackUrl);
      router.refresh();
    } catch (err: any) {
      setLoading(false);
      setError(err.message || "Verification failed");
    }
  }

  return (
    <div className="w-full max-w-md rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
          <ShieldCheck className="h-6 w-6" />
        </div>
        <div>
          <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Supabase OTP Auth</span>
          <h1 className="text-2xl font-black tracking-tight text-white">
            {step === "email" ? "Sign in with Email" : "Enter OTP Code"}
          </h1>
        </div>
      </div>
      <p className="text-sm text-slate-400">
        {step === "email"
          ? "Enter your email to receive a secure login OTP."
          : `We've sent a 6-digit code to ${email}.`}
      </p>

      {step === "email" ? (
        <form onSubmit={handleSendOtp} className="mt-8 space-y-5">
          <div>
            <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Email address</label>
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
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          ) : null}

          {successMsg ? (
            <div className="rounded-xl border border-cyan-500/30 bg-cyan-500/10 p-3 text-sm text-cyan-300">
              {successMsg}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Sending OTP..."
            ) : (
              <>
                Send OTP <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>
      ) : (
        <form onSubmit={handleVerifyOtp} className="mt-8 space-y-5">
          <div>
            <label htmlFor="otp" className="block text-xs font-bold uppercase tracking-widest text-slate-300">6-Digit OTP</label>
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
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-lg font-mono tracking-widest text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

          {error ? (
            <div className="rounded-xl border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-400">
              {error}
            </div>
          ) : null}

          <button
            type="submit"
            disabled={loading}
            className="group relative flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-500 to-teal-400 px-6 py-4 text-sm font-black uppercase tracking-widest text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:opacity-95 hover:shadow-cyan-500/40 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {loading ? (
              "Verifying..."
            ) : (
              <>
                Verify & Login <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
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
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[#050b14] text-white flex items-center justify-center px-4 py-20 selection:bg-cyan-400 selection:text-slate-950">
      <Suspense fallback={<div className="text-sm text-cyan-400 animate-pulse">Loading sign in...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
