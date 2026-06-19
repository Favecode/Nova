import { createFileRoute, Link } from "@tanstack/react-router";
import { Heart } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard } from "@/components/product-card";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/wishlist")({
  head: () => ({ meta: [{ title: "Wishlist — Nova" }] }),
  component: Wishlist,
});

function Wishlist() {
  const { products, wishlist } = useStore();
  const items = products.filter((p) => wishlist.includes(p.id));

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold">Wishlist</h1>
        <p className="mt-1 text-sm text-muted-foreground">{items.length} saved item{items.length === 1 ? "" : "s"}</p>
        {items.length === 0 ? (
          <div className="mt-12 rounded-2xl border border-dashed border-border p-16 text-center">
            <Heart className="mx-auto h-10 w-10 text-muted-foreground" />
            <p className="mt-3 font-display text-xl font-semibold">No favorites yet</p>
            <Link to="/shop" className="mt-4 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Discover products</Link>
          </div>
        ) : (
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {items.map((p) => <ProductCard key={p.id} product={p} />)}
          </div>
        )}
      </div>
    </SiteLayout>
  );
}
