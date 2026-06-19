import { createFileRoute } from "@tanstack/react-router";
import { Leaf, Heart, Award } from "lucide-react";
import { SiteLayout } from "@/components/site-layout";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Nova" },
      { name: "description", content: "Nova is a small studio building a thoughtful collection of modern essentials." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <SiteLayout>
      <section className="bg-hero">
        <div className="mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8">
          <span className="text-xs font-medium uppercase tracking-wider">Our story</span>
          <h1 className="mt-3 font-display text-4xl font-bold sm:text-6xl">A small studio with a quiet obsession for everyday objects.</h1>
          <p className="mt-5 text-lg text-muted-foreground">We believe the things you reach for every day should be designed with the same care as anything precious.</p>
        </div>
      </section>
      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { icon: Leaf, t: "Made to last", d: "Materials chosen for longevity, not novelty." },
            { icon: Heart, t: "Human-scaled", d: "We answer every email — no scripts, no bots." },
            { icon: Award, t: "Independent", d: "Self-funded, slowly built, fully ours." },
          ].map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <Icon className="h-6 w-6 text-primary-glow" />
              <h3 className="mt-3 font-display text-lg font-bold">{t}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <img src="https://picsum.photos/seed/studio/800/700" alt="Studio" className="aspect-[4/5] w-full rounded-3xl object-cover" />
          <div className="self-center">
            <h2 className="font-display text-3xl font-bold">Designed in studio. Built to be lived with.</h2>
            <p className="mt-4 text-muted-foreground">Nova began in 2023 as a single product and a stubborn idea: that "everyday" doesn't have to mean disposable. Today, we're a team of five working with makers across three continents, releasing small batches of products we'd want for ourselves.</p>
            <p className="mt-3 text-muted-foreground">We choose materials we'd be proud to repair, partners we'd visit on holiday, and a pace that lets us do both well.</p>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}
