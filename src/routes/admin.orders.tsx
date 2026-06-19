import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AdminShell } from "@/components/admin-shell";
import { MOCK_ORDERS } from "@/lib/mock-admin";

export const Route = createFileRoute("/admin/orders")({
  head: () => ({ meta: [{ title: "Orders — Nova Admin" }] }),
  component: AdminOrders,
});

const STATUS = ["All", "Processing", "Shipped", "Delivered", "Cancelled"] as const;

const tone: Record<string, string> = {
  Delivered: "bg-success/15 text-success",
  Shipped: "bg-primary-glow/15 text-primary-glow",
  Processing: "bg-warning/20 text-warning-foreground",
  Cancelled: "bg-destructive/15 text-destructive",
};

function AdminOrders() {
  const [q, setQ] = useState("");
  const [status, setStatus] = useState<(typeof STATUS)[number]>("All");

  const filtered = useMemo(() => MOCK_ORDERS.filter((o) => {
    if (status !== "All" && o.status !== status) return false;
    if (q && !`${o.id} ${o.customer} ${o.email}`.toLowerCase().includes(q.toLowerCase())) return false;
    return true;
  }), [q, status]);

  return (
    <AdminShell title="Orders">
      <div className="flex flex-wrap items-center gap-3">
        <div className="relative flex-1 min-w-[200px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Search orders…" className="h-10 w-full rounded-full border border-border bg-card pl-9 pr-4 text-sm" />
        </div>
        <div className="flex gap-1.5">
          {STATUS.map((s) => (
            <button key={s} onClick={() => setStatus(s)} className={`rounded-full px-3.5 py-1.5 text-xs font-medium transition ${status === s ? "bg-foreground text-background" : "bg-card border border-border"}`}>{s}</button>
          ))}
        </div>
      </div>
      <div className="mt-6 overflow-hidden rounded-2xl border border-border bg-card shadow-soft">
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border bg-secondary/50 text-left text-xs uppercase tracking-wider text-muted-foreground">
                <th className="px-4 py-3 font-medium">Order</th>
                <th className="px-4 py-3 font-medium">Customer</th>
                <th className="px-4 py-3 font-medium">Date</th>
                <th className="px-4 py-3 font-medium">Items</th>
                <th className="px-4 py-3 font-medium">Total</th>
                <th className="px-4 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => (
                <tr key={o.id} className="border-b border-border last:border-0 hover:bg-secondary/30">
                  <td className="px-4 py-3 font-medium">{o.id}</td>
                  <td className="px-4 py-3">
                    <div>{o.customer}</div>
                    <div className="text-xs text-muted-foreground">{o.email}</div>
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">{o.date}</td>
                  <td className="px-4 py-3">{o.items}</td>
                  <td className="px-4 py-3 font-display font-bold">${o.total.toFixed(2)}</td>
                  <td className="px-4 py-3"><span className={`rounded-full px-2.5 py-1 text-xs font-medium ${tone[o.status]}`}>{o.status}</span></td>
                </tr>
              ))}
              {filtered.length === 0 && (
                <tr><td colSpan={6} className="px-4 py-12 text-center text-sm text-muted-foreground">No orders found.</td></tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </AdminShell>
  );
}
