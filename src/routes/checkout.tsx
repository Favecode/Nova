import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { CheckCircle2, Lock } from "lucide-react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";
import { useCartTotals, useStore } from "@/lib/store";

export const Route = createFileRoute("/checkout")({
  head: () => ({ meta: [{ title: "Checkout — Nova" }] }),
  component: Checkout,
});

function Field({ label, ...rest }: { label: string } & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="block text-sm">
      <span className="mb-1.5 block font-medium">{label}</span>
      <input required {...rest} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20" />
    </label>
  );
}

function Checkout() {
  const { items, subtotal, shipping, tax, total } = useCartTotals();
  const { clearCart } = useStore();
  const navigate = useNavigate();
  const [done, setDone] = useState(false);

  if (items.length === 0 && !done) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-md px-4 py-24 text-center">
          <h1 className="font-display text-3xl font-bold">Nothing to checkout</h1>
          <Link to="/shop" className="mt-4 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Browse shop</Link>
        </div>
      </SiteLayout>
    );
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setDone(true);
    clearCart();
    toast.success("Order placed!");
    setTimeout(() => navigate({ to: "/" }), 3500);
  };

  if (done) {
    return (
      <SiteLayout>
        <div className="mx-auto max-w-md px-4 py-24 text-center">
          <CheckCircle2 className="mx-auto h-14 w-14 text-success" />
          <h1 className="mt-4 font-display text-3xl font-bold">Thank you!</h1>
          <p className="mt-2 text-sm text-muted-foreground">Your order has been placed. A confirmation will arrive shortly.</p>
          <Link to="/" className="mt-6 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground">Back home</Link>
        </div>
      </SiteLayout>
    );
  }

  return (
    <SiteLayout>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <h1 className="font-display text-4xl font-bold">Checkout</h1>
        <form onSubmit={submit} className="mt-8 grid gap-10 lg:grid-cols-[1fr_400px]">
          <div className="space-y-8">
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold">Contact</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Email" type="email" placeholder="you@example.com" />
                <Field label="Phone" type="tel" placeholder="+1 555 000 0000" />
              </div>
            </section>
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold">Shipping address</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="First name" />
                <Field label="Last name" />
                <div className="sm:col-span-2"><Field label="Address" /></div>
                <Field label="City" />
                <Field label="Postal code" />
                <Field label="Country" defaultValue="United States" />
                <Field label="State / Region" />
              </div>
            </section>
            <section>
              <h2 className="mb-4 font-display text-lg font-semibold">Payment</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="sm:col-span-2"><Field label="Card number" inputMode="numeric" placeholder="•••• •••• •••• ••••" /></div>
                <Field label="Expiry" placeholder="MM / YY" />
                <Field label="CVC" inputMode="numeric" placeholder="•••" />
              </div>
              <p className="mt-3 flex items-center gap-1.5 text-xs text-muted-foreground"><Lock className="h-3.5 w-3.5" /> Demo only — no real payments processed.</p>
            </section>
          </div>
          <aside className="h-fit rounded-2xl border border-border bg-card p-6 shadow-soft">
            <h2 className="font-display text-lg font-bold">Order summary</h2>
            <ul className="mt-4 space-y-3">
              {items.map((it) => (
                <li key={it.id} className="flex items-center gap-3">
                  <div className="relative h-14 w-14 overflow-hidden rounded-lg bg-muted">
                    <img src={it.image} alt="" className="h-full w-full object-cover" />
                    <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-foreground text-[10px] text-background">{it.qty}</span>
                  </div>
                  <span className="line-clamp-1 flex-1 text-sm">{it.name}</span>
                  <span className="text-sm font-medium">${(it.price * it.qty).toFixed(2)}</span>
                </li>
              ))}
            </ul>
            <dl className="mt-5 space-y-2 border-t border-border pt-4 text-sm">
              <div className="flex justify-between"><dt className="text-muted-foreground">Subtotal</dt><dd>${subtotal.toFixed(2)}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Shipping</dt><dd>{shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}</dd></div>
              <div className="flex justify-between"><dt className="text-muted-foreground">Tax</dt><dd>${tax.toFixed(2)}</dd></div>
              <div className="flex justify-between border-t border-border pt-2 font-display text-base font-bold"><dt>Total</dt><dd>${total.toFixed(2)}</dd></div>
            </dl>
            <button type="submit" className="mt-6 w-full rounded-full bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-elegant">Place order</button>
          </aside>
        </form>
      </div>
    </SiteLayout>
  );
}
