"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MapPin, Plus, Trash2 } from "lucide-react";

export default function MartAddressPage() {
  const router = useRouter();
  const [addresses, setAddresses] = useState([
    { id: 1, type: "Home", name: "Anand Raj", address: "Main Road, Near Temple, Bhagalpur, Bihar - 812001", phone: "+91 6205901345" },
    { id: 2, type: "Office", name: "Anand Raj", address: "Tech Park, Sector 5, Noida, Uttar Pradesh - 201301", phone: "+91 6205901345" }
  ]);

  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Link href="/mart/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Mart Overview
        </Link>
        <div className="flex justify-between items-center mb-8">
           <div>
              <h1 className="text-3xl font-black tracking-tight mb-1">Manage Addresses</h1>
              <p className="text-sm text-slate-400">Save and edit multiple delivery addresses.</p>
           </div>
           <button onClick={() => alert("Add address modal opened")} className="px-4 py-2.5 rounded-xl bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-orange-400 transition inline-flex items-center gap-2">
              <Plus className="h-4 w-4" /> Add Address
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
           {addresses.map(a => (
             <div key={a.id} className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex flex-col justify-between">
                <div>
                   <span className="px-2.5 py-1 rounded-md bg-orange-500/10 text-orange-400 text-[10px] font-black uppercase tracking-widest border border-orange-500/25 mb-3 inline-block">{a.type}</span>
                   <h3 className="font-black text-lg text-white">{a.name}</h3>
                   <p className="text-xs text-slate-400 mt-2 leading-relaxed">{a.address}</p>
                   <p className="text-xs text-cyan-400 font-mono mt-3">Phone: {a.phone}</p>
                </div>
                <div className="mt-6 pt-4 border-t border-slate-800 flex justify-end gap-3">
                   <button onClick={() => setAddresses(addresses.filter(x => x.id !== a.id))} className="text-xs text-red-400 font-bold hover:underline inline-flex items-center gap-1">
                      <Trash2 className="h-3.5 w-3.5" /> Delete
                   </button>
                </div>
             </div>
           ))}
        </div>
      </div>
    </main>
  );
}
