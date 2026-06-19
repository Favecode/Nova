import { createFileRoute } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Nova" },
      { name: "description", content: "Get in touch with the Nova team." },
    ],
  }),
  component: Contact,
});

function Contact() {
  const [sent, setSent] = useState(false);
  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
    toast.success("Message sent — we'll be in touch.");
  };

  return (
    <SiteLayout>
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="font-display text-4xl font-bold sm:text-5xl">Say hello</h1>
          <p className="mt-3 text-muted-foreground">We read every message and reply within one business day.</p>
        </div>
        <div className="mt-12 grid gap-10 md:grid-cols-[1fr_2fr]">
          <ul className="space-y-6">
            {[
              { icon: Mail, t: "Email", v: "hello@nova.shop" },
              { icon: Phone, t: "Phone", v: "+1 (555) 010-2032" },
              { icon: MapPin, t: "Studio", v: "144 Mercer St, NYC" },
            ].map(({ icon: Icon, t, v }) => (
              <li key={t} className="flex items-start gap-4">
                <span className="grid h-11 w-11 place-items-center rounded-full bg-secondary"><Icon className="h-5 w-5" /></span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{t}</div>
                  <div className="font-medium">{v}</div>
                </div>
              </li>
            ))}
          </ul>
          <form onSubmit={submit} className="rounded-3xl border border-border bg-card p-6 shadow-soft sm:p-8">
            {sent ? (
              <div className="grid h-full place-items-center text-center">
                <div>
                  <h2 className="font-display text-2xl font-bold">Message received</h2>
                  <p className="mt-2 text-sm text-muted-foreground">Thanks for writing — we'll reply soon.</p>
                </div>
              </div>
            ) : (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="text-sm sm:col-span-1"><span className="mb-1.5 block font-medium">Name</span><input required className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
                <label className="text-sm sm:col-span-1"><span className="mb-1.5 block font-medium">Email</span><input required type="email" className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
                <label className="text-sm sm:col-span-2"><span className="mb-1.5 block font-medium">Subject</span><input required className="h-11 w-full rounded-xl border border-border bg-background px-3.5 text-sm" /></label>
                <label className="text-sm sm:col-span-2"><span className="mb-1.5 block font-medium">Message</span><textarea required rows={5} className="w-full rounded-xl border border-border bg-background p-3.5 text-sm" /></label>
                <button type="submit" className="mt-2 w-fit rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant sm:col-span-2">Send message</button>
              </div>
            )}
          </form>
        </div>
      </div>
    </SiteLayout>
  );
}
