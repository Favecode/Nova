import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { INITIAL_PRODUCTS, type Product } from "./products";

export type CartItem = { id: string; qty: number };

type StoreCtx = {
  products: Product[];
  setProducts: (p: Product[]) => void;
  addProduct: (p: Omit<Product, "id">) => void;
  updateProduct: (id: string, p: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  cart: CartItem[];
  addToCart: (id: string, qty?: number) => void;
  removeFromCart: (id: string) => void;
  setQty: (id: string, qty: number) => void;
  clearCart: () => void;
  wishlist: string[];
  toggleWishlist: (id: string) => void;
  theme: "light" | "dark";
  toggleTheme: () => void;
};

const Ctx = createContext<StoreCtx | null>(null);

function useLocal<T>(key: string, initial: T): [T, (v: T | ((p: T) => T)) => void] {
  const [v, setV] = useState<T>(() => {
    if (typeof window === "undefined") return initial;
    try {
      const raw = localStorage.getItem(key);
      return raw ? (JSON.parse(raw) as T) : initial;
    } catch {
      return initial;
    }
  });
  useEffect(() => {
    try { localStorage.setItem(key, JSON.stringify(v)); } catch { /* ignore */ }
  }, [key, v]);
  return [v, setV];
}

export function StoreProvider({ children }: { children: ReactNode }) {
  const [products, setProducts] = useLocal<Product[]>("nv:products", INITIAL_PRODUCTS);
  const [cart, setCart] = useLocal<CartItem[]>("nv:cart", []);
  const [wishlist, setWishlist] = useLocal<string[]>("nv:wishlist", []);
  const [theme, setTheme] = useLocal<"light" | "dark">("nv:theme", "light");

  useEffect(() => {
    if (typeof document === "undefined") return;
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const value = useMemo<StoreCtx>(() => ({
    products,
    setProducts,
    addProduct: (p) => setProducts((prev) => [{ ...p, id: `p${Date.now()}` }, ...prev]),
    updateProduct: (id, p) => setProducts((prev) => prev.map((x) => (x.id === id ? { ...x, ...p } : x))),
    deleteProduct: (id) => setProducts((prev) => prev.filter((x) => x.id !== id)),
    cart,
    addToCart: (id, qty = 1) =>
      setCart((prev) => {
        const found = prev.find((c) => c.id === id);
        if (found) return prev.map((c) => (c.id === id ? { ...c, qty: c.qty + qty } : c));
        return [...prev, { id, qty }];
      }),
    removeFromCart: (id) => setCart((prev) => prev.filter((c) => c.id !== id)),
    setQty: (id, qty) =>
      setCart((prev) => (qty <= 0 ? prev.filter((c) => c.id !== id) : prev.map((c) => (c.id === id ? { ...c, qty } : c)))),
    clearCart: () => setCart([]),
    wishlist,
    toggleWishlist: (id) =>
      setWishlist((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id])),
    theme,
    toggleTheme: () => setTheme((t) => (t === "light" ? "dark" : "light")),
  }), [products, cart, wishlist, theme, setProducts, setCart, setWishlist, setTheme]);

  return <Ctx.Provider value={value}>{children}</Ctx.Provider>;
}

export function useStore() {
  const c = useContext(Ctx);
  if (!c) throw new Error("useStore must be used inside StoreProvider");
  return c;
}

export function useCartTotals() {
  const { cart, products } = useStore();
  const items = cart.map((c) => {
    const p = products.find((x) => x.id === c.id);
    return p ? { ...p, qty: c.qty } : null;
  }).filter(Boolean) as (Product & { qty: number })[];
  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 0 && subtotal < 75 ? 9.99 : 0;
  const tax = +(subtotal * 0.08).toFixed(2);
  const total = +(subtotal + shipping + tax).toFixed(2);
  const count = items.reduce((s, i) => s + i.qty, 0);
  return { items, subtotal, shipping, tax, total, count };
}
