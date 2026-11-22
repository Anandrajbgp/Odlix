import Link from "next/link";
import { cn } from "@/lib/utils";
import { Star, LayoutGrid, Gamepad2 } from "lucide-react";

const tabs = [
  { id: "popular", label: "Popular", icon: <Star className="w-4 h-4" /> },
  { id: "apps", label: "Apps", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "game", label: "Game", icon: <Gamepad2 className="w-4 h-4" /> },
];

const popularApps = [
  { name: "Odlix Trader", meta: "Finance • 4.9 ★" },
  { name: "Odlix Learn", meta: "Education • 4.8 ★" },
  { name: "Odlix Creator", meta: "Business • 4.7 ★" },
];

const allApps = [
  { name: "FocusFlow", meta: "Productivity • 4.8 ★" },
  { name: "GraphixPro", meta: "Design • 4.9 ★" },
  { name: "EduVault", meta: "Learning • 4.7 ★" },
];

const games = [
  { name: "BrainQuest", meta: "Puzzle • 4.6 ★" },
  { name: "SpeedTap", meta: "Arcade • 4.5 ★" },
  { name: "WordMaster", meta: "Word • 4.7 ★" },
];

export function AppCategories({ category }: { category?: string }) {
  const active = category || "popular";

  const items =
    active === "apps" ? allApps : active === "game" ? games : popularApps;

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="flex items-center justify-center gap-2 md:gap-6 border-b border-border mb-10 overflow-x-auto scrollbar-hide">
        {tabs.map((tab) => (
          <Link
            key={tab.id}
            href={`/apps?category=${tab.id}`}
            className={cn(
              "flex items-center gap-2 px-6 py-4 font-black text-[10px] uppercase tracking-[0.2em] border-b-2 whitespace-nowrap transition-all active:scale-95",
              active === tab.id
                ? "border-[var(--platform-accent)] text-[var(--platform-accent)]"
                : "border-transparent opacity-40 hover:opacity-100"
            )}
          >
            {tab.icon}
            <span>{tab.label}</span>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-2xl border border-border bg-card px-5 py-4 flex items-center justify-between"
          >
            <div>
              <div className="text-sm font-black tracking-tight text-foreground">{item.name}</div>
              <div className="text-[10px] font-bold uppercase tracking-[0.14em] text-foreground/45">{item.meta}</div>
            </div>
            <button className="rounded-lg border border-[var(--platform-accent)]/35 bg-[var(--platform-accent)]/10 px-3 py-2 text-[10px] font-black uppercase tracking-[0.14em] text-[var(--platform-accent)] transition-all hover:bg-[var(--platform-accent)]/20 active:scale-95">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}