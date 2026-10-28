"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star, MessageSquare } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  review: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Rohan Mehta",
    role: "Small Business Owner, Mumbai",
    review: "Managing learning, trading, and commerce from one Odlix account has saved me hours every week.",
    image: "https://plus.unsplash.com/premium_photo-1682089869602-2ec199cc501a?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Ananya Sharma",
    role: "Freelance Designer, Delhi",
    review: "The agency and app ecosystem helped me find clients and deliver work faster than any other platform.",
    image: "https://plus.unsplash.com/premium_photo-1682089859052-6e9e4463b18c?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Vikram Reddy",
    role: "Software Engineer, Hyderabad",
    review: "Clean dashboards, smooth performance, and reliable support make the whole ecosystem feel premium.",
    image: "https://plus.unsplash.com/premium_photo-1770480250069-7e5f063de645?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Meera Iyer",
    role: "Teacher, Chennai",
    review: "I use the learning and competition tools with my students, and the experience is simple and motivating.",
    image: "https://plus.unsplash.com/premium_photo-1770494464374-e7d77aee8594?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Arjun Nair",
    role: "Startup Founder, Bengaluru",
    review: "One identity across every service means my team spends less time switching tools and more time building.",
    image: "https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Fatima Sheikh",
    role: "Homemaker, Ahmedabad",
    review: "Shopping on Mart and tracking orders is effortless, and payments feel safe and transparent.",
    image: "https://plus.unsplash.com/premium_photo-1682096111256-e020381ec730?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Sanjana Rao",
    role: "Content Creator, Pune",
    review: "Useful websites and Telegram bots in one place keep my workflow organized and always accessible.",
    image: "https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?auto=format&fit=crop&w=240&q=80",
  },
  {
    name: "Sanjay Gupta",
    role: "Retail Shop Owner, Kanpur",
    review: "From trading insights to daily business tools, Odlix feels like a complete digital ecosystem for everyone.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=240&q=80",
  },
];

export function Testimonials() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const timerId: ReturnType<typeof setInterval> = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);

    return () => {
      clearInterval(timerId);
    };
  }, []);

  const goToPrevious = (): void => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = (): void => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="relative overflow-hidden py-16 md:py-24 bg-[#050b14] text-white">
      <div className="container relative z-10 mx-auto px-4 max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-cyan-500/10 px-4 py-1.5 text-xs font-extrabold uppercase tracking-widest text-cyan-300 border border-cyan-500/30 backdrop-blur-md mb-3">
            <MessageSquare className="h-4 w-4 text-cyan-400" />
            User Feedback
          </div>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight">
            Customer <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-300">Reviews</span>
          </h2>
          <p className="text-slate-400 text-sm md:text-base font-medium mt-2">Trusted by thousands of users across India.</p>
        </div>

        {/* YouTube Premium styled cyan-teal gradient container */}
        <div className="relative overflow-hidden rounded-[2.2rem] bg-[linear-gradient(108deg,#00a3da_0%,#00d4ca_50%,#00f5c4_100%)] p-8 md:p-12 text-[#0f1d26] shadow-[0_25px_70px_rgba(0,212,202,0.3)] border border-white/40">
          <div className="absolute inset-0 bg-[linear-gradient(125deg,rgba(255,255,255,0.38)_0%,rgba(255,255,255,0.12)_40%,transparent_65%)] pointer-events-none" />

          <div
            className="flex transition-transform duration-700 ease-out relative z-10"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article key={item.name} className="min-w-full rounded-3xl bg-[#0f1d26]/10 backdrop-blur-md p-6 sm:p-10 text-[#0f1d26] border border-[#0f1d26]/15">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-5 h-5 text-amber-900 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 text-[#0f1d26]/60" />
                </div>

                <p className="text-[#0f1d26] text-lg md:text-2xl font-black leading-relaxed mb-8 italic">
                  “{item.review}”
                </p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={`${item.name} profile photo`}
                    className="h-14 w-14 rounded-full object-cover border-2 border-[#0f1d26]/20 shadow-md"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-black text-[#0f1d26] tracking-tight">{item.name}</h4>
                    <p className="text-[#0f1d26] font-extrabold text-xs md:text-sm">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-[#0f1d26]/20 bg-[#0f1d26]/15 text-[#0f1d26] hover:bg-[#0f1d26]/30 transition-colors flex items-center justify-center backdrop-blur-md z-20 active:scale-90"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 h-11 w-11 rounded-full border border-[#0f1d26]/20 bg-[#0f1d26]/15 text-[#0f1d26] hover:bg-[#0f1d26]/30 transition-colors flex items-center justify-center backdrop-blur-md z-20 active:scale-90"
            aria-label="Next review"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => {
                setActiveIndex(index);
              }}
              className={`h-2.5 rounded-full transition-all ${
                activeIndex === index ? "w-8 bg-cyan-400" : "w-2.5 bg-slate-800"
              }`}
              aria-label={`Go to ${item.name} review`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
