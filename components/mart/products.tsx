"use client";

import { motion } from "framer-motion";
import { Star, ShoppingCart, Heart } from "lucide-react";

const products = [
  { id: 1, title: "Odlix 'Cyber-Punk' Mech Keyboard", price: "4,499", rating: 4.9, image: "⌨️", tag: "Hot Seller", color: "from-red-500/20 to-neutral-900" },
  { id: 2, title: "Minimalist Leather Workspace Deskmat", price: "1,299", rating: 4.8, image: "💼", tag: "Merch", color: "from-amber-500/20 to-neutral-900" },
  { id: 3, title: "Premium NextJS Production UI Boilerplate", price: "2,499", rating: 5.0, image: "⚡", tag: "Digital", color: "from-rose-500/20 to-neutral-900" },
  { id: 4, title: "Anodized Aluminum Cable Organizer", price: "799", rating: 4.6, image: "🔌", tag: "Essentials", color: "from-yellow-500/20 to-neutral-900" },
];

export default function MartProducts() {
  return (
    <section id="trending" className="py-24 bg-neutral-950 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-amber-500">Curated Inventory</span>
            <h2 className="text-3xl md:text-5xl font-black text-white mt-2">Verified Framework Essentials</h2>
          </div>
          <div className="flex gap-3 mt-4 md:mt-0">
            <span className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-300 cursor-pointer hover:bg-neutral-800">Trending</span>
            <span className="px-4 py-2 rounded-lg bg-neutral-900 border border-neutral-800 text-xs font-semibold text-neutral-500 cursor-pointer hover:bg-neutral-800">Top Rated</span>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((prod) => (
            <motion.div
              key={prod.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-neutral-900/20 border border-neutral-900 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-neutral-800 transition"
            >
              {/* Product Visual Container */}
              <div className={`relative h-48 bg-gradient-to-br ${prod.color} flex items-center justify-center text-6xl group-hover:scale-[1.02] transition duration-300`}>
                <span className="absolute top-3 left-3 px-2 py-0.5 text-[10px] font-bold bg-black/60 border border-white/10 text-amber-400 rounded-md uppercase tracking-wider">
                  {prod.tag}
                </span>
                <button className="absolute top-3 right-3 p-2 rounded-full bg-black/40 text-neutral-400 hover:text-red-500 backdrop-blur-md transition">
                  <Heart className="w-4 h-4" />
                </button>
                {prod.image}
              </div>

              {/* Text Meta Content */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-1 text-xs text-amber-400 mb-2">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span className="font-bold">{prod.rating}</span>
                    <span className="text-neutral-600">(Verified Vendor)</span>
                  </div>
                  <h3 className="text-sm font-bold text-neutral-200 group-hover:text-white transition line-clamp-2">
                    {prod.title}
                  </h3>
                </div>

                <div className="mt-4 pt-4 border-t border-neutral-900 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-neutral-500 block uppercase font-bold">Price Matrix</span>
                    <span className="text-lg font-black text-white">₹{prod.price}</span>
                  </div>
                  <button className="p-3 rounded-xl bg-neutral-900 border border-neutral-800 text-white hover:bg-gradient-to-r hover:from-red-600 hover:to-amber-500 hover:border-transparent transition">
                    <ShoppingCart className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}