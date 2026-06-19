import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { SlidersHorizontal, X } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/lib/store";
import { CATEGORIES } from "@/lib/products";

type Search = { q?: string; category?: string };

export const Route = createFileRoute("/shop")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    q: typeof s.q === "string" ? s.q : undefined,
    category: typeof s.category === "string" ? s.category : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Shop all — Nova" },
      { name: "description", content: "Browse the full Nova collection. Filter by category, price, and rating." },
    ],
  }),
  component: Shop,
});

function Shop() {
  const { products } = useStore();
  const search = Route.useSearch();
  const [q, setQ] = useState(search.q ?? "");
  const [category, setCategory] = useState<string | "All">(search.category ?? "All");
  const [maxPrice, setMaxPrice] = useState(300);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState("featured");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let out = products.filter((p) => {
      if (category !== "All" && p.category !== category) return false;
      if (p.price > maxPrice) return false;
      if (p.rating < minRating) return false;
      if (q && !`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q.toLowerCase())) return false;
      return true;
    });
    if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
    else if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
    else if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
    return out;
  }, [products, category, maxPrice, minRating, q, sort]);

  const Filters = (
    <div className="space-y-7">
      <div>
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Search</h3>
        <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search…" className="h-10 w-full rounded-full border border-border bg-secondary/60 px-4 text-sm" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Category</h3>
        <div className="flex flex-col gap-1.5">
          {(["All", ...CATEGORIES] as const).map((c) => (
            <button key={c} onClick={() => setCategory(c)} className={`rounded-lg px-3 py-1.5 text-left text-sm transition ${category === c ? "bg-foreground text-background" : "hover:bg-secondary"}`}>{c}</button>
          ))}
        </div>
      </div>
      <div>
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Max price: ${maxPrice}</h3>
        <input type="range" min={20} max={300} step={10} value={maxPrice} onChange={(e) => setMaxPrice(+e.target.value)} className="w-full accent-primary" />
      </div>
      <div>
        <h3 className="mb-3 font-display text-sm font-semibold uppercase tracking-wider">Min rating</h3>
        <div className="flex gap-1.5">
          {[0, 3, 4, 4.5].map((r) => (
            <button key={r} onClick={() => setMinRating(r)} className={`rounded-full border px-3 py-1 text-xs ${minRating === r ? "border-primary bg-primary text-primary-foreground" : "border-border"}`}>{r === 0 ? "Any" : `${r}+`}</button>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-4xl font-bold">Shop all</h1>
            <p className="mt-1 text-sm text-muted-foreground">{filtered.length} products</p>
          </div>
          <div className="flex items-center gap-2">
            <button onClick={() => setShowFilters(true)} className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm lg:hidden">
              <SlidersHorizontal className="h-4 w-4" /> Filters
            </button>
            <select value={sort} onChange={(e) => setSort(e.target.value)} className="h-10 rounded-full border border-border bg-background px-4 text-sm">
              <option value="featured">Featured</option>
              <option value="price-asc">Price: low to high</option>
              <option value="price-desc">Price: high to low</option>
              <option value="rating">Top rated</option>
            </select>
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <aside className="hidden lg:block">{Filters}</aside>
          <div>
            {filtered.length === 0 ? (
              <div className="rounded-2xl border border-dashed border-border p-16 text-center">
                <p className="font-display text-xl font-semibold">No products match</p>
                <p className="mt-1 text-sm text-muted-foreground">Try widening your filters.</p>
              </div>
            ) : (
              <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
                {filtered.map((p) => <ProductCard key={p.id} product={p} />)}
              </div>
            )}
          </div>
        </div>
      </div>
      {showFilters && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-foreground/40" onClick={() => setShowFilters(false)} />
          <div className="absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-background p-6">
            <div className="mb-6 flex items-center justify-between">
              <h2 className="font-display text-xl font-bold">Filters</h2>
              <button onClick={() => setShowFilters(false)}><X className="h-5 w-5" /></button>
            </div>
            {Filters}
          </div>
        </div>
      )}
    </SiteLayout>
  );
}
