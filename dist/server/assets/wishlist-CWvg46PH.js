import { r as useStore } from "./store-DTmEggsq.js";
import { t as SiteLayout } from "./site-layout-C9z6Fp7e.js";
import { t as ProductCard } from "./product-card-KHLmY8Fd.js";
import { Link } from "@tanstack/react-router";
import { jsx, jsxs } from "react/jsx-runtime";
import { Heart } from "lucide-react";
//#region src/routes/wishlist.tsx?tsr-split=component
function Wishlist() {
	const { products, wishlist } = useStore();
	const items = products.filter((p) => wishlist.includes(p.id));
	return /* @__PURE__ */ jsx(SiteLayout, { children: /* @__PURE__ */ jsxs("div", {
		className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
		children: [
			/* @__PURE__ */ jsx("h1", {
				className: "font-display text-4xl font-bold",
				children: "Wishlist"
			}),
			/* @__PURE__ */ jsxs("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: [
					items.length,
					" saved item",
					items.length === 1 ? "" : "s"
				]
			}),
			items.length === 0 ? /* @__PURE__ */ jsxs("div", {
				className: "mt-12 rounded-2xl border border-dashed border-border p-16 text-center",
				children: [
					/* @__PURE__ */ jsx(Heart, { className: "mx-auto h-10 w-10 text-muted-foreground" }),
					/* @__PURE__ */ jsx("p", {
						className: "mt-3 font-display text-xl font-semibold",
						children: "No favorites yet"
					}),
					/* @__PURE__ */ jsx(Link, {
						to: "/shop",
						className: "mt-4 inline-block rounded-full bg-gradient-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground",
						children: "Discover products"
					})
				]
			}) : /* @__PURE__ */ jsx("div", {
				className: "mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4",
				children: items.map((p) => /* @__PURE__ */ jsx(ProductCard, { product: p }, p.id))
			})
		]
	}) });
}
//#endregion
export { Wishlist as component };
