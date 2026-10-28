"use client";

import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";

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
    <section className="relative overflow-hidden py-20 md:py-24 border-b border-border text-foreground">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#dc2626]/10 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#f59e0b]/15 blur-3xl" />
      <div className="absolute right-1/3 top-1/2 h-64 w-64 rounded-full bg-[#4f46e5]/10 blur-3xl" />
      <div className="container relative z-10 mx-auto px-4">
        <div className="text-center mb-12 md:mb-14">
          <h2 className="text-4xl md:text-6xl font-black mb-4 tracking-tighter">Customer Reviews.</h2>
          <p className="text-muted-foreground text-sm md:text-base font-semibold">Trusted by users across India.</p>
        </div>

        <div className="relative max-w-4xl mx-auto overflow-hidden rounded-[2rem] border border-border bg-gradient-to-br from-card to-card/70 p-1 shadow-[0_20px_50px_rgba(15,23,42,0.12)] dark:border-white/10 dark:shadow-[0_30px_80px_rgba(0,0,0,0.25)]">
          <div
            className="flex transition-transform duration-700 ease-out"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {testimonials.map((item) => (
              <article key={item.name} className="min-w-full rounded-[1.85rem] bg-card p-8 md:p-12 dark:bg-card/80 dark:backdrop-blur-sm">
                <div className="mb-6 flex items-center justify-between">
                  <div className="flex items-center gap-1" aria-label="5 star rating">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 md:w-8 md:h-8 text-magenta-500/80" />
                </div>

                <p className="text-foreground/80 text-base md:text-xl font-medium leading-relaxed mb-8 italic">“{item.review}”</p>

                <div className="flex items-center gap-4">
                  <img
                    src={item.image}
                    alt={`${item.name} profile photo`}
                    className="h-14 w-14 md:h-16 md:w-16 rounded-full object-cover border-2 border-white/20 shadow-lg"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-lg md:text-xl font-black tracking-tight">{item.name}</h4>
                    <p className="text-muted-foreground font-semibold text-xs md:text-sm">{item.role}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            onClick={goToPrevious}
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/20 bg-black/25 text-white hover:bg-black/45 transition-colors flex items-center justify-center"
            aria-label="Previous review"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            type="button"
            onClick={goToNext}
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 h-10 w-10 md:h-11 md:w-11 rounded-full border border-white/20 bg-black/25 text-white hover:bg-black/45 transition-colors flex items-center justify-center"
            aria-label="Next review"
          >
            <ChevronRight className="w-5 h-5" />
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
                activeIndex === index ? "w-8 bg-magenta-500" : "w-2.5 bg-foreground/30"
              }`}
              aria-label={`Go to ${item.name} review`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
