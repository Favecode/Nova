import { i as CATEGORIES, r as useStore } from "./store-DTmEggsq.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { t as ProductCard } from "./product-card-KHLmY8Fd.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { ArrowRight, ShieldCheck, Sparkles, Truck, Undo2 } from "lucide-react";
//#region src/routes/index.tsx?tsr-split=component
function Home() {
	const { products } = useStore();
	const featured = products.slice(0, 8);
	const deals = products.filter((p) => p.oldPrice).slice(0, 4);
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [
		/* @__PURE__ */ jsx("section", {
			className: "relative overflow-hidden bg-hero",
			children: /* @__PURE__ */ jsxs("div", {
				className: "mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 sm:px-6 md:grid-cols-2 md:py-24 lg:px-8 lg:py-28",
				children: [/* @__PURE__ */ jsxs("div", {
					className: "animate-fade-up",
					children: [
						/* @__PURE__ */ jsxs("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-background/60 px-3 py-1 text-xs font-medium backdrop-blur",
							children: [/* @__PURE__ */ jsx(Sparkles, { className: "h-3.5 w-3.5" }), " Summer edit · 2026"]
						}),
						/* @__PURE__ */ jsxs("h1", {
							className: "mt-5 text-4xl font-bold leading-[1.05] sm:text-5xl lg:text-6xl",
							children: [
								"Modern essentials,",
								/* @__PURE__ */ jsx("br", {}),
								/* @__PURE__ */ jsx("span", {
									className: "italic text-primary-glow",
									children: "beautifully made."
								})
							]
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-5 max-w-md text-base text-muted-foreground sm:text-lg",
							children: "Discover a thoughtfully curated collection that earns its place in your everyday — designed to last, priced to love."
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-7 flex flex-wrap gap-3",
							children: [/* @__PURE__ */ jsxs(Link, {
								to: "/shop",
								className: "inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-elegant transition hover:scale-[1.02]",
								children: ["Shop the edit ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
							}), /* @__PURE__ */ jsx(Link, {
								to: "/about",
								className: "inline-flex items-center gap-2 rounded-full border border-foreground/15 bg-background/60 px-6 py-3 text-sm font-semibold backdrop-blur hover:bg-background",
								children: "Our story"
							})]
						}),
						/* @__PURE__ */ jsxs("div", {
							className: "mt-10 flex flex-wrap gap-x-8 gap-y-3 text-xs text-muted-foreground",
							children: [
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Truck, { className: "h-4 w-4" }), " Free shipping over $75"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(Undo2, { className: "h-4 w-4" }), " 30-day returns"]
								}),
								/* @__PURE__ */ jsxs("span", {
									className: "flex items-center gap-2",
									children: [/* @__PURE__ */ jsx(ShieldCheck, { className: "h-4 w-4" }), " 2-year warranty"]
								})
							]
						})
					]
				}), /* @__PURE__ */ jsxs("div", {
					className: "relative hidden md:block",
					children: [/* @__PURE__ */ jsx("div", { className: "absolute -right-10 -top-10 h-72 w-72 rounded-full bg-primary-glow/30 blur-3xl" }), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-4",
						children: featured.slice(0, 4).map((p, i) => /* @__PURE__ */ jsxs(Link, {
							to: "/product/$id",
							params: { id: p.id },
							className: `relative aspect-[4/5] overflow-hidden rounded-3xl border border-border/60 bg-card shadow-soft transition hover:-translate-y-1 hover:shadow-card-hover ${i % 2 === 0 ? "translate-y-6" : ""}`,
							children: [/* @__PURE__ */ jsx("img", {
								src: p.image,
								alt: p.name,
								className: "h-full w-full object-cover"
							}), /* @__PURE__ */ jsxs("div", {
								className: "absolute inset-x-3 bottom-3 rounded-xl bg-background/85 p-2.5 backdrop-blur",
								children: [/* @__PURE__ */ jsx("div", {
									className: "line-clamp-1 text-xs font-medium",
									children: p.name
								}), /* @__PURE__ */ jsxs("div", {
									className: "font-display text-sm font-bold",
									children: ["$", p.price]
								})]
							})]
						}, p.id))
					})]
				})]
			})
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl",
					children: "Shop by category"
				}), /* @__PURE__ */ jsx(Link, {
					to: "/shop",
					className: "text-sm text-muted-foreground hover:text-foreground",
					children: "View all →"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6",
				children: CATEGORIES.map((c, i) => /* @__PURE__ */ jsxs(Link, {
					to: "/shop",
					search: { category: c },
					className: "group relative aspect-square overflow-hidden rounded-2xl border border-border bg-card transition hover:shadow-card-hover",
					children: [
						/* @__PURE__ */ jsx("img", {
							src: `https://picsum.photos/seed/${c}-${i}/400/400`,
							alt: c,
							className: "h-full w-full object-cover transition group-hover:scale-110"
						}),
						/* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-foreground/70 to-transparent" }),
						/* @__PURE__ */ jsx("span", {
							className: "absolute bottom-3 left-3 right-3 font-display text-sm font-semibold text-background",
							children: c
						})
					]
				}, c))
			})]
		}),
		/* @__PURE__ */ jsxs("section", {
			className: "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "flex items-end justify-between",
				children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("span", {
					className: "text-xs font-medium uppercase tracking-wider text-primary-glow",
					children: "Featured"
				}), /* @__PURE__ */ jsx("h2", {
					className: "font-display text-3xl font-bold sm:text-4xl",
					children: "Loved by everyone"
				})] }), /* @__PURE__ */ jsx(Link, {
					to: "/shop",
					className: "hidden text-sm text-muted-foreground hover:text-foreground sm:inline",
					children: "All products →"
				})]
			}), /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
				children: featured.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id))
			})]
		}),
		/* @__PURE__ */ jsx("section", {
			className: "mx-auto mt-20 max-w-7xl px-4 sm:px-6 lg:px-8",
			children: /* @__PURE__ */ jsx("div", {
				className: "overflow-hidden rounded-3xl bg-gradient-primary p-8 text-primary-foreground shadow-elegant sm:p-12",
				children: /* @__PURE__ */ jsxs("div", {
					className: "grid items-center gap-8 lg:grid-cols-[1fr_2fr]",
					children: [/* @__PURE__ */ jsxs("div", { children: [
						/* @__PURE__ */ jsx("span", {
							className: "rounded-full bg-background/15 px-3 py-1 text-xs font-semibold uppercase tracking-wider",
							children: "Limited time"
						}),
						/* @__PURE__ */ jsx("h2", {
							className: "mt-4 font-display text-4xl font-bold leading-tight sm:text-5xl",
							children: "Up to 30% off the season's standouts"
						}),
						/* @__PURE__ */ jsx("p", {
							className: "mt-3 text-primary-foreground/80",
							children: "Hand-picked deals on the pieces our team can't stop wearing, using and gifting."
						}),
						/* @__PURE__ */ jsxs(Link, {
							to: "/shop",
							className: "mt-6 inline-flex items-center gap-2 rounded-full bg-background px-5 py-2.5 text-sm font-semibold text-foreground transition hover:scale-[1.02]",
							children: ["Shop deals ", /* @__PURE__ */ jsx(ArrowRight, { className: "h-4 w-4" })]
						})
					] }), /* @__PURE__ */ jsx("div", {
						className: "grid grid-cols-2 gap-3 lg:grid-cols-4",
						children: deals.map((p) => /* @__PURE__ */ jsxs(Link, {
							to: "/product/$id",
							params: { id: p.id },
							className: "group rounded-2xl bg-background p-3 text-foreground shadow-soft",
							children: [
								/* @__PURE__ */ jsx("div", {
									className: "aspect-square overflow-hidden rounded-xl bg-muted",
									children: /* @__PURE__ */ jsx("img", {
										src: p.image,
										alt: p.name,
										className: "h-full w-full object-cover transition group-hover:scale-105"
									})
								}),
								/* @__PURE__ */ jsx("div", {
									className: "mt-2 line-clamp-1 text-xs font-medium",
									children: p.name
								}),
								/* @__PURE__ */ jsxs("div", {
									className: "mt-1 flex items-center gap-1.5",
									children: [/* @__PURE__ */ jsxs("span", {
										className: "font-display text-sm font-bold",
										children: ["$", p.price]
									}), /* @__PURE__ */ jsxs("span", {
										className: "text-[10px] text-muted-foreground line-through",
										children: ["$", p.oldPrice]
									})]
								})
							]
						}, p.id))
					})]
				})
			})
		})
	] });
}
//#endregion
export { Home as component };
