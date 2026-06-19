import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { Lock } from "lucide-react";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/")({
  head: () => ({ meta: [{ title: "Admin — Nova" }] }),
  component: AdminLogin,
});

function AdminLogin() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("admin@nova.shop");
  const [pw, setPw] = useState("admin123");

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    localStorage.setItem("nv:admin", "1");
    toast.success("Signed in");
    navigate({ to: "/admin/dashboard" });
  };

  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      <div className="relative hidden bg-sidebar text-sidebar-foreground lg:block">
        <div className="absolute inset-0 bg-gradient-primary opacity-30" />
        <div className="relative flex h-full flex-col justify-between p-12">
          <div className="flex items-center gap-2">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground"><span className="font-display font-bold">N</span></span>
            <span className="font-display text-xl font-bold">Nova Admin</span>
          </div>
          <div>
            <h2 className="font-display text-4xl font-bold leading-tight">Run your storefront with calm, considered tools.</h2>
            <p className="mt-3 max-w-sm text-sidebar-foreground/70">Manage products, orders, customers and analytics from one quiet dashboard.</p>
          </div>
          <p className="text-xs text-sidebar-foreground/60">© 2026 Nova</p>
        </div>
      </div>
      <div className="flex items-center justify-center p-6">
        <form onSubmit={submit} className="w-full max-w-sm">
          <div className="mb-8 flex items-center gap-2 lg:hidden">
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground"><span className="font-display font-bold">N</span></span>
            <span className="font-display text-xl font-bold">Nova Admin</span>
          </div>
          <h1 className="font-display text-3xl font-bold">Welcome back</h1>
          <p className="mt-1 text-sm text-muted-foreground">Sign in to your admin dashboard.</p>
          <div className="mt-8 space-y-4">
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Email</span>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" required className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" />
            </label>
            <label className="block text-sm">
              <span className="mb-1.5 block font-medium">Password</span>
              <input value={pw} onChange={(e) => setPw(e.target.value)} type="password" required className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" />
            </label>
            <button type="submit" className="mt-2 w-full rounded-full bg-gradient-primary py-3 text-sm font-semibold text-primary-foreground shadow-elegant">Sign in</button>
            <p className="flex items-center justify-center gap-1.5 text-xs text-muted-foreground"><Lock className="h-3 w-3" /> Demo only — no real authentication.</p>
          </div>
        </form>
      </div>
    </div>
  );
}
