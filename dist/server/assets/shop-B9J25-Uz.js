import { i as CATEGORIES, r as useStore } from "./store-DTmEggsq.js";
import { t as Route } from "./shop-C_r_YB11.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { t as ProductCard } from "./product-card-KHLmY8Fd.js";
import { useMemo, useState } from "react";
import { jsx, jsxs } from "react/jsx-runtime";
import { SlidersHorizontal, X } from "lucide-react";
//#region src/routes/shop.tsx?tsr-split=component
function Shop() {
	const { products } = useStore();
	const search = Route.useSearch();
	const [q, setQ] = useState(search.q ?? "");
	const [category, setCategory] = useState(search.category ?? "All");
	const [maxPrice, setMaxPrice] = useState(300);
	const [minRating, setMinRating] = useState(0);
	const [sort, setSort] = useState("featured");
	const [showFilters, setShowFilters] = useState(false);
	const filtered = useMemo(() => {
		let out = products.filter((p) => {
			if (category !== "All" && p.category !== category) return false;
			if (p.price > maxPrice) return false;
			if (p.rating < minRating) return false;
			if (q && !`${p.name} ${p.description} ${p.category}`.toLowerCase().includes(q.toLowerCase())) return false;
			return true;
		});
		if (sort === "price-asc") out = [...out].sort((a, b) => a.price - b.price);
		else if (sort === "price-desc") out = [...out].sort((a, b) => b.price - a.price);
		else if (sort === "rating") out = [...out].sort((a, b) => b.rating - a.rating);
		return out;
	}, [
		products,
		category,
		maxPrice,
		minRating,
		q,
		sort
	]);
	const Filters = /* @__PURE__ */ jsxs("div", {
		className: "space-y-7",
		children: [
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "mb-3 font-display text-sm font-semibold uppercase tracking-wider",
				children: "Search"
			}), /* @__PURE__ */ jsx("input", {
				value: q,
				onChange: (e) => setQ(e.target.value),
				placeholder: "Search…",
				className: "h-10 w-full rounded-full border border-border bg-secondary/60 px-4 text-sm"
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "mb-3 font-display text-sm font-semibold uppercase tracking-wider",
				children: "Category"
			}), /* @__PURE__ */ jsx("div", {
				className: "flex flex-col gap-1.5",
				children: ["All", ...CATEGORIES].map((c) => /* @__PURE__ */ jsx("button", {
					onClick: () => setCategory(c),
					className: `rounded-lg px-3 py-1.5 text-left text-sm transition ${category === c ? "bg-foreground text-background" : "hover:bg-secondary"}`,
					children: c
				}, c))
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsxs("h3", {
				className: "mb-3 font-display text-sm font-semibold uppercase tracking-wider",
				children: ["Max price: $", maxPrice]
			}), /* @__PURE__ */ jsx("input", {
				type: "range",
				min: 20,
				max: 300,
				step: 10,
				value: maxPrice,
				onChange: (e) => setMaxPrice(+e.target.value),
				className: "w-full accent-primary"
			})] }),
			/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h3", {
				className: "mb-3 font-display text-sm font-semibold uppercase tracking-wider",
				children: "Min rating"
			}), /* @__PURE__ */ jsx("div", {
				className: "flex gap-1.5",
				children: [
					0,
					3,
					4,
					4.5
				].map((r) => /* @__PURE__ */ jsx("button", {
					onClick: () => setMinRating(r),
					className: `rounded-full border px-3 py-1 text-xs ${minRating === r ? "border-primary bg-primary text-primary-foreground" : "border-border"}`,
					children: r === 0 ? "Any" : `${r}+`
				}, r))
			})] })
		]
	});
	return /* @__PURE__ */ jsxs(SiteLayout, { children: [/* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [/* @__PURE__ */ jsxs("div", {
			className: "mb-8 flex flex-wrap items-end justify-between gap-4",
			children: [/* @__PURE__ */ jsxs("div", { children: [/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl font-bold",
				children: "Shop all"
			}), /* @__PURE__ */ jsxs("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [filtered.length, " products"]
			})] }), /* @__PURE__ */ jsxs("div", {
				className: "flex items-center gap-2",
				children: [/* @__PURE__ */ jsxs("button", {
					onClick: () => setShowFilters(true),
					className: "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm lg:hidden",
					children: [/* @__PURE__ */ jsx(SlidersHorizontal, { className: "h-4 w-4" }), " Filters"]
				}), /* @__PURE__ */ jsxs("select", {
					value: sort,
					onChange: (e) => setSort(e.target.value),
					className: "h-10 rounded-full border border-border bg-background px-4 text-sm",
					children: [
						/* @__PURE__ */ jsx("option", {
							value: "featured",
							children: "Featured"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "price-asc",
							children: "Price: low to high"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "price-desc",
							children: "Price: high to low"
						}),
						/* @__PURE__ */ jsx("option", {
							value: "rating",
							children: "Top rated"
						})
					]
				})]
			})]
		}), /* @__PURE__ */ jsxs("div", {
			className: "grid gap-8 lg:grid-cols-[260px_1fr]",
			children: [/* @__PURE__ */ jsx("aside", {
				className: "hidden lg:block",
				children: Filters
			}), /* @__PURE__ */ jsx("div", { children: filtered.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "rounded-2xl border border-dashed border-border p-16 text-center",
				children: [/* @__PURE__ */ jsx("p", {
					className: "font-display text-xl font-semibold",
					children: "No products match"
				}), /* @__PURE__ */ jsx("p", {
					className: "mt-1 text-sm text-muted-foreground",
					children: "Try widening your filters."
				})]
			}) : /* @__PURE__ */ jsx("div", {
				className: "grid grid-cols-2 gap-4 md:grid-cols-3",
				children: filtered.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id))
			}) })]
		})]
	}), showFilters && /* @__PURE__ */ jsxs("div", {
		className: "fixed inset-0 z-50 lg:hidden",
		children: [/* @__PURE__ */ jsx("div", {
			className: "absolute inset-0 bg-foreground/40",
			onClick: () => setShowFilters(false)
		}), /* @__PURE__ */ jsxs("div", {
			className: "absolute inset-y-0 left-0 w-80 max-w-[85%] overflow-y-auto bg-background p-6",
			children: [/* @__PURE__ */ jsxs("div", {
				className: "mb-6 flex items-center justify-between",
				children: [/* @__PURE__ */ jsx("h2", {
					className: "font-display text-xl font-bold",
					children: "Filters"
				}), /* @__PURE__ */ jsx("button", {
					onClick: () => setShowFilters(false),
					children: /* @__PURE__ */ jsx(X, { className: "h-5 w-5" })
				})]
			}), Filters]
		})]
	})] });
}
//#endregion
export { Shop as component };
