import { createFileRoute, Link } from "@tanstack/react-router";
import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";
import { useCartTotals, useStore } from "@/lib/store";

export const Route = createFileRoute("/cart")({
  head: () => ({ meta: [{ title: "Your cart — Nova" }] }),
  component: CartPage,
});

function CartPage() {
  const { setQty, removeFromCart } = useStore();
  const { items, subtotal, shipping, tax, total } = useCartTotals();

  if (items.length === 0) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-md px-4 py-24 text-center">
          <ShoppingBag className="mx-auto h-12 w-12 text-muted-foreground" />
          <h1 className="mt-4 font-display text-3xl font-bold">Your cart is empty</h1>
          <p className="mt-2 text-sm text-muted-foreground">Add a few essentials and they'll show up here.</p>
          <Link to="/shop" className="mt-6 inline-block rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant">Start shopping</Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold">Your cart</h1>
        <div className="mt-8 grid gap-10 lg:grid-cols-[1fr_360px]">
          <ul className="space-y-4">
            {items.map((it) => (
              <li key={it.id} className="grid grid-cols-[80px_1fr_auto] items-center gap-4 rounded-2xl border border-border bg-card p-4 sm:grid-cols-[100px_1fr_auto_auto]">
                <Link to="/product/$id" params={{ id: it.id }} className="aspect-square w-full overflow-hidden rounded-xl bg-muted">
                  <img src={it.image} alt={it.name} className="h-full w-full object-cover" />
                </Link>
                <div className="min-w-0">
                  <Link to="/product/$id" params={{ id: it.id }} className="line-clamp-2 font-medium hover:text-primary-glow">{it.name}</Link>
                  <p className="mt-1 text-xs text-muted-foreground">{it.category}</p>
                  <p className="mt-1 font-display font-bold sm:hidden">${(it.price * it.qty).toFixed(2)}</p>
                </div>
                <div className="col-span-2 flex items-center justify-between sm:col-span-1 sm:justify-start">
                  <div className="flex items-center rounded-full border border-border">
                    <button onClick={() => setQty(it.id, it.qty - 1)} className="grid h-9 w-9 place-items-center"><Minus className="h-3.5 w-3.5" /></button>
                    <span className="w-8 text-center text-sm">{it.qty}</span>
                    <button onClick={() => setQty(it.id, it.qty + 1)} className="grid h-9 w-9 place-items-center"><Plus className="h-3.5 w-3.5" /></button>
                  </div>
                  <button onClick={() => removeFromCart(it.id)} className="ml-3 grid h-9 w-9 place-items-center rounded-full hover:bg-destructive/10 hover:text-destructive">
                    <Trash2 className="h-4 w-4" />
                  </button>
                </div>
                <div className="hidden text-right font-display text-lg font-bold sm:block">${(it.price * it.qty).toFixed(2)}</div>
              </li>
            ))}
          </ul>
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-xl font-bold">Summary</h2>
            <dl className="mt-5 space-y-2.5 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Tax</dt><dd>${tax.toFixed(2)}</dd></div>
              <div className="mt-3 flex justify-between border-t border-border pt-3 font-display text-lg font-bold"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
            </dl>
            <Link to="/checkout" className="mt-6 block w-full rounded-full bg-gradient-primary py-3 text-center text-sm font-semibold text-primary-foreground shadow-elegant">Checkout</Link>
            <Link to="/shop" className="mt-2 block text-center text-xs text-muted-foreground hover:text-foreground">Continue shopping</Link>
          </aside>
        </div>
      </div>
    </SiteLayout>
  );
}
