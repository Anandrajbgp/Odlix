"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { User, Mail, Lock, ArrowRight, Sparkles } from "lucide-react";

export default function SignupPage() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const response = await fetch("/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });

    const data = (await response.json()) as { message?: string };

    setLoading(false);

    if (!response.ok) {
      setError(data.message ?? "Failed to create account");
      return;
    }

    router.push("/login");
    router.refresh();
  }

  return (
    <main className="min-h-screen bg-[#050b14] text-white flex items-center justify-center px-4 py-20 selection:bg-cyan-400 selection:text-slate-950">
      <section className="w-full max-w-md rounded-[2.5rem] border border-cyan-500/30 bg-slate-900/90 p-8 sm:p-10 shadow-2xl backdrop-blur-xl">
        <div className="flex items-center gap-3 mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 shadow-inner">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-cyan-400">Get Started</span>
            <h1 className="text-2xl font-black tracking-tight text-white">Create account</h1>
          </div>
        </div>
        <p className="text-sm text-slate-400">Set up your secure Odlix profile in seconds.</p>

        <form onSubmit={onSubmit} className="mt-8 space-y-5">
          <div>
            <label htmlFor="name" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Full name</label>
            <div className="relative mt-2">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                id="name"
                type="text"
                autoComplete="name"
                required
                placeholder="John Doe"
                value={name}
                onChange={(event) => setName(event.target.value)}
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
          </div>

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

          <div>
            <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-slate-300">Password</label>
            <div className="relative mt-2">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-slate-500" />
              <input
                id="password"
                type="password"
                autoComplete="new-password"
                required
                placeholder="••••••••"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                className="w-full rounded-2xl border border-cyan-500/20 bg-slate-950/80 px-4 py-3.5 pl-12 text-sm text-white placeholder-slate-600 outline-none transition focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/20"
              />
            </div>
            <p className="mt-2 text-xs text-slate-500">At least 8 characters with letters and numbers.</p>
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
              "Creating account..."
            ) : (
              <>
                Create account <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </form>

        <div className="mt-8 text-center border-t border-cyan-500/10 pt-6">
          <p className="text-sm text-slate-400">
            Already registered?{" "}
            <Link href="/login" className="font-bold text-cyan-400 underline underline-offset-4 hover:text-cyan-300">
              Sign in
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
}
