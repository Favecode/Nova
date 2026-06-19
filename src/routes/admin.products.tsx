import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Pencil, Plus, Search, Trash2, X } from "lucide-react";
import { toast } from "sonner";
import { AdminShell } from "@/components/admin-shell";
import { useStore } from "@/lib/store";
import { CATEGORIES, type Product } from "@/lib/products";

export const Route = createFileRoute("/admin/products")({
  head: () => ({ meta: [{ title: "Products — Nova Admin" }] }),
  component: AdminProducts,
});

const empty: Omit<Product, "id"> = {
  name: "", price: 0, image: "https://picsum.photos/seed/new/600/600", description: "", rating: 4.5, reviews: 0, category: "Electronics", stock: 10,
};

function AdminProducts() {
  const { products, addProduct, updateProduct, deleteProduct } = useStore();
  const [q, setQ] = useState("");
  const [cat, setCat] = useState<string>("All");
  const [editing, setEditing] = useState<Product | null>(null);
  const [creating, setCreating] = useState(false);
  const [draft, setDraft] = useState<Omit<Product, "id">>(empty);

  const filtered = useMemo(() => products.filter((p) => {
    if (cat !== "All" && p.category !== cat) return false;
    if (q && !p.name.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [products, cat, q]);

  const open = (p?: Product) => {
    if (p) { setEditing(p); setDraft({ ...p }); }
    else { setEditing(null); setDraft(empty); setCreating(true); }
  };

  const save = (e: React.FormEvent) => {
    e.preventDefault();
    if (editing) { updateProduct(editing.id, draft); toast.success("Product updated"); }
    else { addProduct(draft); toast.success("Product added"); }
    setEditing(null); setCreating(false);
  };

  const showModal = editing || creating;

  return (
    <AdminShell title="Products">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search products…" className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm" />
        </div>
        <select value={cat} onChange={(e) => setCat(e.target.value)} className="h-10 rounded-full border border-border bg-card px-4 text-sm">
          <option value="All">All categories</option>
          {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
        </select>
        <button onClick={() => open()} className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground shadow-elegant">
          <Plus className="h-4 w-4" /> Add product
        </button>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">Product</th>
                <th className="px-4 py-3 font-medium">Category</th>
                <th className="px-4 py-3 font-medium">Price</th>
                <th className="px-4 py-3 font-medium">Stock</th>
                <th className="px-4 py-3 font-medium">Rating</th>
                <th className="px-4 py-3 text-right font-medium">Actions</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p.id} className="border-b border-border last:border-0 hover:bg-secondary/30">
                  <td className="px-4 py-3">
                    <div className="flex items-center gap-3">
                      <img src={p.image} alt="" className="h-10 w-10 rounded-lg object-cover" />
                      <div className="min-w-0">
                        <div className="line-clamp-1 font-medium">{p.name}</div>
                        <div className="text-xs text-muted-foreground">{p.id}</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{p.category}</td>
                  <td className="px-4 py-3 font-medium">${p.price}</td>
                  <td className="px-4 py-3">
                    <span className={`rounded-full px-2 py-0.5 text-xs ${p.stock > 10 ? "bg-success/15 text-success" : p.stock > 0 ? "bg-warning/20 text-warning-foreground" : "bg-destructive/15 text-destructive"}`}>{p.stock}</span>
                  </td>
                  <td className="px-4 py-3">{p.rating}</td>
                  <td className="px-4 py-3">
                    <div className="flex justify-end gap-1">
                      <button onClick={() => open(p)} className="grid h-8 w-8 place-items-center rounded-lg hover:bg-secondary"><Pencil className="h-4 w-4" /></button>
                      <button onClick={() => { if (confirm("Delete this product?")) { deleteProduct(p.id); toast.success("Product deleted"); } }} className="grid h-8 w-8 place-items-center rounded-lg text-destructive hover:bg-destructive/10"><Trash2 className="h-4 w-4" /></button>
                    </div>
                  </td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-muted-foreground">No products match your filters.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {showModal && (
        <div className="fixed inset-0 z-50 grid place-items-center p-4">
          <div className="absolute inset-0 bg-foreground/50" onClick={() => { setEditing(null); setCreating(false); }} />
          <form onSubmit={save} className="relative w-full max-w-2xl rounded-3xl border border-border bg-card p-6 shadow-card-hover sm:p-8">
            <div className="flex items-center justify-between">
              <h2 className="font-display text-2xl font-bold">{editing ? "Edit product" : "Add product"}</h2>
              <button type="button" onClick={() => { setEditing(null); setCreating(false); }} className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary"><X className="h-4 w-4" /></button>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <label className="text-sm sm:col-span-2"><span className="mb-1.5 block font-medium">Name</span><input required value={draft.name} onChange={(e) => setDraft({ ...draft, name: e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Category</span>
                <select value={draft.category} onChange={(e) => setDraft({ ...draft, category: e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3 text-sm">
                  {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
                </select>
              </label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Image URL</span><input value={draft.image} onChange={(e) => setDraft({ ...draft, image: e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Price ($)</span><input required type="number" min={0} step={0.01} value={draft.price} onChange={(e) => setDraft({ ...draft, price: +e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Stock</span><input required type="number" min={0} value={draft.stock} onChange={(e) => setDraft({ ...draft, stock: +e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Rating</span><input type="number" min={0} max={5} step={0.1} value={draft.rating} onChange={(e) => setDraft({ ...draft, rating: +e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm"><span className="mb-1.5 block font-medium">Reviews</span><input type="number" min={0} value={draft.reviews} onChange={(e) => setDraft({ ...draft, reviews: +e.target.value })} className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
              <label className="text-sm sm:col-span-2"><span className="mb-1.5 block font-medium">Description</span><textarea rows={3} value={draft.description} onChange={(e) => setDraft({ ...draft, description: e.target.value })} className="w-full rounded-xl border border-border bg-background p-3.5 text-sm" /></label>
            </div>
            <div className="mt-6 flex justify-end gap-2">
              <button type="button" onClick={() => { setEditing(null); setCreating(false); }} className="rounded-full border border-border px-5 py-2.5 text-sm">Cancel</button>
              <button type="submit" className="rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-elegant">{editing ? "Save changes" : "Add product"}</button>
            </div>
          </form>
        </div>
      )}
    </AdminShell>
  );
}
