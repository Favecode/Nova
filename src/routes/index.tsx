import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Truck, ShieldCheck, Undo2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/lib/store";
import { CATEGORIES } from "@/lib/products";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nova — Modern essentials, beautifully made" },
      { name: "description", content: "Shop curated, thoughtfully designed everyday goods on Nova." },
    ],
  }),
  component: Home,
});

function Home() {
  const { products } = useStore();
  const featured = products.slice(0, 8);
  const deals = products.filter((p) => p.oldPrice).slice(0, 4);

  return (
    <SiteLayout>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8 lg:py-28">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" /> Summer edit · 2026
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl">
              Modern essentials,<br />
              <span className="italic text-primary-glow">beautifully made.</span>
            </h1>
            <p className="mt-5 max-w-md text-base text-muted-foreground sm:text-lg">
              Discover a thoughtfully curated collection that earns its place in your everyday — designed to last, priced to love.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <Link to="/shop" className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]">
                Shop the edit <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/about" className="inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-background">
                Our story
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground">
              <span className="flex items-center gap-2"><Truck className="h-4 w-4" /> Free shipping over $75</span>
              <span className="flex items-center gap-2"><Undo2 className="h-4 w-4" /> 30-day returns</span>
              <span className="flex items-center gap-2"><ShieldCheck className="h-4 w-4" /> 2-year warranty</span>
            </div>
          </div>
          <div className="relative hidden md:block">
            <div className="absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" />
            <div className="grid grid-cols-2 gap-4">
              {featured.slice(0, 4).map((p, i) => (
                <Link key={p.id} to="/product/$id" params={{ id: p.id }} className={`relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card-hover ${i % 2 === 0 ? "translate-y-6" : ""}`}>
                  <img src={p.image} alt={p.name} className="h-full w-full object-cover" />
                  <div className="absolute inset-x-3 bottom-3 rounded-xl bg-background/85 p-2.5 backdrop-blur">
                    <div className="line-clamp-1 text-xs font-medium">{p.name}</div>
                    <div className="font-display text-sm font-bold">${p.price}</div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <h2 className="font-display text-3xl font-bold sm:text-4xl">Shop by category</h2>
          <Link to="/shop" className="text-sm text-muted-foreground hover:text-foreground">View all →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {CATEGORIES.map((c, i) => (
            <Link key={c} to="/shop" search={{ category: c } as never} className="group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-card-hover">
              <img src={`https://picsum.photos/seed/${c}-${i}/400/400`} alt={c} className="h-full w-full object-cover transition group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" />
              <span className="absolute bottom-3 left-3 right-3 font-display text-sm font-semibold text-background">{c}</span>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured */}
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between">
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary-glow">Featured</span>
            <h2 className="font-display text-3xl font-bold sm:text-4xl">Loved by everyone</h2>
          </div>
          <Link to="/shop" className="hidden text-sm text-muted-foreground hover:text-foreground sm:inline">All products →</Link>
        </div>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {featured.map((p) => <ProductCard key={p.id} product={p} />)}
        </div>
      </section>

      {/* Deals */}
      <section className="mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant sm:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1fr_2fr]">
            <div>
              <span className="rounded-full bg-background/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider">Limited time</span>
              <h2 className="mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl">Up to 30% off the season's standouts</h2>
              <p className="mt-3 text-primary-foreground/80">Hand-picked deals on the pieces our team can't stop wearing, using and gifting.</p>
              <Link to="/shop" className="mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:scale-[1.02]">
                Shop deals <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-3 lg:grid-cols-4">
              {deals.map((p) => (
                <Link key={p.id} to="/product/$id" params={{ id: p.id }} className="group rounded-2xl bg-background p-3 text-foreground shadow-soft">
                  <div className="aspect-square overflow-hidden rounded-xl bg-muted">
                    <img src={p.image} alt={p.name} className="h-full w-full object-cover transition group-hover:scale-105" />
                  </div>
                  <div className="mt-2 line-clamp-1 text-xs font-medium">{p.name}</div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <span className="font-display text-sm font-bold">${p.price}</span>
                    <span className="text-[10px] text-muted-foreground line-through">${p.oldPrice}</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
