"use client";

const testimonials = [
  { quote: "Odlix redesigned our website and lead flow. Lead quality improved clearly within 45 days.", name: "Rohit Gupta", role: "Founder, Vedanta Interiors", result: "+212% Qualified Leads" },
  { quote: "Store revamp and ad funnel optimization improved revenue and ROAS strongly.", name: "Niharika Jain", role: "Co-Founder, NexaKart Fashion", result: "2.9x ROAS" },
  { quote: "Full course launch setup delivered fast with strong post-launch support.", name: "Aman Verma", role: "Director, Finpilot Academy", result: "₹14.6L launch cycle" },
];

export function Testimonials() {
  return (
    <section className="py-12 md:py-14 bg-slate-950 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-black uppercase tracking-tight md:text-4xl">Client Proof</h2>
        <div className="mt-8 divide-y divide-white/10">
          {testimonials.map((item) => (
            <div key={item.name} className="py-5">
              <p className="text-sm leading-relaxed text-slate-200">“{item.quote}”</p>
              <p className="mt-2 text-sm font-black text-white">{item.name}</p>
              <p className="text-xs text-slate-400">{item.role} • {item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
