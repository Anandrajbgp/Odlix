"use client";

import { motion } from "framer-motion";

const indicators = [
  { value: "250+", metric: "Projects Delivered" },
  { value: "120+", metric: "Happy Clients" },
  { value: "5+", metric: "Years Experience" },
  { value: "24/7", metric: "Active Support" }
];

export function AgencyStats() {
  return (
    <section className="py-16 bg-[#111111] border-y border-yellow-500/10 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {indicators.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="text-center space-y-1"
            >
              <div className="text-4xl sm:text-5xl font-black text-yellow-500 font-mono tracking-tight">
                {item.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-400 font-semibold tracking-wide uppercase">
                {item.metric}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}