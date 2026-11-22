"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Wallet } from "lucide-react";

export default function PaymentPage() {
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Payment Section & Payout Hub</h1>
        <p className="text-sm text-slate-400 mb-8">Configure your bank account or UPI for weekly payouts.</p>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4">
          <div>
            <label className="block text-xs font-bold uppercase tracking-widest text-slate-400 mb-2">UPI ID / Bank Details</label>
            <input type="text" placeholder="username@upi" className="w-full rounded-2xl bg-slate-950 border border-slate-800 px-4 py-3.5 text-sm text-white outline-none focus:border-cyan-400" />
          </div>
          <button className="px-6 py-3.5 rounded-2xl bg-cyan-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-cyan-400 transition">Save Payment Info</button>
        </div>
      </div>
    </main>
  );
}
