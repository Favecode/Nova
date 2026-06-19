import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import { Heart, Minus, Plus, ShieldCheck, Truck, Undo2 } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";
import { ProductCard, Stars } from "@/components/product-card";
import { useStore } from "@/lib/store";

export const Route = createFileRoute("/product/$id")({
  component: ProductPage,
  notFoundComponent: () => (
    <SiteLayout>
      <div className="mx-auto max-w-md py-24 text-center">
        <h1 className="font-display text-3xl font-bold">Product not found</h1>
        <Link to="/shop" className="mt-4 inline-block text-primary-glow underline">Back to shop</Link>
      </div>
    </SiteLayout>
  ),
});

function ProductPage() {
  const { id } = Route.useParams();
  const { products, addToCart, toggleWishlist, wishlist } = useStore();
  const product = products.find((p) => p.id === id);
  const [qty, setQty] = useState(1);
  const [active, setActive] = useState(0);

  if (!product) throw notFound();

  const wished = wishlist.includes(product.id);
  const gallery = product.images?.length ? product.images : [product.image, product.image, product.image];
  const related = products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <nav className="mb-6 text-xs text-muted-foreground">
          <Link to="/" className="hover:text-foreground">Home</Link> / <Link to="/shop" className="hover:text-foreground">Shop</Link> / <span className="text-foreground">{product.name}</span>
        </nav>
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <div className="aspect-square overflow-hidden rounded-3xl bg-muted">
              <img src={gallery[active]} alt={product.name} className="h-full w-full object-cover" />
            </div>
            <div className="mt-3 grid grid-cols-4 gap-3">
              {gallery.map((g, i) => (
                <button key={i} onClick={() => setActive(i)} className={`aspect-square overflow-hidden rounded-xl border-2 transition ${active === i ? "border-primary" : "border-transparent"}`}>
                  <img src={g} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          </div>
          <div>
            <span className="text-xs font-medium uppercase tracking-wider text-primary-glow">{product.category}</span>
            <h1 className="mt-2 font-display text-3xl font-bold sm:text-4xl">{product.name}</h1>
            <div className="mt-3 flex items-center gap-3">
              <Stars value={product.rating} size={16} />
              <span className="text-sm text-muted-foreground">{product.rating} ({product.reviews} reviews)</span>
            </div>
            <div className="mt-5 flex items-end gap-3">
              <span className="font-display text-4xl font-bold">${product.price}</span>
              {product.oldPrice && (
                <>
                  <span className="text-lg text-muted-foreground line-through">${product.oldPrice}</span>
                  <span className="rounded-full bg-success/15 px-2 py-0.5 text-xs font-semibold text-success">Save ${product.oldPrice - product.price}</span>
                </>
              )}
            </div>
            <p className="mt-5 text-base text-muted-foreground">{product.description}</p>
            <div className="mt-7 flex items-center gap-3">
              <div className="flex items-center rounded-full border border-border">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid h-11 w-11 place-items-center"><Minus className="h-4 w-4" /></button>
                <span className="w-10 text-center font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid h-11 w-11 place-items-center"><Plus className="h-4 w-4" /></button>
              </div>
              <button
                onClick={() => { addToCart(product.id, qty); toast.success(`${product.name} added to cart`); }}
                className="flex-1 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.01]"
              >
                Add to cart — ${(product.price * qty).toFixed(2)}
              </button>
              <button onClick={() => { toggleWishlist(product.id); toast.success(wished ? "Removed from wishlist" : "Saved to wishlist"); }} className="grid h-12 w-12 place-items-center rounded-full border border-border">
                <Heart className={`h-5 w-5 ${wished ? "fill-primary text-primary" : ""}`} />
              </button>
            </div>
            <div className="mt-7 grid grid-cols-3 gap-3 border-t border-border pt-6 text-xs">
              <div className="flex flex-col items-center gap-1.5 text-center text-muted-foreground"><Truck className="h-5 w-5" />Free over $75</div>
              <div className="flex flex-col items-center gap-1.5 text-center text-muted-foreground"><Undo2 className="h-5 w-5" />30-day returns</div>
              <div className="flex flex-col items-center gap-1.5 text-center text-muted-foreground"><ShieldCheck className="h-5 w-5" />2-yr warranty</div>
            </div>
          </div>
        </div>
        {related.length > 0 && (
          <section className="mt-20">
            <h2 className="font-display text-2xl font-bold">You might also like</h2>
            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              {related.map((p) => <ProductCard key={p.id} product={p} />)}
            </div>
          </section>
        )}
      </div>
    </SiteLayout>
  );
}
