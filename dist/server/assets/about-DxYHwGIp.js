import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { jsx, jsxs } from "react/jsx-runtime";
import { Award, Heart, Leaf } from "lucide-react";
//#region src/routes/about.tsx?tsr-split=component
function About() {
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsx("section", {
		className: "bg-hero",
		children: /* @__PURE__ */ jsxs("div", {
			className: "mx-auto max-w-4xl px-4 py-20 text-center sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ jsx("span", {
					className: "text-xs font-medium uppercase tracking-wider",
					children: "Our story"
				}),
				/* @__PURE__ */ jsx("h1", {
					className: "mt-3 font-display text-4xl font-bold sm:text-6xl",
					children: "A small studio with a quiet obsession for everyday objects."
				}),
				/* @__PURE__ */ jsx("p", {
					className: "mt-5 text-lg text-muted-foreground",
					children: "We believe the things you reach for every day should be designed with the same care as anything precious."
				})
			]
		})
	}), /* @__PURE__ */ jsxs("section", {
		className: "mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsx("div", {
			className: "grid gap-6 md:grid-cols-3",
			children: [
				{
					icon: Leaf,
					t: "Made to last",
					d: "Materials chosen for longevity, not novelty."
				},
				{
					icon: Heart,
					t: "Human-scaled",
					d: "We answer every email — no scripts, no bots."
				},
				{
					icon: Award,
					t: "Independent",
					d: "Self-funded, slowly built, fully ours."
				}
			].map(({ icon: Icon, t, d }) => /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-border bg-card p-6 shadow-soft",
				children: [
					/* @__PURE__ */ jsx(Icon, { className: "h-6 w-6 text-primary-glow" }),
					/* @__PURE__ */ jsx("h3", {
						className: "mt-3 font-display text-lg font-bold",
						children: t
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-1 text-sm text-muted-foreground",
						children: d
					})
				]
			}, t))
		}), /* @__PURE__ */ jsxs("div", {
			className: "mt-16 grid gap-10 md:grid-cols-2",
			children: [/* @__PURE__ */ jsx("img", {
				src: "https://picsum.photos/seed/studio/800/700",
				alt: "Studio",
				className: "aspect-[4/5] w-full rounded-3xl object-cover"
			}), /* @__PURE__ */ jsxs("div", {
				className: "self-center",
				children: [
					/* @__PURE__ */ jsx("h2", {
						className: "font-display text-3xl font-bold",
						children: "Designed in studio. Built to be lived with."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-4 text-muted-foreground",
						children: "Nova began in 2023 as a single product and a stubborn idea: that \"everyday\" doesn't have to mean disposable. Today, we're a team of five working with makers across three continents, releasing small batches of products we'd want for ourselves."
					}),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 text-muted-foreground",
						children: "We choose materials we'd be proud to repair, partners we'd visit on holiday, and a pace that lets us do both well."
					})
				]
			})]
		})]
	})] });
}
//#endregion
export { About as component };
