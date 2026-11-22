"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Wallet, CreditCard, Gift, Plus } from "lucide-react";

export default function MartWalletPage() {
  const router = useRouter();
  const [giftCode, setGiftCode] = useState("");

  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Link href="/mart/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Mart Overview
        </Link>
        <h1 className="text-3xl font-black tracking-tight mb-2">Payments & Store Wallet</h1>
        <p className="text-sm text-slate-400 mb-8">Manage saved cards, UPI IDs, store credits, and gift cards.</p>

        <div className="space-y-6">
          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
             <div className="flex justify-between items-center mb-4">
                <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Store Wallet Balance</h3>
                <Wallet className="h-6 w-6 text-emerald-400" />
             </div>
             <div className="text-4xl font-black text-emerald-400 mb-4">₹1,250</div>
             <button onClick={() => alert("Add funds gateway opened")} className="px-5 py-2.5 rounded-xl bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-orange-400 transition inline-flex items-center gap-2">
                <Plus className="h-4 w-4" /> Add Funds
             </button>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Saved Cards & UPI</h3>
             <div className="space-y-3">
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
                   <div className="flex items-center gap-3">
                      <CreditCard className="h-5 w-5 text-orange-400" />
                      <div>
                         <div className="font-bold text-sm">HDFC Bank Credit Card (•••• 4821)</div>
                         <div className="text-[10px] text-slate-500 uppercase tracking-widest">Expires 12/28</div>
                      </div>
                   </div>
                   <span className="text-xs text-emerald-400 font-bold">Default</span>
                </div>
                <div className="flex items-center justify-between p-4 rounded-2xl bg-slate-950 border border-slate-800">
                   <div className="flex items-center gap-3">
                      <Wallet className="h-5 w-5 text-cyan-400" />
                      <div>
                         <div className="font-bold text-sm">Google Pay UPI (anand@oksbi)</div>
                      </div>
                   </div>
                   <button onClick={() => alert("UPI removed")} className="text-xs text-red-400 font-bold hover:underline">Remove</button>
                </div>
             </div>
          </div>

          <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-4">Redeem Gift Card</h3>
             <div className="flex gap-3">
                <input type="text" placeholder="Enter 16-digit gift code" value={giftCode} onChange={(e) => setGiftCode(e.target.value)} className="w-full rounded-2xl bg-slate-950 border border-slate-800 px-4 py-3 text-sm text-white outline-none focus:border-orange-400" />
                <button onClick={() => alert("Invalid or expired gift code")} className="px-6 py-3 rounded-2xl bg-slate-800 hover:bg-slate-700 font-black text-xs uppercase tracking-widest transition">Redeem</button>
             </div>
          </div>
        </div>
      </div>
    </main>
  );
}
