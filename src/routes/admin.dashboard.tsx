import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowUpRight, DollarSign, Package, ShoppingCart, Users } from "lucide-react";
import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { AdminShell } from "@/components/admin-shell";
import { useStore } from "@/lib/store";
import { MOCK_ORDERS, REVENUE_SERIES } from "@/lib/mock-admin";

export const Route = createFileRoute("/admin/dashboard")({
  head: () => ({ meta: [{ title: "Dashboard — Nova Admin" }] }),
  component: Dashboard,
});

function Stat({ icon: Icon, label, value, delta, accent }: { icon: typeof DollarSign; label: string; value: string; delta: string; accent: string }) {
  return (
    <div className="rounded-2xl border border-border bg-card p-5 shadow-soft">
      <div className="flex items-center justify-between">
        <span className="text-xs uppercase tracking-wider text-muted-foreground">{label}</span>
        <span className={`grid h-9 w-9 place-items-center rounded-lg ${accent}`}><Icon className="h-4 w-4" /></span>
      </div>
      <div className="mt-3 font-display text-3xl font-bold">{value}</div>
      <div className="mt-1 flex items-center gap-1 text-xs text-success"><ArrowUpRight className="h-3 w-3" /> {delta}</div>
    </div>
  );
}

function Dashboard() {
  const { products } = useStore();
  const revenue = MOCK_ORDERS.reduce((s, o) => s + o.total, 0);

  return (
    <AdminShell title="Dashboard">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <Stat icon={DollarSign} label="Revenue" value={`$${revenue.toLocaleString(undefined, { maximumFractionDigits: 0 })}`} delta="+12.4% MoM" accent="bg-success/15 text-success" />
        <Stat icon={ShoppingCart} label="Orders" value={`${MOCK_ORDERS.length}`} delta="+8 this week" accent="bg-primary-glow/15 text-primary-glow" />
        <Stat icon={Package} label="Products" value={`${products.length}`} delta="+2 new" accent="bg-accent text-accent-foreground" />
        <Stat icon={Users} label="Customers" value="1,284" delta="+47 this month" accent="bg-secondary text-secondary-foreground" />
      </div>
      <div className="mt-6 grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Revenue</h2>
            <span className="text-xs text-muted-foreground">Last 6 months</span>
          </div>
          <div className="mt-4 h-72">
            <ResponsiveContainer>
              <AreaChart data={REVENUE_SERIES}>
                <defs>
                  <linearGradient id="rev" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-chart-1)" stopOpacity={0.4} />
                    <stop offset="100%" stopColor="var(--color-chart-1)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="m" stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="var(--color-muted-foreground)" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip contentStyle={{ background: "var(--color-card)", border: "1px solid var(--color-border)", borderRadius: 12 }} />
                <Area type="monotone" dataKey="revenue" stroke="var(--color-chart-1)" strokeWidth={2.5} fill="url(#rev)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
          <div className="flex items-center justify-between">
            <h2 className="font-display text-lg font-semibold">Recent orders</h2>
            <Link to="/admin/orders" className="text-xs text-primary-glow">View all</Link>
          </div>
          <ul className="mt-4 divide-y divide-border">
            {MOCK_ORDERS.slice(0, 5).map((o) => (
              <li key={o.id} className="flex items-center justify-between py-3">
                <div className="min-w-0">
                  <div className="truncate text-sm font-medium">{o.customer}</div>
                  <div className="text-xs text-muted-foreground">{o.id}</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-sm font-bold">${o.total.toFixed(2)}</div>
                  <div className="text-[10px] uppercase tracking-wider text-muted-foreground">{o.status}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </AdminShell>
  );
}
