"use client";

import { motion } from "framer-motion";
import { Laptop, PenTool, Cpu, Shirt, Box } from "lucide-react";

const categories = [
  { name: "Electronics", desc: "Developer setups & tech gear", icon: Laptop, count: "42 Items" },
  { name: "Stationery", desc: "Premium notebooks & planners", icon: PenTool, count: "18 Items" },
  { name: "Digital Tools", desc: "UI kits, assets & core licenses", icon: Cpu, count: "125 Items" },
  { name: "Merchandise", desc: "Odlix minimalist apparel", icon: Shirt, count: "29 Items" },
  { name: "Lifestyle Products", desc: "Everyday workspace upgrades", icon: Box, count: "34 Items" },
];

export default function MartCategories() {
  return (
    <section id="categories" className="py-20 bg-black px-4 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-red-500">Classifications</span>
          <h2 className="text-2xl md:text-4xl font-extrabold text-white mt-2">Shop by Product Cluster</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {categories.map((cat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.02, borderColor: "#d97706" }}
              className="p-6 rounded-2xl bg-neutral-900/40 border border-neutral-800/80 transition-all group cursor-pointer"
            >
              <div className="p-3 rounded-xl bg-red-500/10 text-red-400 w-fit group-hover:bg-amber-500/10 group-hover:text-amber-400 transition">
                <cat.icon className="w-5 h-5" />
              </div>
              <h3 className="text-base font-bold text-white mt-4">{cat.name}</h3>
              <p className="text-xs text-neutral-500 mt-1">{cat.desc}</p>
              <span className="text-[10px] inline-block font-semibold bg-neutral-800 text-neutral-400 px-2 py-0.5 rounded-md mt-4">
                {cat.count}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}