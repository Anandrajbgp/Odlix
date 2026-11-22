"use client";

const testimonials = [
  { quote: "Odlix redesigned our website and lead flow. Lead quality improved clearly within 45 days.", name: "Rohit Gupta", role: "Founder, Vedanta Interiors", result: "+212% Qualified Leads" },
  { quote: "Store revamp and ad funnel optimization improved revenue and ROAS strongly.", name: "Niharika Jain", role: "Co-Founder, NexaKart Fashion", result: "2.9x ROAS" },
  { quote: "Full course launch setup delivered fast with strong post-launch support.", name: "Aman Verma", role: "Director, Finpilot Academy", result: "₹14.6L launch cycle" },
];

export function Testimonials() {
  return (
    <section className="relative overflow-hidden py-12 md:py-14 bg-white text-[#0F172A]">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <h2 className="text-2xl font-extrabold tracking-tight text-[#0F172A] md:text-4xl">Client Proof</h2>
        <div className="mt-8 divide-y divide-[#E2E8F0]">
          {testimonials.map((item) => (
            <div key={item.name} className="py-5">
              <p className="text-sm font-semibold leading-relaxed text-[#475569]">“{item.quote}”</p>
              <p className="mt-2 text-sm font-extrabold text-[#0F172A]">{item.name}</p>
              <p className="text-xs font-bold text-[#D97706]">{item.role} • {item.result}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
