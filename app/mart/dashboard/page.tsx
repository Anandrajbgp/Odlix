"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ShoppingBag, Wallet, Heart, MapPin, Package, ArrowRight, ShieldCheck, Truck, Clock } from "lucide-react";

export default function MartDashboardOverview() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const stored = localStorage.getItem("odlix_user");
    if (!stored) {
      router.replace("/login");
    } else {
      try {
        setUser(JSON.parse(stored));
      } catch (e) {}
    }
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-6xl">
        <header className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12 border-b border-orange-500/20 pb-8 min-w-0 overflow-hidden">
          <div className="min-w-0">
            <div className="inline-flex items-center gap-2 rounded-full border border-orange-500/30 bg-orange-500/10 px-4 py-1 text-xs font-black uppercase tracking-widest text-orange-400 mb-3">
              <ShoppingBag className="h-4 w-4" /> Odlix Mart Customer Dashboard
            </div>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-black tracking-tight truncate max-w-full">Welcome back, {user?.name || "Customer"}! 👋</h1>
            <p className="text-sm text-slate-400 mt-1">Manage your orders, store wallet, and delivery preferences.</p>
          </div>
          <Link href="/mart" className="px-5 py-3 rounded-2xl bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-orange-400 transition shadow-lg shrink-0">
            Shop Store
          </Link>
        </header>

        {/* Profile Summary & Rewards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="rounded-3xl border border-orange-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-xl min-w-0 overflow-hidden">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 truncate">Profile Summary</h3>
             <div className="text-lg sm:text-xl font-black text-white truncate max-w-full">{user?.name || "Odlix User"}</div>
             <p className="text-xs text-cyan-400 font-mono mt-1 truncate max-w-full">{user?.email}</p>
             <div className="mt-4 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Loyalty Rewards:</span>
                <span className="font-black text-orange-400 truncate">450 Points (₹45)</span>
             </div>
          </div>

          <div className="rounded-3xl border border-orange-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-xl min-w-0 overflow-hidden">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 truncate">Store Wallet Credit</h3>
             <div className="text-2xl sm:text-3xl font-black text-emerald-400 mb-1 truncate max-w-full">₹1,250</div>
             <p className="text-xs text-slate-500">Available for instant checkout.</p>
             <Link href="/mart/dashboard/wallet" className="inline-block mt-4 text-xs font-bold text-orange-400 hover:underline">Add Funds →</Link>
          </div>

          <div className="rounded-3xl border border-orange-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-xl min-w-0 overflow-hidden">
             <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-2 truncate">Saved Addresses</h3>
             <div className="text-lg sm:text-xl font-black text-white truncate max-w-full">2 Addresses</div>
             <p className="text-xs text-slate-500 mt-1 truncate">Home, Office (Bihar, UP)</p>
             <Link href="/mart/dashboard/address" className="inline-block mt-4 text-xs font-bold text-orange-400 hover:underline">Manage Addresses →</Link>
          </div>
        </div>

        {/* Recent Order Live Tracking */}
        <div className="rounded-3xl border border-orange-500/30 bg-slate-900/90 p-6 sm:p-8 shadow-xl mb-12 min-w-0 overflow-hidden">
           <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg sm:text-xl font-black tracking-tight flex items-center gap-2">
                 <Truck className="h-5 w-5 text-orange-400 shrink-0" /> Recent Order Status
              </h2>
              <Link href="/mart/dashboard/orders" className="text-xs font-bold text-orange-400 hover:underline shrink-0">View All Orders →</Link>
           </div>
           <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 min-w-0">
              <div className="min-w-0">
                 <div className="inline-block px-2.5 py-1 rounded-lg bg-emerald-500/10 text-emerald-400 text-[10px] font-black uppercase tracking-widest mb-2 border border-emerald-500/25">Out for Delivery</div>
                 <h4 className="font-bold text-sm sm:text-base text-white truncate max-w-full">Odlix Creator Pro Hoodie & Earbuds Bundle</h4>
                 <p className="text-xs text-slate-400 mt-1 truncate max-w-full">Order ID: #ODX-98421 • Delivery expected by 7:00 PM today</p>
              </div>
              <Link href="/mart/dashboard/orders" className="px-5 py-2.5 rounded-xl bg-slate-900 border border-slate-700 text-xs font-bold hover:bg-slate-800 transition shrink-0">
                 Live Tracking
              </Link>
           </div>
        </div>

        {/* Quick Links Grid */}
        <h2 className="text-xl font-black tracking-tight mb-6">Quick Shortcuts</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
           {[
             { name: "My Orders", href: "/mart/dashboard/orders", icon: <Package className="h-5 w-5 text-orange-400" /> },
             { name: "Wallet & UPI", href: "/mart/dashboard/wallet", icon: <Wallet className="h-5 w-5 text-emerald-400" /> },
             { name: "Saved Wishlist", href: "/mart/dashboard/wishlist", icon: <Heart className="h-5 w-5 text-pink-400" /> },
             { name: "Help & Support", href: "/mart/dashboard/support", icon: <ShieldCheck className="h-5 w-5 text-cyan-400" /> },
           ].map(q => (
             <Link key={q.name} href={q.href} className="p-6 rounded-2xl border border-slate-800 bg-slate-900/90 hover:border-orange-500/50 transition text-center group min-w-0 overflow-hidden">
                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-slate-800 flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                   {q.icon}
                </div>
                <h4 className="font-bold text-xs sm:text-sm text-white truncate max-w-full">{q.name}</h4>
             </Link>
           ))}
        </div>
      </div>
    </main>
  );
}
