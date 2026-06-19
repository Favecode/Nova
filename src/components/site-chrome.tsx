import { Link, useNavigate, useRouterState } from "@tanstack/react-router";
import { Heart, Menu, Moon, Search, ShoppingBag, Sun, User, X } from "lucide-react";
import { useState } from "react";
import { useStore, useCartTotals } from "@/lib/store";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/shop", label: "Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
];

export function Header() {
  const { wishlist, theme, toggleTheme } = useStore();
  const { count } = useCartTotals();
  const [open, setOpen] = useState(false);
  const [q, setQ] = useState("");
  const navigate = useNavigate();
  const path = useRouterState({ select: (s) => s.location.pathname });

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate({ to: "/shop", search: { q } as never });
    setOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <button className="lg:hidden" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        <Link to="/" className="flex items-center gap-2">
          <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground shadow-elegant">
            <span className="font-display text-lg font-bold">N</span>
          </span>
          <span className="font-display text-xl font-bold tracking-tight">Nova</span>
        </Link>
        <nav className="ml-6 hidden items-center gap-6 lg:flex">
          {NAV.map((n) => (
            <Link
              key={n.to}
              to={n.to}
              className={`text-sm font-medium transition-colors ${path === n.to ? "text-foreground" : "text-muted-foreground hover:text-foreground"}`}
            >
              {n.label}
            </Link>
          ))}
        </nav>
        <form onSubmit={submit} className="ml-auto hidden flex-1 max-w-md md:flex">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search products…"
              className="h-10 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm outline-none focus:border-ring focus:ring-2 focus:ring-ring/20"
            />
          </div>
        </form>
        <div className="ml-auto flex items-center gap-1 md:ml-2">
          <button onClick={toggleTheme} aria-label="Theme" className="grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Link to="/wishlist" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <Heart className="h-4 w-4" />
            {wishlist.length > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-primary px-1 text-[10px] font-semibold text-primary-foreground">{wishlist.length}</span>
            )}
          </Link>
          <Link to="/admin" className="hidden h-10 w-10 place-items-center rounded-full hover:bg-secondary md:grid" aria-label="Admin">
            <User className="h-4 w-4" />
          </Link>
          <Link to="/cart" className="relative grid h-10 w-10 place-items-center rounded-full hover:bg-secondary">
            <ShoppingBag className="h-4 w-4" />
            {count > 0 && (
              <span className="absolute -top-0.5 -right-0.5 grid h-4 min-w-4 place-items-center rounded-full bg-gradient-primary px-1 text-[10px] font-semibold text-primary-foreground">{count}</span>
            )}
          </Link>
        </div>
      </div>
      {open && (
        <div className="border-t border-border bg-background lg:hidden">
          <div className="mx-auto max-w-7xl px-4 py-3">
            <form onSubmit={submit} className="mb-3">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products…" className="h-10 w-full rounded-full border border-border bg-secondary/60 pl-10 pr-4 text-sm" />
              </div>
            </form>
            <nav className="flex flex-col">
              {NAV.map((n) => (
                <Link key={n.to} to={n.to} onClick={() => setOpen(false)} className="border-b border-border/60 py-3 text-sm font-medium">{n.label}</Link>
              ))}
              <Link to="/admin" onClick={() => setOpen(false)} className="py-3 text-sm font-medium">Admin</Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="grid h-8 w-8 place-items-center rounded-lg bg-gradient-primary text-primary-foreground"><span className="font-display font-bold">N</span></span>
            <span className="font-display text-xl font-bold">Nova</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">Modern essentials, beautifully made. Curated goods that earn a place in your everyday.</p>
        </div>
        {[
          { title: "Shop", links: [["All products", "/shop"], ["Wishlist", "/wishlist"], ["Cart", "/cart"]] },
          { title: "Company", links: [["About", "/about"], ["Contact", "/contact"], ["Admin", "/admin"]] },
          { title: "Help", links: [["Shipping", "/contact"], ["Returns", "/contact"], ["FAQ", "/contact"]] },
        ].map((c) => (
          <div key={c.title}>
            <h4 className="font-display text-sm font-semibold">{c.title}</h4>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {c.links.map(([l, h]) => (<li key={l}><Link to={h} className="hover:text-foreground">{l}</Link></li>))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-5 text-center text-xs text-muted-foreground">© 2026 Nova. Crafted with care.</div>
    </footer>
  );
}
