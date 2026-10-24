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
  rating: string;
  reviews: string;
  badge: string;
  accent: string;
  image: string;
};

const categories: Category[] = [
  { id: "all", name: "All", count: "1200+" },
  { id: "electronics", name: "Electronics", count: "340+" },
  { id: "creator-tools", name: "Creator Tools", count: "180+" },
  { id: "home", name: "Home & Lifestyle", count: "260+" },
  { id: "fashion", name: "Fashion", count: "220+" },
  { id: "gifts", name: "Gifts", count: "140+" },
];

const topDeals: Product[] = [
  {
    id: "p1",
    name: "Odlix Neo Smartwatch",
    category: "Electronics",
    price: "₹12,999",
    oldPrice: "₹17,999",
    rating: "4.8",
    reviews: "2,341",
    badge: "Best Seller",
    accent: "#DFFF00",
    image: "/mart-smartwatch.svg",
  },
  {
    id: "p2",
    name: "Creator Pro Starter Kit",
    category: "Creator Tools",
    price: "₹2,799",
    oldPrice: "₹4,999",
    rating: "4.9",
    reviews: "1,087",
    badge: "Top Rated",
    accent: "#00F5FF",
    image: "/mart-creator-kit.svg",
  },
  {
    id: "p3",
    name: "Odlix Signature Hoodie",
    category: "Fashion",
    price: "₹1,399",
    oldPrice: "₹2,099",
    rating: "4.7",
    reviews: "3,912",
    badge: "New Arrival",
    accent: "#FF5F1F",
    image: "/mart-hoodie.svg",
  },
  {
    id: "p4",
    name: "Smart Desk Essentials Bundle",
    category: "Home & Lifestyle",
    price: "₹3,499",
    oldPrice: "₹5,499",
    rating: "4.8",
    reviews: "928",
    badge: "Limited Deal",
    accent: "#32FF00",
    image: "/mart-desk-bundle.svg",
  },
];

const newArrivals: Product[] = [
  {
    id: "n1",
    name: "Wireless ANC Earbuds",
    category: "Electronics",
    price: "₹4,299",
    oldPrice: "₹6,299",
    rating: "4.6",
    reviews: "678",
    badge: "Fresh Drop",
    accent: "#00F5FF",
    image: "/mart-earbuds.svg",
  },
  {
    id: "n2",
    name: "Premium Notebook Set",
    category: "Creator Tools",
    price: "₹899",
    oldPrice: "₹1,299",
    rating: "4.8",
    reviews: "1,206",
    badge: "Editor Pick",
    accent: "#DFFF00",
    image: "/mart-notebook.svg",
  },
  {
    id: "n3",
    name: "Minimal Carry Sling",
    category: "Fashion",
    price: "₹1,799",
    oldPrice: "₹2,699",
    rating: "4.7",
    reviews: "459",
    badge: "Trending",
    accent: "#FF5F1F",
    image: "/mart-sling.svg",
  },
];

function ProductCard({ product, wishlistCount, onAddWishlist, onAddCart }: { product: Product; wishlistCount: number; onAddWishlist: (productId: string) => void; onAddCart: (productId: string) => void }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl">
      <div className="relative border-b border-border bg-gradient-to-br from-background to-muted/40 p-4">
        <span
          className="inline-flex rounded-full border px-3 py-1 text-[10px] font-black uppercase tracking-[0.16em]"
          style={{ borderColor: `${product.accent}66`, color: product.accent, backgroundColor: `${product.accent}1A` }}
        >
          {product.badge}
        </span>
        <button
          type="button"
          onClick={() => onAddWishlist(product.id)}
          aria-label={`Wishlist ${product.name}`}
          className="absolute right-4 top-4 rounded-full border border-border bg-background p-2 text-foreground/45 transition-all hover:text-[#FF1493]"
        >
          <span className="inline-flex items-center gap-1">
            <Heart className="h-4 w-4" />
            {wishlistCount > 0 ? <span className="text-[9px] font-black text-[#FF1493]">{wishlistCount}</span> : null}
          </span>
        </button>

        <div className="mt-5 h-44 overflow-hidden rounded-xl border border-border bg-background">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      </div>

      <div className="p-4">
        <p className="mb-2 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/40">{product.category}</p>
        <h3 className="mb-3 text-lg font-black leading-tight tracking-tight text-foreground">{product.name}</h3>

        <div className="mb-4 flex items-center gap-1 text-xs text-foreground/70">
          <Star className="h-4 w-4 fill-[#FFD54A] text-[#FFD54A]" />
          <span className="font-bold">{product.rating}</span>
          <span className="text-foreground/40">({product.reviews})</span>
        </div>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight text-foreground">{product.price}</p>
            <p className="text-xs font-bold text-foreground/35 line-through">{product.oldPrice}</p>
          </div>
          <button
            type="button"
            onClick={() => onAddCart(product.id)}
            className="rounded-lg bg-zinc-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[var(--platform-accent)] hover:text-zinc-950 dark:bg-white dark:text-zinc-950"
          >
            Add
          </button>
        </div>
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
    <section className="bg-background py-14">
      <div className="container mx-auto px-4">
        <div className="mb-8 grid grid-cols-1 gap-4 rounded-2xl border border-border bg-card p-4 lg:grid-cols-[1fr_auto] lg:items-center">
          <div className="flex items-center rounded-xl border border-border bg-background p-2">
            <Search className="ml-2 mr-3 h-4 w-4 text-foreground/35" />
            <input
              type="text"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search products, categories, brands"
              className="w-full bg-transparent py-2 text-sm font-semibold text-foreground focus:outline-none"
            />
          </div>
          <div className="flex gap-3">
            <button
              type="button"
              title="Advanced filters backend not connected"
              className="inline-flex items-center gap-2 rounded-xl border border-border px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/70 transition-all hover:bg-muted"
            >
              <SlidersHorizontal className="h-4 w-4" />
              Filters
            </button>
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-xl bg-foreground px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-background transition-all hover:opacity-90"
            >
              Clear Search
            </button>
          </div>
        </div>

        <div className="mb-3 flex items-center justify-between gap-3">
          <p className="text-xs font-black uppercase tracking-[0.16em] text-foreground/55">Filtered Results: {filteredCount}</p>
          <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/40">Cart: {cartCount}</p>
        </div>

        <div className="mb-10 flex gap-3 overflow-x-auto pb-2">
          {categories.map((category) => {
            const isActive = category.id === activeCategoryId;

            return (
              <button
                key={category.id}
                type="button"
                onClick={() => setActiveCategoryId(category.id)}
                className={
                  isActive
                    ? "whitespace-nowrap rounded-full border border-[#00F5FF]/60 bg-[#00F5FF]/10 px-4 py-2 text-left transition-all"
                    : "whitespace-nowrap rounded-full border border-border bg-card px-4 py-2 text-left transition-all hover:border-[#00F5FF]/60 hover:bg-[#00F5FF]/10"
                }
              >
                <p className="text-[10px] font-black uppercase tracking-[0.16em] text-foreground/80">{category.name}</p>
                <p className="text-[10px] font-bold text-foreground/40">{category.count} items</p>
              </button>
            );
          })}
        </div>

        <div id="top-deals" className="mb-12 rounded-2xl border border-[#FF5F1F]/35 bg-gradient-to-r from-[#FF5F1F]/15 via-transparent to-[#DFFF00]/15 p-4">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="inline-flex items-center gap-2 text-xs font-black uppercase tracking-[0.16em] text-[#FF5F1F]">
              <Flame className="h-4 w-4" />
              Top Deals Live Now
            </p>
             <Link href="#top-deals" className="inline-flex items-center gap-1 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/80">
               View All Deals <ChevronRight className="h-3.5 w-3.5" />
             </Link>

          </div>
        </div>

        {filteredTopDeals.length === 0 ? (
          <div className="rounded-xl border border-border bg-card px-4 py-5 text-sm font-semibold text-foreground/65">
            No top deals matched this filter. Try another keyword or category.
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
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

        <div id="new-arrivals" className="mt-14 grid grid-cols-1 gap-6 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-2xl font-black tracking-tight text-foreground md:text-3xl">New Arrivals</h3>
              <Link href="#new-arrivals" className="text-[10px] font-black uppercase tracking-[0.16em] text-[var(--platform-accent)]">
                Explore Collection
              </Link>
            </div>
            {filteredNewArrivals.length === 0 ? (
              <div className="rounded-xl border border-border bg-card px-4 py-5 text-sm font-semibold text-foreground/65">
                No new arrivals matched this filter. Try another keyword or category.
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
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

          <aside className="space-y-4">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-sm">
              <h4 className="mb-4 text-xs font-black uppercase tracking-[0.16em] text-foreground/50">Shop with Confidence</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                  <ShieldCheck className="mt-0.5 h-4 w-4 text-[#32FF00]" />
                  <p className="text-sm font-semibold text-foreground/75">Verified sellers and authentic products.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                  <Truck className="mt-0.5 h-4 w-4 text-[#00F5FF]" />
                  <p className="text-sm font-semibold text-foreground/75">Fast shipping and live order tracking.</p>
                </div>
                <div className="flex items-start gap-3 rounded-xl border border-border bg-background p-3">
                  <RotateCcw className="mt-0.5 h-4 w-4 text-[#FF5F1F]" />
                  <p className="text-sm font-semibold text-foreground/75">Easy return and replacement process.</p>
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-[#DFFF00]/35 bg-[#DFFF00]/10 p-5">
              <p className="mb-1 text-[10px] font-black uppercase tracking-[0.16em] text-foreground/55">Extra Savings</p>
              <h4 className="mb-2 text-2xl font-black tracking-tight text-foreground">Up to 40% OFF</h4>
              <p className="mb-4 text-sm font-semibold text-foreground/70">Use code MART40 on selected products this week.</p>
               <button
                 type="button"
                 title="Promo code integration required"
                 className="rounded-lg bg-zinc-950 px-4 py-2 text-[10px] font-black uppercase tracking-[0.16em] text-white transition-all hover:bg-[#DFFF00] hover:text-zinc-950 dark:bg-white dark:text-zinc-950"
               >
                 Apply Offer
               </button>

            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
