"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Package, Download, Truck, RotateCcw } from "lucide-react";

export default function MartOrdersPage() {
  const router = useRouter();
  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-5xl">
        <Link href="/mart/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Mart Overview
        </Link>
        <h1 className="text-3xl font-black tracking-tight mb-2">My Orders & History</h1>
        <p className="text-sm text-slate-400 mb-8">Track deliveries, download invoices, or initiate returns.</p>

        <div className="space-y-6">
          {[
            { id: "#ODX-98421", item: "Odlix Creator Pro Hoodie & Earbuds Bundle", date: "18 Aug 2026", status: "Out for Delivery", price: "₹2,499" },
            { id: "#ODX-76120", item: "Smartwatch Ultra Series 9", date: "02 Jul 2026", status: "Delivered", price: "₹1,999" }
          ].map(o => (
            <div key={o.id} className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
               <div className="space-y-2">
                  <div className="flex items-center gap-3">
                     <span className="font-mono text-xs font-bold text-orange-400">{o.id}</span>
                     <span className="text-xs text-slate-500">{o.date}</span>
                  </div>
                  <h3 className="font-black text-lg text-white">{o.item}</h3>
                  <div className="flex items-center gap-3">
                     <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-500/20">
                        <Truck className="h-3 w-3" /> {o.status}
                     </span>
                     <span className="font-black text-emerald-400 text-sm">{o.price}</span>
                  </div>
               </div>

               <div className="flex flex-wrap gap-3">
                  <button onClick={() => alert("Downloading PDF Invoice...")} className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold hover:bg-slate-800 transition inline-flex items-center gap-2">
                     <Download className="h-4 w-4" /> Invoice
                  </button>
                  <button onClick={() => alert("Return / Exchange request initiated")} className="px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-bold hover:bg-slate-800 transition inline-flex items-center gap-2 text-slate-300">
                     <RotateCcw className="h-4 w-4" /> Return
                  </button>
               </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
