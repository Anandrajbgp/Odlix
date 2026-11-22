"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Star,
  Heart,
  ShieldCheck,
  Truck,
  RotateCcw,
  ChevronRight,
  Flame,
  Zap,
} from "lucide-react";

type Category = {
  id: string;
  name: string;
  count: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  price: string;
  oldPrice: string;
  discount: string;
  rating: string;
  reviews: string;
  badge: string;
  accent: string;
  image: string;
};

const categories: Category[] = [
  { id: "all", name: "All Products", count: "1200+" },
  { id: "electronics", name: "Electronics & Tech", count: "340+" },
  { id: "creator-tools", name: "Creator Studio", count: "180+" },
  { id: "home", name: "Home & Lifestyle", count: "260+" },
  { id: "fashion", name: "Fashion & Apparels", count: "220+" },
  { id: "gifts", name: "Festive & Gifts", count: "140+" },
];

const topDeals: Product[] = [
  {
    id: "p1",
    name: "Odlix Neo Smartwatch Pro (AMOLED Display)",
    category: "Electronics & Tech",
    price: "₹2,999",
    oldPrice: "₹7,999",
    discount: "62% Off",
    rating: "4.8",
    reviews: "2,341",
    badge: "Flipkart Assured",
    accent: "#2874f0",
    image: "/mart-smartwatch.svg",
  },
  {
    id: "p2",
    name: "Creator Pro Studio Lighting & Mic Kit",
    category: "Creator Studio",
    price: "₹2,799",
    oldPrice: "₹5,999",
    discount: "53% Off",
    rating: "4.9",
    reviews: "1,087",
    badge: "Best Seller",
    accent: "#ff9f00",
    image: "/mart-creator-kit.svg",
  },
  {
    id: "p3",
    name: "Odlix Signature Oversized Fleece Hoodie",
    category: "Fashion & Apparels",
    price: "₹1,399",
    oldPrice: "₹3,499",
    discount: "60% Off",
    rating: "4.7",
    reviews: "3,912",
    badge: "Super Deal",
    accent: "#ea580c",
    image: "/mart-hoodie.svg",
  },
  {
    id: "p4",
    name: "Smart RGB Ergonomic Desk Bundle",
    category: "Home & Lifestyle",
    price: "₹3,499",
    oldPrice: "₹8,999",
    discount: "61% Off",
    rating: "4.8",
    reviews: "928",
    badge: "Trending",
    accent: "#2874f0",
    image: "/mart-desk-bundle.svg",
  },
];

const newArrivals: Product[] = [
  {
    id: "n1",
    name: "Wireless Active Noise Cancelling Earbuds",
    category: "Electronics & Tech",
    price: "₹1,499",
    oldPrice: "₹4,299",
    discount: "65% Off",
    rating: "4.6",
    reviews: "678",
    badge: "Newly Launched",
    accent: "#ff9f00",
    image: "/mart-earbuds.svg",
  },
  {
    id: "n2",
    name: "Premium Vegan Leather Journal Set",
    category: "Creator Studio",
    price: "₹899",
    oldPrice: "₹1,999",
    discount: "55% Off",
    rating: "4.8",
    reviews: "1,206",
    badge: "Top Rated",
    accent: "#2874f0",
    image: "/mart-notebook.svg",
  },
  {
    id: "n3",
    name: "Water-Resistant Minimalist Carry Sling",
    category: "Fashion & Apparels",
    price: "₹999",
    oldPrice: "₹2,499",
    discount: "60% Off",
    rating: "4.7",
    reviews: "459",
    badge: "Best Value",
    accent: "#ea580c",
    image: "/mart-sling.svg",
  },
];

function ProductCard({
  product,
  wishlistCount,
  onAddWishlist,
  onAddCart,
}: {
  product: Product;
  wishlistCount: number;
  onAddWishlist: (productId: string) => void;
  onAddCart: (productId: string) => void;
}) {
  return (
    <article className="group overflow-hidden rounded-[2rem] border border-slate-700/60 bg-slate-900/20 backdrop-blur-xl shadow-xl transition-all hover:-translate-y-1.5 hover:border-cyan-400 hover:bg-slate-950/80 flex flex-col justify-between">
      <div>
        <div className="relative border-b border-slate-800 bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-4">
          <div className="flex items-center justify-between mb-2">
            <span
              className="inline-flex rounded-full border px-3 py-0.5 text-[10px] font-black uppercase tracking-[0.16em]"
              style={{ borderColor: `${product.accent}66`, color: product.accent, backgroundColor: `${product.accent}22` }}
            >
              {product.badge}
            </span>
            <span className="rounded-full bg-emerald-500/20 border border-emerald-500/40 px-2.5 py-0.5 text-[10px] font-black text-emerald-300">
              {product.discount}
            </span>
          </div>

          <button
            type="button"
            onClick={() => onAddWishlist(product.id)}
            aria-label={`Wishlist ${product.name}`}
            className="absolute right-4 top-12 rounded-full border border-slate-700 bg-slate-900/80 p-2 text-slate-300 transition-all hover:text-amber-400 hover:border-amber-400"
          >
            <span className="inline-flex items-center gap-1">
              <Heart className="h-4 w-4" />
              {wishlistCount > 0 ? <span className="text-[9px] font-black text-amber-400">{wishlistCount}</span> : null}
            </span>
          </button>

          <div className="mt-2 h-48 overflow-hidden rounded-2xl border border-slate-800 bg-slate-950 flex items-center justify-center">
            <Image
              src={product.image}
              alt={product.name}
              width={640}
              height={640}
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>
        </div>

        <div className="p-5">
          <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-cyan-300">{product.category}</p>
          <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-white group-hover:text-cyan-300 transition-colors">{product.name}</h3>

          <div className="mb-4 flex items-center gap-1.5 text-xs">
            <span className="inline-flex items-center gap-1 rounded-md bg-emerald-600 px-2 py-0.5 text-white font-black">
              {product.rating} <Star className="h-3 w-3 fill-white text-white" />
            </span>
            <span className="text-slate-400 font-semibold">({product.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 flex items-end justify-between border-t border-slate-800/60 pt-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black tracking-tight text-white">{product.price}</span>
            <span className="text-xs font-bold text-slate-400 line-through">{product.oldPrice}</span>
          </div>
          <span className="text-[10px] font-black text-emerald-400 uppercase tracking-widest">Free Delivery Assured</span>
        </div>
        <button
          type="button"
          onClick={() => onAddCart(product.id)}
          className="rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-2.5 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:scale-105 active:scale-95 shadow-md"
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}

export function ProductShowcase() {
  const [query, setQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("all");
  const [cartCount, setCartCount] = useState(0);
  const [wishlistByProduct, setWishlistByProduct] = useState<Record<string, number>>({});

  const matchesCategory = (product: Product): boolean => {
    if (activeCategoryId === "all") {
      return true;
    }

    const selectedCategory = categories.find((category) => category.id === activeCategoryId);
    if (selectedCategory === undefined) {
      return true;
    }

    return product.category === selectedCategory.name;
  };

  const matchesQuery = (product: Product): boolean => {
    const trimmedQuery = query.trim().toLowerCase();
    if (trimmedQuery.length === 0) {
      return true;
    }

    const haystack = `${product.name} ${product.category} ${product.badge}`.toLowerCase();
    return haystack.includes(trimmedQuery);
  };

  const filteredTopDeals = topDeals.filter((product) => matchesCategory(product) && matchesQuery(product));
  const filteredNewArrivals = newArrivals.filter((product) => matchesCategory(product) && matchesQuery(product));
  const filteredCount = filteredTopDeals.length + filteredNewArrivals.length;

  const addToCart = (productId: string): void => {
    void productId;
    setCartCount((previous) => previous + 1);
  };

  const addToWishlist = (productId: string): void => {
    setWishlistByProduct((previous) => {
      const existingCount = previous[productId] ?? 0;
      return {
        ...previous,
        [productId]: existingCount + 1,
      };
    });
  };

  return (
    <section className="relative overflow-hidden bg-transparent py-14 text-white">
      <div className="absolute -right-20 top-0 h-72 w-72 rounded-full bg-[#2874f0]/15 blur-3xl" />
      <div className="absolute -left-20 bottom-0 h-72 w-72 rounded-full bg-[#ff9f00]/12 blur-3xl" />

      <div className="container relative z-10 mx-auto px-4 max-w-7xl">
        {/* Search & Filter Bar */}
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-slate-700/60 bg-slate-950/85 backdrop-blur-2xl p-4 lg:grid-cols-[1fr_auto] lg:items-center shadow-xl">
          <div className="flex items-center rounded-xl border border-slate-700 bg-slate-900 p-2">
            <Search className="ml-2 mr-3 h-4 w-4 text-cyan-300" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, brands and more..."
              className="w-full bg-transparent py-2 text-sm font-bold text-white placeholder-slate-400 focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-700 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-slate-200 transition-all hover:bg-slate-900"
            >
              <SlidersHorizontal className="h-4 w-4 text-cyan-300" />
              Filters
            </button>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-xl bg-slate-800 px-4 py-2 text-xs font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-slate-700"
            >
              Clear Search
            </button>
          </div>
        </div>

        <div className="mb-4 flex items-center justify-between gap-3 px-1">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Filtered Results: {filteredCount}</p>
          <p className="text-xs font-black uppercase tracking-[0.16em] text-amber-300 bg-slate-950/80 px-3 py-1 rounded-full border border-slate-700/60">
            🛒 Cart Items: {cartCount}
          </p>
        </div>

        {/* Categories Filter pills */}
        <div className="mb-10 flex gap-3 overflow-x-auto pb-2 scrollbar-none">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-2xl border border-blue-500 bg-blue-600/30 px-5 py-3 text-left transition-all shadow-lg"
                    : "whitespace-nowrap rounded-2xl border border-slate-700/70 bg-slate-950/70 backdrop-blur-md px-5 py-3 text-left transition-all hover:border-blue-400 hover:bg-slate-900"
                }
              >
                <p className="text-xs font-black uppercase tracking-[0.16em] text-white">{category.name}</p>
                <p className="text-[10px] font-bold text-slate-300 mt-0.5">{category.count} items</p>
              </button>
            );
          })}
        </div>

        {/* Top Deals Header Banner */}
        <div id="top-deals" className="mb-10 rounded-2xl border border-amber-500/40 bg-gradient-to-r from-amber-500/20 via-blue-600/15 to-yellow-500/20 p-5 backdrop-blur-md shadow-xl">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.16em] text-amber-300">
              <Flame className="h-5 w-5 fill-amber-300 text-amber-300" />
              Flipkart Super Deals Live Now — Min. 50% to 70% Off
            </p>
            <Link href="#top-deals" className="inline-flex items-center gap-1 text-xs font-black uppercase tracking-[0.16em] text-cyan-300 hover:text-cyan-200">
              View All Deals <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        {filteredTopDeals.length === 0 ? (
          <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-5 text-sm font-semibold text-slate-300">
            No top deals matched this filter. Try another keyword or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
            {filteredTopDeals.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                wishlistCount={wishlistByProduct[product.id] ?? 0}
                onAddWishlist={addToWishlist}
                onAddCart={addToCart}
              />
            ))}
          </div>
        )}

        <div id="new-arrivals" className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="mb-6 flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-tight text-white md:text-3xl">Fresh Arrivals & Trending</h3>
              <Link href="#new-arrivals" className="text-xs font-black uppercase tracking-[0.16em] text-cyan-300 hover:text-cyan-200">
                Explore Collection
              </Link>
            </div>
            {filteredNewArrivals.length === 0 ? (
              <div className="rounded-xl border border-slate-700 bg-slate-900/60 px-4 py-5 text-sm font-semibold text-slate-300">
                No new arrivals matched this filter. Try another keyword or category.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                {filteredNewArrivals.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    wishlistCount={wishlistByProduct[product.id] ?? 0}
                    onAddWishlist={addToWishlist}
                    onAddCart={addToCart}
                  />
                ))}
              </div>
            )}
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] border border-slate-700/70 bg-slate-950/85 backdrop-blur-2xl p-6 shadow-xl">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-cyan-300">Shop with Flipkart Assured</h4>
              <div className="space-y-3.5">
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <ShieldCheck className="mt-0.5 h-5 w-5 text-green-400 shrink-0" />
                  <p className="text-sm font-semibold text-slate-200">100% verified genuine sellers and authentic products.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <Truck className="mt-0.5 h-5 w-5 text-blue-400 shrink-0" />
                  <p className="text-sm font-semibold text-slate-200">Lightning fast delivery and live order tracking.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3.5">
                  <RotateCcw className="mt-0.5 h-5 w-5 text-amber-400 shrink-0" />
                  <p className="text-sm font-semibold text-slate-200">Easy 7-day return and replacement process.</p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-blue-500/40 bg-gradient-to-br from-blue-900/40 to-slate-950 p-6 shadow-xl backdrop-blur-xl">
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-yellow-400">Mega Festival Special</p>
              <h4 className="mb-2 text-2xl font-black tracking-tight text-white">Up to 65% OFF</h4>
              <p className="mb-5 text-sm font-semibold text-slate-200">Use promo code MART65 on electronics and creator tools this week.</p>
              <button
                type="button"
                className="rounded-xl bg-gradient-to-r from-amber-400 to-yellow-400 px-6 py-3 text-xs font-black uppercase tracking-[0.16em] text-slate-950 transition-all hover:scale-105 active:scale-95 shadow-lg w-full"
              >
                Apply Promo Code
              </button>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
