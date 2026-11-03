"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, MessageSquare, Phone, Mail, HelpCircle } from "lucide-react";

export default function MartSupportPage() {
  const router = useRouter();
  const [ticketMsg, setTicketMsg] = useState("");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem("odlix_user")) router.replace("/login");
  }, [router]);

  return (
    <main className="min-h-screen bg-[#050b14] text-white p-6 md:p-12">
      <div className="container mx-auto max-w-4xl">
        <Link href="/mart/dashboard" className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-400 hover:underline mb-4">
          <ArrowLeft className="h-4 w-4" /> Back to Mart Overview
        </Link>
        <h1 className="text-3xl font-black tracking-tight mb-2">Help & Support</h1>
        <p className="text-sm text-slate-400 mb-8">Get instant assistance, raise tickets, or browse FAQs.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
           <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <MessageSquare className="h-8 w-8 text-orange-400 mb-4" />
              <h3 className="font-bold text-lg mb-1">Live Chatbot Support</h3>
              <p className="text-xs text-slate-400 mb-6">Chat with Odlix AI assistant for instant order queries.</p>
              <button onClick={() => alert("AI Chatbot opened")} className="px-4 py-2.5 rounded-xl bg-orange-500 text-slate-950 text-xs font-black uppercase tracking-widest hover:bg-orange-400 transition">Start Chat</button>
           </div>
           <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
              <Phone className="h-8 w-8 text-emerald-400 mb-4" />
              <h3 className="font-bold text-lg mb-1">Priority Helpline</h3>
              <p className="text-xs text-slate-400 mb-6">+91 7372891228 (Available 24/7)</p>
              <a href="tel:+917372891228" className="inline-block px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-xs font-black uppercase tracking-widest hover:bg-slate-800 transition">Call Support</a>
           </div>
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl mb-12">
           <h3 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-4">Raise a Support Ticket</h3>
           {submitted ? (
             <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-400 text-sm font-bold">
               Ticket submitted successfully! Our support desk will reply within 2 hours.
             </div>
           ) : (
             <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="space-y-4">
                <textarea rows={3} required placeholder="Describe your issue regarding order or delivery..." value={ticketMsg} onChange={(e) => setTicketMsg(e.target.value)} className="w-full rounded-2xl bg-slate-950 border border-slate-800 p-4 text-sm text-white outline-none focus:border-orange-400" />
                <button type="submit" className="px-6 py-3 rounded-2xl bg-orange-500 text-slate-950 font-black text-xs uppercase tracking-widest hover:bg-orange-400 transition">Submit Ticket</button>
             </form>
           )}
        </div>

        <div className="p-8 rounded-3xl bg-slate-900/90 border border-slate-800 shadow-xl">
           <h3 className="text-lg font-black mb-6 flex items-center gap-2">
              <HelpCircle className="h-5 w-5 text-orange-400" /> Frequently Asked Questions (FAQs)
           </h3>
           <div className="space-y-4 text-sm">
              {[
                { q: "How do I track my Mart order?", a: "Go to My Orders section to view live courier tracking and delivery status." },
                { q: "What is the refund policy for returned items?", a: "Refunds are processed to your Store Wallet instantly or bank account within 3 business days upon pickup." },
              ].map(faq => (
                <div key={faq.q} className="p-4 rounded-2xl bg-slate-950 border border-slate-800">
                   <h4 className="font-bold text-white mb-1">{faq.q}</h4>
                   <p className="text-xs text-slate-400">{faq.a}</p>
                </div>
              ))}
           </div>
        </div>
      </div>
    </main>
  );
}
