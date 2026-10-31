"use client";

import { FormEvent, Suspense, useMemo, useState } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";

function LoginForm() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = useMemo(() => searchParams.get("callbackUrl") ?? "/elearning/dashboard", [searchParams]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setLoading(true);

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl,
    });

    setLoading(false);

    if (!result || result.error) {
      setError("Invalid credentials. Check your email and password.");
      return;
    }

    router.push(result.url ?? callbackUrl);
    router.refresh();
  }

  return (
    <section className="w-full max-w-md rounded-3xl border border-border bg-card p-8 shadow-sm">
      <h1 className="text-3xl font-black tracking-tight">Sign in</h1>
      <p className="mt-2 text-sm text-muted-foreground">Access your Odlix account securely.</p>

      <form onSubmit={onSubmit} className="mt-8 space-y-4">
        <div>
          <label htmlFor="email" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            required
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
          />
        </div>

        <div>
          <label htmlFor="password" className="block text-xs font-bold uppercase tracking-widest text-muted-foreground">Password</label>
          <input
            id="password"
            type="password"
            autoComplete="current-password"
            required
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="mt-2 w-full rounded-xl border border-border bg-background px-4 py-3 text-sm outline-none transition focus:border-cyan-500"
          />
        </div>

        {error ? <p className="text-sm text-red-500">{error}</p> : null}

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-foreground px-4 py-3 text-sm font-black uppercase tracking-widest text-background transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {loading ? "Signing in..." : "Sign in"}
        </button>
      </form>

      <p className="mt-6 text-sm text-muted-foreground">
        No account yet?{" "}
        <Link href="/signup" className="font-bold text-foreground underline underline-offset-4">
          Create one
        </Link>
      </p>
    </section>
  );
}

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-20">
      <Suspense fallback={<div className="text-sm text-muted-foreground">Loading sign in...</div>}>
        <LoginForm />
      </Suspense>
    </main>
  );
}
