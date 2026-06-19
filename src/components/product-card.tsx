import { Link } from "@tanstack/react-router";
import { Heart, Star } from "lucide-react";
import { toast } from "sonner";
import { useStore } from "@/lib/store";
import type { Product } from "@/lib/products";

export function Stars({ value, size = 14 }: { value: number; size?: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          style={{ width: size, height: size }}
          className={i <= Math.round(value) ? "fill-warning text-warning" : "text-muted-foreground/40"}
        />
      ))}
    </div>
  );
}

export function ProductCard({ product }: { product: Product }) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const wished = wishlist.includes(product.id);
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-card-hover">
      <Link to="/product/$id" params={{ id: product.id }} className="relative block aspect-square overflow-hidden bg-muted">
        <img src={product.image} alt={product.name} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105" />
        {product.badge && (
          <span className="absolute left-3 top-3 rounded-full bg-gradient-primary px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary-foreground shadow-elegant">{product.badge}</span>
        )}
      </Link>
      <button
        onClick={() => { toggleWishlist(product.id); toast.success(wished ? "Removed from wishlist" : "Added to wishlist"); }}
        aria-label="Wishlist"
        className="absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-background/90 backdrop-blur transition hover:scale-110"
      >
        <Heart className={`h-4 w-4 ${wished ? "fill-primary text-primary" : ""}`} />
      </button>
      <div className="flex flex-1 flex-col gap-2 p-4">
        <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{product.category}</span>
        <Link to="/product/$id" params={{ id: product.id }} className="line-clamp-2 min-h-10 font-medium hover:text-primary-glow">{product.name}</Link>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <Stars value={product.rating} />
          <span>({product.reviews})</span>
        </div>
        <div className="mt-auto flex items-end justify-between pt-2">
          <div>
            <span className="font-display text-lg font-bold">${product.price}</span>
            {product.oldPrice && <span className="ml-1.5 text-xs text-muted-foreground line-through">${product.oldPrice}</span>}
          </div>
          <button
            onClick={() => { addToCart(product.id); toast.success(`${product.name} added to cart`); }}
            className="rounded-full bg-foreground px-4 py-2 text-xs font-medium text-background transition hover:bg-gradient-primary hover:text-primary-foreground"
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
