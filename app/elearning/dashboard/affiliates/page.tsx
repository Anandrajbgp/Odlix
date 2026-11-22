"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Users } from "lucide-react";

export default function AffiliatesPage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Link href="/elearning/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyan-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <h1 className="text-3xl font-black tracking-tight mb-2">Affiliates & Partners</h1>
        <p className="text-sm text-slate-400 mb-8">Manage your referral network and commission links.</p>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
          <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-2">Your Referral Link</h3>
          <div className="flex gap-3 mb-6">
             <input type="text" readOnly value="https://odlix.com/ref/anand" className="w-full rounded-2xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-cyan-400 outline-none" />
             <button onClick={() => alert("Copied!")} className="px-6 py-3 rounded-2xl bg-cyan-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition">Copy</button>
          </div>
          <p className="text-xs text-slate-500">Earn up to 40% commission on every active enrollment through your link.</p>
        </div>
      </div>
    </main>
  );
}
