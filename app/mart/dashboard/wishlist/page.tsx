"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Heart, ShoppingBag, Trash2 } from "lucide-react";

export default function MartWishlistPage() {
  const router = useRouter();
  const [items, setItems] = useState([
    { id: 1, name: "Odlix Creator Pro Hoodie", price: "₹1,499", stock: "In Stock" },
    { id: 2, name: "Smartwatch Ultra Series 9", price: "₹1,999", stock: "In Stock" }
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
        <h1 className="text-3xl font-black tracking-tight mb-2">Saved Wishlist & Preferences</h1>
        <p className="text-sm text-slate-400 mb-8">Manage saved products and notification settings.</p>

        <div className="space-y-4 mb-12">
           {items.map(i => (
             <div key={i.id} className="p-6 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl flex items-center justify-between">
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-2xl bg-slate-950 border border-slate-800 flex items-center justify-center text-pink-400">
                      <Heart className="h-6 w-6 fill-pink-400/20" />
                   </div>
                   <div>
                      <h3 className="font-bold text-base">{i.name}</h3>
                      <p className="text-xs text-emerald-400 font-bold mt-0.5">{i.price} • <span className="text-slate-400">{i.stock}</span></p>
                   </div>
                </div>
                <div className="flex gap-3">
                   <button onClick={() => alert("Moved to cart!")} className="px-4 py-2 rounded-xl bg-orange-500 text-slate-950 text-xs font-black uppercase tracking-widest hover:bg-orange-400 transition inline-flex items-center gap-1.5">
                      <ShoppingBag className="h-3.5 w-3.5" /> Move to Cart
                   </button>
                   <button onClick={() => setItems(items.filter(x => x.id !== i.id))} className="p-2 rounded-xl bg-slate-950 border border-slate-800 text-red-400 hover:bg-red-500/10 transition">
                      <Trash2 className="h-4 w-4" />
                   </button>
                </div>
             </div>
           ))}
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
           <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Communication & Notification Preferences</h3>
           <div className="space-y-3">
              {["Receive Order SMS Updates", "WhatsApp Delivery Tracking Alerts", "Exclusive Mart Discount Offers via Email"].map((pref, idx) => (
                <label key={pref} className="flex items-center gap-3 cursor-pointer">
                   <input type="checkbox" defaultChecked={idx < 2} className="w-4 h-4 rounded border-slate-700 bg-slate-950 text-orange-500 focus:ring-0 cursor-pointer" />
                   <span className="text-sm font-bold text-slate-300">{pref}</span>
                </label>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
